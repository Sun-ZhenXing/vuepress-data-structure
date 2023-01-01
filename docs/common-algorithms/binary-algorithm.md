---
title: 二分算法
description: 二分算法
---

# 二分算法

## 1. 二分查找

**二分查找**（Binary Search），也称折半搜索（Half-Interval Search）、对数搜索（Logarithmic Search），是用来在一个有序数组中查找某一元素的算法。[^1]

[^1]: oi-wiki，二分，<https://oi-wiki.org/basic/binary/>

二分查找的最优时间复杂度为 $O(1)$。二分查找的平均、最坏时间复杂度均为 $O(\log n)$。因为在二分搜索过程中，算法每次都把查询的区间减半，所以对于一个长度为 $n$ 的数组，至多会进行 $O(\log n)$ 次查找。

迭代法空间复杂度为：$O(1)$，而递归法为 $O(\log n)$。

## 2. 代码实现

下面是基本二分查找，目标是在有序数组中快速找到这样一个数，搜索目标是闭区间 `[l, r]`。

::: code-tabs#code

@tab cpp

```cpp
int binary_search(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] < target)
            l = mid + 1;
        else if (arr[mid] > target)
            r = mid - 1;
        else
            return mid;
    }
    return -1;
}
```

@tab python

```python
def binary_search(arr: list[int], key: int) -> int:
    res = -1
    l = 0
    r = len(arr) - 1
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] < key:
            l = mid + 1
        elif arr[mid] > key:
            r = mid - 1
        else:
            res = mid
            break
    return res
```

:::

::: tip 防止溢出

计算 `mid` 时需要防止溢出，代码中 `l + (r - l) / 2` 和 `(l + r) / 2` 的结果相同，但是有效防止了 `l` 和 `r` 太大直接相加导致溢出。

如果为了防止减法的溢出，更彻底的做法是使用位运算：

```cpp
mid = (l & r) + ((l ^ r) >> 1);
```

:::

下面还有几种需求，例如查找左边界和右边界。我们模仿 C++ STL 库进行实现，即 `lower_bound()` 和 `upper_bound()` 的基本实现：

::: code-tabs#code

@tab cpp

```cpp
int lower_bound(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    if (l < n && arr[l] == target)
        return l;
    return -1;
}

int upper_bound(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] <= target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    if (r >= 0 && arr[r] == target)
        return r;
    return -1;
}
```

:::

## 3. 标准库实现

### 3.1 C++ STL 实现

C++ 标准库中实现了查找首个不小于给定值的元素的函数 `std::lower_bound()` 和查找首个大于给定值的元素的函数 `std::upper_bound()`，二者均定义于头文件 `<algorithm>` 中。

### 3.2 C 语言

C 语言标准库中有二分算法的实现 `bsearch()`，定义在 `<stdlib.h>` 中。

注意：`bsearch()` 与 `std::lower_bound()` 和 `std::upper_bound()` 有两点不同：
- 当符合条件的元素有重复多个的时候，会返回执行二分查找时第一个符合条件的元素，从而这个元素可能位于重复多个元素的中间部分
- 当查找不到相应的元素时，会返回 `NULL`

### 3.3 Python

标准库 `bisect` 包含 4 个函数
1. `bisect.bisect_left`：返回插入 `x` 的位置，最左插入
2. `bisect.bisect_right`：返回插入 `x` 的位置，最右插入
3. `bisect.insort_left`：插入 `x` 到列表中，最左插入
4. `bisect.insort_right`：插入 `x` 到列表中，最右插入

另外，还有两个别名
1. `bisect = bisect_right`
2. `insort = insort_right`

也就是说，默认情况下可以选择最右插入。

## 4. 二分答案

解题的时候往往会考虑枚举答案然后检验枚举的值是否正确。若满足单调性，则满足使用二分法的条件。把这里的枚举换成二分，就变成了 “二分答案”。

::: info 例题

参考 [Luogu P1873 砍树](https://www.luogu.com.cn/problem/P1873)

:::

## 5. 分数规划

请参考 [分数规划](https://oi-wiki.org/misc/frac-programming/)。

分数规划通常描述为下列问题：每个物品有两个属性 $c_i,\,d_i$，要求通过某种方式选出若干个物品，使得 $\dfrac{\sum c_i}{\sum d_i}$ 最大或最小。

经典的例子有最优比率环、最优比率生成树等等。分数规划可以用二分法来解决。

## 6. 三分法

三分法可以用来查找凸函数的最大（小）值。
- 如果 `lmid` 和 `rmid` 在最大（小）值的同一侧
    - 由于单调性，一定是二者中较大（小）的那个离最值近一些
    - 较远的那个点对应的区间不可能包含最值，所以可以舍弃
- 如果在两侧
    - 由于最值在二者中间，我们舍弃两侧的一个区间后，也不会影响最值，所以可以舍弃

```cpp
lmid = left + ((right - left) >> 1);
rmid = lmid + ((right - lmid) >> 1);
if (cal(lmid) > cal(rmid)) {
    right = rmid;
} else {
    left = lmid;
}
```
