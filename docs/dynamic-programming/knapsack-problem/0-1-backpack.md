---
title: 0-1 背包
description: 0-1 背包
---

# 0-1 背包

## 1. 0-1 背包理论

有 $n$ 件物品和一个最多能承受重量为 $w$ 的背包，第 $i$ 件物品的重量是 $\mathrm{weight}[i]$，其价值是 $\mathrm{value}[i]$，每件物品只能使用一次，求解哪些物品装入背包后可以使物品价值总和最大（$i$ 从 $1$ 开始）。

## 2. 基本思路

使用 $\mathrm{dp}[i][j]$ 表示前 $i$ 件物品放入容量为 $j$ 的背包的可以获得的最大价值，其状态转移方程为

$$
\mathrm{dp}[i][j] = \max\{
    \mathrm{dp}[i-1][j],\,
    \mathrm{dp}[i][j - \mathrm{weight}[i]] + \mathrm{value}[i]
\}
$$

::: code-tabs#code

@tab cpp

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = w; j >= 0; j--) {
        if (j >= weight[i]) {
            dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}
```

@tab python

```python
dp = [[0] * (w + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    for j in range(w, -1, -1):
        if j >= weight[i]:
            dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
        else:
            dp[i][j] = dp[i - 1][j]
```

:::

时间复杂度为 $O(nw)$，空间复杂度为 $O(nw)$ 。

## 3. 滚动数组

不难看出，推导 $\mathrm{dp}[i]$ 过程中只出现了 $\mathrm{dp}[i-1]$，所以，空间复杂度是否可以被优化呢？显然，我们可以使用滚动数组，即一维的数组代替二维数组。

二维的遍历顺序和一维就不同了，**顺序很重要**，需要 **逆序遍历** 以保证每个物品只会被统计一次：

$$
\mathrm{dp}[j] = \max\{
    \mathrm{dp}[j],\,
    \mathrm{dp}[j - \mathrm{weight}[i]] + \mathrm{value}[i]
\}
$$

时间复杂度为 $O(nw)$，空间复杂度为 $O(w)$ 。

::: tip 逆序遍历

为什么逆序可以保证每个物品被遍历一次？因为 $j-\mathrm{weight}[i] < j$，所以先算之前的才能保证后面的值不被污染。如果是顺序遍历则是完全背包问题了。

:::

模板代码为：

::: code-tabs#code

@tab cpp

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = w; j >= weight[i]; j--) {
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
    }
}
```

@tab python

```python
dp = [0] * (w + 1)
for i in range(1, n + 1):
    for j in range(w, weight[i] - 1, -1):
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
```

:::

## 4. 模板总结

非滚动数组：

```c
for 1 .. n
    for w .. 0
        dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
```

滚动数组：

```c
for 1 .. n
    for w .. weight[i]
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
```

全部取等号，其中 `w .. 0` 中 `0` 可以不取，为了避免记错建议全部取等号。

## 5. 获取背包的内容

在不使用滚动数组的情况下，很容易获得背包内的物品：

```cpp
int j = w;
for (int i = n; i >= 1; i--) {
    if (dp[i][j] > dp[i - 1][j]) {
        cout << i << " ";
        j -= weight[i];
    }
}
```

当我们使用滚动数组的时候，就需要使用额外的数组来记录结果。此处为了避免麻烦，直接使用非滚动数组版本的即可。

<!-- 能否通过滚动数组获得背包内物品？

暂时没有找到解决方法，一种观点是认为空间使用 $O(w)$ 的时间复杂度不能获得背包中有哪些物品，也就是说，要得到结果至少需要 $O(nw)$ 的空间复杂度。

猜测：存在空间复杂度为 $O(w + n)$ 的解法可以得到背包内的物品。 -->

## 附录：背包与贪心问题

可以证明，背包问题是不可以通过贪心来判断是否填入物品的。如果在选择物品 $i$ 装入背包时，可以选择物品的一部分，而不一定要全部装入背包。这时便可以使用贪心算法求解了。

计算每种物品的单位重量价值（即性价比）作为选择的依据指标，选择单位重量价值最高的物品，将尽可能多的该物品装入背包，依此策略一直地进行下去，直到背包装满为止。

在 0-1 背包问题中贪心选择之所以不能得到最优解原因是贪心选择无法保证最终能将背包装满，部分闲置的背包空间使每公斤背包空间的价值降低了。

举个简单的例子：一个背包的容量是 $10\,\rm kg$
- 物品 $A$ 重 $7\,\rm kg$，价值为 $14$ 元
- 物品 $B$ 重 $6\,\rm kg$，价值为 $11$ 元
- 物品 $C$ 中 $4\,\rm kg$，价值为 $7$ 元

从性价比来看，$A$ 最高，但是将 $A$ 放到背包里以后，无法放进其他物品了，此时总价值为 $14$ 元；显然，本问题的最佳方案为将 $B$、$C$ 放入背包，总价值为 $18$ 元。

这就是背包问题为什么能用动态规划算法，而不能用贪心法。
