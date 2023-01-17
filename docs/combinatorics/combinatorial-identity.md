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

当且仅当 $a_n = b_n\;(n \in \mathbb{N})$ 时，有

$$
\sum_{n=0}^{\infty} a_nx^n = \sum_{n=0}^{\infty} b_nx^n
$$

生成函数常常用于解决组合问题。

## 2. 常见的组合性质

对于下面的 $n \geqslant 0$，且各组合数满足定义约束。

1. $\mathrm{C}_n^r = \mathrm{C}_n^{n-r}$
    ::: details 证明
    基本性质之一
    $$
    \begin{aligned}
        \mathrm{C}_n^r &= \frac{n!}{r!\,(n-r)!} \\
        &= \frac{n!}
        {\left(n-r\right)!\left(n-\left(n-r\right)\right)!} \\
        &= \mathrm{C}_n^{n-r}
    \end{aligned}
    $$
    :::
2. $\mathrm{C}_{n+1}^{r+1} = \mathrm{C}_n^{r+1} + \mathrm{C}_n^r$
    ::: details 证明
    基本性质之一
    $$
    \begin{aligned}
        \mathrm{C}_{n+1}^{r+1}
        &= \frac{(n+1)!}{(r+1)!\,(n-r)!} \\
        &= \frac{n!\left(n+1\right)}
        {\left(r+1\right)!\left(n-r-1\right)!
        \left(n-r\right)} \\
        &= \mathrm{C}_n^{r+1}\cdot\frac{n+1}{n-r} \\
        &= \mathrm{C}_n^{r+1}+\mathrm{C}_n^{r+1}\cdot
        \frac{r+1}{n-r} \\
        &= \mathrm{C}_n^{r+1}+\frac{n!}{r!\left(n-r\right)!} \\
        &= \mathrm{C}_n^{r+1} + \mathrm{C}_n^r
    \end{aligned}
    $$
    :::
3. $r\mathrm{C}_n^r = n\mathrm{C}_{n-1}^{r-1}$
    ::: details 证明
    $$
    \begin{aligned}
        r\mathrm{C}_n^r &=
        \frac{r \cdot n!}{r!\left(n-r\right)!} \\
        &= \frac{n \cdot \left(n-1\right)!}
        {\left(r-1\right)!\left(n-r\right)!} \\
        &= n\mathrm{C}_{n-1}^{r-1}
    \end{aligned}
    $$
    :::
4. $\mathrm{C}_n^0 + \mathrm{C}_n^1 + \cdots + \mathrm{C}_n^n = 2^n$
    ::: details 证明
    根据二项式定理，有
    $$
    \left(1+1\right)^n = \mathrm{C}_n^0 + \mathrm{C}_n^1 + \cdots + \mathrm{C}_n^n = 2^n
    $$
    :::
5. $\mathrm{C}_n^0 - \mathrm{C}_n^1 + \mathrm{C}_n^2 - \mathrm{C}_n^3 + \cdots + (-1)^n\mathrm{C}_n^n = 0$
    ::: details 证明
    根据二项式定理，有
    $$
    \left(1-1\right)^n = \mathrm{C}_n^0 - \mathrm{C}_n^1 + \mathrm{C}_n^2 - \mathrm{C}_n^3 + \cdots + (-1)^n\mathrm{C}_n^n = 0
    $$
    :::
6. $1\mathrm{C}_n^1 + 2\mathrm{C}_n^2 + 3\mathrm{C}_n^3 + \cdots + n\mathrm{C}_n^n = n \cdot 2^{n-1}$
    ::: details 证明
    $$
    \begin{aligned}
        \mathrm{LHS}
        &= \sum_{k=1}^n k \frac{n!}{k!\left(n-k\right)!} \\
        &= \sum_{k=1}^n n \frac{\left(n-1\right)!}
        {\left(k-1\right)!\left(n-k\right)!} \\
        &= n\sum_{k=1}^n \mathrm{C}_{n-1}^{k-1} \\
        &= n \cdot 2^{n-1}
    \end{aligned}
    $$
    :::
