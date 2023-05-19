onbreak {quit -force}
onerror {quit -force}

asim -t 1ps +access +r +m+fixed4_upsampler -L xilinx_vip -L xpm -L xbip_utils_v3_0_10 -L axi_utils_v2_0_6 -L xbip_pipe_v3_0_6 -L xbip_dsp48_wrapper_v3_0_4 -L xbip_dsp48_addsub_v3_0_6 -L xbip_dsp48_multadd_v3_0_6 -L xbip_bram18k_v3_0_6 -L mult_gen_v12_0_16 -L floating_point_v7_1_9 -L xil_defaultlib -L xilinx_vip -L unisims_ver -L unimacro_ver -L secureip -O5 xil_defaultlib.fixed4_upsampler xil_defaultlib.glbl

do {wave.do}

view wave
view structure

do {fixed4_upsampler.udo}

run -all

endsim

quit -force