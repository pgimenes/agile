vlib work
vlib activehdl

vlib activehdl/xilinx_vip
vlib activehdl/xpm
vlib activehdl/axi_infrastructure_v1_1_0
vlib activehdl/xil_defaultlib
vlib activehdl/axi_vip_v1_1_6

vmap xilinx_vip activehdl/xilinx_vip
vmap xpm activehdl/xpm
vmap axi_infrastructure_v1_1_0 activehdl/axi_infrastructure_v1_1_0
vmap xil_defaultlib activehdl/xil_defaultlib
vmap axi_vip_v1_1_6 activehdl/axi_vip_v1_1_6

vlog -work xilinx_vip  -sv2k12 "+incdir+/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/include" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/axi4stream_vip_axi4streampc.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/axi_vip_axi4pc.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/xil_common_vip_pkg.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/axi4stream_vip_pkg.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/axi_vip_pkg.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/axi4stream_vip_if.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/axi_vip_if.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/clk_vip_if.sv" \
"/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/hdl/rst_vip_if.sv" \

vlog -work xpm  -sv2k12 "+incdir+../../../ipstatic/hdl" "+incdir+/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/include" \
"/usr/local/Xilinx/Vivado/2019.2/data/ip/xpm/xpm_memory/hdl/xpm_memory.sv" \

vcom -work xpm -93 \
"/usr/local/Xilinx/Vivado/2019.2/data/ip/xpm/xpm_VCOMP.vhd" \

vlog -work axi_infrastructure_v1_1_0  -v2k5 "+incdir+../../../ipstatic/hdl" "+incdir+/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/include" \
"../../../ipstatic/hdl/axi_infrastructure_v1_1_vl_rfs.v" \

vlog -work xil_defaultlib  -sv2k12 "+incdir+../../../ipstatic/hdl" "+incdir+/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/include" \
"../../../../ddr4_0_ex.srcs/sources_1/ip/axil_master_vip/sim/axil_master_vip_pkg.sv" \

vlog -work axi_vip_v1_1_6  -sv2k12 "+incdir+../../../ipstatic/hdl" "+incdir+/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/include" \
"../../../ipstatic/hdl/axi_vip_v1_1_vl_rfs.sv" \

vlog -work xil_defaultlib  -sv2k12 "+incdir+../../../ipstatic/hdl" "+incdir+/usr/local/Xilinx/Vivado/2019.2/data/xilinx_vip/include" \
"../../../../ddr4_0_ex.srcs/sources_1/ip/axil_master_vip/sim/axil_master_vip.sv" \

vlog -work xil_defaultlib \
"glbl.v"
