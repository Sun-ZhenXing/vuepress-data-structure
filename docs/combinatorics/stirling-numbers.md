---
title: 斯特林数
description: 斯特林数
---

# 斯特林数

在数学中，**斯特林数**（Stirling）用于解决各种数学分析和组合数学问题，斯特林数是两组不同的数，均是 18 世纪由 [詹姆斯·斯特林](https://en.wikipedia.org/wiki/James_Stirling_(mathematician)) 引入并以其命名，以第一类斯特林数和第二类斯特林数的称呼区分。此外，有时候也将拉赫数称为第三类斯特林数。[^1]

[^1]: 小学生都能看懂的三类斯特林数从入门到升天教程，知乎，<https://zhuanlan.zhihu.com/p/350774728>

## 1. 第一类斯特林数

*@def* 第一类斯特林数是将 $n$ 个不同元素分成 $k$ 个不同的环的方案数，记作 $s(n,\,k)$ 或 $\begin{bmatrix}n \\ k\end{bmatrix}$。其中两个环不相同当且仅当这两个环不能通过旋转得到。表示方法为

$$
\begin{bmatrix}
    n \\
    k
\end{bmatrix}
$$

考虑递推，把 $n$ 个不同元素分成 $k$ 个不同的环有两种转移。

第一种，有可能是 $n−1$ 个不同元素分成 $k−1$ 个不同的环，当前的第 $n$ 个独立成一个元素。

第二种可能是 $n−1$ 个不同元素已经分好了 $k$ 个不同的环，当前这个可以加进去。加在每个已有元素的逆时针方向（或顺时针方向，方向没有关系，只要统一即可）就不会出现重复，共有 $n−1$ 种方法，所以：

$$
\begin{bmatrix}
    0 \\
    0
\end{bmatrix} = 1
$$

$$
\begin{bmatrix}
    n \\
    k
\end{bmatrix} =
\begin{bmatrix}
    n - 1 \\
    k - 1
\end{bmatrix} +
\begin{bmatrix}
    n - 1 \\
    k
\end{bmatrix} \cdot
(n-1)
$$

这就是第一类斯特林数的递推式，也可以写成：

$$
s(n,\,k)=s(n−1,\,k−1)+s(n−1,\,k) \cdot (n−1)
$$

性质：
1. $s(0,\, 0) = 1$
2. $s(n,\,0) = 0\,(n > 0)$
3. $s(n\,1) = (n-1)\,!$
4. $s(n,\,n-1) = \mathrm{C}_n^2$
5. $s(n,\,2) = (n-1)\,!\,\cdot\displaystyle\sum_{i=1}^{n-1}\frac{1}{i}$
6. $s(n,\,n-2) = 2\mathrm{C}_n^3 + 3\mathrm{C}_n^4$
7. $\displaystyle\sum_{k=0}^ns(n,\,k) = n\,!$
