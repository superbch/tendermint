(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{839:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("h2",{attrs:{id:"state-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-2"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("The state contains information whose cryptographic digest is included in block headers, and thus is\nnecessary for validating new blocks. For instance, the validators set and the results of\ntransactions are never included in blocks, but their Merkle roots are - the state keeps track of them.")]),e._v(" "),a("p",[e._v("Note that the "),a("code",[e._v("State")]),e._v(" object itself is an implementation detail, since it is never\nincluded in a block or gossiped over the network, and we never compute\nits hash. Thus we do not include here details of how the "),a("code",[e._v("State")]),e._v(" object is\npersisted or queried. That said, the types it contains are part of the specification, since\ntheir Merkle roots are included in blocks and their values are used in\nvalidation.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGF0ZSBzdHJ1Y3QgewogICAgQ2hhaW5JRCAgICAgICAgc3RyaW5nCiAgICBJbml0aWFsSGVpZ2h0ICBpbnQ2NAoKICAgIFZlcnNpb24gICAgIFZlcnNpb24KICAgIExhc3RSZXN1bHRzIFtdUmVzdWx0CiAgICBBcHBIYXNoICAgICBbXWJ5dGUKCiAgICBMYXN0VmFsaWRhdG9ycyBbXVZhbGlkYXRvcgogICAgVmFsaWRhdG9ycyAgICAgW11WYWxpZGF0b3IKICAgIE5leHRWYWxpZGF0b3JzIFtdVmFsaWRhdG9yCgogICAgQ29uc2Vuc3VzUGFyYW1zIENvbnNlbnN1c1BhcmFtcwp9Cg=="}}),e._v(" "),a("p",[e._v("The chain ID and initial height are taken from the genesis file, and not changed again. The\ninitial height will be "),a("code",[e._v("1")]),e._v(" in the typical case, "),a("code",[e._v("0")]),e._v(" is an invalid value.")]),e._v(" "),a("p",[e._v("Note there is a hard-coded limit of 10000 validators. This is inherited from the\nlimit on the number of votes in a commit.")]),e._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWZXJzaW9uIHN0cnVjdCB7CiAgY29uc2Vuc3VzIENvbnNlbnN1cwogIHNvZnR3YXJlIHN0cmluZwp9Cg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Consensus")]),e._v(" contains the protocol version for the blockchain and the\napplication as two "),a("code",[e._v("uint64")]),e._v(" values:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb25zZW5zdXMgc3RydWN0IHsKIEJsb2NrIHVpbnQ2NAogQXBwICAgdWludDY0Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"responsedelivertx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsedelivertx"}},[e._v("#")]),e._v(" ResponseDeliverTx")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBSZXNwb25zZURlbGl2ZXJUeCB7CiAgdWludDMyICAgICAgICAgY29kZSAgICAgICA9IDE7CiAgYnl0ZXMgICAgICAgICAgZGF0YSAgICAgICA9IDI7CiAgc3RyaW5nICAgICAgICAgbG9nICAgICAgICA9IDM7ICAvLyBub25kZXRlcm1pbmlzdGljCiAgc3RyaW5nICAgICAgICAgaW5mbyAgICAgICA9IDQ7ICAvLyBub25kZXRlcm1pbmlzdGljCiAgaW50NjQgICAgICAgICAgZ2FzX3dhbnRlZCA9IDU7CiAgaW50NjQgICAgICAgICAgZ2FzX3VzZWQgICA9IDY7CiAgcmVwZWF0ZWQgRXZlbnQgZXZlbnRzICAgICA9IDcKICAgICAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uanNvbnRhZykgPSAmcXVvdDtldmVudHMsb21pdGVtcHR5JnF1b3Q7XTsKICBzdHJpbmcgY29kZXNwYWNlID0gODsKfQo="}}),e._v(" "),a("p",[a("code",[e._v("ResponseDeliverTx")]),e._v(" is the result of executing a transaction against the application.\nIt returns a result code ("),a("code",[e._v("uint32")]),e._v("), an arbitrary byte array ("),a("code",[e._v("[]byte")]),e._v(") (ie. a return value), Log ("),a("code",[e._v("string")]),e._v("), Info ("),a("code",[e._v("string")]),e._v("), GasWanted ("),a("code",[e._v("int64")]),e._v("), GasUsed ("),a("code",[e._v("int64")]),e._v("), Events ("),a("code",[e._v("[]Events")]),e._v(") and a Codespace ("),a("code",[e._v("string")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),a("p",[e._v("A validator is an active participant in the consensus with a public key and a voting power.\nValidator's also contain an address field, which is a hash digest of the PubKey.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWxpZGF0b3Igc3RydWN0IHsKICAgIEFkZHJlc3MgICAgIFtdYnl0ZQogICAgUHViS2V5ICAgICAgUHViS2V5CiAgICBWb3RpbmdQb3dlciBpbnQ2NAp9Cg=="}}),e._v(" "),a("p",[e._v("When hashing the Validator struct, the address is not included,\nbecause it is redundant with the pubkey.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("state.Validators")]),e._v(", "),a("code",[e._v("state.LastValidators")]),e._v(", and "),a("code",[e._v("state.NextValidators")]),e._v(",\nmust always be sorted by voting power, so that there is a canonical order for\ncomputing the MerkleRoot.")]),e._v(" "),a("p",[e._v("We also define a "),a("code",[e._v("TotalVotingPower")]),e._v(" function, to return the total voting power:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUb3RhbFZvdGluZ1Bvd2VyKHZhbHMgW11WYWxpZGF0b3JzKSBpbnQ2NHsKICAgIHN1bSA6PSAwCiAgICBmb3IgdiA6PSByYW5nZSB2YWxzewogICAgICAgIHN1bSArPSB2LlZvdGluZ1Bvd2VyCiAgICB9CiAgICByZXR1cm4gc3VtCn0K"}}),e._v(" "),a("h3",{attrs:{id:"consensusparams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensusparams"}},[e._v("#")]),e._v(" ConsensusParams")]),e._v(" "),a("p",[e._v("ConsensusParams define various limits for blockchain data structures.\nLike validator sets, they are set during genesis and can be updated by the application through ABCI.\nWhen hashed, only a subset of the params are included, to allow the params to\nevolve without breaking the header.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBDb25zZW5zdXNQYXJhbXMgewogIEJsb2NrUGFyYW1zICAgICBibG9jayAgICAgPSAxOwogIEV2aWRlbmNlUGFyYW1zICBldmlkZW5jZSAgPSAyOwogIFZhbGlkYXRvclBhcmFtcyB2YWxpZGF0b3IgPSAzOwogIFZlcnNpb25QYXJhbXMgICB2ZXJzaW9uICAgPSA0Owp9Cg=="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBoYXNoZWRQYXJhbXMgc3RydWN0IHsKIEJsb2NrTWF4Qnl0ZXMgaW50NjQKIEJsb2NrTWF4R2FzICAgaW50NjQKfQoKZnVuYyBIYXNoQ29uc2Vuc3VzUGFyYW1zKCkgW11ieXRlIHsKIFNIQTI1NihoYXNoZWRQYXJhbXN7CiAgQmxvY2tNYXhCeXRlczogcGFyYW1zLkJsb2NrLk1heEJ5dGVzLAogIEJsb2NrTWF4R2FzOiAgIHBhcmFtcy5CbG9jay5NYXhHYXMsCiB9KQp9Cg=="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBCbG9ja1BhcmFtcyB7CiAgaW50NjQgbWF4X2J5dGVzID0gMTsKICBpbnQ2NCBtYXhfZ2FzID0gMjsKICBpbnQ2NCB0aW1lX2lvdGFfbXMgPSAzOyAvLyBub3QgZXhwb3NlZCB0byB0aGUgYXBwbGljYXRpb24KfQoKbWVzc2FnZSBFdmlkZW5jZVBhcmFtcyB7CiAgaW50NjQgbWF4X2FnZV9udW1fYmxvY2tzID0gMTsKICBnb29nbGUucHJvdG9idWYuRHVyYXRpb24gbWF4X2FnZV9kdXJhdGlvbiA9IDI7CiAgdWludDMyIG1heF9udW0gPSAzOwp9CgptZXNzYWdlIFZhbGlkYXRvclBhcmFtcyB7CiAgcmVwZWF0ZWQgc3RyaW5nIHB1Yl9rZXlfdHlwZXMgPSAxOwp9CgptZXNzYWdlIFZlcnNpb25QYXJhbXMgewogIHVpbnQ2NCBBcHBWZXJzaW9uID0gMTsKfQo="}}),e._v(" "),a("h4",{attrs:{id:"block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[e._v("#")]),e._v(" Block")]),e._v(" "),a("p",[e._v("The total size of a block is limited in bytes by the "),a("code",[e._v("ConsensusParams.Block.MaxBytes")]),e._v(".\nProposed blocks must be less than this size, and will be considered invalid\notherwise.")]),e._v(" "),a("p",[e._v('Blocks should additionally be limited by the amount of "gas" consumed by the\ntransactions in the block, though this is not yet implemented.')]),e._v(" "),a("p",[e._v("The minimal time between consecutive blocks is controlled by the\n"),a("code",[e._v("ConsensusParams.Block.TimeIotaMs")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"evidence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evidence"}},[e._v("#")]),e._v(" Evidence")]),e._v(" "),a("p",[e._v("For evidence in a block to be valid, it must satisfy:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YmxvY2suSGVhZGVyLlRpbWUtZXZpZGVuY2UuVGltZSAmbHQ7IENvbnNlbnN1c1BhcmFtcy5FdmlkZW5jZS5NYXhBZ2VEdXJhdGlvbiAmYW1wOyZhbXA7CiBibG9jay5IZWFkZXIuSGVpZ2h0LWV2aWRlbmNlLkhlaWdodCAmbHQ7IENvbnNlbnN1c1BhcmFtcy5FdmlkZW5jZS5NYXhBZ2VOdW1CbG9ja3MK"}}),e._v(" "),a("h4",{attrs:{id:"validator-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-2"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),a("p",[e._v("Validators from genesis file and "),a("code",[e._v("ResponseEndBlock")]),e._v(" must have pubkeys of type ∈\n"),a("code",[e._v("ConsensusParams.Validator.PubKeyTypes")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);