import{_ as i,r as m,o,c as r,a as s,d as a,b as e,w as l,e as h}from"./app-dsssqmxF.js";const u={},d=h('<h1 id="拒绝采样" tabindex="-1"><a class="header-anchor" href="#拒绝采样" aria-hidden="true">#</a> 拒绝采样</h1><h2 id="1-拒绝采样的定义" tabindex="-1"><a class="header-anchor" href="#1-拒绝采样的定义" aria-hidden="true">#</a> 1. 拒绝采样的定义</h2><p>简单分布的采样，如均匀分布、高斯分布、Gamma 分布等，在计算机中都已经实现，但是对于复杂问题的采样，就需要采取一些策略。拒绝采样就是一种基本的采样策略，其采样过程如下：<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',3),g=s("p",null,[a("给定一个概率分布 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mstyle",{displaystyle:"true",scriptlevel:"0"},[s("mfrac",null,[s("mn",null,"1"),s("msub",null,[s("mi",null,"Z"),s("mi",null,"p")])])]),s("mover",{accent:"true"},[s("mi",null,"p"),s("mo",null,"~")]),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"p(z) = \\dfrac{1}{Z_p}\\tilde{p}(z)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.2935em","vertical-align":"-0.9721em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9721em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"p")]),s("span",{style:{top:"-3.35em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord"},"~")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")")])])]),a("，其中 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mi",null,"p"),s("mo",null,"~")]),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\tilde{p}(z)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"p")]),s("span",{style:{top:"-3.35em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord"},"~")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")")])])]),a(" 已知，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"Z"),s("mi",null,"p")])]),s("annotation",{encoding:"application/x-tex"},"Z_p")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9694em","vertical-align":"-0.2861em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"p")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])])]),a(" 为归一化常数，未知。要对该分布进行拒绝采样。")],-1),y=s("p",null,[a("首先定义一个参考分布 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"G")]),s("annotation",{encoding:"application/x-tex"},"G")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal"},"G")])])]),a("，其概率密度函数为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"g(x)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},")")])])]),a("，该分布可选均匀分布或高斯分布等。另外再定义一个辅助分布 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"U"),s("mo",{stretchy:"false"},"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mtext",null," "),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"U(0,\\,1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),a(" 为均匀分布。然后引入常数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k")]),s("annotation",{encoding:"application/x-tex"},"k")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),a(" 使得对所有的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"z")]),s("annotation",{encoding:"application/x-tex"},"z")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z")])])]),a(" 满足 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")"),s("mo",null,"⩽"),s("mover",{accent:"true"},[s("mi",null,"p"),s("mo",null,"~")]),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"kg(z) \\leqslant \\tilde{p}(z)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel amsrm"},"⩽"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"p")]),s("span",{style:{top:"-3.35em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord"},"~")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")")])])]),a("，然后开始进行采样。在每次采样中先从 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("mi",null,"z"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"g(z)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mclose"},")")])])]),a(" 中采样一个 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"z"),s("mn",null,"0")])]),s("annotation",{encoding:"application/x-tex"},"z_0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("，然后在区间 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"["),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mtext",null," "),s("mi",null,"k"),s("mi",null,"g"),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"z"),s("mn",null,"0")]),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"[0,\\,kg(z_0)]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"["),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")]")])])]),a(" 里进行均匀采样，得到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mn",null,"0")])]),s("annotation",{encoding:"application/x-tex"},"u_0")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"u"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a("。如果 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mn",null,"0")]),s("mo",null,"<"),s("mover",{accent:"true"},[s("mi",null,"p"),s("mo",null,"~")]),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"z"),s("mn",null,"0")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"u_0 < \\tilde{p}(z_0)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6891em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"u"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"p")]),s("span",{style:{top:"-3.35em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord"},"~")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"0")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")")])])]),a(" 则接受，保留该采样值，否则拒绝。最后得到的数据就是对该分布的一个近似采样。")],-1),D=s("p",null,"所以使用接受-拒绝采样可以得到采样的概率分布。",-1),v=s("h2",{id:"2-例题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#2-例题","aria-hidden":"true"},"#"),a(" 2. 例题")],-1),x=s("h3",{id:"21-用-rand7-实现-rand10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#21-用-rand7-实现-rand10","aria-hidden":"true"},"#"),a(" 2.1 用 Rand7 实现 Rand10")],-1),w={href:"https://leetcode.cn/problems/implement-rand10-using-rand7/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,[a("给定方法 "),s("code",null,"rand7()"),a(" 可生成 "),s("code",null,"[1, 7]"),a(" 范围内的均匀随机整数，试写一个方法 "),s("code",null,"rand10()"),a(" 生成 "),s("code",null,"[1, 10]"),a(" 范围内的均匀随机整数。")],-1),b={class:"hint-container details"},f=s("summary",null,"题目解答",-1),_=s("p",null,[a("我们假设，"),s("code",null,"rand7()"),a(" 可以生成一个两位的 7 进制数，只要生成两次就可以。生成这个 7 进制数一定是均匀分布，而 7 进制数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"66")]),s("annotation",{encoding:"application/x-tex"},"66")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"66")])])]),a(" 的十进制值为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"48")]),s("annotation",{encoding:"application/x-tex"},"48")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"48")])])]),a("，我们可以取前 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"40")]),s("annotation",{encoding:"application/x-tex"},"40")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"40")])])]),a(" 种情况有效，而拒绝 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"40"),s("mo",null,"∼"),s("mn",null,"48")]),s("annotation",{encoding:"application/x-tex"},"40 \\sim 48")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"40"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"∼"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"48")])])]),a(" 内的值。")],-1),z=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"class"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"Solution"),s("span",{style:{color:"#D4D4D4"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"public:")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"rand10"),s("span",{style:{color:"#D4D4D4"}},"() {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"while"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"true"),s("span",{style:{color:"#D4D4D4"}},") {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," ones = "),s("span",{style:{color:"#DCDCAA"}},"rand7"),s("span",{style:{color:"#D4D4D4"}},"() - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," tens = ("),s("span",{style:{color:"#DCDCAA"}},"rand7"),s("span",{style:{color:"#D4D4D4"}},"() - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},") * "),s("span",{style:{color:"#B5CEA8"}},"7"),s("span",{style:{color:"#D4D4D4"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," (ones + tens < "),s("span",{style:{color:"#B5CEA8"}},"40"),s("span",{style:{color:"#D4D4D4"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"                "),s("span",{style:{color:"#C586C0"}},"return"),s("span",{style:{color:"#D4D4D4"}}," (ones + tens) % "),s("span",{style:{color:"#B5CEA8"}},"10"),s("span",{style:{color:"#D4D4D4"}}," + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    }")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"};")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),M=s("div",{class:"language-python","data-ext":"py"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"class"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"Solution"),s("span",{style:{color:"#D4D4D4"}},":")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#569CD6"}},"def"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"rand10"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"self"),s("span",{style:{color:"#D4D4D4"}},"):")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"while"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"True"),s("span",{style:{color:"#D4D4D4"}},":")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            ones = rand7() - "),s("span",{style:{color:"#B5CEA8"}},"1")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            tens = (rand7() - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},") * "),s("span",{style:{color:"#B5CEA8"}},"7")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," ones + tens < "),s("span",{style:{color:"#B5CEA8"}},"40"),s("span",{style:{color:"#D4D4D4"}},":")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"                "),s("span",{style:{color:"#C586C0"}},"return"),s("span",{style:{color:"#D4D4D4"}}," (ones + tens) % "),s("span",{style:{color:"#B5CEA8"}},"10"),s("span",{style:{color:"#D4D4D4"}}," + "),s("span",{style:{color:"#B5CEA8"}},"1")]),a(`
`),s("span",{class:"line"})])])],-1),C=s("hr",{class:"footnotes-sep"},null,-1),A={class:"footnotes"},E={class:"footnotes-list"},L={id:"footnote1",class:"footnote-item"},B={href:"https://zhuanlan.zhihu.com/p/379473275",target:"_blank",rel:"noopener noreferrer"},Z=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function G(N,R){const c=m("ExternalLinkIcon"),p=m("CodeTabs");return o(),r("div",null,[d,g,y,D,v,x,s("p",null,[a("题目链接："),s("a",w,[a("LeetCode: 470. 用 Rand7() 实现 Rand10()"),e(c)]),a("。")]),k,s("details",b,[f,_,e(p,{id:"34",data:[{id:"cpp"},{id:"python"}],"tab-id":"code"},{title0:l(({value:t,isActive:n})=>[a("cpp")]),title1:l(({value:t,isActive:n})=>[a("python")]),tab0:l(({value:t,isActive:n})=>[z]),tab1:l(({value:t,isActive:n})=>[M]),_:1})]),C,s("section",A,[s("ol",E,[s("li",L,[s("p",null,[a("拒绝采样（reject sampling），知乎，"),s("a",B,[a("https://zhuanlan.zhihu.com/p/379473275"),e(c)]),a(),Z])])])])])}const T=i(u,[["render",G],["__file","reject-sampling.html.vue"]]);export{T as default};
