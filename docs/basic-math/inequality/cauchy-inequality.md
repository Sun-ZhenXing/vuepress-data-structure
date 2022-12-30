---
title: 柯西不等式
description: 柯西不等式
---

# 柯西不等式

## 1. 柯西不等式内容

设 $a \in \mathbf{R},\, i = 1,\,2,\,\cdots,\,n$ 则

$$
\left(\sum_{i=1}^n a_i b_i\right)^2 \leqslant
\sum_{i=1}^n a_i^2 \sum_{i=1}^n b_i^2
$$

当且仅当 $a_i = kb_i$（$k$ 为常数，$i = 1,\,2,\,\cdots,\,n$）时取等号。

::: details 证明

要证柯西不等式，只要证

$$
\sum_{i=1}^n a_i^2 \sum_{i=1}^n b_i^2 -
\left(\sum_{i=1}^n a_i b_i\right)^2 \geqslant 0
$$

只要证

$$
\left(a_1^2 + a_2^2 + \cdots + a_n^2\right)
\left(b_1^2 + b_2^2 + \cdots + b_n^2\right) -
\left(a_1b_1 + a_2b_2 + \cdots + a_nb_n\right)^2 \geqslant 0
$$

将上式拆项、整理得（此处省略拆项过程）

$$
\sum_{i=1}^{n-1}\sum_{j=i+1}^n
\left(a_i^2b_j^2 + a_j^2b_i^2 - 2a_ia_jb_ib_j\right) \geqslant 0
$$

那么，只要证

$$
\sum_{i=1}^{n-1}\sum_{j=i+1}^n
\left(a_ib_j - a_jb_i\right)^2 \geqslant 0
$$

显然成立，当且仅当 $a_ib_j = a_jb_i$ 成立，即 $a_i = kb_i$（$k$ 为常数，$i = 1,\,2,\,\cdots,\,n$）时取等号。

:::

## 2. 重要结论

【推论 1】设 $a_i \in \mathbf{R}$，则

$$
\frac{\sum_{i=1}^n a_i}{n} \leqslant
\sqrt{\frac{\sum_{i=1}^n a_i^2}{n} }
$$

这个结论其实也是均值不等式的一个公式。

::: details 证明

令 $b_i = 1/n$，那么柯西不等式变形为

$$
\left(\frac{1}{n}\sum_{i=1}^n a_i\right)^2 \leqslant
\frac{n}{n^2} \sum_{i=1}^n a_i^2
$$

两边开根号得

$$
\frac{\sum_{i=1}^n a_i}{n} \leqslant
\sqrt{\frac{\sum_{i=1}^n a_i^2}{n} }
$$

:::

【推论 2】设 $x_i,\,y_i \in \mathbf{R}$，则

$$
\sum_{i=1}^n y_i\sum_{i=1}^n \frac{x_i^2}{y_i} \geqslant
\left(\sum_{i=1}^n x_i\right)^2
$$

证明略，这是柯西不等式的分数形式，也是权方和不等式的一个特例。

## 附录：构造函数证明柯西不等式

注意到柯西不等式是 $ac \geqslant b^2$ 的结构，可以构造二次方程的判别式 $\Delta = b^2 - 4ac$，于是构造如下的二次函数：

$$
f(x) = \left(\sum_{i=1}^n a_i^2\right) x^2 +
2 \left(\sum_{i=1}^n a_i b_i\right)x +
\sum_{i=1}^n b_i^2
$$

注意到这个二次函数可以变形为：

$$
f(x) = \sum_{i=1}^n \left(a_ix + b_i\right)^2
$$

于是有 $f(x) \geqslant 0$，所以其判别式恒小于等于 $0$，即：

$$
\left(2\sum_{i=1}^n a_i b_i\right)^2 -
4\sum_{i=1}^n a_i^2\sum_{i=1}^n b_i^2 \leqslant 0
$$

变形即得柯西不等式。
