# 算法

## 1. 算法的基本概念

对于给定问题，算法就是用计算机求解这个问题的方法。一般来说，一个算法具有有限条指令构成，每条指令规定了计算机所要执行的有限次运算或操作。

定义：
- *@def* **问题**：需要回答的一般性提问，通常含有若干参数，为了清晰地描述一个问题，需要说明参数的含义和解所满足的条件。如果对问题参数给出一组赋值，就得到了一个问题的实例
- *@def* **算法**：有限条指令序列，这个指令序列确定了解决某个问题的运算或操作的步骤。算法 $A$ 解决问题 $P$ 指的是：把问题 $P$ 的任何实例作为算法 $A$ 的输入，$A$ 能够在有限步停机，并输出该实例的正确解
- *@def* **算法的时间复杂度**：对于算法的效率的度量，一般做法是针对问题选择基本运算，用基本运算次数来表示算法的效率，运算符次数越多，效率就越低。这还和数据的规模和数据的具体内容有关，详细定义参见 *@TODO* 复杂度分析。

*@def* **最坏情况下的时间复杂度** 为 $W(n)$，代表该算法求解输入规模为 $n$ 的实例所需的最长时间。

*@def* **平均情况下的时间复杂度** 为 $A(n)$，代表了该算法求解输入规模为 $n$ 的实例所需的平均时间。

## 2. 伪代码编写

*@def* **伪代码** 是方便人理解和分析的代码，而非一定可执行的代码。伪代码通常用于分析问题，忽略了真实的实现细节。伪代码应该专注于算法的设计与分析，具体的实现应该由具体的语言编写。

定义符号：
- 赋值语句：$=$ 或者 $\gets$
- 分支语句：$\bold{if} \cdots \bold{then} \cdots [\bold{else\; if}\cdots][\bold{else}\cdots]$
- 循环语句：
    - $\bold{while}\cdots\bold{do}\cdots$
    - $\bold{for}\cdots\bold{to}\cdots\bold{do}$
    - $\bold{repeat}\cdots$
    - $\bold{do}\cdots\bold{until}\cdots$
