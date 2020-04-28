(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{247:function(t,e,r){"use strict";r.r(e);var n=r(1),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"intent-detection-and-slot-filling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intent-detection-and-slot-filling"}},[t._v("#")]),t._v(" Intent Detection and Slot Filling")]),t._v(" "),r("p",[t._v("Intent Detection and Slot Filling is the task of interpreting user commands/queries by extracting the intent and the relevant slots.")]),t._v(" "),r("p",[t._v("Example (from ATIS):")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Query: What flights are available from pittsburgh to baltimore on thursday morning\nIntent: flight info\nSlots: \n    - from_city: pittsburgh\n    - to_city: baltimore\n    - depart_date: thursday\n    - depart_time: morning\n")])])]),r("h2",{attrs:{id:"atis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#atis"}},[t._v("#")]),t._v(" ATIS")]),t._v(" "),r("p",[t._v("ATIS (Air Travel Information System) (Hemphill et al.) is a dataset by Microsoft CNTK. Available from the "),r("a",{attrs:{href:"https://github.com/microsoft/CNTK/tree/master/Examples/LanguageUnderstanding/ATIS",target:"_blank",rel:"noopener noreferrer"}},[t._v("github page"),r("OutboundLink")],1),t._v(". The slots are labeled in the BIO ("),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Inside%E2%80%93outside%E2%80%93beginning_(tagging)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inside Outside Beginning"),r("OutboundLink")],1),t._v(") format (similar to NER). This dataset contains only air travel related commands. Most of the ATIS results are based on the work "),r("a",{attrs:{href:"https://github.com/zhenwenzhang/Slot_Filling",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",[t._v("Slot F1 Score")]),t._v(" "),r("th",[t._v("Intent Accuracy")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Bi-model with decoder")]),t._v(" "),r("td",[t._v("96.89")]),t._v(" "),r("td",[t._v("98.99")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1812.10235",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Bi-model based RNN Semantic Frame Parsing Model for Intent Detection and Slot Filling"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Attention Encoder-Decoder NN")]),t._v(" "),r("td",[t._v("95.87")]),t._v(" "),r("td",[t._v("98.43")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1609.01454",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attention-Based Recurrent Neural Network Models for Joint Intent Detection and Slot Filling"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("SF-ID (BLSTM) network")]),t._v(" "),r("td",[t._v("95.80")]),t._v(" "),r("td",[t._v("97.76")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1907.00390",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Novel Bi-directional Interrelated Model for Joint Intent Detection and Slot Filling"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/ZephyrChenzf/SF-ID-Network-For-NLU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Capsule-NLU")]),t._v(" "),r("td",[t._v("95.20")]),t._v(" "),r("td",[t._v("95.00")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1812.09471",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joint Slot Filling and Intent Detection via Capsule Neural Networks"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/czhang99/Capsule-NLU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Joint GRU model(W)")]),t._v(" "),r("td",[t._v("95.49")]),t._v(" "),r("td",[t._v("98.10")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.ijcai.org/Proceedings/16/Papers/425.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Joint Model of Intent Determination and Slot Filling for Spoken Language Understanding"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Slot-Gated BLSTM with Attension")]),t._v(" "),r("td",[t._v("95.20")]),t._v(" "),r("td",[t._v("94.10")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.csie.ntu.edu.tw/~yvchen/doc/NAACL18_SlotGated.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slot-Gated Modeling for Joint Slot Filling and Intent Prediction"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/MiuLab/SlotGated-SLU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Joint model with recurrent slot label context")]),t._v(" "),r("td",[t._v("94.64")]),t._v(" "),r("td",[t._v("98.40")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/pdf/1609.01462.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joint Online Spoken Language Understanding and Language Modeling with Recurrent Neural Networks"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/HadoopIt/joint-slu-lm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Recursive NN")]),t._v(" "),r("td",[t._v("93.96")]),t._v(" "),r("td",[t._v("95.40")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2014/12/RecNNSLU.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("JOINT SEMANTIC UTTERANCE CLASSIFICATION AND SLOT FILLING WITH RECURSIVE NEURAL NETWORKS"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Encoder-labeler Deep LSTM")]),t._v(" "),r("td",[t._v("95.66")]),t._v(" "),r("td",[t._v("NA")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1601.01530",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leveraging Sentence-level Information with Encoder LSTM for Natural Language Understanding"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("RNN with Label Sampling")]),t._v(" "),r("td",[t._v("94.89")]),t._v(" "),r("td",[t._v("NA")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://speech.sv.cmu.edu/publications/liu-nipsslu-2015.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recurrent Neural Network Structured Output Prediction for Spoken Language Understanding"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("Hybrid RNN")]),t._v(" "),r("td",[t._v("95.06")]),t._v(" "),r("td",[t._v("NA")]),t._v(" "),r("td",[r("a",{attrs:{href:"http://www.iro.umontreal.ca/~lisa/pointeurs/taslp_RNNSLU_final_doubleColumn.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using recurrent neural networks for slot filling in spoken language understanding."),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("RNN-EM")]),t._v(" "),r("td",[t._v("95.25")]),t._v(" "),r("td",[t._v("NA")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1506.00195",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recurrent neural networks with external memory for language understanding"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("CNN-CRF")]),t._v(" "),r("td",[t._v("94.35")]),t._v(" "),r("td",[t._v("NA")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2013/12/IEEE-ASRU-2013.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Convolutional neural network based triangular crf for joint intent detection and slot filling"),r("OutboundLink")],1)]),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"snips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snips"}},[t._v("#")]),t._v(" SNIPS")]),t._v(" "),r("p",[t._v("SNIPS is a dataset by Snips.ai for Intent Detection and Slot Filling benchmarking. Available from the "),r("a",{attrs:{href:"https://github.com/snipsco/nlu-benchmark",target:"_blank",rel:"noopener noreferrer"}},[t._v("github page"),r("OutboundLink")],1),t._v(". This dataset contains several day to day user command categories (e.g. play a song, book a restaurant).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",[t._v("Slot F1 Score")]),t._v(" "),r("th",[t._v("Intent Accuracy")]),t._v(" "),r("th",[t._v("Paper / Source")]),t._v(" "),r("th",[t._v("Code")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("SF-ID (BLSTM) network")]),t._v(" "),r("td",[t._v("92.23")]),t._v(" "),r("td",[t._v("97.43")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1907.00390",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Novel Bi-directional Interrelated Model for Joint Intent Detection and Slot Filling"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/ZephyrChenzf/SF-ID-Network-For-NLU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Capsule-NLU")]),t._v(" "),r("td",[t._v("91.80")]),t._v(" "),r("td",[t._v("97.70")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://arxiv.org/abs/1812.09471",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joint Slot Filling and Intent Detection via Capsule Neural Networks"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/czhang99/Capsule-NLU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])]),t._v(" "),r("tr",[r("td",[t._v("Slot-Gated BLSTM with Attension")]),t._v(" "),r("td",[t._v("88.80")]),t._v(" "),r("td",[t._v("97.00")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://www.csie.ntu.edu.tw/~yvchen/doc/NAACL18_SlotGated.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slot-Gated Modeling for Joint Slot Filling and Intent Prediction"),r("OutboundLink")],1)]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/MiuLab/SlotGated-SLU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);