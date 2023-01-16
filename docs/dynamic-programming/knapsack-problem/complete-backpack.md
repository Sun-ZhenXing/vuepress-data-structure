---
title: 完全背包
description: 完全背包
---

# 完全背包

## 1. 完全背包定义

完全背包指的是，有 $n$ 件物品和一个最多能承受重量为 $w$ 的背包，第 $i$ 件物品的重量是 $\mathrm{weight}[i]$，其价值是 $\mathrm{value}[i]$，每件物品可以使用无限次，求解哪些物品装入背包后可以使物品价值总和最大（$i$ 从 $1$ 开始）。

完全背包和 0-1 背包在未使用滚动数组时很相似，只不过遍历背包大小时必须要正序遍历。

::: tip 遍历方式对比

0-1 背包：

```cpp
dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
```


完全背包：

```cpp
dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i]] + value[i])
```

:::

注意到：完全背包的项是 `dp[i][j - weight[i]] + value[i]`，这是因为这个项是从可能已经选择了这个物品这个状态推导出来的，而 `dp[i - 1][j - weight[i]] + value[i]` 则是不可能选择这个物品的状态。根据表达式，在遍历时必须正序遍历。

二维数组版本：

::: code-tabs#code

@tab cpp

```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 0; j <= w; j++) {
        if (j >= weight[i]) {
            dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i]] + value[i]);
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
    for j in range(w + 1):
        if j >= weight[i]:
            dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i]] + value[i])
        else:
            dp[i][j] = dp[i - 1][j]
```

:::

有意思的是，使用滚动数组后和 0-1 背包两个表达式一致，只有遍历顺序相反。

::: code-tabs#code

@tab cpp


```cpp
for (int i = 1; i <= n; i++) {
    for (int j = weight[i]; j <= w; j++) {
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);
    }
}
```

@tab python

```python
dp = [0] * (w + 1)
for i in range(1, n + 1):
    for j in range(weight[i], w + 1):
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
```

:::

## 2. 模板总结

非滚动数组：

```c
for 1 .. n
    for 0 .. w
        dp[i][j] = max(dp[i - 1][j], dp[i][j - weight[i]] + value[i])
```

滚动数组

```c
for 1 .. n
    for weight[i] .. w
        dp[j] = max(dp[j], dp[j - weight[i]] + value[i])
```

## 3. 获取完全背包内的物品

::: code-tabs#code

@tab cpp

```cpp
int j = w;
for (int i = n; i >= 1; i--) {
    while (dp[i][j] > dp[i - 1][j]) {
        cout << i << " ";
        j -= weight[i];
    }
}
```

@tab python

```python
j = w
for i in range(n, 0, -1):
    while dp[i][j] > dp[i - 1][j]:
        print(i, end=' ')
        j -= weight[i]
```

:::

其实就是将 0-1 背包的 `if` 换成了 `while`，因为每个物品可能被使用不止一次。