- 跳转：$\bold{goto}$
- 输出语句：$\bold{return}$
- 注释：$\text{//} \cdots$

伪代码的语句通常有标号，这也是为了分析和表示方便。

有时，伪代码可以直接使用自然语言描述出来，伪代码不定义什么是非法语句。如果前面已经实现了某种算法，后面需要的时候可以直接使用自然语言描述。常见的操作也可以使用自然语言描述。

例如，$\mathrm{Euclid}$ 算法用于计算 $m$ 和 $n$ 的最大公约数：

**算法**：$\mathrm{Euclid}(m,\,n)$

输入：非负整数 $m,\,n$，其中 $m$ 与 $n$ 不全为 $0$

输出：$m$ 与 $n$ 的最大公约数

1. $\textbf{while } m > 0 \textbf{ do}$
2. $\qquad r \gets n \bmod m$
3. $\qquad n \gets m$
4. $\qquad m \gets r$
5. $\textbf{return } n$

## 3. 算法的数学基础

关于程序的复杂度表示请参考 *@TODO* 复杂度分析。

### 3.1 函数的渐进的界

给出下列定义：
1. *@def* 若存在正数 $c$ 和 $n_0$ 使得对于 $\forall\,n \geqslant n_0$ 有 $0 \leqslant f(n) \leqslant cg(n)$ 成立，则称 $f(n)$ 的 **渐进的上界** 是 $g(n)$，记作 $f(n) = O(g(n))$
2. *@def* 若存在正数 $c$ 和 $n_0$ 使得对于 $\forall\,n \geqslant n_0$ 有 $0 \leqslant cg(n) \leqslant f(n)$ 成立，则称 $f(n)$ 的 **渐进的下界** 是 $g(n)$，记作 $f(n) = \Omega(g(n))$
3. 对于任意正数 $c$ 都存在 $n_0$，使得 $n \geqslant n_0$ 时有 $0 \leqslant f(n) < cg(n)$ 成立，则 $f(n) = o(g(n))$
4. 对于任意正数 $c$ 都存在 $n_0$，使得 $n \geqslant n_0$ 时有 $0 \leqslant cg(n) < f(n)$ 成立，则 $f(n) = \omega(g(n))$
5. $f(n) = O(g(n))$ 且 $f(n) = \Omega(g(n))$，则记作 $f(n) = \Theta(g(n))$

*@theorem* 设 $f$ 和 $g$ 是定义域为自然数集 $\mathbb{N}$ 上的非负函数，那么有：
1. 如果 $\lim\limits_{n \to \infty}\dfrac{f(n)}{g(n)}$ 存在，并且等于某个常数 $c > 0$，那么 $f(n) = \Theta(g(n))$
2. 如果 $\lim\limits_{n \to \infty}\dfrac{f(n)}{g(n)} = 0$，那么 $f(n) = o(g(n))$
3. 如果 $\lim\limits_{n \to \infty}\dfrac{f(n)}{g(n)} = +\infty$，那么 $f(n) = \omega(g(n))$

*@theorem* 设 $f,\,g,\,h$ 是定义域为自然数集 $\mathbb{N}$ 上的函数，那么有：
1. 如果 $f = O(g)$ 且 $g = O(h)$，那么 $f = O(h)$
2. 如果 $f = \Omega(g)$ 且 $g = \Omega(h)$，那么 $f = \Omega(h)$
3. 如果 $f = \Theta(g)$ 且 $g = \Theta(h)$，那么 $f = \Theta(h)$

*@theorem* 设 $f$ 和 $g$ 是定义域为自然数集 $\mathbb{N}$ 上的函数，若对于某个其他函数 $h$，有 $f = O(h)$ 和 $g = O(h)$，那么 $f + g = O(h)$。

*@theorem* 对于每个 $b > 1$ 和每个 $a > 0$，有 $\log_b n = o(n^a)$。

对数的另一条性质是：对于不同的底 $a$ 与 $b$，$\log_a n = \Theta(\log_b n)$，只需要使用对数的基本恒等式

$$
\log_a n = \frac{\log_b n}{\log_b a}
$$

即可证明。通常我们以 $\log n$ 指以 $2$ 为底的对数。

*@theorem* 对于每一个 $r > 1$ 和每一个 $d > 0$，有 $n^d = o(r^n)$。

阶乘函数 $f(n) = n!$ 是增长很快的函数，根据 [斯特林公式](./stirling-s-approximation.md)，阶乘函数

$$
n! = \sqrt{2\pi n}\left(\frac{n}{\mathrm{e} }\right)^n
\left(1 + \Theta\left(\frac{1}{n}\right)\right)
$$

关于阶乘函数有下面的结果：

$$
\begin{aligned}
    n! &= o(n^n) \\
    n! &= \omega(2^n) \\
    \log n! &= \Theta(n\log n)
\end{aligned}
$$

::: tip 阶乘

运算符 $!$ 的优先级大于加减乘除和其他常见运算符。

:::

下面列举常见函数的界的大小比较结果，从高到低排序：

| 函数                                 |
| ------------------------------------ |
| $2^{2^n}$                            |
| $n!$                                 |
| $n2^n$                               |
| $(3/2)^n$                            |
| $(\log n)^{\log n} = n^{\log\log n}$ |
| $n^3$                                |
| $\log n! = \Theta(n\log n)$          |
| $n = \Theta(2^{\log n})$             |
| $\log^2 n$                           |
| $\log n$                             |
| $\sqrt{\log n}$                      |
| $\log \log n$                        |
| $n^{1/\log n} = \Theta(1)$           |

取整函数也是常见的一类函数，向下取整函数 $\lfloor x\rfloor$ 相当于 C 语言的 `floor(x)`，向上取整函数 $\lceil x\rceil$ 相当于 C 语言的 `ceil(x)`。

取整函数具有下列性质：
1. $x - 1 < \lfloor x \rfloor \leqslant x \leqslant \lceil x\rceil < x + 1$
2. $\lfloor x + n\rfloor = \lfloor x\rfloor + n$，$\lceil x + n\rceil = \lceil x\rceil + n$，其中 $n$ 为整数
3. $\left\lceil\dfrac{n}{2}\right\rceil + \left\lfloor\dfrac{n}{2}\right\rfloor = n$，其中 $n$ 为整数
4. $\left\lceil\dfrac{\left\lceil n / a\right\rceil}{b}\right\rceil = \left\lceil\dfrac{n}{ab}\right\rceil$，$\left\lfloor\dfrac{\left\lfloor n / a\right\rfloor}{b}\right\rfloor = \left\lfloor\dfrac{n}{ab}\right\rfloor$，其中 $a,\,b,\,n$ 为整数

关于算法中常见的函数，其他章节也会进行讨论。
