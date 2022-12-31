---
title: 集合论
description: 集合论
---

# 集合论

## 1. 集合

*@def* **集合** 是一组对象的全体。集合在数学中是不定义概念，最基本概念之一。

集合常用大写字母表示，如 $A,\,B,\,C\cdots$。

集合内的每个对象叫做这个集合的 **元素** ，集合与元素的关系用属于（ $\in$ ）和不属于（ $\notin$ ）描述，元素通常使用小写字母 $a,\,b,\,c\cdots$ 表示。

下面出现的 $A,\,B$ 等大写字母，若不解释均为集合，小写字母 $a,\,b,\,c$ 等若不解释均为集合内元素。

*@def* **集合相等** 为集合内的每一个元素都对应相等，即

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

*@def* **有限集**：元素个数有限，否则是 **无限集**。

定义几个最常用的集合：

- *@def* **全集** $U$ （有时也表示为 $I$ ），**空集** 表示为 $\emptyset$
- *@def* **自然数集** $\mathbf{N}$ ，有时也写为 $\mathbb{N}$
- *@def* **正整数集** $\mathbf{N}_+$ 或 $\mathbf{N}^*$ ，也可写为 $\mathbb{N}_+,\,\mathbb{N}^*$
- *@def* **整数集** $\mathbf{Z}$ 或者 $\mathbb{Z}$
- *@def* **有理数集** $\mathbf{Q}$ 或者 $\mathbb{Q}$
- *@def* **实数集** $\mathbf{R}$ 或者 $\mathbb{R}$
- *@def* **复数集** $\mathbf{C}$ 或者 $\mathbb{C}$
- $1,\,2,\,3\cdots,\,n$ 可以表示为 $\overline{1,\,n}$

*@def* 若 $\forall\, a \in A$ ，均有 $a \in B$ ，则 $A \subseteq B$ ，称为 $A$ 是 $B$ 的 **子集**，如果 $A \neq B$  。

*@def* **点集** 是只包含点元素的集合，**数集** 是只包含数字的集合，**复数集** 是只包含复数的集合，其中上述集合可以为空集。一般地，如果集合内的元素都属于类 $\text{A}$ ，那么这个集合可以称为 $\text{A}$ 集，如 **点集**、**数集**，**复数集** 等。

## 2. 区间

*@def* **区间** 表示范围内的所有实数构成的集合，在无歧义的情况下，区间可以使用括号包含的一对实数来表示。不同的括号的区别是是否包含边界，定义如下

$$
\begin{aligned}
    \left[a,\,b\right]
    &= \left\{x \mid a \le x \le b,\,x \in \R \right\} \\
    \left[a,\,b\right)
    &= \left\{x \mid a \le x < b,\,x \in \R \right\} \\
    \left(a,\,b\right]
    &= \left\{x \mid a < x \le b,\,x \in \R \right\} \\
    \left(a,\,b\right)
    &= \left\{x \mid a < x < b,\,x \in \R \right\} \\
\end{aligned}
$$

注意，为了避免与数对等混淆，仅在集合的上下文下使用区间。

## 3. 集合的运算

*@def* 集合的加法即集合的 **并集**，其定义如下

$$
A + B = A \cup B =
\left\{x \mid x \in A \;\text{or}\; x \in B\right\}
$$

*@def* 集合的减法即集合的 **差集**，其定义如下

$$
A - B = A/B =
\left\{x \mid x \in A \;\text{and}\; x \notin B\right\}
$$

*@def* 集合的乘法即集合的 **交集**，其定义如下

$$
A \cdot B = A \cap B =
\left\{x \mid x \in A \;\text{and}\; x \in B\right\}
$$

对多个集合依次取并集记为

$$
A = \bigcup_{i=1}^n A_i
$$

对多个集合依次取交集记为

$$
A = \bigcap_{i=1}^n A_i
$$

*@def* 有限集内元素的个数也称为 **集合的大小**，记为

$$
N = \left| A \right|
$$

*@def* 对集合取反也称为取集合的 **补集**， $A$ 相对于全集 $U$ 的补集为

$$
\overline{A} = \complement_U A =
\left\{x \mid x \notin A \;\text{and}\; x \in U\right\}
$$

*@def* 集合的 **对称差** 定义如下

$$
A \oplus B
= A \triangle B
= \left\{ x \mid x \in A \cup B \;\text{and}\;
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

## 附录：集合、布尔代数与概率论

以上的定律通常对于基本的布尔代数和概率论关系都适用，不证明。

其中
- 逻辑与和交集等价
- 逻辑或和并集等价
- 逻辑非和补集等价
- 全集 $U$ 和逻辑真等价
- 对称差和逻辑异或等价

其余推导类别一致。通过这些等价的结论读者可以快速记忆和理解各种不同领域之间的通用规律。
