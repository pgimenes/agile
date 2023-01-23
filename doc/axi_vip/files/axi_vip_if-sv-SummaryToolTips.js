NDSummary.OnToolTipsLoaded("File:axi_vip_if.sv",{2:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype2\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_supports_write();</div><div class=\"TTSummary\">Sets supports_write to be 1, when supports_write is being set, ARM protocol Checker will check AW/W channel</div></div>",3:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype3\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_supports_write();</div><div class=\"TTSummary\">Sets supports_write to be 0, when supports_write is not being set, ARM protocol Checker will not check AW/W channel</div></div>",4:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype4\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_supports_read();</div><div class=\"TTSummary\">Sets supports_read to be 1, when supports_read is being set, ARM protocol Checker will check AR/R channel</div></div>",5:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype5\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_supports_read();</div><div class=\"TTSummary\">Sets supports_read to be 0,when supports_read is not being set, ARM protocol Checker will not check AR/R channel</div></div>",6:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype6\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_slave_ready_check();</div><div class=\"TTSummary\">Sets xilinx_slave_ready_check_enable to turn on warning message when there is a violation of rules which arready/awready/wready should follow when the VIP goes into reset mode or comes out of reset mode. Which are 1).any READY must be low for the first clock edge that ARESETn goes high--PG101 XILINX_READY_RESET 2).READY must go low after 8 cycles following the first clock edge that ARESETn goes low--UG1037 Xilinx IP generally deasserts all VALID and READY outputs within eight cycles of reset.</div></div>",7:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype7\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_xilinx_slave_ready_check();</div><div class=\"TTSummary\">Sets xilinx_slave_ready_check_enable to turn off warning message when there is a violation of rules which arready/awready/wready should follow when the VIP goes into reset mode or comes out of reset mode.Which are 1).any READY must be low for the first clock edge that ARESETn goes high--PG101 XILINX_READY_RESET 2).READY must go low after 8 cycles following the first clock edge that ARESETn goes low--UG1037 Xilinx IP generally deasserts all VALID and READY outputs within eight cycles of reset.</div></div>",8:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype8\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_reset_check();</div><div class=\"TTSummary\">Sets xilinx_reset_check_enable to turn on error message when there is a violation of rule which is holding AXI ARESETN asserted for 16 cycles of the slowest AXI clock is generally a sufficient reset pulse width for Xilinx IP--UG1037</div></div>",9:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype9\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_reset_check_to_warn();</div><div class=\"TTSummary\">Sets xilinx_reset_check_enable to turn on warning message when there is a violation of rule which is holding AXI ARESETN asserted for 16 cycles of the slowest AXI clock is generally a sufficient reset pulse width for Xilinx IP--UG1037</div></div>",10:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype10\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_xilinx_reset_check();</div><div class=\"TTSummary\">Sets xilinx_reset_check_enable to turn off warning/error message when there is a violation of rule which is holding AXI ARESETN asserted for 16 cycles of the slowest AXI clock is generally a sufficient reset pulse width for Xilinx IP--UG1037</div></div>",11:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype11\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_supports_narrow_burst_check();</div><div class=\"TTSummary\">Sets xilinx_supports_narrow_burst_check_enable to turn on error message when a narrow burst is being detected while this VIP is in not support narrow burst mode.</div></div>",12:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype12\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_supports_narrow_burst_check_to_warn();</div><div class=\"TTSummary\">Sets xilinx_supports_narrow_burst_check_enable to downgrade/upgrade to warning message when a narrow burst is being detected while this VIP is in not support narrow burst mode.</div></div>",13:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype13\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_xilinx_supports_narrow_burst_check();</div><div class=\"TTSummary\">Sets xilinx_supports_narrow_burst_check_enable to downgrade error/warning into info message when a narrow burst is being detected while this VIP is in not support narrow burst mode.</div></div>",14:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype14\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_no_strb_address_check();</div><div class=\"TTSummary\">Sets xilinx_no_strb_address_check_enable to turn on error message when address is being detected not aligned with data width while this VIP is in no strobe mode.</div></div>",15:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype15\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_no_strb_address_check_to_warn();</div><div class=\"TTSummary\">Sets xilinx_no_strb_address_check_enable to downgrade/upgrade to warning message when address is being detected not aligned with data width while this VIP is in no strobe mode.</div></div>",16:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype16\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_xilinx_no_strb_address_check();</div><div class=\"TTSummary\">Sets xilinx_no_strb_address_check_enable to downgrade error/warning into info message when address is being detected not aligned with data width while this VIP is in no strobe mode.</div></div>",17:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype17\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_xilinx_supports_narrow_cache_check();</div><div class=\"TTSummary\">Sets xilinx_supports_narrow_cache_check_enable to turn on warning message when Cache[1] is not 1 while VIP is in no supports_narrow, has_cache mode.</div></div>",18:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype18\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_xilinx_supports_narrow_cache_check();</div><div class=\"TTSummary\">Sets xilinx_supports_narrow_cache_check_enable to downgrade warning into info message when Cache[1] is not 1 while VIP is in no supports_narrow, has_cache mode.</div></div>",19:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype19\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_enable_xchecks();</div><div class=\"TTSummary\">Sets enable_xchecks to turn on error message when reset signal is unknown after 1 cycle of clock.</div></div>",20:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype20\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_enable_xchecks_to_warn();</div><div class=\"TTSummary\">Sets enable_xchecks to downgrade/upgrade into warning message when reset signal is unknown after 1 cycle of clock.</div></div>",21:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype21\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> clr_enable_xchecks();</div><div class=\"TTSummary\">Sets enable_xchecks to downgrade error/warning message into info message when reset signal is unknown after 1 cycle of clock.</div></div>",22:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype22\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_intf_slave();</div><div class=\"TTSummary\">Sets interface to runtime slave mode.When user wants to change passthrough VIP as slave VIP, what they do is to call &lt;hierarchy_path&gt;.IF.set_intf_slave</div></div>",23:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype23\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_intf_master();</div><div class=\"TTSummary\">Sets interface to runtime master mode. When user wants to change passthrough VIP as master VIP, what they do is to call &lt;hierarchy_path&gt;.IF.set_intf_master</div></div>",24:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype24\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function void</span> set_intf_monitor();</div><div class=\"TTSummary\">Sets interface to runtime monitor mode. Set VIP into runtime passthrough mode.&nbsp; what they do is to call &lt;hierarchy_path&gt;.IF.set_intf_monitor</div></div>"});