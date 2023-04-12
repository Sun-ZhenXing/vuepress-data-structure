# 数列简介

[[TOC]]

## 1. 数列的定义

*@def* **数列** 是由数字组成的序列，也就是以正整数系为定义域，值域包含于某数系的函数。数列及其相关术语常用于有关递推规律的研究，而级数本身更是一种特殊的数列。[^1]

[^1]: 数列，维基百科，<https://zh.wikipedia.org/zh-hans/%E6%95%B0%E5%88%97>

考虑到最一般的数为复数，可以作如下的定义：

*@def* 一个 $a:\mathbb{N}^* \to \mathbb{C}$ 的函数被称为 **无穷数列**，可记为 $\left\{a_i\right\}_{i \in \mathbb{N}^*}$，而 $a\left(i\right)$ 会被简记为 $a_i$。

*@def* 若 $I_n = \left\{1,\,2,\,\cdots,\,n\right\}$，则一个 $a:I_n \to \mathbb{C}$ 的函数被称为 **有限数列**，$n$ 被称为有限数列的项数。

在使用数列时，$i = 0$ 处也可以有定义，也可以没有定义，具体取决于上下文。在本文的定义中 $i = 0$ 处没有定义。

和函数一样，数列也有不同的表示方法，在引用时一般使用 $\left\{a_n\right\}$ 来表示一个数列。一个数列的前 $k$ 项和常常记为 $S_k$，由 $S_1,\,S_2,\,\cdots$ 构成的数列记为 $\left\{S_i\right\}$。

## 2. 数列的常见性质

### 2.1 单调性

*@def* 若对所有 $n \in \mathbb{N}^*$，$a_{n+1} \geqslant a_n$，则称实数数列 $\left\{a_n\right\}$ 为 **递增数列**。把 $\geqslant$ 换成 $>$，则称为 **严格递增数列**。

*@def* 若对所有 $n \in \mathbb{N}^*$，$a_{n+1} \leqslant a_n$，则称实数数列 $\left\{a_n\right\}$ 为 **递减数列**。把 $\leqslant$ 换成 $<$，则称为 **严格递减数列**。

*@def* 若对所有 $n \in \mathbb{N}^*$，$a_{n+1} = a_n$，则称数列 $\left\{a_n\right\}$ 为 **常数数列**。

### 2.2 有限性

即前面介绍的 **无穷数列** 和 **有限数列**。

### 2.3 有界性

*@def* 若对所有 $n \in \mathbb{N}^*$，$M \leqslant a_n \leqslant N$，则称实数数列 $\left\{a_n\right\}$ 为 **有界数列**。$M$ 称为数列 $\left\{a_n\right\}$ 的 **下界**，$N$ 称为数列 $\left\{a_n\right\}$ 的 **上界**。

若对数列 $\left\{a_n\right\}$，上述的 $M$、$N$ 不存在，则称数列 $\left\{a_n\right\}$ 为 **无界数列**。

### 2.4 收敛性

*@def* 这里定义实数数列的收敛性：存在实数数列 $\left\{a_n\right\}$，如果有对任意的 $\epsilon >0$，存在一个正整数 $N \in \mathbb{N}^*$，使得对所有的 $n \geqslant N$，有 $\left|a_n - L\right| < \epsilon$，那么数列 $\left\{a_n\right\}$ 收敛到实数 $L$。

### 2.5 周期性

*@def* 对于实数数列 $\left\{a_n\right\}$，若存在一个正整数 $T$，对于任意正整数 $n > N$（$N \in \mathbb{N}^*$）均有 $a_{n+T} = a_n$ 成立，则称数列 $\left\{a_n\right\}$ 为从 $N$ 项起周期为 $T$ 的 **周期数列**。

## 3. 常见的数列

### 3.1 等差数列

*@def* 一般地，如果一个数列从第 $2$ 项起，每一项与它的前一项的差等于同一个常数，这个数列就叫做 **等差数列**，这个常数叫做等差数列的 **公差**，公差通常用字母 $d$ 表示，前 $n$ 项和用 $S_n$ 表示。

若 $n \geqslant 1,\, n \geqslant m$，则有等差数列的通项公式

$$
a_n = a_1 + \left(n-1\right)d
$$

或

$$
a_n = a_m + \left(n-m\right)d
$$

若 $n \geqslant 1$，则有等差数列前 $n$ 项和求和公式

$$
S_n = \frac{n\left(a_1 + a_n\right)}{2}
$$

或

$$
S_n = na_1 + \frac{n\left(n-1\right)d}{2}
$$

### 3.2 等比数列

从第 $2$ 项起，每一项与前一项的比都是一个常数。其通项公式为

$$
a_n = a_1 q^{n-1}
$$

或

$$
a_n = a_m \cdot q^{n-m}
$$

其前 $n$ 项和为

$$
S_n = \begin{cases}
    na_1, & q=1 \\
    \displaystyle\frac{a_1\left(1-q^n\right)}{1-q} =
    \frac{a_1-a_n q}{1-q}, & q \neq 1
\end{cases}
$$

### 3.3 等和数列

*@def* 对一个数列，如果其任意的连续 $k\,(k \geqslant 2)$ 项的和都相等，我们就把此数列叫做 **等和数列**，这个常数叫做该数列的 **公和**。
