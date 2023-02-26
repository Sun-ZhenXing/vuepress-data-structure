import{_ as d,M as c,p as i,q as u,R as t,N as a,V as n,t as s,a1 as l}from"./framework-8980b429.js";const h="/vuepress-data-structure/assets/location-of-compiler-in-language-processing-system-099c78cb.svg",k="/vuepress-data-structure/assets/analyze-source-language-a1f9b11b.svg",m={},_=t("h1",{id:"_1-绪论",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-绪论","aria-hidden":"true"},"#"),s(" 1. 绪论")],-1),g={class:"table-of-contents"},y=t("h2",{id:"_1-1-什么是编译",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-1-什么是编译","aria-hidden":"true"},"#"),s(" 1.1 什么是编译")],-1),x=t("h3",{id:"_1-1-1-计算机程序设计语言及编译",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-1-1-计算机程序设计语言及编译","aria-hidden":"true"},"#"),s(" 1.1.1 计算机程序设计语言及编译")],-1),b=t("p",null,"首先，我们先了解和比较各种不同层次的语言。",-1),f=t("strong",null,"机器语言",-1),v=t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote1"},"[1]"),t("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),w=l("<p>机器语言可以直接被计算机理解，所以在最早期的机器使用的一般都是机器语言。但机器语言只能使用二进制指令（一般使用十六进制表示）表示，这些数字通常不能直接看出其含义，因此使用机器语言编写和阅读程序都是极其困难的。</p><p>例如，这是一段十六进制表示的机器语言代码：<code>C706 0000 0002</code>，我们如果不知道其指令集架构等信息，我们无法看出其含义。</p><p>下面总结，使用机器语言的缺点：</p><ul><li>与人类的表达习惯相去甚远</li><li>难记忆</li><li>难编写、难阅读</li><li>易写错</li></ul><p>正是因为机器语言的诸多缺点，我们引入了 <strong>助记符</strong>（Mnemonic）。用符号代替了机器指令代码，例如 <code>MOV X, 2</code> 表示将立即数 <code>2</code> 赋值给 <code>X</code>，由此引入了汇编语言。<code>MOV</code> 表示 <em>移入</em>（move），而 <code>X</code> 代表一个地址。</p>",5),I=t("strong",null,"汇编语言",-1),A=t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote2"},"[2]"),t("a",{class:"footnote-anchor",id:"footnote-ref2"})],-1),C=t("p",null,"但是汇编语言也有其缺点：",-1),L=t("ul",null,[t("li",null,"依赖于特定机器，分计算机专业人员使用受限"),t("li",null,"编写效率比较低")],-1),T=t("p",null,"为了简化编写程序的流程，我们提出了更接近于自然语言的表达方式。",-1),F=t("strong",null,"高级语言",-1),D=t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote3"},"[3]"),t("a",{class:"footnote-anchor",id:"footnote-ref3"})],-1),S=t("p",null,[s("高级语言以一种类似数学语言的简洁形式，更加接近人的表达习惯。例如 "),t("code",null,"x = 2"),s("，它可以完成上述汇编语句或者机器语言的功能。高级语言编写简单，不依赖特定机器。高级语言的编写效率较高。")],-1),E=t("strong",null,"汇编",-1),B=t("strong",null,"编译",-1),N=t("strong",null,"源语言",-1),V=t("strong",null,"目标语言",-1),j=t("strong",null,"编译器",-1),z=l('<p>编译原理课程即学习编译器如何将高级语言翻译为汇编语言或机器语言的过程。</p><h3 id="_1-1-2-编译器在语言处理系统中的位置" tabindex="-1"><a class="header-anchor" href="#_1-1-2-编译器在语言处理系统中的位置" aria-hidden="true">#</a> 1.1.2 编译器在语言处理系统中的位置</h3><p>编译过程在语言处理系统中的作用可以用下图表示：</p><p><img src="'+h+'" alt="编译器在语言处理系统中的位置" loading="lazy"></p><p><strong>预处理器</strong> 的功能：</p><ul><li>把储存在不同文件中的源程序 <em>聚合</em> 在一起</li><li>把 <strong>宏</strong>（Macro）转换为原始语句</li></ul><p><strong>加载器</strong> 的功能：</p><ul><li>修改可重定位地址，将修改后的指令和数据放到内存的适当位置</li><li>计算地址公式：<em>起始位置 + 相对地址 = 绝对地址</em></li></ul><p><strong>链接器</strong> 的功能：</p><ul><li>将多个可重定位的机器代码文件（包括库文件）连接到一起</li><li>解决外部内存地址问题</li></ul>',10),O=t("strong",null,"可重定位的机器代码",-1),Z=t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"L")]),t("annotation",{encoding:"application/x-tex"},"L")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.6833em"}}),t("span",{class:"mord mathnormal"},"L")])])],-1),Q=t("strong",null,"可重定位的",-1),X=t("strong",null,"外部内存地址",-1),Y=l('<h2 id="_1-2-编译系统的结构" tabindex="-1"><a class="header-anchor" href="#_1-2-编译系统的结构" aria-hidden="true">#</a> 1.2 编译系统的结构</h2><h3 id="_1-2-1-人工英汉翻译的例子" tabindex="-1"><a class="header-anchor" href="#_1-2-1-人工英汉翻译的例子" aria-hidden="true">#</a> 1.2.1 人工英汉翻译的例子</h3><p>如何翻译 <code>In his room, he broke a window with a hammer.</code>？</p><p>在此时，英语是源语言，中文是目标语言。通常翻译可以分为两步：</p><ol><li>分析源语言</li><li>生成目标语言</li></ol><p>具体过程可以表示为下面的流程图：</p>',6),M=t("p",null,"分析源语言的过程即语义分析的过程，下面我们分析这个句子，得到这个句子的语义为：",-1),R=l('<p>语义和语言无关，可以用于表示任何一种自然语言的句子（上图只是一种表示，只用于示意）。</p><p>在语义分析中，需要划分句子成分，这一过程需要识别句子中的各类短语，这一过程称为语法分析，语法分析的结果为：</p><table><thead><tr><th>短语</th><th>成分</th><th>短语类型</th></tr></thead><tbody><tr><td><code>In his room</code></td><td>状语</td><td>介词短语</td></tr><tr><td><code>he</code></td><td>主语</td><td>名词</td></tr><tr><td><code>broke</code></td><td>谓语</td><td>动词短语</td></tr><tr><td><code>a window</code></td><td>宾语</td><td>名词</td></tr><tr><td><code>with a hammer</code></td><td>补语</td><td>介词</td></tr></tbody></table><p>那么我们根据什么来识别句子中的各类短语呢？我们通过词性分析可以得出各类短语，这一过程被称为词法分析。词法分析的结果为：</p><table><thead><tr><th>单词</th><th>词性缩写</th><th>词性</th></tr></thead><tbody><tr><td><code>In</code></td><td><em>prep.</em></td><td>介词</td></tr><tr><td><code>his</code></td><td><em>art.</em></td><td>冠词</td></tr><tr><td><code>room</code></td><td><em>n.</em></td><td>名词</td></tr><tr><td><code>,</code></td><td>-</td><td>逗号</td></tr><tr><td><code>he</code></td><td><em>pron.</em></td><td>代词</td></tr><tr><td><code>broke</code></td><td><em>v.</em></td><td>动词</td></tr><tr><td><code>a</code></td><td><em>art.</em></td><td>冠词</td></tr><tr><td><code>window</code></td><td><em>n.</em></td><td>名词</td></tr><tr><td><code>with</code></td><td><em>prep.</em></td><td>介词</td></tr><tr><td><code>a</code></td><td><em>art.</em></td><td>冠词</td></tr><tr><td><code>hammer</code></td><td><em>n.</em></td><td>名词</td></tr><tr><td><code>.</code></td><td>-</td><td>句号</td></tr></tbody></table><p>由此，我们得出了翻译的基本流程。</p><ol><li>分析源语言 <ol><li>词法分析：得到各个词的词性</li><li>语法分析：分析出句子中的各类短语</li><li>语义分析：得到这个句子的语义，生成中间表示形式</li></ol></li><li>生成目标语言，通过中间表示形式把句子生成到目标语言</li></ol><h3 id="_1-2-2-编译器的结构" tabindex="-1"><a class="header-anchor" href="#_1-2-2-编译器的结构" aria-hidden="true">#</a> 1.2.2 编译器的结构</h3><p>类比编译原理，下面定义几个基本概念：</p>',9),H=t("strong",null,"词法分析",-1),J=t("strong",null,"语法分析",-1),P=t("strong",null,"语义分析",-1),U=t("p",null,"编译器工作流程意图：",-1),q=t("p",null,[t("img",{src:k,alt:"分析源语言",loading:"lazy"})],-1),W=t("strong",null,"编译前端",-1),G=t("em",null,"源语言",-1),K=t("strong",null,"编译后端",-1),$=t("em",null,"目标语言",-1),tt=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"逻辑阶段"),t("p",null,[s("这里的每一个结点代表一个 "),t("strong",null,"阶段"),s("，是逻辑上的过程，而实际实现中多个阶段可能组织在一起。")])],-1),st=t("p",null,[s("编译过程多个过程可能是绑定在一起的。例如在语法分析时结合语义规则可以对句子进行语义分析，这种技术叫做 "),t("strong",null,"语法指导翻译"),s("，下面给出其定义。")],-1),at=t("strong",null,"语法制导翻译",-1),nt=t("em",null,"翻译",-1),et=t("em",null,"语法制导翻译",-1),ot=l('<h2 id="_1-3-词法分析概述" tabindex="-1"><a class="header-anchor" href="#_1-3-词法分析概述" aria-hidden="true">#</a> 1.3 词法分析概述</h2><h3 id="_1-3-1-词法分析的主要任务" tabindex="-1"><a class="header-anchor" href="#_1-3-1-词法分析的主要任务" aria-hidden="true">#</a> 1.3.1 词法分析的主要任务</h3><p>词法分析的主要任务：</p><ul><li>从左到右扫描源程序的字符，识别出各个单词，确定单词的类型</li><li>将识别出的单词转换为统一的 <em>机内表示</em> —— 即 <strong>词法单元</strong> 的形式</li></ul>',4),lt=t("strong",null,"词法单元",-1),pt=t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mo",null,"<"),t("mtext",null,"种别码"),t("mo",{separator:"true"},","),t("mtext",null," "),t("mtext",null,"属性值"),t("mo",null,">")]),t("annotation",{encoding:"application/x-tex"},"<\\text{种别码},\\, \\text{属性值}>")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),t("span",{class:"mrel"},"<"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),t("span",{class:"mord text"},[t("span",{class:"mord cjk_fallback"},"种别码")]),t("span",{class:"mpunct"},","),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord text"},[t("span",{class:"mord cjk_fallback"},"属性值")]),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},">")])])],-1),ct=l(`<p>种别码和单词的类型也不是一一对应的，例如某种语言的单词和其种别码对应关系：</p><table><thead><tr><th style="text-align:center;">单词类型</th><th style="text-align:center;">种别</th><th style="text-align:center;">种别码</th></tr></thead><tbody><tr><td style="text-align:center;">关键字</td><td style="text-align:center;"><code>program</code>、<code>if</code>、<code>else</code>、<code>then</code>、...</td><td style="text-align:center;">一词一码</td></tr><tr><td style="text-align:center;">标识符</td><td style="text-align:center;">变量名、数组名、记录名、过程名、...</td><td style="text-align:center;">多词一码</td></tr><tr><td style="text-align:center;">常量</td><td style="text-align:center;">整型、浮点型、字符型、布尔型、...</td><td style="text-align:center;">一型一码</td></tr><tr><td style="text-align:center;">运算符</td><td style="text-align:center;">算术（<code>+ - * / ++ --</code>）关系、逻辑、...</td><td style="text-align:center;">一词一码 / 一型一码</td></tr><tr><td style="text-align:center;">界限符</td><td style="text-align:center;"><code>; ( ) = { } </code>...</td><td style="text-align:center;">一词一码</td></tr></tbody></table><h3 id="_1-3-2-词法分析后得到的-token-序列" tabindex="-1"><a class="header-anchor" href="#_1-3-2-词法分析后得到的-token-序列" aria-hidden="true">#</a> 1.3.2 词法分析后得到的 token 序列</h3><p>例如，分析下面的 C 语言语句：</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>value <span class="token operator">!=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>词法分析的输出结果如下：</p><div class="language-log" data-ext="log"><pre class="language-log"><code> <span class="token number">1</span><span class="token punctuation">.</span>  while  <span class="token operator">&lt;</span>WHILE<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
 <span class="token number">2</span><span class="token punctuation">.</span>  <span class="token operator">(</span>      <span class="token operator">&lt;</span>SLP<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
 <span class="token number">3</span><span class="token punctuation">.</span>  value  <span class="token operator">&lt;</span>IDN<span class="token punctuation">,</span> value<span class="token operator">&gt;</span>
 <span class="token number">4</span><span class="token punctuation">.</span>  <span class="token operator">!</span><span class="token operator">=</span>     <span class="token operator">&lt;</span>NE<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
 <span class="token number">5</span><span class="token punctuation">.</span>  <span class="token number">100</span>    <span class="token operator">&lt;</span>CONST<span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">&gt;</span>
 <span class="token number">6</span><span class="token punctuation">.</span>  <span class="token operator">)</span>      <span class="token operator">&lt;</span>SRP<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
 <span class="token number">7</span><span class="token punctuation">.</span>  <span class="token operator">{</span>      <span class="token operator">&lt;</span>LP<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
 <span class="token number">8</span><span class="token punctuation">.</span>  num    <span class="token operator">&lt;</span>IDN<span class="token punctuation">,</span> num<span class="token operator">&gt;</span>
 <span class="token number">9</span><span class="token punctuation">.</span>  <span class="token operator">+</span><span class="token operator">+</span>     <span class="token operator">&lt;</span>INC<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
<span class="token number">10</span><span class="token punctuation">.</span>  <span class="token operator">;</span>      <span class="token operator">&lt;</span>SEMI<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
<span class="token number">11</span><span class="token punctuation">.</span>  <span class="token operator">}</span>      <span class="token operator">&lt;</span>RP<span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token operator">&gt;</span>
</code></pre></div><p>其中 <code>&lt;WHILE, - &gt;</code> 表示一个 token，<code>WHILE</code> 是一个种别码，而其属性值为空。</p><h2 id="_1-4-语法分析概述" tabindex="-1"><a class="header-anchor" href="#_1-4-语法分析概述" aria-hidden="true">#</a> 1.4 语法分析概述</h2><h3 id="_1-4-1-语法分析器" tabindex="-1"><a class="header-anchor" href="#_1-4-1-语法分析器" aria-hidden="true">#</a> 1.4.1 语法分析器</h3>`,10),rt=t("strong",null,"语法分析器",-1),dt=t("strong",null,"语法分析树",-1),it=t("strong",null,"语法分析树",-1),ut=l(`<h3 id="_1-4-2-赋值语句分析树" tabindex="-1"><a class="header-anchor" href="#_1-4-2-赋值语句分析树" aria-hidden="true">#</a> 1.4.2 赋值语句分析树</h3><p>例如：</p><div class="language-c" data-ext="c"><pre class="language-c"><code>position <span class="token operator">=</span> initial <span class="token operator">+</span> rate <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
</code></pre></div><p>序列为：<code>&lt;id, position&gt;</code>，<code>&lt;=&gt;</code>，<code>&lt;id, initial&gt;</code>，<code>&lt;+&gt;</code>，<code>&lt;id, rate&gt;</code>，<code>&lt;*&gt;</code>，<code>&lt;num, 60&gt;</code>，<code>&lt;;&gt;</code>。</p><p>赋值语句的解析结构如下：</p>`,5),ht=t("h3",{id:"_1-4-3-变量声明语句的分析树",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-4-3-变量声明语句的分析树","aria-hidden":"true"},"#"),s(" 1.4.3 变量声明语句的分析树")],-1),kt=t("strong",null,"变量声明语句文法",-1),mt=t("p",{class:"katex-block"},[t("span",{class:"katex-display"},[t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("semantics",null,[t("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[t("mtr",null,[t("mtd",null,[t("mstyle",{scriptlevel:"0",displaystyle:"true"},[t("mtext",null,"<D>")])]),t("mtd",null,[t("mstyle",{scriptlevel:"0",displaystyle:"true"},[t("mrow",null,[t("mrow"),t("mo",null,"→"),t("mtext",null,"<T><IDS>;")])])])]),t("mtr",null,[t("mtd",null,[t("mstyle",{scriptlevel:"0",displaystyle:"true"},[t("mtext",null,"<T>")])]),t("mtd",null,[t("mstyle",{scriptlevel:"0",displaystyle:"true"},[t("mrow",null,[t("mrow"),t("mo",null,"→"),t("mtext",null,"int | real | char | bool")])])])]),t("mtr",null,[t("mtd",null,[t("mstyle",{scriptlevel:"0",displaystyle:"true"},[t("mtext",null,"<IDS>")])]),t("mtd",null,[t("mstyle",{scriptlevel:"0",displaystyle:"true"},[t("mrow",null,[t("mrow"),t("mo",null,"→"),t("mtext",null,"id | <IDS>, id")])])])])]),t("annotation",{encoding:"application/x-tex"}," \\begin{aligned} \\text{<D>} & \\rightarrow \\text{<T><IDS>;} \\\\ \\text{<T>} & \\rightarrow \\text{int | real | char | bool} \\\\ \\text{<IDS>}&\\rightarrow \\text{id | <IDS>, id} \\end{aligned} ")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"4.5em","vertical-align":"-2em"}}),t("span",{class:"mord"},[t("span",{class:"mtable"},[t("span",{class:"col-align-r"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"2.5em"}},[t("span",{style:{top:"-4.66em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord text"},[t("span",{class:"mord"},"<D>")])])]),t("span",{style:{top:"-3.16em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord text"},[t("span",{class:"mord"},"<T>")])])]),t("span",{style:{top:"-1.66em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord text"},[t("span",{class:"mord"},"<IDS>")])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"2em"}},[t("span")])])])]),t("span",{class:"col-align-l"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"2.5em"}},[t("span",{style:{top:"-4.66em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"→"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mord text"},[t("span",{class:"mord"},"<T><IDS>;")])])]),t("span",{style:{top:"-3.16em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"→"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mord text"},[t("span",{class:"mord"},"int | real | char | bool")])])]),t("span",{style:{top:"-1.66em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"mord"},[t("span",{class:"mord"}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mrel"},"→"),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mord text"},[t("span",{class:"mord"},"id | <IDS>, id")])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"2em"}},[t("span")])])])])])])])])])])],-1),_t=l(`<p>输入：</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span>
</code></pre></div><p>解析出的语法树如下：</p>`,3),gt=l(`<h2 id="_1-5-语义分析概述" tabindex="-1"><a class="header-anchor" href="#_1-5-语义分析概述" aria-hidden="true">#</a> 1.5 语义分析概述</h2><h3 id="_1-5-1-语义分析的主要任务" tabindex="-1"><a class="header-anchor" href="#_1-5-1-语义分析的主要任务" aria-hidden="true">#</a> 1.5.1 语义分析的主要任务</h3><p>语义分析的主要任务是：</p><ol><li>收集标识符的属性信息</li><li>进行语义检查</li></ol><h3 id="_1-5-2-收集标识符的属性信息" tabindex="-1"><a class="header-anchor" href="#_1-5-2-收集标识符的属性信息" aria-hidden="true">#</a> 1.5.2 收集标识符的属性信息</h3><p>收集标识符的属性信息是语义分析的主要任务，而标识符的属性包括：</p><ul><li><strong>种型</strong>（Kind）</li><li><strong>类型</strong>（Type）</li><li><strong>储存位置、长度</strong></li><li>值</li><li>作用域</li><li>参数和返回值信息</li></ul><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">begin</span>
    real x<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    integer i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span>
<span class="token keyword">end</span>
</code></pre></div><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:center;">相对地址</th></tr></thead><tbody><tr><td style="text-align:center;"><code>x</code></td><td style="text-align:center;"><code>0</code></td></tr><tr><td style="text-align:center;"><code>i</code></td><td style="text-align:center;"><code>64</code></td></tr><tr><td style="text-align:center;"><code>j</code></td><td style="text-align:center;"><code>68</code></td></tr></tbody></table><h3 id="_1-5-3-语义检查" tabindex="-1"><a class="header-anchor" href="#_1-5-3-语义检查" aria-hidden="true">#</a> 1.5.3 语义检查</h3><p>语义检查：</p><ol><li>变量或过程未经声明</li><li>变量或过程重复声明</li><li>运算分量类型不匹配</li><li>操作符和操作符不匹配 <ul><li>数组下标不是整数</li><li>对非数组变量使用数组访问操作符</li><li>对非过程名使用过程调用操作符</li><li>过程调用的参数类型或数目不匹配</li><li>函数返回类型有误</li></ul></li></ol><h2 id="_1-6-中间代码生成和编译器后端" tabindex="-1"><a class="header-anchor" href="#_1-6-中间代码生成和编译器后端" aria-hidden="true">#</a> 1.6 中间代码生成和编译器后端</h2><h3 id="_1-6-1-常用的中间表示形式" tabindex="-1"><a class="header-anchor" href="#_1-6-1-常用的中间表示形式" aria-hidden="true">#</a> 1.6.1 常用的中间表示形式</h3><p>常用的中间表示形式：</p>`,15),yt=t("strong",null,"三地址码",-1),xt=t("em",null,"类似于汇编语言",-1),bt=t("strong",null,"操作数",-1),ft=t("strong",null,"语法树",-1),vt=t("strong",null,"语法结构树",-1),wt=l(`<p>常见三地址码：</p><table><thead><tr><th>指令类型</th><th>指令形式</th></tr></thead><tbody><tr><td>赋值指令</td><td><code>x = y op z</code> / <code>x = op y</code></td></tr><tr><td>复制指令</td><td><code>x = y</code></td></tr><tr><td>条件跳转</td><td><code>if x relop y goto n</code></td></tr><tr><td>非条件跳转</td><td><code>goto n</code></td></tr><tr><td>参数传递</td><td><code>param x</code></td></tr><tr><td>过程调用</td><td><code>call p, n</code></td></tr><tr><td>过程返回</td><td><code>return x</code></td></tr><tr><td>数组引用</td><td><code>x = y[i]</code></td></tr><tr><td>数组赋值</td><td><code>x[i] = y</code></td></tr><tr><td>地址及指针操作</td><td><code>x = &amp;y</code> / <code>x = *y</code> / <code>*x = y</code></td></tr></tbody></table><p>地址可能具有如下形式：</p><ul><li>源程序中的 <strong>名字</strong>（Name）</li><li><strong>常量</strong>（Constant）</li><li>编译器生成的 <strong>临时变量</strong>（Temporary Variable）</li></ul><p>三地址指令的表示：</p><ul><li><strong>四元式</strong>（Quadruples），即 <code>(op, y, z, x)</code></li><li><strong>三元式</strong>（Triples）</li><li><strong>间接三元式</strong>（Indirect Triples）</li></ul><p>以上三地址指令的四元式表示：</p><table><thead><tr><th>三地址指令</th><th>四元式</th></tr></thead><tbody><tr><td><code>x = y op z</code></td><td><code>(op, y, z, x)</code></td></tr><tr><td><code>x = op y</code></td><td><code>(op, y, _, x)</code></td></tr><tr><td><code>x = y</code></td><td><code>(=, y, _, x)</code></td></tr><tr><td><code>if x relop y goto n</code></td><td><code>(relop, x, y, n)</code></td></tr><tr><td><code>goto n</code></td><td><code>(goto, _, _, n)</code></td></tr><tr><td><code>param x</code></td><td><code>(param, _, _, x)</code></td></tr><tr><td><code>call p, n</code></td><td><code>(call, p, n, _)</code></td></tr><tr><td><code>return x</code></td><td><code>(return, _, _, x)</code></td></tr><tr><td><code>x = y[i]</code></td><td><code>(=[], y, i, x)</code></td></tr><tr><td><code>x[i] = y</code></td><td><code>([]=, y, x, i)</code></td></tr><tr><td><code>x = &amp;y</code></td><td><code>(&amp;, y, _, x)</code></td></tr><tr><td><code>x = *y</code></td><td><code>(=*, y, _, x)</code></td></tr><tr><td><code>*x = y</code></td><td><code>(*=, y, _, x)</code></td></tr></tbody></table><h3 id="_1-6-2-中间代码生成的例子" tabindex="-1"><a class="header-anchor" href="#_1-6-2-中间代码生成的例子" aria-hidden="true">#</a> 1.6.2 中间代码生成的例子</h3><div class="language-vb" data-ext="vb"><pre class="language-vb"><code><span class="token keyword">while</span> a <span class="token operator">&lt;</span> b <span class="token keyword">do</span>
    <span class="token keyword">if</span> c <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token keyword">then</span>
        <span class="token keyword">while</span> x <span class="token operator">&gt;</span> y <span class="token keyword">do</span>
            z <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>;
    <span class="token keyword">else</span> x <span class="token operator">=</span> y;
</code></pre></div><p>三地址码表示（<code>j</code> 表示跳转指令）</p><div class="language-log" data-ext="log"><pre class="language-log"><code><span class="token number">100</span><span class="token operator">:</span> <span class="token operator">(</span>j<span class="token operator">&lt;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">102</span><span class="token operator">)</span>
<span class="token number">101</span><span class="token operator">:</span> <span class="token operator">(</span>j <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token operator">)</span>
<span class="token number">102</span><span class="token operator">:</span> <span class="token operator">(</span>j<span class="token operator">&lt;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token operator">)</span>
<span class="token number">103</span><span class="token operator">:</span> <span class="token operator">(</span>j <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token operator">)</span>
<span class="token number">104</span><span class="token operator">:</span> <span class="token operator">(</span>j<span class="token operator">&gt;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">106</span><span class="token operator">)</span>
<span class="token number">105</span><span class="token operator">:</span> <span class="token operator">(</span>j <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">)</span>
<span class="token number">106</span><span class="token operator">:</span> <span class="token operator">(</span><span class="token operator">+</span> <span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> t1 <span class="token operator">)</span>
<span class="token number">107</span><span class="token operator">:</span> <span class="token operator">(</span><span class="token operator">=</span> <span class="token punctuation">,</span> t1<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> z <span class="token operator">)</span>
<span class="token number">108</span><span class="token operator">:</span> <span class="token operator">(</span>j <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token number">104</span><span class="token operator">)</span>
<span class="token number">109</span><span class="token operator">:</span> <span class="token operator">(</span>j <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">)</span>
<span class="token number">110</span><span class="token operator">:</span> <span class="token operator">(</span><span class="token operator">=</span> <span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> x  <span class="token operator">)</span>
<span class="token number">111</span><span class="token operator">:</span> <span class="token operator">(</span>j <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">)</span>
<span class="token number">112</span><span class="token operator">:</span> 
</code></pre></div><h3 id="_1-6-3-目标代码生成" tabindex="-1"><a class="header-anchor" href="#_1-6-3-目标代码生成" aria-hidden="true">#</a> 1.6.3 目标代码生成</h3><p><strong>目标代码生成</strong> 的一个重要任务是为程序中使用的变量 <em>合理分配寄存器</em>。</p>`,14),It=t("strong",null,"代码优化",-1),At=t("hr",{class:"footnotes-sep"},null,-1),Ct={class:"footnotes"},Lt={class:"footnotes-list"},Tt={id:"footnote1",class:"footnote-item"},Ft={href:"https://baike.baidu.com/item/%E6%9C%BA%E5%99%A8%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},Dt=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),St={id:"footnote2",class:"footnote-item"},Et={href:"https://baike.baidu.com/item/%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},Bt=t("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),Nt={id:"footnote3",class:"footnote-item"},Vt={href:"https://baike.baidu.com/item/%E9%AB%98%E7%BA%A7%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},jt=t("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function zt(Ot,Zt){const o=c("router-link"),e=c("Badge"),p=c("Mermaid"),r=c("ExternalLinkIcon");return i(),u("div",null,[_,t("nav",g,[t("ul",null,[t("li",null,[a(o,{to:"#_1-1-什么是编译"},{default:n(()=>[s("1.1 什么是编译")]),_:1}),t("ul",null,[t("li",null,[a(o,{to:"#_1-1-1-计算机程序设计语言及编译"},{default:n(()=>[s("1.1.1 计算机程序设计语言及编译")]),_:1})]),t("li",null,[a(o,{to:"#_1-1-2-编译器在语言处理系统中的位置"},{default:n(()=>[s("1.1.2 编译器在语言处理系统中的位置")]),_:1})])])]),t("li",null,[a(o,{to:"#_1-2-编译系统的结构"},{default:n(()=>[s("1.2 编译系统的结构")]),_:1}),t("ul",null,[t("li",null,[a(o,{to:"#_1-2-1-人工英汉翻译的例子"},{default:n(()=>[s("1.2.1 人工英汉翻译的例子")]),_:1})]),t("li",null,[a(o,{to:"#_1-2-2-编译器的结构"},{default:n(()=>[s("1.2.2 编译器的结构")]),_:1})])])]),t("li",null,[a(o,{to:"#_1-3-词法分析概述"},{default:n(()=>[s("1.3 词法分析概述")]),_:1}),t("ul",null,[t("li",null,[a(o,{to:"#_1-3-1-词法分析的主要任务"},{default:n(()=>[s("1.3.1 词法分析的主要任务")]),_:1})]),t("li",null,[a(o,{to:"#_1-3-2-词法分析后得到的-token-序列"},{default:n(()=>[s("1.3.2 词法分析后得到的 token 序列")]),_:1})])])]),t("li",null,[a(o,{to:"#_1-4-语法分析概述"},{default:n(()=>[s("1.4 语法分析概述")]),_:1}),t("ul",null,[t("li",null,[a(o,{to:"#_1-4-1-语法分析器"},{default:n(()=>[s("1.4.1 语法分析器")]),_:1})]),t("li",null,[a(o,{to:"#_1-4-2-赋值语句分析树"},{default:n(()=>[s("1.4.2 赋值语句分析树")]),_:1})]),t("li",null,[a(o,{to:"#_1-4-3-变量声明语句的分析树"},{default:n(()=>[s("1.4.3 变量声明语句的分析树")]),_:1})])])]),t("li",null,[a(o,{to:"#_1-5-语义分析概述"},{default:n(()=>[s("1.5 语义分析概述")]),_:1}),t("ul",null,[t("li",null,[a(o,{to:"#_1-5-1-语义分析的主要任务"},{default:n(()=>[s("1.5.1 语义分析的主要任务")]),_:1})]),t("li",null,[a(o,{to:"#_1-5-2-收集标识符的属性信息"},{default:n(()=>[s("1.5.2 收集标识符的属性信息")]),_:1})]),t("li",null,[a(o,{to:"#_1-5-3-语义检查"},{default:n(()=>[s("1.5.3 语义检查")]),_:1})])])]),t("li",null,[a(o,{to:"#_1-6-中间代码生成和编译器后端"},{default:n(()=>[s("1.6 中间代码生成和编译器后端")]),_:1}),t("ul",null,[t("li",null,[a(o,{to:"#_1-6-1-常用的中间表示形式"},{default:n(()=>[s("1.6.1 常用的中间表示形式")]),_:1})]),t("li",null,[a(o,{to:"#_1-6-2-中间代码生成的例子"},{default:n(()=>[s("1.6.2 中间代码生成的例子")]),_:1})]),t("li",null,[a(o,{to:"#_1-6-3-目标代码生成"},{default:n(()=>[s("1.6.3 目标代码生成")]),_:1})])])])])]),y,x,b,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),f,s("（Machine Language）机器语言是机器能直接识别的程序语言或指令代码，无需经过翻译，每一操作码在计算机内部都有相应的电路来完成它，或指不经翻译即可为机器直接理解和接受的程序语言或指令代码。"),v]),w,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),I,s("（Assembly Language）是任何一种用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言。在汇编语言中，用助记符代替机器指令的操作码，用地址符号或标号代替指令或操作数的地址。在不同的设备中，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。特定的汇编语言和特定的机器语言指令集是一一对应的，不同平台之间不可直接移植。"),A]),C,L,T,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),F,s("（High-level Programming 是一种独立于机器，面向过程或对象的语言。高级语言是参照数学语言而设计的近似于日常会话的语言。"),D]),S,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),E,s("（Assembling）：将汇编语言翻译为机器语言的过程。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),B,s("（Compile）：将高级语言翻译成汇编语言或者机器语言的过程。前者（高级语言）被称为 "),N,s("，后者被称为 "),V,s("。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),j,s("（Compiler）即处理编译过程的程序。换句话说，编译器是将一种语言（通常为高级语言）翻译为另一种语言（通常为低级语言）的程序。")]),z,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),O,s("：当机器代码在内存中存放的起始位置 "),Z,s(" 不是固定的，我们称之为 "),Q,s("（Relocatable）。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),X,s("：一般指的是一个过程中的代码可能引用另一个文件的数据对象或过程，这些数据对象或过程的地址对于这个文件来说是外部地址。")]),Y,a(p,{id:"mermaid-178",code:"eJxLL0osyFAIceFSAAJHjWilZ7smvFi/9sWKhuezWp72L326doJSrCZY1gkoCxEBSgHVPNnZGZOn8WTH2pfTt0C0aMKUOgOVPp+97tmCdixmQaxS0NVVMtRTeNrR9mzeBLilSrq6dgpOIDkjPYXnU+Y/65iAbA5Y2pkLAI5kVcQ="}),M,a(p,{id:"mermaid-182",code:"eJzLzcxLyU0s4FIAgqL8/BINjSe7up/s3qapCRYCgSc7dj/ZOxnOBQvtngbnP22Y/7Rr5ZNdfSgqXk5Z8nTtBIQZe+c8n7Li6fqdLzYuRFH3fNX0Zx3b4ULPu7Y9a2hEUfF0zopnHftfTt/ytK0VYWnXCqCRKOqeTd30fFHfk11tXAAYHk0G"}),R,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),H,s("（Lexical Analysis）：字符序列转换为单词（Token）序列的过程。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),J,s("（Syntax Analysis）：单词序列组合成各类语法短语。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),P,s("（Semantic Analysis）：对源程序作出解释，获取句子语义的过程。")]),U,q,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),W,s("（Front End）又叫分析部分，与 "),G,s(" 相关。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),K,s("（Back End）又叫综合部分，与 "),$,s(" 相关。")]),tt,st,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),at,s("（Syntax-Directed Translation）指在解析输入的字符串时，在特定位置执行指定的动作。换言之，根据语法把输入的字符串 "),nt,s(" 为一串动作，故名 "),et,s("。")]),ot,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),lt,s("（Token）：是一个包含词的种别和其属性的二元组。下文用 token 代指，token 可以表示为 "),pt,s("。")]),ct,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),rt,s("（Parser）：从词法分析器输出的 token 序列中识别出各类短语，并构造 "),dt,s("。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),it,s("（Parse Tree）描述了语句子的具体结构。例如上一节的英语翻译为中文的例子中，语法分析树可以表示为：")]),a(p,{id:"mermaid-608",code:"eJyFUl1Kw0AQfvcUyz7IFlTYHKDQbl8EoVC8QMRiiqSRUMgNfFCKvYGCCL6EHsDrGNpjdGZn9qdt0uZp5/ubye48lelLJu4mFwK+yXh8r2Tz8dPUK9mz0EDJ/7/37Xq5+ay365pRy2hHqdt5LyYSyFgt2zxEg7F5/ULjIpvGTqK9XZVFkTt+qOQVH83BjBbD0O6mRttpvzF1v6fBdm+/nUY7bTfPGi9SD2XxfPRTrDp9MbEwXFHaluVk4aqq2fyxqA61BhUd7xdpwktWs0XWPnzodWZ4G3d++ChQZWmeT0unHSl5A0e/keIavr4Y7AMIDWOoL8yxYkRLjDUkaF9BkVCRcKXFJe4eLRjFIWQY0TwFLBIB5INHsCJWQUUq2IgIsYCXeCd74RmZQsZSiXM7bZAEhDsDtQPyc/0D"}),ut,a(p,{id:"mermaid-622",code:"eJxLL0osyFAIceFSAIIgf/8QDaUXW7ufNux5sX7t0/6lSppWVlapFQVFYHlHDaVnC9pfrG97vmZZTJ5GQX5xZklmfp4mWFVmSgVYkZOGki1YoLgyNwks4gw0c+GKF/v2Pd3Tj2ogWNYQrzRECVANss2ZeUCLE3NQLQarNNJQ0ka1HSxsTNgOY8LugKpDc0xRYkkqpksgaoHO0cJ0DkSOsJug6kD2Td3wdO10oGVmBhCr8kpzwUpdNJSsERbAY1FBV9dOwVFBTcEJiJ2BGBLBzmBxZ0OQoBGIMIYIG0LFDSFcYwjXGKzOGKIQqhIoBpWDqYUpNjaEWJ+ck1hc7JKapgDyjkJaZk6OlbJpiiWqHDCkoFKplmaoUiWVBalQOWPTNFQ5kCehcpamFqhywBCBaUsx4gIAFfPRyA=="}),ht,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),kt,s("：")]),mt,_t,a(p,{id:"mermaid-637",code:"eJyNkd8KgjAUh+97ijEhFtTFFCMNgpY3XQXlC1j+SVARNdC3z50zhalEgoOd7/eNs7OkCso38b0V6b/77eYzamTN0TOS5kg3rutGbVkBPCPx5wQoZzQtGgBNV0YABCpX77EsiV76GcDQPymVlF2ELNhAKA3byUkmo1tAdZc/J8wC9TlXxbIlUHjpwoVR7BCy41TJbnciZ7Imov8vOE+scZwUbASXCVMuFpa5qgPgQPiARoZHvLKgrr0oJnI2JE6zzDXs0NFZ36ZCkbPXkXw1xSw71pm8jGKOfdBZ8ckHLTRXX3pwifQ="}),gt,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),yt,s("（Three-Address Code）是由 "),xt,s(" 的指令序列组成，其每个指令最多有三个 "),bt,s("（Operand）。")]),t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),ft,s("（Syntax Tree）：也称为 "),vt,s(),a(e,{type:"danger"},{default:n(()=>[s("TODO")]),_:1})]),wt,t("p",null,[a(e,{type:"tip"},{default:n(()=>[s("定义")]),_:1}),s(),It,s("（Code Optimization），为改进代码所进行的等价程序变换，使其运行得更快一些，占用空间更小一些。")]),At,t("section",Ct,[t("ol",Lt,[t("li",Tt,[t("p",null,[s("机器语言，百度百科，"),t("a",Ft,[s("https://baike.baidu.com/item/机器语言"),a(r)]),s(),Dt])]),t("li",St,[t("p",null,[s("汇编语言，百度百科，"),t("a",Et,[s("https://baike.baidu.com/item/汇编语言"),a(r)]),s(),Bt])]),t("li",Nt,[t("p",null,[s("高级语言，百度百科，"),t("a",Vt,[s("https://baike.baidu.com/item/高级语言"),a(r)]),s(),jt])])])])])}const Xt=d(m,[["render",zt],["__file","index.html.vue"]]);export{Xt as default};
