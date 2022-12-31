---
title: 同余
description: 同余
---

# 同余

## 1. 同余的定义

*@def* 两个整数 $a,\,b$ 除以正整数 $m$，若余数相同，则称 $a$ 与 $b$ 关于模 $m$ **同余**，记作 $a \equiv b \pmod m$。

显然
$$
a \equiv b \pmod m \Leftrightarrow
a = km+b\,(k \in \mathbf{Z}) \Leftrightarrow
m \mid (a-b)
$$

在数论的上下文中，记号 $(c,\,m)$ 表示 $c$ 与 $m$ 的最大公约数。

## 2. 同余的性质

### 2.1 常用性质

模为正整数，下列的数字都是整数。

1. $a \equiv a \pmod m$（自反性）
2. $a \equiv b \pmod m\Leftrightarrow a \equiv a \pmod m$（对称性）
3. $a \equiv b\pmod m,\, b \equiv c \pmod m\Rightarrow a \equiv c \pmod m$（传递性）
4. $a \equiv b\pmod m,\, c \equiv d \pmod m\Rightarrow a \pm c \equiv b \pm d \pmod m$
5. $a \equiv b\pmod m,\, c \equiv d \pmod m\Rightarrow ac \equiv bd \pmod m$
    - 特别地 $a \equiv b \pmod m \Rightarrow ak \equiv bk \pmod m,\,k \in \mathbf{Z}$
    - 反复运用上面的结论，得 $a \equiv b \pmod m \Rightarrow a^n \equiv b^n \pmod m,\,n \in \mathbf{N}$
6. 若 $ac \equiv bc \pmod m$ 
    - 当 $(c,\,m) = 1$ 时，$a \equiv b \pmod m$
    - 当 $(c,\,m) = d$ 时，$a \equiv b \pmod {m/d}$
7. $A \equiv a \pmod {m_1},\, A \equiv a \pmod {m_2},\,(m_1,\,m_2) = 1 \Rightarrow A \equiv a \pmod {m_1 m_2}$

### 2.2 费尔马小定理

设 $p$ 是素数，$a$ 是正整数，且 $(m_1,\, m_2) = 1$，则
$$
a^{p-1} \equiv 1 \pmod p
$$

::: details 证明

由于 $a,\,2a,\,\cdots,\,(p-1)a$ 模 $p$ 的余数各不相同，否则，若存在 $ia \equiv ja \pmod p$，其中 $1 \leqslant i < j \leqslant p-1$，则 $p \mid (j-i)a$，而 $p \nmid a$，那么 $p \mid (j-i)$，这是不可能的。因此 $a,\,2a,\,\cdots,\,(p-1)a$ 模 $p$ 的余数必然取遍 $1,\,2,\,\cdots,\,p-1$ 这 $p-1$ 个数，仅可能顺序不同。

故

$$
a \cdot 2a \cdots (p-1)a \equiv 1 \cdot 2 \cdots (p-1)\;\pmod m
$$

又 $p$ 是素数，则

$$
\left((p-1)!\,,\,p\right) = 1
$$

所以由性质（6）得

$$
a^{p-1} \equiv 1 \pmod m
$$

:::

## 3. 剩余类和完全剩余系

### 3.1 剩余类定义

*@def* 设 $m \in \mathbf{N}^+$，把全体整数按对模 $m$ 的余数进行分类，余数为 $r(0 \leqslant r \leqslant m - 1)$ 的所有整数归为一类，记为 $K_r$，$K_r$ 称为模 $m$ 的一个 **剩余类**（$r = 0,\,1,\,2,\,\cdots,\,m-1$）。

显然，$K_r$ 是一个以 $m$ 为公差的无穷等差数集，即

$$
K_r = \left\{qm+r \mid m \text{ 是模},\,r \text{ 是余数},\,
q \in \mathbf{Z} \right\}
$$

### 3.2 剩余类性质

1. $\mathbf{Z} = K_0 \cup K_1 \cup \cdots \cup K_{m-1}$，且 $K_i \cap K_j = \emptyset,\, i \neq j$
2. 对任意的 $n \in \mathbf{N}$，有唯一的 $r_0$ 使 $n \in K_{r_0}$
3. 对任意的 $a,\,b \in \mathbf{Z}$ 有 $a,\,b \in K_r \Leftrightarrow a \equiv b\pmod m$

### 3.3 完全剩余系

*@def* 设 $K_0,\,K_1,\,\cdots,\,K_{m-1}$ 是模 $m$ 的全部剩余类，从每个 $K_r$ 中任取一个数 $a_r$，这 $m$ 个数 $a_0,\,a_1,\,\cdots,a_{m-1}$ 组成模为 $m$ 的一个 **完全剩余系**，简称 **完系**。

*@def* $0,\,1,\,2,\,\cdots,\,m-1$ 称为模 $m$ 的 **最小非负完系**。

由定义易得结论： $m$ 个整数 $a_1,\,a_2,\,\cdots,\,a_m$ 是模 $m$ 的一个完系的充要条件是 $i \neq j$ 时，不存在 $a \equiv a_j \pmod m$。

## 4. 不定方程

## 5. 孙子定理

设 $n \geqslant 2,\,m_1,\,m_2,\,\cdots,\,m_n$ 是两两互质的正整数，记

$$
M = m_1m_2\cdots m_n,\, M_i = \frac{M}{m_i},\,
i \in \overline{1,\,n}
$$

则同余方程组

$$
\left\{
\begin{aligned}
    x &\equiv c_1 \pmod m_1, \\
    x &\equiv c_2 \pmod m_2, \\
    &\cdots \\
    x &\equiv c_n \pmod m_n
\end{aligned}
\right.
$$

有且仅有唯一解

$$
x \equiv \sum_{i=1}^n M_i a_i c_i \pmod M
$$

其中

$$
M_i a_i \equiv 1 \pmod m_i,\,i \in
\overline{1,\,n}
$$
