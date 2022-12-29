---
title: 排列组合
description: 排列组合
---

# 排列组合

## 1. 计数原理

### 1.1 加法原理

*@def* **加法原理** 又称为 **分类计数原理**。完成一个任务可以有 $n$ 类办法，$a_i\left(1 \leqslant i \leqslant n\right)$ 代表第 $i$ 类方法的数目。那么完成这件事共有 $S = a_1 + a_2 + \cdots + a_n = \sum_{i=1}^n a_i$ 种不同的方法。

### 1.2 乘法原理

*@def* **乘法原理** 又称为 **分步计数原理**。完成一个任务需要分 $n$ 个步骤，$a_i\left(1 \leqslant i \leqslant n\right)$ 代表第 $i$ 个步骤的不同方法数目。那么完成这件事共有 $S = a_1 a_2 \cdots a_n = \prod_{i=1}^n a_i$ 种不同的方法。

## 2. 排列组合基础

本节 $m$ 与 $n$ 均为自然数，自然数被定义为大于等于 $0$ 的整数。

### 2.1 排列数

*@def* 从 $n$ 个不同元素中，任取 $m\left(m \leqslant n\right)$ 个元素按照一定的顺序排成一列，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个 **排列**。

*@def* 从 $n$ 个不同元素中取出 $m\left(m \leqslant n\right)$ 个元素的所有排列的个数，叫做从 $n$ 个不同元素中取出 $m$ 个元素的 **排列数**，用符号 $\mathrm{A}^m_n$（或者是 $\mathrm{P}^m_n$）表示。

根据乘法原理，对于 $m \leqslant n$ 有排列数公式

$$
\begin{aligned}
    \mathrm{A}_n^m
    &= \frac{n!}{\left(n-m\right)!} \\
    &= n\left(n-1\right)\left(n-2\right)
    \cdots\left(n-m+1\right)
\end{aligned}
$$

::: tip 如何推导

可以将这个过程看做需要 $m$ 个步骤的任务，第一步可以选 $n$ 个，第二步可以选 $n-1$ 个，以此类推，第 $m$ 步可以选 $n-m+1$ 个，故得到公式 $n\left(n-1\right)\left(n-2\right)\cdots\left(n-m+1\right)$。

:::

*@def* **全排列**，当 $m = n$ 时，所有元素都参与排列，其排列数为

$$
\mathrm{A}^n_n = \frac{n!}{1!} = n!
$$

规定：在不引起歧义的情况下，名词 *排列*、*组合* 与 *排列数*、*组合数* 的含义对应一致。

### 2.2. 组合

*@def* 从 $n$ 个不同元素中，任取 $m\left(m \leqslant n\right)$ 个元素组成一个集合，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个 **组合**。

*@def* 从 $n$ 个不同元素中取出 $m\left(m \leqslant n\right)$ 个元素的所有组合的个数，叫做从 $n$ 个不同元素中取出 $m$ 个元素的 **组合数**。用符号 $\mathrm{C}^m_n$ 来表示。

对于 $m \leqslant n$ 有组合数公式

$$
\begin{aligned}
    \mathrm{C}_n^m
    &= \frac{n!}{m!\,(n-m)!} \\
    &= \frac{n(n-1)(n-2)\cdots(n-m+1)}{m(m-1)\cdots 2\cdot 1}
\end{aligned}
$$

::: tip 如何推导

可以理解为排列的去重过程，排列是有序的而组合是无序的。

计算排列数可以得到 $\mathrm{A}_n^m = \dfrac{n!}{\left(n-m\right)!}$，进行去重，每次重复的数量即为 $m$ 的全排列，除以 $m!$ 即为结果。

:::

组合数也被称为 **二项式系数**。组合数也通常记为 $\dbinom{n}{m}$（LaTeX 符号 `\binom{}{}` 和 `\dbinom{}{}`），读作 $n$ 选 $m$。

$$
\binom{n}{m} = \mathrm{C}_n^m
$$

特别地，规定当 $m > n$ 时，$\mathrm{A}_n^m = \mathrm{C}_n^m = 0$。

组合数常见的性质：
1. $\mathrm{C}_n^m = \mathrm{C}_n^{n-m}$
2. $\mathrm{C}_{n+1}^m = \mathrm{C}_n^m+\mathrm{C}_n^{m-1}$
3. $\mathrm{C}_n^0 - \mathrm{C}_n^1 + \mathrm{C}_n^2 - \mathrm{C}_n^3 + \cdots + (-1)^n\mathrm{C}_n^n = 0$

更多的性质可以阅读 [组合恒等式](./combinatorial-identity.md)
