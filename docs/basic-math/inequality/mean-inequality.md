---
title: 均值不等式
description: 均值不等式
---

# 均值不等式

下面讨论的内容均在实数范围内，不涉及复数或其他领域。

## 1. 基本不等式

基本不等式是均值不等式的一个特例。

对于任意非负实数 $a,\, b$ 有

$$
\left(\sqrt{a} - \sqrt{b}\right)^2 \geqslant 0
$$

那么有

$$
\frac{a+b}{2} \geqslant \sqrt{ab}
$$

当且仅当 $a = b$ 时取等号。

## 2. 定义

**调和平均数** $H_n$

$$
\begin{aligned}
    H_n &= \frac{n}{\sum_{i=1}^n 1/x_i } \\
    &= \frac{n}{1/x_1 + 1 / x_2 + \cdots + {1}/{x_n} }
\end{aligned}
$$

**几何平均数** $G_n$

$$
\begin{aligned}
    G_n &= \sqrt[n]{\prod_{i=1}^n x_i} \\
    &= \sqrt[n]{x_1 x_2 \cdots x_n}
\end{aligned}
$$

**算数平均数** $A_n$

$$
\begin{aligned}
    A_n &= \frac{\sum_{i=1}^n x_i}{n} \\
    &= \frac{x_1 + x_2 + \cdots + x_n}{n}
\end{aligned}
$$

**平方平均数** $Q_n$

$$
\begin{aligned}
    Q_n &= \sqrt{\frac{\sum_{i=1}^n
    x_i^2}{n} } \\
    &= \sqrt{\frac{x_1^2 + x_2^2 + \cdots + x_n^2}{n} }
\end{aligned}
$$


## 3. 均值不等式

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

## 附录：证明引述 —— 构造函数

这里不进行证明，仅给出一些启发和思路。

构造

$$
f(x) = \left(\frac{\sum_{i=1}^n a^x_i}{n}\right)^{1/x},\, a_i > 0
$$

可以证明，$x = 0$ 时 $f(x)$ 存在可去间断点，若定义

$$
g(x) = \lim_{k \rightarrow x} f(k)
$$

那么可证明 $x$ 取 $-1,\,0,\,1,\,2$ 时 $g(x)$ 分别对应为调和平均数，几何平均数，算数平均数和平方平均数。

若能证明 $g(x)$ 单调性，则可以证明均值不等式成立。

证明均值不等式的方法还有数学归纳法、琴生不等式、柯西不等式、构造几何法等方法，这里不再讨论，详细信息可以自行搜索。
