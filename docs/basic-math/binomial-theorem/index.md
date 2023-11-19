# 二项式定理

对于 $a, b \in \mathbb{R}$ 和 $n \in \mathbb{N}^*$，有

$$
\left(a + b\right)^n = \sum_{i = 0}^n \binom{n}{i} a^{n - i} b^i
$$

::: details 证明

1. 当 $n = 1$ 时，显然结论成立
2. 当 $n = k$ 时，假设结论成立，有

$$
\left(a + b\right)^k = \sum_{i = 0}^k \binom{k}{i} a^{k - i} b^i
$$

当 $n = k + 1$ 时，有

$$
\begin{aligned}
   \left(a + b\right)^{k + 1} &= \left(a + b\right)^k \left(a + b\right) \\
    &= \left(\sum_{i = 0}^k \binom{k}{i} a^{k - i} b^i\right) \left(a + b\right) \\
    &= \sum_{i = 0}^k \binom{k}{i} a^{k - i + 1} b^i + \sum_{i = 0}^k \binom{k}{i} a^{k - i} b^{i + 1} \\
    &= \sum_{i = 1}^{k + 1} \binom{k}{i - 1} a^{k - i + 1} b^{i - 1} + \sum_{i = 0}^k \binom{k}{i} a^{k - i} b^{i + 1} \\
    &= a^{k+1} + \sum_{i = 1}^k \binom{k}{i - 1} a^{k - i + 1} b^i + \sum_{i = 1}^k \binom{k}{i} a^{k - i + 1} b^i + b^{k + 1} \\
    &= a^{k+1} + \sum_{i = 1}^k \left(\binom{k}{i - 1} + \binom{k}{i}\right) a^{k - i + 1} b^i + b^{k + 1} \\
    &= a^{k+1} + \sum_{i = 1}^k \binom{k + 1}{i} a^{k - i + 1} b^i + b^{k + 1} \\
    &= \sum_{i = 0}^{k + 1} \binom{k + 1}{i} a^{k + 1 - i} b^i
\end{aligned}
$$

结论仍成立，综合 (1) 和 (2)，结论成立。

:::
