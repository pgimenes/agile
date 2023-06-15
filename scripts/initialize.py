#!/usr/bin/env python3.10
import argparse
from sdk.initialization_manager import InitManager

from sdk.graphs.matrix_graph import MatrixGraph
from sdk.graphs.karate_club import KarateClubGraph
from sdk.graphs.planetoid_graph import PlanetoidGraph
from sdk.graphs.large_graphs import RedditGraph, FlickrGraph, YelpGraph

from sdk.models.models import GCN_Model, GAT_Model, GraphSAGE_Model

import itertools
import logging

import os

logging.basicConfig(level=logging.DEBUG, format='[%(asctime)s]:%(levelname)s:: %(message)s')

'''
    Build graphs with requested embedding size and generate memory file.
'''

graph_map = {
    'matrix': {
        'class': MatrixGraph
    },
    'karate': { 
        'class': KarateClubGraph
    },
    'pubmed': { 'class': lambda feature_count, graph_precision: PlanetoidGraph(name="Pubmed")},
    'cora': { 'class': lambda feature_count, graph_precision: PlanetoidGraph(name="Cora")},
    'citeseer': { 'class': lambda feature_count, graph_precision: PlanetoidGraph(name="Citeseer")},
    'reddit': { 'class': RedditGraph},
    'flickr': { 'class': FlickrGraph },
    'yelp': { 'class': YelpGraph }
}

model_map = {
  'gcn': {
    'class': lambda in_features, out_features: GCN_Model (in_features, out_features)
  },

  'gat': {
    'class': GAT_Model
  },

  'sage': {
    'class': GraphSAGE_Model
  }
}

def main(args):
    # Load Graphs
    graphs = []
    for arg, graph_info in graph_map.items():
        if getattr(args, arg):
            graph = graph_info['class'](feature_count=args.in_features, graph_precision=args.precision)
            
            # Apply options
            options = graph_info.get('options', {})
            apply_graph_options(graph, options)
            
            # Run pre-processing commands
            commands = graph_info.get('commands', [])
            run_graph_commands(graph, commands)
            
            graphs.append(graph)

    # Load Models
    models = []
    for arg, _ in model_map.items():
        if getattr(args, arg):
            models.append(arg)
    
    for (graph, model) in itertools.product(graphs, models):
        run_pass(graph, model, args.random, args.reduce)

def run_graph_commands(graph, commands):
    for command in commands:
        method = getattr(graph, command, None)
        if callable(method):
            method()

def apply_graph_options(graph, options):
    for key, value in options.items():
        setattr(graph, key, value)

def run_pass(graph, model, random_embeddings=False, reduce=False):
    logging.info(f"Running graph: {str(graph)} with model: {model}")

    model = model_map[model]['class'](args.in_features, args.out_features)
    
    init_manager = InitManager(graph, model, base_path=args.base_path)

    if (reduce):
        init_manager.reduce_graph()

    if (random_embeddings):
        init_manager.trained_graph.random_embeddings()
    else:
        init_manager.trained_graph.train_embeddings()

    # Initialize Memory
    init_manager.memory_mapper.map()

    # Dump
    init_manager.dump_memory()
    init_manager.dump_layer_config()
    init_manager.dump_nodeslot_programming()

def parse_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument('--matrix', action='store_true', help='Use Matrix graph')
    parser.add_argument('--karate', action='store_true', help='Use Karate graph')
    parser.add_argument('--pubmed', action='store_true', help='Use Pubmed graph')
    parser.add_argument('--cora', action='store_true', help='Use Cora graph')
    parser.add_argument('--citeseer', action='store_true', help='Use Citeseer graph')
    parser.add_argument('--reddit', action='store_true', help='Use Reddit graph')
    parser.add_argument('--flickr', action='store_true', help='Use Flickr graph')
    parser.add_argument('--yelp', action='store_true', help='Use Yelp graph')

    # Models
    parser.add_argument('--gcn', action='store_true', help='Use GCN Model')
    parser.add_argument('--gat', action='store_true', help='Use GAT Model')
    parser.add_argument('--sage', action='store_true', help='Use GraphSAGE Model')

    default_base_path = os.environ.get("FYP_DIR") + "/hw/sim"
    parser.add_argument('--base_path', default=default_base_path, help='Base path (default: $FYP_DIR/hw/sim)')
    
    parser.add_argument('--in_features', type=int, default=4, help='Input feature count')
    parser.add_argument('--out_features', type=int, default=4, help='Output feature count')
    
    parser.add_argument('--random', action='store_true', help='Initialize graph with random embedding.')
    
    parser.add_argument('--precision', choices=['FLOAT_32', 'FIXED_16', 'FIXED_8', 'FIXED_4', 'mixed'], default='FLOAT_32',
                            help='Precision for calculations (default: FLOAT_32)')


    parser.add_argument('--reduce', action='store_true', help='Run sampling step before generating payloads.')

    return parser.parse_args()

if (__name__ == "__main__"):
    args = parse_arguments()
    main(args)
