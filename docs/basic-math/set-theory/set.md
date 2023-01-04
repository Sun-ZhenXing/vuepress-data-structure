---
title: 集合
description: 集合
---

# 集合

## 1. 集合

### 1.1 集合的定义

*@def* **集合** 是一组对象的全体。集合在数学中是不定义概念，最基本概念之一。

集合常用大写字母表示，如 $A,\,B,\,C\cdots$。

集合内的每个对象叫做这个集合的 **元素**，集合与元素的关系用属于（$\in$）和不属于（$\notin$）描述，元素通常使用小写字母 $a,\,b,\,c\cdots$ 表示。

下面出现的 $A,\,B$ 等大写字母，若不解释均为集合，小写字母 $a,\,b,\,c$ 等若不解释均为集合内元素。

*@def* **集合相等** 被定义为集合内的每一个元素都对应相等，即

$$
\left(\forall\, a \in A,\, a \in B\right)\text{ and }
\left(\forall\, b \in B,\, b \in A\right)
\Leftrightarrow A = B
$$

集合内的元素是 *确定的*，下面的条件只有一个成立

$$
a \in A,\, A \notin A
$$

集合内的元素是 *无序的*，且集合内的元素是 *互异的*

$$
\forall \,a,\,b \in A,\, a \neq b
$$

*@def* **有限集**：元素个数是有限，否则是 **无限集**。

*@def* 若 $\forall\, a \in A$，均有 $a \in B$，则称为 $A$ 是 $B$ 的 **子集**，记为 $A \subseteq B$。此时如果 $A \neq B$，则 $A$ 是 $B$ 的真子集，记为 $A \subsetneqq B$。

### 1.2 集合的表示

集合的表示在数学上并无严格定义，一般来说有下面几种：
1. 列举法
2. 描述法
3. 图示法

列举法使用大括号包含集合内的元素，适用于集合元素有限且比较少的情况，例如

$$
\left\{1,\,2\right\},\,\left\{\pi,\,\frac{\sqrt{2} }{3}\right\}
$$

描述法使用 $\left\{x\mid P(x)\right\}$ 格式来表示集合，用处较广，其中 $P(x)$ 表示具有某性质的描述，$x$ 是描述符，例如

$$
\left\{x \mid x \in \R \text{ and } x > \sqrt{\pi}\right\}
$$

