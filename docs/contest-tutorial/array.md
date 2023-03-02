---
title: 数组优化
description: 数组优化
---

# 数组优化

[[TOC]]

## 1. C++ 数组初始化

C++ 数组初始化，对于不同类型的数组，可以使用 `memset()` 来初始化。

```cpp
#include <cstring>

int a[10001];
double d[10001];

int main() {
    // 初始化为 0
    memset(a, 0, sizeof(a));
    // 初始化为很大的数（0x7f7f7f7f = 2139062143）
    memset(a, 0x7f, sizeof(a));
    // 初始化为很小的数（0xafafafaf = -1347440721）
    memset(a, 0xaf, sizeof(a));

    // 初始化为 0
    memset(d, 0, sizeof(d));
    // 初始化为很大的数（1.38242e+306）
    memset(d, 0x7f, sizeof(d));
}
```

## 2. Python 数组初始化

Python 的数组比较灵活，可以初始化为任何值。

```python
n = 100003
m = 100

# 初始化一个一维数组
a = [0] * n

# 初始化一个二维数组
a = [[0] * n for _ in range(m)]

# 初始化为 inf
a = [inf] * n
```
