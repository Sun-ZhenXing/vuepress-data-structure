---
title: 组合恒等式
description: 组合恒等式
---

# 组合恒等式

## 1. 生成函数

在介绍组合恒等式之前，我们先介绍一些数学工具。

*@def* 一般地，我们称幂级数

$$
f(x) = \sum_{n=0}^{\infty} a_nx^n =
a_0 + a_1x + \cdots + a_nx^n + \cdots
$$

为数列 $a_0,\,a_1,\,\cdots,\,a_n,\,\cdots$ 的 **生成函数**，又称为 **母函数**。

当且仅当 $a_n = b_n\;(n \in \bold{N})$ 时，有

$$
\sum_{n=0}^{\infty} a_nx^n = \sum_{n=0}^{\infty} b_nx^n
$$

生成函数常常用于解决组合问题。

## 2. 常见的组合性质

1. $\mathrm{C}_n^r = \mathrm{C}_n^{n-r}$
2. $\mathrm{C}_{n+1}^{r+1} = \mathrm{C}_n^{r+1} + \mathrm{C}_n^r$
3. $r\mathrm{C}_n^r = n\mathrm{C}_{n-1}^{r-1}$
4. $\mathrm{C}_n^r\mathrm{C}_r^m = \mathrm{C}_n^m\mathrm{C}_{n-m}^{r-m} = \mathrm{C}_n^{r-m}\mathrm{C}_{n-r+m}^m$ （ $m \le r \le n$ ）
5. $\mathrm{C}_r^r + \mathrm{C}_{r+1}^r + \cdots + \mathrm{C}_{r+k}^r = \mathrm{C}_{r+k+1}^{r+1}$
6. $\mathrm{C}_n^0 + \mathrm{C}_n^1 + \cdots + \mathrm{C}_n^n = 2^n$
7. $\mathrm{C}_n^0 - \mathrm{C}_n^1 + \mathrm{C}_n^2 - \mathrm{C}_n^3 + \cdots + (-1)^n\mathrm{C}_n^n = 0$

常用结论

$$
\begin{aligned}
    \mathrm{C}_{n+m}^k &= \mathrm{C}_m^0\mathrm{C}_n^k +
    \mathrm{C}_m^1\mathrm{C}_n^{k-1} + \cdots +
    \mathrm{C}_m^k\mathrm{C}_n^0 \tag{1}
\end{aligned}
$$

当 $m = k = n$ 时，等式化为

$$
\begin{aligned}
    \mathrm{C}_{2n}^n &= \left(\mathrm{C}_n^0\right)^2 +
    \left(\mathrm{C}_n^1\right)^2 + \cdots +
    \left(\mathrm{C}_n^n\right)^2 \tag{2}
\end{aligned}
$$

## 附录：组合的有趣性质

### 斐波那契数和组合数

记斐波那契数列的第 $n$ 项为 $F(n)$，那么[^1]

[^1]: 组合数计算，知乎，<https://www.zhihu.com/question/390530611>

$$
\begin{aligned}
    F(n+1)
    &= \mathrm{C}_n^0 + \mathrm{C}_{n-1}^1 + \cdots +
    \mathrm{C}_{\lceil n/2 \rceil}^{\lfloor n/2 \rfloor} \\
    &= \sum_{i=0}^{\lfloor n/2 \rfloor} \mathrm{C}_{n-i}^{i}
\end{aligned}
$$

### $n$ 维空间和组合数

$n$ 维空间（$n \ge 1,\, n \in \mathbf{N}^*$）有 $k$ 个超平面，则最多将 $n$ 维空间分为多少块？

可以举几个例子，这里不证明：
1. 例如 $n$ 个点最多将直线分为 $n+1$ 份（一维空间）
2. 例如 $n$ 条直线最多将平面分为 $1+\mathrm{C}_n^1+\mathrm{C}_n^2$ 份（二维空间）
3. 例如 $n$ 个平面最多将空间分为 $1+\mathrm{C}_n^1+\mathrm{C}_n^2+\mathrm{C}_n^3$ 份（三维空间）

于是我们可以猜测，$n$ 维空间最多被分割为 $N$ 块，其中

$$
N = \sum_{i=0}^n \mathrm{C}_k^i
$$
