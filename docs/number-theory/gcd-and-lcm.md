---
title: 最大公约数与最小公倍数
description: 最大公约数与最小公倍数
---

# 最大公约数与最小公倍数

## 1. 最大公约数定义

*@def* 一组整数的 **公约数**，是指同时是这组数中每一个数的约数的数。是任意一组整数的公约数。

*@def* 一组整数的 **最大公约数**（Greatest Common Divisor，GCD），是指所有公约数里面最大的一个。

## 2. 欧几里得算法

**欧几里得算法**（Euclidean Algorithm）又称 **辗转相除法**，是求最大公约数的算法。辗转相除法首次出现于欧几里得的《几何原本》中，而在中国则可以追溯至东汉出现的《九章算术》。[^1]

[^1]: 辗转相除法，维基百科，<https://zh.wikipedia.org/wiki/%E8%BC%BE%E8%BD%89%E7%9B%B8%E9%99%A4%E6%B3%95>

### 2.1 递归法

递归法虽然极其简洁，但是由于栈调用开销，其空间复杂度会达到 $\mathcal{O}(\log n)$ 左右，因此实际上不会使用。

::: code-tabs#code

@tab cpp

```cpp
int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}
```

@tab python

```python
def gcd(a: int, b: int) -> int:
    return gcd(b, a % b) if b == 0 else a
```

:::

### 2.2 快速实现

下面是一些比较简单的欧几里得算法的实现。

普通版本：

::: code-tabs#code

@tab cpp

```cpp
int gcd(int a, int b) {
    if (b == 0)
        return a;
    int t;
    while (b != 0) {
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}
```

@tab python

```python
def gcd(a: int, b: int) -> int:
    if b == 0:
        return a
    while b != 0:
        t = a % b
        a = b
        b = t
    return a
```

:::

快速交换：

::: code-tabs#code

@tab cpp

```cpp
int gcd(int a, int b) {
    if (b == 0)
        return a;
    while (b ^= a ^= b ^= a %= b);
    return a;
}
```

@tab python

```python
def gcd(a: int, b:int) -> int:
    if b == 0:
        return a
    while b:
        a, b = b, a % b
    return a
```

:::

对称取模：

::: code-tabs#code

@tab cpp

```cpp
int gcd(int a, int b) {
    if (b)
        while ((a %= b) && (b %= a));
    return a + b;
}
```

@tab python

```python
def gcd(a: int, b: int) -> int:
    if b != 0:
        while (a := a % b) and (b := b % a):
            pass
    return a + b
```

:::

## 3. Stein 算法

用欧几里得算法求最大公约数确实很方便，但是对于求大整数的最大公约数的情况下却很慢（因为要取模）。

Stein 算法的时间空间复杂度都和欧几里得算法相同，而且只需要位移和加减求可以实现，在常数方面更为优秀。

原理：

$$
\gcd (ka,\,kb) = k\gcd(a,\,b),\, k \in \mathbb{N}
$$

通过定义，很容易得到上述结论，不再证明。

对于 $a,\,b$ 为奇数，还有下面的结论：
1. $\gcd(a,\,0) = a$
2. $\gcd(2a,\,2b) = 2\gcd(a,\,b)$
3. $\gcd(2a,\,b) = \gcd(a,\,b)$
4. $\gcd(a,\,b) = \gcd(\left|a-b\right|,\,\min(a,\,b))$

很显然，第 4 个式子两个奇数相减会出来一个偶数，那么就可以继续计算了。

下面的是该算法的非递归实现：

::: code-tabs#code

@tab cpp

```cpp
int stein(int a, int b) {
    int res = 1;
    int tmp = 0;
    while (true) {
        if (!a)
            return b * res;
        if (!b)
            return a * res;
        if (!(a & 1) && !(b & 1)) {
            res <<= 1;
            a >>= 1;
            b >>= 1;
        } else if (!(a & 1)) {
            a >>= 1;
        } else if (!(b & 1)) {
            b >>= 1;
        } else {
            tmp = abs(a - b);
            b = min(a, b);
            a = tmp;
        }
    }
}
```

@tab python

```python
def stein(a: int, b: int) -> int:
    res = 1
    while True:
        if a == 0:
            return b * res
        if b == 0:
            return a * res
        if a & 1 == 0 and b & 1 == 0:
            res <<= 1
            a >>= 1
            b >>= 1
        elif a & 1 == 0:
            a >>= 1
        elif b & 1 == 0:
            b >>= 1
        else:
            a, b = abs(a - b), min(a, b)
```

:::

## 4. 扩展欧几里得算法



## 5. 最小公倍数

*@def* 一组整数的 **公倍数**，是指同时是这组数中每一个数的倍数的数。$0$ 是任意一组整数的公倍数。

*@def* 一组整数的 **最小公倍数**（Least Common Multiple，LCM），是指所有正的公倍数里面最小的数。

存在下面的结论

$$
\mathrm{lcm}(a,\,b) = \frac{ab}{\gcd(a,\,b)}
$$

也就是说，想求最小公倍数，只需求最大公约数即可。

## 3. 标准库实现

::: tabs#code

@tab cpp

在 C++ 14 及之前，部分 C++ 实现中包含 `std::__gcd` 函数，定义在 `<algorithm>` 头文件中。但是各类实现不能保证稳定（例如对负数处理有不同的问题），不建议使用。

在 C++ 17 后可以使用标准的 `std::gcd` 函数和 `std::lcm` 函数，其定义在 `<numeric>` 中，而且支持各种不同的数字类型：

```cpp
template< class M, class N >
constexpr std::common_type_t<M, N> gcd( M m, N n );

template< class M, class N >
constexpr std::common_type_t<M, N> lcm( M m, N n );
```

对于 `std::gcd` 函数，若 $m$ 和 $n$ 都为零，返回 $0$，否则返回 $|m|$ 和 $|n|$ 的最大的公约数。

对于 `std::lcm` 函数，若 $m$ 和 $n$ 都为零，返回 $0$，否则返回 $|m|$ 和 $|n|$ 的最小公倍数。

@tab python

包含 Python 3.9 新特性，确保版本满足后使用。

```python
from math import gcd, lcm

# 函数声明
def gcd(*integers: SupportsIndex) -> int: ...

def lcm(*integers: SupportsIndex) -> int: ...
```

对于 `math.gcd`：
- Python 3.5 新增功能，其中 Python 3.5 - 3.8 只支持两个参数
- Python 3.9 修改功能，支持任意多个参数，如果参数全为零或不传参数则返回 $0$，否则返回正的最大公约数

对于 `math.lcm`：
- Python 3.9 新增功能，支持任意多个参数，如果参数全为零返回 $0$，如果没有参数返回 $1$，否则返回正的最小公倍数

:::
