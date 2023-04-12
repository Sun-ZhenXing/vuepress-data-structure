# 数学符号定义

[[TOC]]

## 1. 公式和字体

数学公式排版将使用 $\LaTeX$，如果有其他可能的规范亦可能应用。

字体标准：
1. 标准：部分变量或文本 $\text{abcd}$
2. 斜体：标量、变量 $a,\,b,\,c$
3. 粗体：常量或其他 $\mathbf{C},\,\mathbf{R}$
4. 粗斜体：向量、矩阵 $\boldsymbol{a},\,\boldsymbol{M}$
5. 空心体：部分数集 $\mathbb{C},\,\mathbb{R}$

## 2. 基本

1. 空集：$\emptyset$
2. 向下取整：$\lfloor x \rfloor$
3. 向上取整：$\lceil x \rceil$
4. 阶乘：$n!$
5. 对数：$\log m$

如果对数不包含底数，这表明此处的底数不讨论。如果需要底数，若不说明，对数都是指 **香农对数**，即底数为 $2$ 的对数。

## 3. 证明中的符号

|       符号        | 含义      |
| :---------------: | --------- |
|     $\forall$     | 任意      |
|     $\exist$      | 存在      |
|    $\because$     | 因为      |
|   $\therefore$    | 所以      |
| $\mathrm{Q.E.D}$  | 证毕      |
| $\mathrm{Proof:}$ | 开始证明  |
|  $\mathrm{s.t.}$  | 使得…满足 |
|  $\mathrm{LHS}$   | 等式左边  |
|  $\mathrm{RHS}$   | 等式右边  |
|  $\mathrm{iff}$   | 当且仅当  |
|      $\iff$       | 当且仅当  |
|  $\mathrm{i.e.}$  | 补充说明  |
|  $\mathrm{e.g.}$  | 举例      |
|  $\mathrm{n.b.}$  | 注意      |
|  $\mathrm{etc.}$  | 等等      |
|  $\mathrm{cf.}$   | 参考比较  |

## 4. 大型运算符

### 4.1 求和

求和符号有多种形式，

$$
\sum_i a_i
$$

$$
\sum_{i=0}^n a_i
$$

$$
\sum_{S \subseteq T} \left|T\right|
$$

某些特殊情况，求和可能隐含着极限，例如

$$
\sum_{i=1}^{\infty} \frac{1}{2^i}
$$

### 4.2 求积

和求和一样，求积符号也有多种形式，这里不再举例。

$$
\prod_{i=1}^n a_i
$$

## 5. 数论

::: info LaTeX

在 LaTeX 数学公式中，竖线最好使用 `\mid`，因为 `|` 会产生不正确的间隔。

:::

1. 整除：$x \mid y$ 表示 $x$ 整除 $y$
2. 取模：$x \;\mathrm{mod}\; y$，也可能写为 $x \;\%\; y$
3. 互质：$x \perp y$
4. 最大公约数：$\gcd (x,\,y)$，在无混淆意义的时侯可以写作 $(x,\,y)$
5. 最小公倍数：$\mathrm{lcm}(x,\,y)$，在无混淆意义的时侯可以写作 $[x,\,y]$
6. 组合数：$\mathrm{C}_n^m$，在无混淆意义的时侯可以写作下面的式子

$$
\mathrm{C}^m_n = \binom{n}{m}
$$
