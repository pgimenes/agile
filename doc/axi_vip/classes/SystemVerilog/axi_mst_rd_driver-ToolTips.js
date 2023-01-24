NDContentPage.OnToolTipsLoaded({133:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">The xil_seq_item_pull_port#(REQ,RSP) class is extends from xil_sqr_if_base. It inherits all these variables and functions of xil_sqr_if_base.</div></div>",367:"<div class=\"NDToolTip TType LSystemVerilog\"><div class=\"TTSummary\">Xilinx AXI VIP Interger unsigned data type</div></div>",391:"<div class=\"NDToolTip TType LSystemVerilog\"><div class=\"TTSummary\">Xilinx AXI VIP Boolean data type</div></div>",516:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">The axi_transaction class is the base class of AXI protocol. It inherits all the methods of xil_sequence_item.</div></div>",631:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">AXI VIF Proxy Class. It has virtual interface for AXI VIP interface.</div></div>",747:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">AXI Ready generation class.</div></div>",752:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype752\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_rready_gen(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">axi_ready_gen_t&nbsp;</td><td class=\"PName last\">new_method</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets rready of the AXI master read driver. There are three ways for rready generation in AXI master read driver.</div></div>",964:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">AXI Master Read Driver class.</div></div>",1004:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1004\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_forward_progress_timeout_value (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_uint&nbsp;</td><td class=\"PName last\">new_timeout</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets the number of cycles that the driver will wait until it will flag a watch dog error of the &lt;axi_mst_rd_driver&gt;.Default value is 50000.</div></div>",1163:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1163\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">task send_rready(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">axi_ready_gen&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sends the ready structure to the driver for controlling the READY channel of axi_mst_rd_driver.&nbsp; Usually user would create a new axi_ready_gen by calling create_ready of axi_mst_rd_driver, either randomize the rready or set it up manually. Then it calls send to send the rready to axi_mst_rd_driver.</div></div>"});