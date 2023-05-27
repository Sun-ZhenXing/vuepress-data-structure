# SG 定理

[[TOC]]

## 1. 局面和其性质

*@def* **必胜态**：在当前条件下先手必胜，**必败态** 则是先手必败。

*@def* **局面** 是当前的游戏状态。对于 Nim 游戏来说，当初始条件下只有一堆石子，那么先手必胜，如果有两堆数目相等的石子，那么后手有必胜策略。可以使用一个 $n$ 元组 $(a_1,\,a_2,\,\cdots,\,a_n)$ 表示每一个局面。

局面可以做合并和分解运算，例如：

$$
(a_1,\,a_2,\,\cdots,\,a_n) + (b_1,\,b_2,\,\cdots,\,b_n) =
(a_1,\,a_2,\,\cdots,\,a_n, b_1,\,b_2,\,\cdots,\,b_n)
$$

如果初始局面可以分成两个相同的子局面，则后手有必胜策略。

设初始局面 $S$ 可以分解为两个子局面 $A$ 和 $B$：
- 若 $A$ 和 $B$ 一胜一负，则 $S$ 胜
- 若 $A$ 负 $B$ 负，则 $S$ 负
- 若 $A$ 胜 $B$ 胜，则有时 $S$ 胜，有时负

经过分割后的局面的合并与异或性质一致。

*@def* **$P$ 点**：必败点，换而言之，就是谁处于此位置，则在双方操作正确的情况下必败。

*@def* **$N$ 点**：必胜点，处于此情况下，双方操作均正确的情况下必胜。

必胜点和必败点的性质：
1. 所有终结点是必败点 $P$
2. 从任何必胜点 $N$ 操作，至少有一种方式可以进入必败点 $P$
3. 无论如何操作，必败点 $P$ 都只能进入必胜点 $N$

## 2. SG 函数

SG（Sprague Grundy）函数和 SG 定理是公平组合游戏中的重要组成部分。

首先对于 ICG 博弈给出游戏模型：给定一个有向无环图和一个起始顶点上的一枚棋子，两名选手交替将这枚棋子沿有向边进行移动，无法移动者输掉比赛。

这样，我们可以将 ICG 问题进行转：任何一个 ICG 游戏都可以通过把每个局面看成一个顶点，对每个局面和它的子局面连成一条有向边开抽象成这个 “有向图游戏”，一个状态是一个点，一个决策是一条边，终止状态出度为 $0$。

首先定义 $\mathrm{mex}$ 运算（Minimal excludant）运算，这是一个施加给集合的运算，表示最小的不属于这个集合的非负整数，例如 $\mathrm{mex}\left\{0,\,1,\,2,\,4\right\} = 3$，$\mathrm{mex}\left\{2,\,3,\,5\right\} = 0$，$\mathrm{mex}\left\{\right\} = 0$。

对于一个有向无环图，定义关于图的每个顶点的 SG 函数如下：

$$
\mathrm{sg}\left(x\right) = \mathrm{mex}\left\{
    \mathrm{sg}\left(y\right) \mid
    y \text{ 是 } x \text{ 的后继}
\right\}
$$

## 3. 一般求解步骤

总结下列步骤：
1. 找出必败态
2. 找出当前所有状态的前驱结点
3. 根据定义计算结点 SG 值
4. 重复上述步骤，直到整棵树建立完成

如何使用 SG 函数值来解决问题？

对于 $n$ 个棋子，设它们对应的顶点的 SG 值分别为 $a_1,\,a_2,\,\cdots,\,a_n$，设局面 $a_1,\,a_2,\,\cdots,\,a_n$ 时的 Nim 游戏的一种必胜策略是把 $a_i$ 变为 $k$，那么原游戏的一种必胜策略就是把第 $i$ 枚棋子移动到一个 SG 值为 $k$ 的顶点。

简单来说，我们让每个结点都拥有一个 SG 值，假设这个值为 $x$，那么对于任何一个玩家操作（移动到当前结点的某个后继结点）实际上就是把棋子移动到 $0 \sim x-1$ 的某个结点上，等价的就是从 $x$ 个石子中取走一个，至多 $x$ 个。

## 4. SG 定理

*@def* 定义 **有向图游戏和**（Sum of Graph Games）：

设 $G_1,\,G_2,\,\cdots,\,G_n$ 是 $n$ 个有向图游戏，定义游戏 $G$ 是 $G_1,\,G_2,\,\cdots,\,G_n$ 的和。游戏 $G$ 的移动规则是：任选一个子游戏 $G_i$ 并移动上面的棋子，那么

$$
\mathrm{sg}\left(G\right) = \mathrm{sg}\left(G_1\right) \oplus
\mathrm{sg}\left(G_2\right) \oplus \cdots \oplus
\mathrm{sg}\left(G_n\right)
$$

其中 $a \oplus b$ 定义为异或，即 `a ^ b`。

因此，当我们面对 $n$ 个不同的游戏组成的游戏时，只需要求出每个游戏的 SG 函数值，将这些 SG 函数值看做 Nim 游戏的石子堆，然后依照 Nim 游戏的必胜策略的方法来找这个游戏的必胜策略即可。

关于 SG 函数，不同的题目求法不同（递推、数学推导等）。

## 5. 例题

### 5.1 Fibonacci again and again(HDU1848)

你有三堆石子，每堆石子的个数是 $n,\,m,\,p$，你每次可以从一堆石子中取走斐波那契数列中一个元素等数量的石子数，两人轮流取，不能操作者输，判定先后手的胜利。

条件概况：
1. 这是一个二人游戏，且是公平组合游戏
2. 一共有 $3$ 堆石子，数量分别是 $m,\,n,\,p$
3. 每一步可以选择任意一堆石子，然后取走 $f$ 个
4. $f$ 只能取斐波那契数值，即 $1,\,2,\,3,\,5,\,8\cdots$

假设双方都采取最优策略，那么先手的人会赢还是会输。

显然 $0$ 位置处的 SG 函数值为 $0$，而对于任意一点的 SG 函数值应该为 $\mathrm{SG}\left(x\right) = \mathrm{mex}\left\{\mathrm{SG}\left(x - y\right)\right\}$。其中 $x \geqslant y$ 且 $y$ 为斐波那契数。

由 SG 定理可知，对于三堆石子最终结果的 SG 函数值应该为 $\mathrm{SG}\left(m\right) \oplus \mathrm{SG}\left(n\right) \oplus \mathrm{SG}\left(p\right)$，根据 Nim 博弈的结论，我们很容易求得结果。