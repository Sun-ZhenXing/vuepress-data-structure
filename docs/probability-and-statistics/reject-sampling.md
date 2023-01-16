---
title: 拒绝采样
description: 拒绝采样
---

# 拒绝采样

## 1. 拒绝采样的定义

简单分布的采样，如均匀分布、高斯分布、Gamma 分布等，在计算机中都已经实现，但是对于复杂问题的采样，就需要采取一些策略。拒绝采样就是一种基本的采样策略，其采样过程如下：[^1]

[^1]: 拒绝采样（reject sampling），知乎，<https://zhuanlan.zhihu.com/p/379473275>

给定一个概率分布 $p(z) = \dfrac{1}{Z_p}\tilde{p}(z)$，其中 $\tilde{p}(z)$ 已知，$Z_p$ 为归一化常数，未知。要对该分布进行拒绝采样。

首先定义一个参考分布 $G$，其概率密度函数为 $g(x)$，该分布可选均匀分布或高斯分布等。另外再定义一个辅助分布 $U(0,\,1)$ 为均匀分布。然后引入常数 $k$ 使得对所有的 $z$ 满足 $kg(z) \leqslant \tilde{p}(z)$，然后开始进行采样。在每次采样中先从 $g(z)$ 中采样一个 $z_0$，然后在区间 $[0,\,kg(z_0)]$ 里进行均匀采样，得到 $u_0$。如果 $u_0 < \tilde{p}(z_0)$ 则接受，保留该采样值，否则拒绝。最后得到的数据就是对该分布的一个近似采样。

所以使用接受-拒绝采样可以得到采样的概率分布。

## 2. 例题

### 2.1 用 Rand7 实现 Rand10

题目链接：[LeetCode: 470. 用 Rand7() 实现 Rand10()](https://leetcode.cn/problems/implement-rand10-using-rand7/)。

给定方法 `rand7()` 可生成 `[1, 7]` 范围内的均匀随机整数，试写一个方法 `rand10()` 生成 `[1, 10]` 范围内的均匀随机整数。

::: details 题目解答

我们假设，`rand7()` 可以生成一个两位的 7 进制数，只要生成两次就可以。生成这个 7 进制数一定是均匀分布，而 7 进制数 $66$ 的十进制值为 $48$，我们可以取前 $40$ 种情况有效，而拒绝 $40 \sim 48$ 内的值。

::: code-tabs#code

@tab cpp

```cpp
class Solution {
public:
    int rand10() {
        while (true) {
            int ones = rand7() - 1;
            int tens = (rand7() - 1) * 7;
            if (ones + tens < 40)
                return (ones + tens) % 10 + 1;
        }
    }
};
```

@tab python

```python
class Solution:
    def rand10(self):
        while True:
            ones = rand7() - 1
            tens = (rand7() - 1) * 7
            if ones + tens < 40:
                return (ones + tens) % 10 + 1
```

:::
