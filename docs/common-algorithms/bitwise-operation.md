# 位运算

[[TOC]]

## 1. 位运算的功能

*@def* **位运算** 是基于整数的二进制表示进行的运算。从编程者的角度还是数字之间的运算，而计算机本身就是使用二进制进行运算，所以效率相当高。

位操作是多数 CPU 支持的基本操作，大多数 CPU 指令集中均支持不同类型的位运算。

我们先观察 x86 的指令语法，注释后面是等价的 C 语言语句：

| 汇编代码   | C 代码     |
| ---------- | ---------- |
| `xor a, b` | `a ^= b;`  |
| `or  a, b` | `a \|= b;` |
| `and a, b` | `a &= b;`  |
| `not a   ` | `~a;`      |

我们发现这些汇编指令和 C 语言的语句是一一对应的。说明它足够底层高效，见代码即知汇编。

注意不同语言的位运算是有区别的
- C/C++ 是由编译器处理的的，溢出不在运行时报错，但编译会报告 `warning`
- Java 不支持超过范围的左移操作
- JavaScript 除了大整数外，将所有的数字存储为 `64` 位浮点数，操作之前先将所有数字转换为 `signed int32` 类型，因此即使是浮点数也可以参与位运算，对于超过精度的数字会取模，对于非整数会转换为整数
- Python 的左移是无限精度的，不会出现符号变化，但如果对于大整数的左移会使程序卡死（因为程序尝试使用更大的空间表示这个巨无霸数字）

::: warning 混用有符号数

不要混合使用有符号数和无符号数字进行位运算或比较运算，可能导致灾难！也不要使用不同大小（位宽度）的类型进行比较和位运算，虽然大多数情况下编译器会为你纠正！

:::

下面所说的所有技巧都是可以用但未必一定要用的技巧，你不必为了追求代码的高效而降低代码的可读性，这是得不偿失的，而且编译器做的优化会比你想象的充分。大多数场合下，你不必为每一个字节、每一个指令做优化。

## 2. 位运算优先级

以 C/C++ 为例，优先级如下
1. `~` 按位取反
2. `+ -` 加减
3. `<< >>` 位移
4. `&` 按位与
5. `^` 异或
6. `|` 按位或

> 不同语言的运算符优先级略有区别，总体如上所示。

## 3. 位运算详解

### 3.1 按位与

`a & b` 表示将相应的二进制位执行 **与** 运算后输出结果，因此两个负数执行后是负数，否则都是正数。

```c
194      = 0b11000010
73       = 0b01001001
194 & 73 = 0b01000000 = 64
```

- 常元律 $0\ \&\ a = 0,\,(\sim 0)\ \&\ a = a$
- 交换律 $a\ \&\ b = b\ \&\ a$
- 结合律 $(a\ \&\ b)\ \&\ c =a \ \&\ (b\ \&\ c)$
- 等幂律 $a\ \&\ a = a$
- **不满足** $(a + b)\ \&\ c = (a\ \&\ c) + (b\ \&\ c)$

> $\sim 0$ 等于 $-1$，在位运算中相等于被操作数每一位都是 $1$，即对于 32 位整数，表示 `0xffffffff`。

::: tip 技巧 1：取模

有的时候我们要取模的值可以表示为 $2^n$，我们发现 $a\ \%\ 2^n$ 和 $a\ \&\ (2^n-1)$ 的值总是一样的，而取模的操作的低效的（编译器也可能帮你优化），这个时候可以优化性能。例如，你需要计算 `a % 4`，你总是可以直接计算 `a & 3`。

:::

::: tip 技巧 2：位设置

还有一个用处就是当你需要对数字 `a` 的某一个位设置为 `0`，那么使用 `a & 0b1111011111111111`，下面也会指出更简洁的方法。

:::

### 3.2 按位或

`a | b` 表示将相应的二进制位执行 **或** 运算后输出结果，因此有一个负数那么结果是负数，都是正数才是正数。

```c
194      = 0b11000010
73       = 0b01001001
194 & 73 = 0b11001011 = 203
```

- 常元律 $0\ |\ a = a,\,(\sim 0)\ |\ a = \sim 0$
- 交换律 $a\ |\ b = b\ |\ a$
- 结合律 $(a\ |\ b)\ |\ c =a \ |\ (b\ |\ c)$
- 等幂律 $a\ |\ a = a$
- **不满足** $(a + b)\ |\ c = (a\ |\ c) + (b\ |\ c)$

::: tip 技巧 1：位设置

当你需要将某一个位设置为 `1`，那么你可以使用 `a | 0b00001000`。

:::

### 3.3 异或

`a ^ b` 异或的每一个二进制位是两个二进制位相等时为 `0`，不同时为 `1`。

> 注意，部分语言如 VB，用 `^` 表示幂，而用 `XOR` 表示异或。

```c
194      = 0b11000010
73       = 0b01001001
194 ^ 73 = 0b10001011 = 139
```

