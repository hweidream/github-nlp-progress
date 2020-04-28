(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{241:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"natural-language-inference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#natural-language-inference"}},[e._v("#")]),e._v(" Natural language inference")]),e._v(" "),a("p",[e._v('Natural language inference is the task of determining whether a "hypothesis" is\ntrue (entailment), false (contradiction), or undetermined (neutral) given a "premise".')]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Premise")]),e._v(" "),a("th",[e._v("Label")]),e._v(" "),a("th",[e._v("Hypothesis")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("A man inspects the uniform of a figure in some East Asian country.")]),e._v(" "),a("td",[e._v("contradiction")]),e._v(" "),a("td",[e._v("The man is sleeping.")])]),e._v(" "),a("tr",[a("td",[e._v("An older and younger man smiling.")]),e._v(" "),a("td",[e._v("neutral")]),e._v(" "),a("td",[e._v("Two men are smiling and laughing at the cats playing on the floor.")])]),e._v(" "),a("tr",[a("td",[e._v("A soccer game with multiple males playing.")]),e._v(" "),a("td",[e._v("entailment")]),e._v(" "),a("td",[e._v("Some men are playing a sport.")])])])]),e._v(" "),a("h3",{attrs:{id:"snli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snli"}},[e._v("#")]),e._v(" SNLI")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://arxiv.org/abs/1508.05326",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stanford Natural Language Inference (SNLI) Corpus"),a("OutboundLink")],1),e._v("\ncontains around 550k hypothesis/premise pairs. Models are evaluated based on accuracy.")]),e._v(" "),a("p",[e._v("State-of-the-art results can be seen on the "),a("a",{attrs:{href:"https://nlp.stanford.edu/projects/snli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SNLI website"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"multinli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multinli"}},[e._v("#")]),e._v(" MultiNLI")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://arxiv.org/abs/1704.05426",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multi-Genre Natural Language Inference (MultiNLI) corpus"),a("OutboundLink")],1),e._v("\ncontains around 433k hypothesis/premise pairs. It is similar to the SNLI corpus, but\ncovers a range of genres of spoken and written text and supports cross-genre evaluation. The data\ncan be downloaded from the "),a("a",{attrs:{href:"https://www.nyu.edu/projects/bowman/multinli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MultiNLI"),a("OutboundLink")],1),e._v(" website.")]),e._v(" "),a("p",[e._v("Public leaderboards for "),a("a",{attrs:{href:"https://www.kaggle.com/c/multinli-matched-open-evaluation/leaderboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("in-genre (matched)"),a("OutboundLink")],1),e._v("\nand "),a("a",{attrs:{href:"https://www.kaggle.com/c/multinli-mismatched-open-evaluation/leaderboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("cross-genre (mismatched)"),a("OutboundLink")],1),e._v("\nevaluation are available, but entries do not correspond to published models.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Model")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Matched")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Mismatched")]),e._v(" "),a("th",[e._v("Paper / Source")]),e._v(" "),a("th",[e._v("Code")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("RoBERTa (Liu et al., 2019)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("90.8")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("90.2")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1907.11692.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pytorch/fairseq/blob/master/examples/roberta/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("XLNet-Large (ensemble) (Yang et al., 2019)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("90.2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("89.8")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1906.08237.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("XLNet: Generalized Autoregressive Pretraining for Language Understanding"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/zihangdai/xlnet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("MT-DNN-ensemble (Liu et al., 2019)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("87.9")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("87.4")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1904.09482.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improving Multi-Task Deep Neural Networks via Knowledge Distillation for Natural Language Understanding"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/namisan/mt-dnn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Snorkel MeTaL(ensemble) (Ratner et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("87.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("87.2")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/pdf/1810.02840.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Training Complex Models with Multi-Task Weak Supervision"),a("OutboundLink")],1)]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/HazyResearch/metal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Finetuned Transformer LM (Radford et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("82.1")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("81.4")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improving Language Understanding by Generative Pre-Training"),a("OutboundLink")],1)]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Multi-task BiLSTM + Attn (Wang et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("72.2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("72.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1804.07461",target:"_blank",rel:"noopener noreferrer"}},[e._v("GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding"),a("OutboundLink")],1)]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("GenSen (Subramanian et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("71.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("71.3")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1804.00079",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learning General Purpose Distributed Sentence Representations via Large Scale Multi-task Learning"),a("OutboundLink")],1)]),e._v(" "),a("td")])])]),e._v(" "),a("h3",{attrs:{id:"scitail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scitail"}},[e._v("#")]),e._v(" SciTail")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"http://ai2-website.s3.amazonaws.com/publications/scitail-aaai-2018_cameraready.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SciTail"),a("OutboundLink")],1),e._v('\nentailment dataset consists of 27k. In contrast to the SNLI and MultiNLI, it was not crowd-sourced\nbut created from sentences that already exist "in the wild". Hypotheses were created from\nscience questions and the corresponding answer candidates, while relevant web sentences from a large\ncorpus were used as premises. Models are evaluated based on accuracy.')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Model")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Accuracy")]),e._v(" "),a("th",[e._v("Paper / Source")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Finetuned Transformer LM (Radford et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("88.3")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improving Language Understanding by Generative Pre-Training"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Hierarchical BiLSTM Max Pooling (Talman et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("86.0")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1808.08762",target:"_blank",rel:"noopener noreferrer"}},[e._v("Natural Language Inference with Hierarchical BiLSTM Max Pooling"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("CAFE (Tay et al., 2018)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("83.3")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://arxiv.org/abs/1801.00102",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Compare-Propagate Architecture with Alignment Factorization for Natural Language Inference"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/"}},[e._v("Go back to the README")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);