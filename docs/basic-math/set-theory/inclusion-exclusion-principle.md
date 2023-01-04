---
title: 容斥原理
description: 容斥原理
---

# 容斥原理

## 1. 集合的划分

*@def* 将有限集合 $X$ 表示为一组集合 $A_1,\,A_2,\,\cdots,\,A_n$ 的并集。且满足

$$
\bigcap_{i=1}^n A_i = \emptyset
$$

那么集族 $\varphi = \left\{A_1,\,A_2,\,\cdots,\,A_n\right\}$ 为集合 $X$ 的一个 **完全划分**。

那么，显然有

$$
\left|X\right| = \sum_{i=1}^n \left|A_i\right| \tag{1}
$$

对于不完全的划分，有

$$
\left|X\right| < \sum_{i=1}^n \left|A_i\right| \tag{2}
$$

## 2. 容斥公式

*@theorem-1* 设 $A_i$ 为有限集，则

$$
\begin{aligned}
    \left|\bigcup_{i=1}^n A_i \right| &=
    \sum_{i=1}^n\left|A_i\right| -
    \sum_{1 \leqslant i < j \leqslant n}\left|A_i \cap A_j\right| +
    \cdots +
    \left(-1\right)^{n-1}\left|\bigcap_{i=1}^n A_i\right|
\end{aligned} \tag{3}
$$

## 3. 筛法公式

*@inference-1* 设 $A$ 关于全集 $U$ 的补集为 $\overline{A}$，则 $\left|A\right| + \left|\overline{A}\right| = \left|U\right|$

*@inference-2* 德·摩根定律

$$
\begin{aligned}
    \overline{\bigcap_{i=1}^n A_i} &=
    \bigcup_{i=1}^n \overline{A_i} \\
    \overline{\bigcup_{i=1}^n A_i} &=
    \bigcap_{i=1}^n \overline{A_i} \\
\end{aligned}
$$

*@theorem-2*

$$
\begin{aligned}
    \left|\bigcap_{i=1}^n\overline{A_i}\right| &=
    \left|\overline{\bigcup_{i=1}^n A_i}\right| \\
    &= \left|U\right|-\left|\bigcup_{i=1}^n A_i\right| \\
    &= \left|U\right|-\sum_{i=1}^n\left|A_i\right| +
    \sum_{1 \leqslant i < j \leqslant n}\left|A_i \cap A_j\right| +
    \cdots +
    \left(-1\right)^{n}\left|\bigcap_{i=1}^n A_i\right|
\end{aligned}
$$
