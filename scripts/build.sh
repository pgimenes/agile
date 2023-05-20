#!/bin/bash -f

set -e

exec > build_log.log

cd $FYP_DIR

# Build submodules
echo "======================================================="
echo "[$(date +%Y-%m-%d\ %H:%M:%S)]: Building submodules."
echo "======================================================="

git submodule update --init --recursive
git submodule foreach git pull origin master

# Build Xilinx IP
echo "======================================================="
echo "[$(date +%Y-%m-%d\ %H:%M:%S)]: Building Xilinx IP."
echo "======================================================="

vivado -mode batch -source $FYP_DIR/scripts/generate_ip.tcl

# Build register banks
echo "======================================================="
echo "[$(date +%Y-%m-%d\ %H:%M:%S)]: Building register banks."
echo "======================================================="

python3.6 $FYP_DIR/scripts/update_regbanks.py