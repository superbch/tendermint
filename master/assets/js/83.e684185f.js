(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{737:function(e,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-012-peertransport"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-012-peertransport"}},[e._v("#")]),e._v(" ADR 012: PeerTransport")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("One of the more apparent problems with the current architecture in the p2p\npackage is that there is no clear separation of concerns between different\ncomponents. Most notably the "),n("code",[e._v("Switch")]),e._v(" is currently doing physical connection\nhandling. An artifact is the dependency of the Switch on\n"),n("code",[e._v("[config.P2PConfig")]),e._v("](https://github.com/tendermint/tendermint/blob/05a76fb517f50da27b4bfcdc7b4cf185fc61eff6/config/config.go#L272-L339).")]),e._v(" "),n("p",[e._v("Addresses:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2046",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2046"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2047",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2047"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("First iteraton in "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2067",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2067"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("p",[e._v("Transport concerns will be handled by a new component ("),n("code",[e._v("PeerTransport")]),e._v(") which\nwill provide Peers at its boundary to the caller. In turn "),n("code",[e._v("Switch")]),e._v(" will use\nthis new component accept new "),n("code",[e._v("Peer")]),e._v("s and dial them based on "),n("code",[e._v("NetAddress")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"peertransport"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peertransport"}},[e._v("#")]),e._v(" PeerTransport")]),e._v(" "),n("p",[e._v("Responsible for emitting and connecting to Peers. The implementation of "),n("code",[e._v("Peer")]),e._v("\nis left to the transport, which implies that the chosen transport dictates the\ncharacteristics of the implementation handed back to the "),n("code",[e._v("Switch")]),e._v(". Each\ntransport implementation is responsible to filter establishing peers specific\nto its domain, for the default multiplexed implementation the following will\napply:")]),e._v(" "),n("ul",[n("li",[e._v("connections from our own node")]),e._v(" "),n("li",[e._v("handshake fails")]),e._v(" "),n("li",[e._v("upgrade to secret connection fails")]),e._v(" "),n("li",[e._v("prevent duplicate ip")]),e._v(" "),n("li",[e._v("prevent duplicate id")]),e._v(" "),n("li",[e._v("nodeinfo incompatibility")])]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUGVlclRyYW5zcG9ydCBwcm94aWVzIGluY29taW5nIGFuZCBvdXRnb2luZyBwZWVyIGNvbm5lY3Rpb25zLgp0eXBlIFBlZXJUcmFuc3BvcnQgaW50ZXJmYWNlIHsKCS8vIEFjY2VwdCByZXR1cm5zIGEgbmV3bHkgY29ubmVjdGVkIFBlZXIuCglBY2NlcHQoKSAoUGVlciwgZXJyb3IpCgoJLy8gRGlhbCBjb25uZWN0cyB0byBhIFBlZXIuCglEaWFsKE5ldEFkZHJlc3MpIChQZWVyLCBlcnJvcikKfQoKLy8gRVhBTVBMRSBPRiBERUZBVUxUIElNUExFTUVOVEFUSU9OCgovLyBtdWx0aXBsZXhUcmFuc3BvcnQgYWNjZXB0cyB0Y3AgY29ubmVjdGlvbnMgYW5kIHVwZ3JhZGVzIHRvIG11bHRpcGxleHRlZAovLyBwZWVycy4KdHlwZSBtdWx0aXBsZXhUcmFuc3BvcnQgc3RydWN0IHsKCWxpc3RlbmVyIG5ldC5MaXN0ZW5lcgoKCWFjY2VwdGMgY2hhbiBhY2NlcHQKCWNsb3NlYyAgJmx0Oy1jaGFuIHN0cnVjdHt9CglsaXN0ZW5jICZsdDstY2hhbiBzdHJ1Y3R7fQoKCWRpYWxUaW1lb3V0ICAgICAgdGltZS5EdXJhdGlvbgoJaGFuZHNoYWtlVGltZW91dCB0aW1lLkR1cmF0aW9uCglub2RlQWRkciAgICAgICAgIE5ldEFkZHJlc3MKCW5vZGVJbmZvICAgICAgICAgTm9kZUluZm8KCW5vZGVLZXkgICAgICAgICAgTm9kZUtleQoKCS8vIFRPRE8oeGxhKTogUmVtb3ZlIHdoZW4gTUNvbm5lY3Rpb24gaXMgcmVmYWN0b3JlZCBpbnRvIG1QZWVyLgoJbUNvbmZpZyBjb25uLk1Db25uQ29uZmlnCn0KCnZhciBfIFBlZXJUcmFuc3BvcnQgPSAoKm11bHRpcGxleFRyYW5zcG9ydCkobmlsKQoKLy8gTmV3TVRyYW5zcG9ydCByZXR1cm5zIG5ldHdvcmsgY29ubmVjdGVkIG11bHRpcGxleGVkIHBlZXJzLgpmdW5jIE5ld01UcmFuc3BvcnQoCglub2RlQWRkciBOZXRBZGRyZXNzLAoJbm9kZUluZm8gTm9kZUluZm8sCglub2RlS2V5IE5vZGVLZXksCikgKm11bHRpcGxleFRyYW5zcG9ydAo="}}),e._v(" "),n("h3",{attrs:{id:"switch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[e._v("#")]),e._v(" Switch")]),e._v(" "),n("p",[e._v("From now the Switch will depend on a fully setup "),n("code",[e._v("PeerTransport")]),e._v(" to\nretrieve/reach out to its peers. As the more low-level concerns are pushed to\nthe transport, we can omit passing the "),n("code",[e._v("config.P2PConfig")]),e._v(" to the Switch.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdTd2l0Y2godHJhbnNwb3J0IFBlZXJUcmFuc3BvcnQsIG9wdHMgLi4uU3dpdGNoT3B0aW9uKSAqU3dpdGNoCg=="}}),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("In Review.")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("free Switch from transport concerns - simpler implementation")]),e._v(" "),n("li",[e._v("pluggable transport implementation - simpler test setup")]),e._v(" "),n("li",[e._v("remove Switch dependency on P2PConfig - easier to test")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("more setup for tests which depend on Switches")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("ul",[n("li",[e._v("multiplexed will be the default implementation")])]),e._v(" "),n("p",[e._v("[0] These guards could be potentially extended to be pluggable much like\nmiddlewares to express different concerns required by differentally configured\nenvironments.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);