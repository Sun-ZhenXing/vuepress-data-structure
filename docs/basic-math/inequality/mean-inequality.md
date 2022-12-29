---
title: 均值不等式
description: 均值不等式
---

# 均值不等式

下面讨论的内容均在实数范围内，不涉及复数或其他领域。

## 1. 基本不等式

**基本不等式** 是均值不等式的一个特例。

对于任意非负实数 $a,\, b$ 有

$$
\left(\sqrt{a} - \sqrt{b}\right)^2 \geqslant 0
$$

那么有

$$
\frac{a+b}{2} \geqslant \sqrt{ab}
$$

当且仅当 $a = b$ 时取等号。

## 2. 平均数

在引出均值不等式之前，我们先引出几种常见的平均数。

*@def* 调和平均数 $H_n$

$$
\begin{aligned}
    H_n &= \frac{n}{\sum_{i=1}^n 1/x_i } \\
    &= \frac{n}{1/x_1 + 1 / x_2 + \cdots + {1}/{x_n} }
\end{aligned}
$$

*@def* 几何平均数 $G_n$

$$
\begin{aligned}
    G_n &= \sqrt[n]{\prod_{i=1}^n x_i} \\
    &= \sqrt[n]{x_1 x_2 \cdots x_n}
\end{aligned}
$$

*@def* 算数平均数 $A_n$

$$
\begin{aligned}
    A_n &= \frac{\sum_{i=1}^n x_i}{n} \\
    &= \frac{x_1 + x_2 + \cdots + x_n}{n}
\end{aligned}
$$

*@def* 平方平均数 $Q_n$

$$
\begin{aligned}
    Q_n &= \sqrt{\frac{\sum_{i=1}^n
    x_i^2}{n} } \\
    &= \sqrt{\frac{x_1^2 + x_2^2 + \cdots + x_n^2}{n} }
\end{aligned}
$$

## 3. 均值不等式

均值不等式定义为

$$
H_n \leqslant G_n \leqslant A_n \leqslant Q_n
$$

即

$$
\frac{n}{1 / x_1 + 1 / x_2 + \cdots + 1 / x_n } \leqslant
\sqrt[n]{x_1 x_2 \cdots x_n} \leqslant
\frac{x_1 + x_2 + \cdots + x_n}{n} \leqslant
\sqrt{\frac{x_1^2 + x_2^2 + \cdots + x_n^2}{n} }
$$

证明均值不等式的方法有数学归纳法、琴生不等式、柯西不等式、构造几何法等方法，这里不再讨论，详细信息可以自行搜索。[^1]

[^1]: 平均数不等式，维基百科，<https://zh.wikipedia.org/wiki/%E5%B9%B3%E5%9D%87%E6%95%B0%E4%B8%8D%E7%AD%89%E5%BC%8F>

均值不等式最实用的推论是 $n = 2$ 时的形式：

$$
\frac{2}{1/a + 1/b} \leqslant \sqrt{ab}
\leqslant \frac{a + b}{2}
\leqslant \sqrt{\frac{a^2 + b^2}{2} }
$$

可以发现基本不等式是其中的一个不等式。

## 附录：结论推广

这里不进行证明，仅给出一些启发和思路。

构造

$$
f(r) = \left(\dfrac{a_1^r + a_2^r + \cdots + a_n^r}{n}\right)^{1/r}
$$

可以证明，$r = 0$ 时 $f(r)$ 存在可去间断点，若定义

$$
g(r) = \lim_{k \rightarrow r} f(k)
$$

那么可得到 $r$ 取 $-1,\,0,\,1,\,2$ 时 $g(r)$ 分别对应为调和平均数，几何平均数，算数平均数和平方平均数。

下面进行推广，定义

$$
D(r) = \begin{cases}
    \left(\dfrac{a_1^r + a_2^r + \cdots + a_n^r}{n}\right)^{1/r} = \left(\displaystyle\frac{1}{n}\sum_{i=1}^n a^r_i\right)^{1/r},
    & r \neq 0 \\
    \left(a_1 a_2 \cdots a_n\right)^{1/n} = \left(\displaystyle\prod_{i=1}^n a_i\right)^{1/n}, & r = 0
\end{cases}
$$

得到

$$
D(-\infty) = \lim_{r \to -\infty}D(r) = \min_{1 \leqslant i \leqslant n}\{a_i\}
$$

$$
D(+\infty) = \lim_{r \to +\infty}D(r) = \max_{1 \leqslant i \leqslant n}\{a_i\}
$$

$$
D(-1) = H_n,\, D(0) = G_n,\, D(1) = A_n,\, D(2) = Q_n
$$

可以证明 $D(r)$ 在 $\left[-\infty,\, +\infty\right]$ 上单调递增。此结论被称为 [幂平均](https://zh.wikipedia.org/wiki/%E5%B9%82%E5%B9%B3%E5%9D%87)，幂平均还有加权和积分形式。[^2]

[^2]: 幂平均，中文数学 Wiki，<https://math.fandom.com/zh/wiki/%E5%B9%82%E5%B9%B3%E5%9D%87>
