#!/bin/bash -f
# ****************************************************************************
# Vivado (TM) v2019.2 (64-bit)
#
# Filename    : simulate.sh
# Simulator   : Mentor Graphics ModelSim Simulator
# Description : Script for simulating the design by launching the simulator
#
# Generated by Vivado on Fri Jun 09 20:57:33 BST 2023
# SW Build 2708876 on Wed Nov  6 21:39:14 MST 2019
#
# Copyright 1986-2019 Xilinx, Inc. All Rights Reserved.
#
# usage: simulate.sh
#
# ****************************************************************************
bin_path="/mnt/applications/mentor/modelsim-2019.2/modelsim/modeltech/linux_x86_64"
set -Eeuo pipefail
$bin_path/vsim -64 xil_defaultlib.xil_defaultlib_opt -do "do {simulate.do}" -l simulate.log

