---
title: 快速幂
description: 快速幂
---

# 快速幂

**快速幂**（Exponentiation by squaring，平方求幂）是一种简单而有效的小算法，它可以以 $O(\log n)$ 的时间复杂度计算 $a^n$，而暴力的计算需要 $O(n)$ 的时间。[^1][^2]

[^1]: io-wiki，快速幂，<https://oi-wiki.org/math/quick-pow/>

[^2]: 知乎，快速幂算法，<https://zhuanlan.zhihu.com/p/95902286>

而这个技巧也常常用在非计算的场景，因为它可以应用在任何具有结合律的运算中。其中显然的是它可以应用于模意义下取幂、矩阵幂等运算。

## 1. 快速幂算法

### 1.1 递归版本

::: code-tabs#code

@tab cpp

```cpp
long long binpow(long long a, long long b) {
    if (b == 0)
        return 1;
    long long res = binpow(a, b / 2);
    if (b % 2)
        return res * res * a;
    else
        return res * res;
}
```

@tab python

```python
def binpow(a, b):
    if b == 0:
        return 1
    res = binpow(a, b // 2)
    if b % 2 == 1:
        return res * res * a
    else:
        return res * res
```

:::

### 1.2 非递归版本

::: code-tabs#code

@tab cpp

```cpp
long long binpow(long long a, long long b) {
    long long res = 1;
    while (b > 0) {
        if (b & 1)
            res = res * a;
        a = a * a;
        b >>= 1;
    }
    return res;
}
```

@tab python

```python
def binpow(a: int, b: int) -> int:
    res = 1
    while b > 0:
        if b & 1:
            res *= a
        a **= 2
        b >>= 1
    return res
```

@tab cpp(template)

```cpp
typedef long long ll;
template <class T>
T qpow(T a, ll n) {
    T ans = 1;
    while (n) {
        if (n & 1)
            ans = ans * a;
        n >>= 1;
        a = a * a;
    }
    return ans;
}
```

:::

## 2. 模意义下取幂

计算 $a^n \bmod m$，乘法不影响模运算，只需要在计算的时候取模即可。

::: code-tabs#code

@tab cpp

```cpp
typedef long long ll;
ll binpow(ll a, ll b, ll m) {
    a %= m;
    ll res = 1;
    while (b > 0) {
        if (b & 1)
            res = res * a % m;
        a = a * a % m;
        b >>= 1;
    }
    return res;
}
```

@tab python

```python
def binpow(a, b, m):
    a = a % m
    res = 1
    while b > 0:
        if b & 1:
            res = res * a % m
        a = a * a % m
        b >>= 1
    return res
```

:::

## 3. 斐波那契数列

斐波那契数列定义很简单

$$
F_n = \left\{
    \begin{aligned}
        & 1, & n < 2 \\
        & F_{n-1} + F_{n-2}, & n > 2
    \end{aligned}
\right.
$$

我们可以构造矩阵 $A$，使

$$
A \begin{bmatrix}
    F_n \\
    F_{n+1}
\end{bmatrix} =
\begin{bmatrix}
    F_{n+1} \\
    F_{n+2}
\end{bmatrix}
$$

代入解得

$$
A = \begin{bmatrix}
    0 & 1 \\
    1 & 1
\end{bmatrix}
$$

故

$$
\begin{bmatrix}
    F_n \\
    F_{n+1}
\end{bmatrix} =
A^{n-1} \begin{bmatrix}
    F_1 \\
    F_2
\end{bmatrix}
$$

这样，我们可以在 $O(\log n)$ 的时间内计算斐波那契数了。

## 4. 求矩阵的快速幂

::: code-tabs#code

@tab cpp

```cpp
#include <cstdio>
#define MOD 1000000007
typedef long long ll;

struct matrix {
    ll a1, a2, b1, b2;
    matrix(ll a1, ll a2, ll b1, ll b2)
        : a1(a1), a2(a2), b1(b1), b2(b2) {}
    matrix operator*(const matrix &y) {
        matrix ans((a1 * y.a1 + a2 * y.b1) % MOD,
                   (a1 * y.a2 + a2 * y.b2) % MOD,
                   (b1 * y.a1 + b2 * y.b1) % MOD,
                   (b1 * y.a2 + b2 * y.b2) % MOD);
        return ans;
    }
};

matrix qpow(matrix a, ll n) {
    matrix ans(1, 0, 0, 1);
    while (n) {
        if (n & 1)
            ans = ans * a;
        a = a * a;
        n >>= 1;
    }
    return ans;
}

int main() {
    ll x;
    matrix M(0, 1, 1, 1);
    scanf("%lld", &x);
    matrix ans = qpow(M, x - 1);
    printf("%lld\n", (ans.a1 + ans.a2) % MOD);
    return 0;
}
```

@tab python

```python
class Matrix:
    def __init__(self, a1: int, a2: int,
                 b1: int, b2: int) -> None:
        self.a1 = a1
        self.a2 = a2
        self.b1 = b1
        self.b2 = b2

    def __mul__(self, other: 'Matrix') -> 'Matrix':
        return Matrix(
            self.a1 * other.a1 + self.a2 * other.b1,
            self.a1 * other.a2 + self.a2 * other.b2,
            self.b1 * other.a1 + self.b2 * other.b1,
            self.b1 * other.a2 + self.b2 * other.b2
        )

def quick_pow(matrix: Matrix, n: int) -> Matrix:
    res = Matrix(1, 0, 0, 1)
    while n:
        if n & 1:
            res = res * matrix
        matrix = matrix * matrix
        n >>= 1
    return res

if __name__ == '__main__':
    x = int(input())
    res = quick_pow(Matrix(0, 1, 1, 1), x - 1)
    print(res.a1 + res.a2)
```

:::

斐波那契数列的快速的递归算法[^3]

[^3]: oi-wiki，斐波那契数列，<https://oi-wiki.org/math/fibonacci/>

::: code-tabs#code

@tab cpp

```cpp
pair<int, int> fib(int n) {
    if (n == 0)
        return {0, 1};
    auto p = fib(n >> 1);
    int c = p.first * (2 * p.second - p.first);
    int d = p.first * p.first + p.second * p.second;
    if (n & 1)
        return {d, c + d};
    else
        return {c, d};
}
```

@tab python

```python
def fib(n: int) -> tuple[int, int]:
    if n == 0:
        return 0, 1
    p = fib(n >> 1)
    c = p[0] * (2 * p[1] - p[0])
    d = p[0] * p[0] + p[1] * p[1]
    if n & 1:
        return d, c + d
    else:
        return c, d
```

:::
