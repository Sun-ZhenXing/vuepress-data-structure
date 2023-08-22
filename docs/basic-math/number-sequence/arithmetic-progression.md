# 等差数列

[[TOC]]

## 1. 等差数列定义

*@def* 一般地，如果一个数列从第 $2$ 项起，每一项与它的前一项的差等于同一个常数，这个数列就叫做 **等差数列**，这个常数叫做等差数列的 **公差**，公差通常用字母 $d$ 表示，前 $n$ 项和用 $S_n$ 表示。

若 $n \geqslant 1,\, n \geqslant m$，则有等差数列的通项公式

$$
a_n = a_1 + \left(n-1\right)d
$$

或

$$
a_n = a_m + \left(n-m\right)d
$$

若 $n \geqslant 1$，则有等差数列前 $n$ 项和求和公式

$$
S_n = \frac{n\left(a_1 + a_n\right)}{2}
$$

或

$$
S_n = na_1 + \frac{n\left(n-1\right)d}{2}
$$

## 2. 等差数列的性质

1. 公差为非零的等差数列的通项公式未 $n$ 的一次函数
2. 公差为非零的等差数列的前 $n$ 项和为 $n$ 的不含常数项的二次函数
3. 设 $\{a_n\}$ 是等差数列，则 $\{\lambda a_n + b\}$（$\lambda,\,b$ 是常数）是等差数列
4. 设 $\{a_n\}$ 与 $\{b_n\}$ 是等差数列，则 $\{\lambda_1 a_n + \lambda_2 b_n\}$（$\lambda_1,\,\lambda_2$ 是常数）也是等差数列
5. 设 $\{a_n\}$ 与 $\{b_n\}$ 是等差数列，且 $b_n \in \mathbb{N}^*$，则 $\{a_{b_n}\}$ 也是等差数列（即等差数列中等距离分离出的子数列仍为等差数列）
6. 设 $\{a_n\}$ 是等差数列，若 $m + n = p + q$，则 $a_m + a_n = a_p + a_q$（$m,\,n,\,p,\,q$ 取值使得数列有意义）；特别地，若 $m + n = 2p$，则 $a_m + a_n = 2a_p$
7. 设 $\{a_n\}$ 是等差数列，$A = a_1 + a_2 + \cdots + a_n$，$B = a_{n+1} + a_{n+2} + \cdots + a_{2n}$，$C = a_{2n+1} + a_{2n+2} + \cdots + a_{3n}$，则 $A + C = 2B$
8. 设 $\{a_n\}$ 是等差数列，记 $S_{\mathrm{even}}$，$S_{\mathrm{odd}}$ 分别表示前 $2n$ 项中偶数项和奇数项的和，则 $S_{\mathrm{even}} - S_{\mathrm{odd}} = nd$，$\dfrac{S_{\mathrm{odd}}}{S_{\mathrm{even}}} = \dfrac{a_n}{a_{n+1}}$
9. 设 $\{a_n\}$ 是等差数列，记 $S_{\mathrm{even}}$，$S_{\mathrm{odd}}$ 分别表示前 $2n-1$ 项中偶数项和奇数项的和，则 $S_{\mathrm{even}} - S_{\mathrm{odd}} = a_n$，$\dfrac{S_{\mathrm{odd}}}{S_{\mathrm{even}}} = \dfrac{n}{n-1}$
10. 设 $S_n$ 是等差数列 $\{a_n\}$ 的前 $n$ 项和，则 $S_{2n-1} = \left(2n - 1\right)a_n$
11. 其他衍生的等差数列：若已知等差数列 $\{a_n\}$，公差为 $d$，前 $n$ 项和为 $S_n$，则
    1. $a_p,\,a_{p+t},\,a_{p+2t},\,\cdots,\, a_{p+\left(n-1\right)t},\,\cdots$ 为等差数列，公差为 $td$
    2. $a_1 + a_2 + \cdots + a_m,\, a_{m+1} + a_{m+2} + \cdots + a_{2m},\, \cdots$（即 $S_m,\,S_{2m} - S_m,\,S_{3m} - S_{2m},\,\cdots$）为等差数列，公差为 $m^2d$
    3. $\left\{S_n / n\right\}$ 为等差数列，公差为 $d/2$