图示法一般用于形象化的描述，一般用 [Venn 图](https://zh.wikipedia.org/wiki/%E6%96%87%E6%B0%8F%E5%9B%BE) 来表示。在不太严格的意义下用以表示集合（或类）的一种图解。

### 1.3 常见的集合

*@def* **点集** 是只包含点元素的集合，**数集** 是只包含数字的集合，**复数集** 是只包含复数的集合，其中上述集合也可以为空集。

一般地，如果集合内的元素都属于类 $\text{A}$，那么这个集合可以称为 $\text{A}$ 集，如 **点集**、**数集**，**复数集** 等。

定义几个最常用的集合：

- *@def* **全集** $U$（有时也表示为 $I$）表示为在某范围内某些对象的全体，具体取决定义于上下文
- *@def* **空集** 是不含元素的集合，表示为 $\emptyset$
- *@def* **自然数集** $\mathbf{N}$，有时也写为 $\mathbb{N}$
- *@def* **正整数集** $\mathbf{N}_+$ 或 $\mathbf{N}^*$，也可写为 $\mathbb{N}_+,\,\mathbb{N}^*$
- *@def* **整数集** $\mathbf{Z}$ 或者 $\mathbb{Z}$
- *@def* **有理数集** $\mathbf{Q}$ 或者 $\mathbb{Q}$
- *@def* **实数集** $\mathbf{R}$ 或者 $\mathbb{R}$
- *@def* **复数集** $\mathbf{C}$ 或者 $\mathbb{C}$

::: info 符号规范

在本文档中，所有和数集有关的符号均使 Blackboard Bold 字体表示，即 $\mathbb{Z},\,\mathbb{Q},\,\R,\,\mathbb{C}$ 等，不使用一些教材等广泛定义的粗体。

Blackboard Bold 字体的 LaTeX 代码为 `\mathbb{}`。

:::

有一类特殊的集合，用于表示从 $a$ 到 $b$ 范围内的所有整数（$a,\,b \in \mathbb{Z}$），记为 $\overline{a,\,b}$，其定义为

$$
\overline{a,\,b} = \left\{x \mid x \in \mathbb{Z},\,
a \leqslant x \leqslant b
\right\}
$$

且 $a,\,b \in \mathbb{Z}$。例如 $1,\,2,\,3\cdots,\,n$ 可以表示为 $\overline{1,\,n}$。

## 2. 区间

*@def* **区间** 表示范围内的所有实数构成的集合，在无歧义的情况下，区间可以使用括号包含的一对实数来表示。不同的括号的区别是是否包含边界，定义如下

$$
\begin{aligned}
    \left[a,\,b\right]
    &= \left\{x \mid a \leqslant x \leqslant b,\,x \in \R \right\} \\
    \left[a,\,b\right)
    &= \left\{x \mid a \leqslant x < b,\,x \in \R \right\} \\
    \left(a,\,b\right]
    &= \left\{x \mid a < x \leqslant b,\,x \in \R \right\} \\
    \left(a,\,b\right)
    &= \left\{x \mid a < x < b,\,x \in \R \right\} \\
\end{aligned}
$$

## 3. 集合的运算

*@def* 集合的加法即集合的 **并集**，其定义如下

$$
A + B = A \cup B =
\left\{x \mid x \in A \text{ or } x \in B\right\}
$$

*@def* 集合的减法即集合的 **差集**，其定义如下

$$
A - B = A \backslash B
\left\{x \mid x \in A \text{ and } x \notin B\right\}
$$

*@def* 集合的乘法即集合的 **交集**，其定义如下

$$
A \cdot B = A \cap B =
\left\{x \mid x \in A \text{ and } x \in B\right\}
$$

对多个集合依次取并集记为

$$
A = \bigcup_{i=1}^n A_i
$$

对多个集合依次取交集记为

$$
A = \bigcap_{i=1}^n A_i
$$

*@def* 有限集内元素的个数也称为 **集合的大小**，或称为 **集合的基**，记为

$$
N = \left| A \right|
$$

*@def* 对集合取反也称为取集合的 **补集**，$A$ 相对于全集 $U$ 的补集为

$$
\overline{A} = \complement_U A =
\left\{x \mid x \notin A \text{ and } x \in U\right\}
$$

*@def* 集合的 **对称差** 定义如下

$$
A \oplus B
= A \triangle B
= \left\{ x \mid x \in A \cup B \text{ and }
x \notin A \cap B \right\}
$$

根据定义，存在下面的结论

$$
A \oplus B = A \triangle B =
A + B - AB
$$

## 4. 集合运算的性质

### 4.1 基础结论

根据上述运算，容易得到下面的结论

$$
\begin{aligned}
    \left| \emptyset \right| &= 0 \\
    \left|A+B\right| &= \left|A\right| +
    \left|B\right| - \left|AB\right| \\
    \sum_{i=1}^{n} \left| A_i \right| & \geqslant
    \left| \bigcup_{i=1}^{n} A_i \right| \geqslant
    \left| \bigcap_{i=1}^{n} A_i \right|
\end{aligned}
$$

### 4.2 运算性质

下面的性质我们不加以证明
1. 集合的交运算满足交换律和结合律
    $$
    \begin{aligned}
        A + B =& B + A \\
        (A + B) + C =& A + (B + C)
    \end{aligned}
    $$
2. 集合的并运算满足交换律和结合律
    $$
    \begin{aligned}
        AB &= BA \\
        (AB)C &= A(BC)
    \end{aligned}
    $$
3. 集合的补集满足等幂律
    $$
    \overline{\overline{A} } = A
    $$
4. 常元律、同一律
    $$
    \begin{aligned}
        A + \emptyset &= A \\
        A \cdot \emptyset &= \emptyset\\
        A + U &= U \\
        AU &= A \\
        A + A &= A \\
        AA &= A
    \end{aligned}
    $$
5. 分配律
    $$
    \begin{aligned}
        A(B + C) &= AB + AC \\
        A +BC &= (A + B)(A + C)
    \end{aligned}
    $$
6. 摩根定律
    $$
    \begin{aligned}
        \overline{A + B} &= \overline{A} \cdot \overline{B} \\
        \overline{AB} &=  \overline{A} + \overline{B}
    \end{aligned}
    $$
7. 引申的公式
    $$
    \begin{aligned}
        A + AB &= A \\
        A(A + B) &= A
    \end{aligned}
    $$
8. 摩根定律的一般情况
    $$
    \begin{aligned}
        \overline{\bigcap_{i=1}^n A_i} &=
        \bigcup_{i=1}^n \overline{A_i} \\
        \overline{\bigcup_{i=1}^n A_i} &=
        \bigcap_{i=1}^n \overline{A_i}
    \end{aligned}
    $$

递归地，对于一个集合，将交集和并集关系互换，将每一个集合符号都改为它的补集，那么得到的集合是原式的补集。
