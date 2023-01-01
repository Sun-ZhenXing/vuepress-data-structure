---
title: 素数筛法
description: 素数筛法
---

# 素数筛法

如何计算不大于 $n$ 的素数个数？暴力法是对每个数进行质数检验，这种方法不能得到最好的复杂度。[^1]

[^1]: 筛法，oi-wiki，<https://oi-wiki.org/math/number-theory/sieve/>

## 1. 暴力筛法

枚举 $1 \sim n$ 中的每一个数，逐个判断。

判断一个数是素数最坏的时间复杂度为 $O(\sqrt{n})$，循环 $n$ 次，时间复杂度 $O(n\log n)$，空间复杂度 $O(1)$。

算法实现如下：

::: code-tabs#code

@tab cpp

```cpp
bool isPrime(int n) {
    if (n < 2)
        return false;
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0)
            return false;
    }
    return true;
}

int countPrime(int n) {
    int res = 0;
    for (int j = 2; j <= n; ++j) {
        if (isPrime(j))
            ++res;
    }
    return res;
}
```

@tab python

```python
def is_prime(n: int) -> bool:
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

def count_prime(n: int) -> int:
    res = 0
    for i in range(2, n+1):
        if is_prime(i):
            res += 1
    return res
```

:::

## 2. 埃拉托斯特尼筛法

考虑一个事实：如果 $x$ 是合数，那么 $x$ 的倍数也一定是合数。利用这个结论，我们可以避免很多次不必要的检测。

如果我们从小到大考虑每个数，然后同时把当前这个数的所有（比自己大的）倍数记为合数，那么运行结束的时候没有被标记的数就是素数了。

以上思路即为 **Eratosthenes 筛法**（**埃拉托斯特尼筛法**，简称 **埃氏筛法**）。

时间复杂度 $O(n\log \log n)$。

提高埃筛法效率的几种方法
1. 筛至平方根
2. 只筛奇数
3. 位压缩
4. 分块筛选

## 2. 欧拉筛法

**欧拉筛法** 是一种线性筛法。与埃氏筛法相比，不会对已经被标记过的合数再进行重复标记，故效率更高。欧拉筛法将合数分解为最小质因数乘一个合数的形式，通过最小质因数来判断当前合数是否已经被标记过。
