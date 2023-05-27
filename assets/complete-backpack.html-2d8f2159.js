import{_ as c,r as D,o as r,c as i,b as t,w as a,d as l,a as s,e as p}from"./app-98d13175.js";const y={},d=s("h1",{id:"完全背包",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#完全背包","aria-hidden":"true"},"#"),l(" 完全背包")],-1),C=s("h2",{id:"_1-完全背包定义",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-完全背包定义","aria-hidden":"true"},"#"),l(" 1. 完全背包定义")],-1),h=s("p",null,[l("完全背包指的是，有 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),l(" 件物品和一个最多能承受重量为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"w")]),s("annotation",{encoding:"application/x-tex"},"w")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w")])])]),l(" 的背包，第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),l(" 件物品的重量是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"w"),s("mi",{mathvariant:"normal"},"e"),s("mi",{mathvariant:"normal"},"i"),s("mi",{mathvariant:"normal"},"g"),s("mi",{mathvariant:"normal"},"h"),s("mi",{mathvariant:"normal"},"t")]),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\mathrm{weight}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"weight")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),l("，其价值是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"v"),s("mi",{mathvariant:"normal"},"a"),s("mi",{mathvariant:"normal"},"l"),s("mi",{mathvariant:"normal"},"u"),s("mi",{mathvariant:"normal"},"e")]),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\mathrm{value}[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathrm"},"value")]),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),l("，每件物品可以使用无限次，求解哪些物品装入背包后可以使物品价值总和最大（"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),l(" 从 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),l(" 开始）。")],-1),m=p(`<p>完全背包和 0-1 背包在未使用滚动数组时很相似，只不过遍历背包大小时必须要正序遍历。</p><div class="hint-container tip"><p class="hint-container-title">遍历方式对比</p><p>0-1 背包：</p><div class="language-cpp" data-ext="cpp"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i][j] = </span><span style="color:#DCDCAA;">max</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">][j], </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">][j - </span><span style="color:#9CDCFE;">weight</span><span style="color:#D4D4D4;">[i]] + </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[i])</span></span>
<span class="line"></span></code></pre></div><p>完全背包：</p><div class="language-cpp" data-ext="cpp"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i][j] = </span><span style="color:#DCDCAA;">max</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">][j], </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i][j - </span><span style="color:#9CDCFE;">weight</span><span style="color:#D4D4D4;">[i]] + </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[i])</span></span>
<span class="line"></span></code></pre></div></div><p>注意到：完全背包的项是 <code>dp[i][j - weight[i]] + value[i]</code>，这是因为这个项是从可能已经选择了这个物品这个状态推导出来的，而 <code>dp[i - 1][j - weight[i]] + value[i]</code> 则是不可能选择这个物品的状态。根据表达式，在遍历时必须正序遍历。</p><p>二维数组版本：</p>`,4),u=s("div",{class:"language-cpp","data-ext":"cpp"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," i = "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"; i <= n; i++) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," j = "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},"; j <= w; j++) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," (j >= "),s("span",{style:{color:"#9CDCFE"}},"weight"),s("span",{style:{color:"#D4D4D4"}},"[i]) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i][j] = "),s("span",{style:{color:"#DCDCAA"}},"max"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"][j], "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i][j - "),s("span",{style:{color:"#9CDCFE"}},"weight"),s("span",{style:{color:"#D4D4D4"}},"[i]] + "),s("span",{style:{color:"#9CDCFE"}},"value"),s("span",{style:{color:"#D4D4D4"}},"[i]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        } "),s("span",{style:{color:"#C586C0"}},"else"),s("span",{style:{color:"#D4D4D4"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i][j] = "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"][j];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),E=s("div",{class:"language-python","data-ext":"py"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"dp = [["),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},"] * (w + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},") "),s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," _ "),s("span",{style:{color:"#C586C0"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"range"),s("span",{style:{color:"#D4D4D4"}},"(n + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," i "),s("span",{style:{color:"#C586C0"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"range"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},", n + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," j "),s("span",{style:{color:"#C586C0"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"range"),s("span",{style:{color:"#D4D4D4"}},"(w + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"if"),s("span",{style:{color:"#D4D4D4"}}," j >= weight[i]:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            dp[i][j] = "),s("span",{style:{color:"#DCDCAA"}},"max"),s("span",{style:{color:"#D4D4D4"}},"(dp[i - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"][j], dp[i][j - weight[i]] + value[i])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#C586C0"}},"else"),s("span",{style:{color:"#D4D4D4"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"            dp[i][j] = dp[i - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"][j]")]),l(`
`),s("span",{class:"line"})])])],-1),g=s("p",null,"有意思的是，使用滚动数组后和 0-1 背包两个表达式一致，只有遍历顺序相反。",-1),x=s("div",{class:"language-cpp","data-ext":"cpp"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," i = "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"; i <= n; i++) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," j = "),s("span",{style:{color:"#9CDCFE"}},"weight"),s("span",{style:{color:"#D4D4D4"}},"[i]; j <= w; j++) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[j] = "),s("span",{style:{color:"#DCDCAA"}},"max"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[j], "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[j - "),s("span",{style:{color:"#9CDCFE"}},"weight"),s("span",{style:{color:"#D4D4D4"}},"[i]] + "),s("span",{style:{color:"#9CDCFE"}},"value"),s("span",{style:{color:"#D4D4D4"}},"[i]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),w=s("div",{class:"language-python","data-ext":"py"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"dp = ["),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},"] * (w + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," i "),s("span",{style:{color:"#C586C0"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"range"),s("span",{style:{color:"#D4D4D4"}},"("),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},", n + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," j "),s("span",{style:{color:"#C586C0"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"range"),s("span",{style:{color:"#D4D4D4"}},"(weight[i], w + "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        dp[j] = "),s("span",{style:{color:"#DCDCAA"}},"max"),s("span",{style:{color:"#D4D4D4"}},"(dp[j], dp[j - weight[i]] + value[i])")]),l(`
`),s("span",{class:"line"})])])],-1),A=p(`<h2 id="_2-模板总结" tabindex="-1"><a class="header-anchor" href="#_2-模板总结" aria-hidden="true">#</a> 2. 模板总结</h2><p>非滚动数组：</p><div class="language-c" data-ext="c"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> .. n</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> .. w</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i][j] = </span><span style="color:#DCDCAA;">max</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i - </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">][j], </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[i][j - </span><span style="color:#9CDCFE;">weight</span><span style="color:#D4D4D4;">[i]] + </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[i])</span></span>
<span class="line"></span></code></pre></div><p>滚动数组</p><div class="language-c" data-ext="c"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> .. n</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">weight</span><span style="color:#D4D4D4;">[i] .. w</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[j] = </span><span style="color:#DCDCAA;">max</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[j], </span><span style="color:#9CDCFE;">dp</span><span style="color:#D4D4D4;">[j - </span><span style="color:#9CDCFE;">weight</span><span style="color:#D4D4D4;">[i]] + </span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">[i])</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-获取完全背包内的物品" tabindex="-1"><a class="header-anchor" href="#_3-获取完全背包内的物品" aria-hidden="true">#</a> 3. 获取完全背包内的物品</h2>`,6),v=s("div",{class:"language-cpp","data-ext":"cpp"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," j = w;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#569CD6"}},"int"),s("span",{style:{color:"#D4D4D4"}}," i = n; i >= "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"; i--) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#C586C0"}},"while"),s("span",{style:{color:"#D4D4D4"}}," ("),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i][j] > "),s("span",{style:{color:"#9CDCFE"}},"dp"),s("span",{style:{color:"#D4D4D4"}},"[i - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"][j]) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        cout << i << "),s("span",{style:{color:"#CE9178"}},'" "'),s("span",{style:{color:"#D4D4D4"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        j -= "),s("span",{style:{color:"#9CDCFE"}},"weight"),s("span",{style:{color:"#D4D4D4"}},"[i];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),k=s("div",{class:"language-python","data-ext":"py"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"j = w")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"for"),s("span",{style:{color:"#D4D4D4"}}," i "),s("span",{style:{color:"#C586C0"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"range"),s("span",{style:{color:"#D4D4D4"}},"(n, "),s("span",{style:{color:"#B5CEA8"}},"0"),s("span",{style:{color:"#D4D4D4"}},", -"),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#C586C0"}},"while"),s("span",{style:{color:"#D4D4D4"}}," dp[i][j] > dp[i - "),s("span",{style:{color:"#B5CEA8"}},"1"),s("span",{style:{color:"#D4D4D4"}},"][j]:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        "),s("span",{style:{color:"#DCDCAA"}},"print"),s("span",{style:{color:"#D4D4D4"}},"(i, "),s("span",{style:{color:"#9CDCFE"}},"end"),s("span",{style:{color:"#D4D4D4"}},"="),s("span",{style:{color:"#CE9178"}},"' '"),s("span",{style:{color:"#D4D4D4"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"        j -= weight[i]")]),l(`
`),s("span",{class:"line"})])])],-1),_=s("p",null,[l("其实就是将 0-1 背包的 "),s("code",null,"if"),l(" 换成了 "),s("code",null,"while"),l("，因为每个物品可能被使用不止一次。")],-1);function j(b,F){const e=D("CodeTabs");return r(),i("div",null,[d,C,h,m,t(e,{id:"28",data:[{id:"cpp"},{id:"python"}],"tab-id":"code"},{title0:a(({value:n,isActive:o})=>[l("cpp")]),title1:a(({value:n,isActive:o})=>[l("python")]),tab0:a(({value:n,isActive:o})=>[u]),tab1:a(({value:n,isActive:o})=>[E]),_:1}),g,t(e,{id:"39",data:[{id:"cpp"},{id:"python"}],"tab-id":"code"},{title0:a(({value:n,isActive:o})=>[l("cpp")]),title1:a(({value:n,isActive:o})=>[l("python")]),tab0:a(({value:n,isActive:o})=>[x]),tab1:a(({value:n,isActive:o})=>[w]),_:1}),A,t(e,{id:"61",data:[{id:"cpp"},{id:"python"}],"tab-id":"code"},{title0:a(({value:n,isActive:o})=>[l("cpp")]),title1:a(({value:n,isActive:o})=>[l("python")]),tab0:a(({value:n,isActive:o})=>[v]),tab1:a(({value:n,isActive:o})=>[k]),_:1}),_])}const f=c(y,[["render",j],["__file","complete-backpack.html.vue"]]);export{f as default};
