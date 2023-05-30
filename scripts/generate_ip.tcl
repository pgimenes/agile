# Create the build directory, ignoring any exception
catch {exec mkdir $env(FYP_DIR)/hw/build}
cd $env(FYP_DIR)/hw/build

create_project build_project -part xcu250-figd2104-2L-e -force
set_property board_part xilinx.com:au250:part0:1.3 [current_project]

# Import IP
import_ip -files $env(FYP_DIR)/hw/xilinx/axi_L_register_control_crossbar.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/axi_memory_interconnect.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/axi_memory_master_vip.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/axil_master_vip.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/fp_add.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/fp_mult.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/aggregation_buffer_sdp_bram.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/transformation_buffer_sdp_bram.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/fixed4_upsampler.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/fixed8_upsampler.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/fixed16_upsampler.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/scale_factor_queue.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/router_fifo_sdp_bram.xci
import_ip -files $env(FYP_DIR)/hw/xilinx/ddr4_0.xcix

generate_target all [get_ips]

# Generate simulation files
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/axi_L_register_control_crossbar/axi_L_register_control_crossbar.xci] -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/axi_memory_interconnect/axi_memory_interconnect.xci]                 -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/axi_memory_master_vip/axi_memory_master_vip.xci]                     -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/axil_master_vip/axil_master_vip.xci]                                 -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/aggregation_buffer_sdp_bram/aggregation_buffer_sdp_bram.xci]         -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/transformation_buffer_sdp_bram/transformation_buffer_sdp_bram.xci]   -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/fixed4_upsampler/fixed4_upsampler.xci]                               -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/fixed8_upsampler/fixed8_upsampler.xci]                               -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/fixed16_upsampler/fixed16_upsampler.xci]                             -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/fp_add/fp_add.xci]                                                   -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/fp_mult/fp_mult.xci]                                                 -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/scale_factor_queue/scale_factor_queue.xci]                           -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet
export_simulation -of_objects [get_files $env(FYP_DIR)/hw/build/build_project.srcs/sources_1/ip/ddr4_0/ddr4_0.xcix]                                                  -directory $env(FYP_DIR)/hw/build/build_project.ip_user_files/sim_scripts -ip_user_files_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files -ipstatic_source_dir $env(FYP_DIR)/hw/build/build_project.ip_user_files/ipstatic -lib_map_path [list {modelsim=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/modelsim} {questa=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/questa} {ies=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/ies} {xcelium=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/xcelium} {vcs=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/vcs} {riviera=$env(FYP_DIR)/hw/build/build_project.cache/compile_simlib/riviera}] -use_ip_compiled_libs -force -quiet