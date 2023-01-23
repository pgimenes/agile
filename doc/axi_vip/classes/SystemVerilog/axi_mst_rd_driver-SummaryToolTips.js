NDSummary.OnToolTipsLoaded("SystemVerilogClass:axi_mst_rd_driver",{964:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"TTSummary\">AXI Master Read Driver class.</div></div>",917:"<div class=\"NDToolTip TInformation LSystemVerilog\"><div class=\"TTSummary\">axi_vif_mem_proxy `AXI_PARAM_ORDER&nbsp; vif_proxy; AXI VIF Proxy Class</div></div>",966:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype966\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function new</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">name&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;unnamed_axi_mst_rd_driver&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Constructor to create an AXI master read driver, ~name~ is the instance name.</div></div>",888:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype888\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_vif(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">axi_vif_mem_proxy `</td><td class=\"PType\">AXI_PARAM_ORDER&nbsp;</td><td class=\"PName last\">vif</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Assigns the virtual interface vif to the AXI master read driver virtual interface.</div></div>",752:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype752\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_rready_gen(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">axi_ready_gen_t&nbsp;</td><td class=\"PName last\">new_method</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets rready of the AXI master read driver. There are three ways for rready generation in AXI master read driver.</div></div>",969:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype969\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> axi_ready_gen_t get_rready_gen();</div><div class=\"TTSummary\">Returns rready_gen of the AXI master read driver.</div></div>",1004:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1004\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_forward_progress_timeout_value (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_uint&nbsp;</td><td class=\"PName last\">new_timeout</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets the number of cycles that the driver will wait until it will flag a watch dog error of the &lt;axi_mst_rd_driver&gt;.Default value is 50000.</div></div>",1005:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1005\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> xil_axi_uint get_forward_progress_timeout_value ();</div><div class=\"TTSummary\">Returns the number of cycles that the driver will wait until it will flag a watch dog error of the &lt;axi_mst_rd_driver&gt;.Default value is 50000 and user can use set_forward_progress_timeout_value to change it.</div></div>",1154:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1154\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">function void</span> set_waiting_valid_timeout_value (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_uint&nbsp;</td><td class=\"PName last\">new_timeout</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets waiting_valid_timeout_value of axi_mst_rd_driver, waiting_valid_timeout_value is used for driver to wait a certain number of cycles for rvalid/rready, arvalid/arready handshake occurs before it times out.</div></div>",1155:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1155\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> xil_axi_uint get_waiting_valid_timeout_value ();</div><div class=\"TTSummary\">Returns waiting_valid_timeout_value of axi_mst_rd_driver. waiting_valid_timeout_value is used for driver to wait a certain number of cycles for rvalid/rready, arvalid/arready handshake occurs before it times out.</div></div>",1156:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div class=\"TTSummary\">Sets the maximum number of WRITE transactions that the Driver will have in flight at one time in axi_mst_rd_driver.</div></div>",928:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div class=\"TTSummary\">Returns the maximum number of WRITE transactions that the Driver will have in flight at one time in axi_mst_rd_driver.</div></div>",929:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype929\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> xil_axi_boolean_t is_driver_idle();</div><div class=\"TTSummary\">Returns TRUE if driver is idle, else FALSE in axi_mst_rd_driver</div></div>",1157:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1157\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> xil_axi_uint get_num_transactions_inflight();</div><div class=\"TTSummary\">Returns the number of transactions in flight in axi_mst_rd_driver</div></div>",931:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype931\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual function</span> xil_axi_boolean_t get_adjust_addr_delay_enabled();</div><div class=\"TTSummary\">Returns the current state of adjust_addr_delay_enabled in axi_mst_rd_driver.</div></div>",1158:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1158\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual function void</span> set_adjust_addr_delay_enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_boolean_t&nbsp;</td><td class=\"PName last\">update</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets the value of adjust_addr_delay_enabled in axi_mst_rd_driver.</div></div>",933:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype933\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual function</span> xil_axi_boolean_t get_adjust_data_beat_delay_enabled();</div><div class=\"TTSummary\">Returns the current state of adjust_data_beat_delay_enabled in axi_mst_rd_driver.</div></div>",934:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype934\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual function void</span> set_adjust_data_beat_delay_enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">xil_axi_boolean_t&nbsp;</td><td class=\"PName last\">update</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sets the value of adjust_data_beat_delay_enabled of the transaction in axi_mst_rd_driver.</div></div>",1159:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1159\" class=\"NDPrototype NoParameterForm\">task run_phase();</div><div class=\"TTSummary\">Start all control processes for operation of axi_mst_rd_driver</div></div>",936:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype936\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task stop_phase();</div><div class=\"TTSummary\">Stops all control processes of axi_mst_rd_driver.</div></div>",937:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype937\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task halt_phase();</div><div class=\"TTSummary\">Allows for all inflight transactions to complete and no new transaction will be serviced. All other transactions will halt of axi_mst_rd_driver.</div></div>",938:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype938\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> task resume_phase();</div><div class=\"TTSummary\">Resumes processing pending transactions of axi_mst_rd_driver.</div></div>",1160:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1160\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">task send(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">axi_transaction&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sends the AXI transaction to axi_mst_rd_driver. Usually user would create a new axi_transaction by calling create_transaction of axi_mst_rd_driver, either randomize the transaction or set it up. Then it calls send to send the transaction to axi_mst_rd_driver.&nbsp; It is a blocking process. please refer example design for the usage.</div></div>",1161:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1161\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">task wait_rsp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">output&nbsp;</td><td class=\"PType\">axi_transaction&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">This blocking function will not return until driver send back response transaction of &lt;axi_mst_rd_driver&gt;.please refer example design for the usage.</div></div>",1162:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1162\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual function</span> axi_transaction create_transaction (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">name&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;unnamed_transaction&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Returns an AXI transaction class that has been &quot;newed&quot; of &lt;axi_mst_rd_driver&gt;.please refer example design for the usage.</div></div>",1163:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1163\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">task send_rready(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">input&nbsp;</td><td class=\"PType\">axi_ready_gen&nbsp;</td><td class=\"PName last\">t</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Sends the ready structure to the driver for controlling the READY channel of axi_mst_rd_driver.&nbsp; Usually user would create a new axi_ready_gen by calling create_ready of axi_mst_rd_driver, either randomize the rready or set it up manually. Then it calls send to send the rready to axi_mst_rd_driver.</div></div>",943:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype943\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual function</span> axi_ready_gen create_ready (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">name&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;unnamed_ready&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Returns a ready class that has been &quot;newed&quot; of axi_mst_rd_driver.</div></div>",944:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype944\" class=\"NDPrototype NoParameterForm\">task wait_driver_idle();</div><div class=\"TTSummary\">This is a blocking task which will wait until there are no outstanding transactions in the driver. This means that all the transactions send to the driver have received a corresponding RLast response of axi_mst_rd_driver.</div></div>"});