7. $\mathrm{C}_n^r\mathrm{C}_r^m = \mathrm{C}_n^m\mathrm{C}_{n-m}^{r-m} = \mathrm{C}_n^{r-m}\mathrm{C}_{n-r+m}^m$（$m \leqslant r \leqslant n$）
    ::: details 证明
    $$
    \begin{aligned}
        \mathrm{LHS}
        &= \frac{n!}{r!\left(n-r\right)!} \cdot
        \frac{r!}{m!\left(r-m\right)!} \\
        &= \frac{n!}{m!\left(n-m\right)!} \cdot
        \frac{\left(n-m\right)!}
        {\left(n-r\right)!\left(r-m\right)!} \\
        &= \mathrm{C}_n^m\mathrm{C}_{n-m}^{r-m}
    \end{aligned}
    $$
    $$
    \begin{aligned}
        \mathrm{LHS}
        &= \frac{n!}{r!\left(n-r\right)!} \cdot
        \frac{r!}{m!\left(r-m\right)!} \\
        &= \frac{n!}{\left(r-m\right)!\left(n-r+m\right)!} \cdot \frac{\left(n-r+m\right)!}{m!\left(n-r\right)!} \\
        &= \mathrm{C}_n^{r-m}\mathrm{C}_{n-r+m}^m
    \end{aligned}
    $$
    :::
8. $\mathrm{C}_r^r + \mathrm{C}_{r+1}^r + \cdots + \mathrm{C}_{r+k}^r = \mathrm{C}_{r+k+1}^{r+1}$
    ::: details 证明
    每两项拆开可以和下一项合并：
    $$
    \begin{aligned}
        \mathrm{LHS}
        &= \left(\mathrm{C}^{r+1}_{r+1}+
        \mathrm{C}^{r}_{r+1}\right) + \mathrm{C}_{r+2}^r
        + \cdots + \mathrm{C}_{r+k}^r \\
        &= \mathrm{C}^{r+1}_{r+2} + \mathrm{C}^{r}_{r+2}
        + \cdots + \mathrm{C}_{r+k}^r \\
        & \cdots \\
        &= \mathrm{C}_{r+k+1}^{r+1}
    \end{aligned}
    $$
    :::

常用结论

$$
\begin{aligned}
    \mathrm{C}_{n+m}^k &= \mathrm{C}_m^0\mathrm{C}_n^k +
    \mathrm{C}_m^1\mathrm{C}_n^{k-1} + \cdots +
    \mathrm{C}_m^k\mathrm{C}_n^0
\end{aligned}
$$

当 $m = k = n$ 时，等式化为

$$
\begin{aligned}
    \mathrm{C}_{2n}^n
    &= \mathrm{C}_n^0\mathrm{C}_n^n +
    \mathrm{C}_n^1\mathrm{C}_n^{n-1} + \cdots +
    \mathrm{C}_n^n\mathrm{C}_n^0 \\
    &= \left(\mathrm{C}_n^0\right)^2 +
    \left(\mathrm{C}_n^1\right)^2 + \cdots +
    \left(\mathrm{C}_n^n\right)^2
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

关于斐波那契数列的有关性质，阅读 [斐波那契数列](./fibonacci.md)。

### $n$ 维空间和组合数

$n$ 维空间（$n \geqslant 1,\, n \in \mathbb{N}^*$）有 $k$ 个超平面，则最多将 $n$ 维空间分为多少块？

可以举几个例子，这里不证明（数学归纳法可证明 2、3 结论）：
1. 例如 $n$ 个点最多将直线分为 $1+n = \mathrm{C}_n^0+\mathrm{C}_n^1$ 份（一维空间）
2. 例如 $n$ 条直线最多将平面分为 $\mathrm{C}_n^0+\mathrm{C}_n^1+\mathrm{C}_n^2$ 份（二维空间）
3. 例如 $n$ 个平面最多将空间分为 $\mathrm{C}_n^0+\mathrm{C}_n^1+\mathrm{C}_n^2+\mathrm{C}_n^3$ 份（三维空间）

于是我们可以猜测，$n$ 维空间最多被分割为 $N$ 块，其中

$$
N = \sum_{i=0}^n \mathrm{C}_k^i
$$
