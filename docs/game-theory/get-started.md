# 博弈论简介

*@def* **博弈论** 又称 **对策论**（Game Theory），既是现代数学的一个新分支，也是运筹学的一个重要学科。本章重点介绍 **公平组合游戏**。

[[TOC]]

## 1. 非公平组合游戏

*@def* **非公平组合游戏**（Partizan Game）与公平组合游戏的区别在于在非公平组合游戏中，游戏者在某一确定状态可以做出的决策集合与游戏者有关。

大部分的棋类游戏都不是公平组合游戏，如国际象棋、中国象棋、围棋、五子棋等（因为双方都不能使用对方的棋子）。

## 2. 公平组合游戏

*@def* 在算法问题中出现的博弈论问题往往是 **公平组合游戏**（Impartial Combinatorial Games, ICG）问题，这类题目有如下特征：
1. 有两名选手
2. 两名选手交替操作，每次一步，每步都是在有限的合法集合中选取一种进行
3. 在任何情况下，合法操作只取决于情况本身，与选手无关
4. 游戏败北条件：当某位选手需要进行操作时，当前没有任何可执行的合法操作，则该选手败北

## 3. 反常游戏

*@def* **反常游戏**（Misère Game）按照传统的游戏规则进行游戏，但是其胜者为第一个无法行动的玩家。以 Nim 游戏为例，Nim 游戏中取走最后一颗石子的为胜者，而反常 Nim 游戏中取走最后一刻石子的为败者。

部分反常游戏也可以通过公平组合游戏推得结论。

## 4. 常见的公平组合游戏

下面介绍几种 ICG 博弈的实际问题。

### 4.1 简化的 Nim 博弈（Nim Game）

题目链接：[LeetCode: 292. Nim 游戏](https://leetcode.cn/problems/nim-game/)。

你和你的朋友，两个人一起玩 Nim 游戏：
- 桌子上有一堆石头
- 你们轮流进行自己的回合，你作为先手
- 每一回合，轮到的人拿掉 $1 \sim 3$ 块石头
- 拿掉最后一块石头的人就是获胜者

假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 $n$ 的情况下赢得游戏。如果可以赢，返回 `true`；否则，返回 `false`。

::: info 简化版 Nim 游戏

注意，此处的 **简化的 Nim 博弈** 相当于下面的 **Nim 游戏** 的简化版本，在下面所有的名词 **Nim 游戏** 不会指代这个简化版本。

:::

模拟推导可以得出结论，然后使用数学归纳法即可证明，当 $n \mathop{\%} 4 = 0$ 时，先手必输，否则先手必赢。

代码如下：

::: code-tabs#code

@tab cpp

```cpp
class Solution {
public:
    bool canWinNim(int n) {
        return n & 3;
    }
};
```

@tab python

```python
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0
```

:::

### 4.2 除数博弈（Divisor Game）

题目链接：[LeetCode: 1025. 除数博弈](https://leetcode.cn/problems/divisor-game/)

爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 $n$。在每个玩家的回合，玩家需要执行以下操作：
- 选出任一 $x$，满足 $0 < x < n$ 且 $n \mathop{\%} x = 0$
- 用 $n - x$ 替换黑板上的数字 $n$。

如果玩家无法执行这些操作，就会输掉游戏。只有在爱丽丝在游戏中取得胜利时才返回 `true`。假设两个玩家都以最佳状态参与游戏。

模拟推导可以得出结论，然后使用数学归纳法即可证明，当 $n$ 为奇数时，先手必输，否则先手必赢。

代码如下：

::: code-tabs#code

@tab cpp

```cpp
class Solution {
public:
    bool divisorGame(int n) {
        return !(n & 1);
    }
};
```

@tab python

```python
class Solution:
    def divisorGame(self, n: int) -> bool:
        return n % 2 == 0
```

:::

### 4.3 巴什博奕（Bash Game）

一堆 $n$ 个石子，两个人轮流取出 $1 \sim  m$ 个石子，最后一个取光者胜出。

根据同余定理，$n = k\left(m+1\right) + r$，先手取 $r$ 个后者无论拿走多少个都不可能胜出。也就是说，$n$ 只要为 $m+1$ 倍数先手就必输。

数学归纳法易证明，代码如下：

::: code-tabs#code

@tab cpp

```cpp
bool bashGame(int n) {
    return n % (m + 1);
}
```

@tab python

```python
def bashGame(m: int, n: int) -> bool:
    return bool(n % (m + 1)):
```

:::

### 4.4 威佐夫博弈（Wythoff Game）

有两堆各若干个石子，两人轮流从任意一堆中取出至少一个或同时从两堆中取出同样多的石子，规定每次至少取一个，至多不限，最后取光者胜利。

本题证明复杂，此处不予证明。

设黄金分割率为 $\Phi$：

$$
\Phi = \frac{\sqrt{5} + 1}{2}
$$

设两堆石子分别有 $a,\,b$ 个，不妨设 $a \geqslant b$，那么先手必输的情况为：

$$
\left\lfloor\Phi\cdot\left(a-b\right)\right\rfloor = b
$$

::: code-tabs#code

@tab cpp

```cpp
bool wythoffGame(int a, int b) {
    double phi = (sqrt(5.0) + 1.0) / 2.0;
    return (int)(phi * (double)abs(a - b)) != min(a, b);
}
```

@tab python

```python
def wythoffGame(a: int, b: int) -> bool:
    phi = (5 ** 0.5 + 1) / 2
    return int(phi * abs(a - b)) != min(a, b)
```

:::

### 4.5 Nim 博弈（Nim Game）

$n$ 堆石子，两个人轮流取，每次取某堆若干石子，但不能不取，最后取完者获胜。

数学归纳法证明：
1. 最终状态异或和为 $0$
2. 对于任意一个必胜态（异或和不为 $0$），存在一个必败后继状态（异或和为0）。设 $a_1 \oplus a_2 \oplus \cdots \oplus a_n = S$，一定存在 $a_i$ 在 $S$ 的最高位为 $1$，只要改变 $a_i$ 使这一位为 $0$，后面的位相应改变使总体异或和为 $0$ 即可
3. 对于任意一个必败态（异或和为 $0$），不存在一个必败后继状态（异或和为 $0$）

将 $n$ 堆石子数量全部异或后结果为 $0$ 则先手必败，否则必胜。

::: code-tabs#code

@tab cpp

```cpp
bool nimGame(vector<int>& nums) {
    int res = 0;
    for (auto val : nums)
        res ^= val;
    return res;
}
```

@tab python

```python
def nimGame(nums: list[int]) -> bool:
    res = 0
    for val in nums:
        res ^= val
    return res != 0
```

:::

如果每次最多只能取 $k$ 个，那么每一堆石子都需要对 $k+1$ 取模。

对于一般的博弈论问题，我们使用 [SG 定理](./sprague-grundy.md) 转换为 Nim 博弈问题。