我们用 $\oplus$ 表示异或
- 常元律 $0\ \oplus\ a = a,\,(\sim 0)\ \oplus\ a = \sim a,\,a\ \oplus\ a = 0$
- 交换律 $a\ \oplus\ b = b\ \oplus\ a$
- 结合律 $(a\ \oplus\ b)\ \oplus\ c =a \ \oplus\ (b\ \oplus\ c)$
- 自反律 $a\ \oplus\ b\ \oplus\ b = a$
- **不满足** $(a + b)\ \oplus\ c = a\ \oplus\ c + b\ \oplus\ c$

设

$$
\bigoplus_{i=1}^n{a_i} = a_1 \oplus a_2 \oplus \cdots
\oplus a_n
$$

这表示对数组 $a_i$ 的数计算累计异或。

::: tip 技巧 1：找不同

异或可以用来找不同，依据如下性质

- $a \oplus a = 0$
- $a \oplus 0 = a$

给定一个数组，除了 $x$ 每个数字都出现两次，那么所有数字异或后为 $x$，因为一个数字异或两次就是 `0`。

:::

::: tip 技巧 2：位设置

你也可以使用异或翻转某个特定的二进制位，例如 `a ^ 0b00000100000`。

:::

### 3.4 按位取反

```c
123  =  0b1111011
~123 = -0b1111100 = -124
```

`~a` 将每一个二进制取反，不考虑符号位，因此执行两次后这个数字还是原数 `~~x == x`。计算效果上相当于计算 $-a-1$。

::: tip 技巧 1：位取反

你需要对全部二进制位取反，或者你想计算 $-a-1$ 的时候，使用 `~a`。

例如 `~123 = -124`，`~-124 = 123`。

:::

### 3.5 左移

`a << b`，逻辑左移跟算术左移完全一样，将所有二进制位向左移动，右边补 `0`。效果相当于这个数字乘上 $2^k$，$k$ 为左移的位数。

```c
123 << 3 = 984
```

::: tip 技巧 1：计算幂

考虑到位移的意义，你可以使用左移进行快速乘法
- 如果你想计算 $a \times 2$，那么只需 `a << 1`，因为 $4 = 2^1$
- 如果你想计算 $a \times 8$，那么只需 `a << 3`，因为 $8 = 2^3$

有符号数的符号位也参与运算，因此最高位如果进入符号位，这个数字的符号会发生变化。

:::

### 3.6 右移

```c
12345 >> 6 = 192
```

`a >> b` 表示右移，逻辑右移跟算术右移则不一样。

大多数语言 **对有符号数实行算数右移，对无符号数实行逻辑右移**。算数右移和逻辑右移唯一的区别是，最高位补的数字是什么：
- 逻辑右移一律补 `0`
- 算数右移在最高位是 `1` 时补 `1`，在最高位是 `0` 时补 `0`

右移的效果相当于这个数字除以 $2^k$，$k$ 为右移的位数。

::: tip 技巧 1：快速除法

快速执行除法
- 如果你想计算 $a / 2$，那么只需 `a >> 1`，因为 $1/2 = 2^{-1}$
- 如果你想计算 $a / 8$，那么只需 `a >> 3`，因为 $1/8 = 2^{-3}$

:::

### 3.7 无符号右移

`a >>> b` 无符号右移，Java 和 JavaScript 支持无符号右移。无符号右移是对有符号数补 `0`。因此执行后都是正数，除了移动 `0` 位。

```java
-123       = -0b1111011
3          =  0b0000011
-123 >>> 3 =  0b11111111111111111111111110000 = 536870896
```

> 大多数语言没有无符号右移，如果你希望右移总是无符号的，请使用无符号数字参与运算。

### 3.8 公式总结

$$
\begin{aligned}
    x \oplus y &= (\sim x\ \&\ y) \mid (x\ \&\ \sim y) \\
    -a &= \ \sim a + 1 \\
\end{aligned}
$$

## 4. 位运算总结

### 4.1 交换两个数

```cpp
a ^= b;
b ^= a;
a ^= b;
```

### 4.2 快速最小公倍数

```cpp
inline int gcd(int a, int b) {
    while (b ^= a ^= b ^= a %= b);
    return a;
}
```

### 4.3 判断奇偶

根据 `a & 1` 等价于 `a % 2`。

### 4.4 符号相同

`a ^ b >= 0`

### 4.5 第 `i+1` 位

- 取出值 `a & (1 << i)`
- 置一 `a |= 1 << i`
- 置零 `a &= ~(1 << i)`
- 翻转 `a ^ (1 << i)`

### 4.6 最低有效位

- 获取最低有效位 `a & (-a) = a & (~a + 1)`

> 参考 [位运算的性质和应用](https://www.jianshu.com/p/7faf7c22c146)

### 4.7 绝对值

```cpp
typedef long long ll;
#define LL_SIZE_M1 sizeof(ll) * 8 - 1

inline ll llabs(ll a) {
    return (a ^ (a >> LL_SIZE_M1)) - (a >> LL_SIZE_M1);
}
```

这里 `LL_SIZE_M1` 应当被编译器优化为常数。
