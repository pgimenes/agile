
from sdk.trained_graph import TrainedGraph

import torch
from torch_geometric.datasets import Planetoid

class PlanetoidGraph(TrainedGraph):
    def __init__(self, embeddings=[], weights=[], name="Pubmed"):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        dataset=Planetoid(root=".", name=name)[0]
        embeds = dataset.x if embeddings == [] else embeddings
        super().__init__(dataset=dataset, embeddings=embeds, weights=weights)