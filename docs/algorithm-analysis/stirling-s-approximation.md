---
title: 斯特林公式
description: 斯特林公式
---

# 斯特林公式

## 1. 数学表示

该公式是一个 $\Gamma$ 函数的渐进近似，其中

$$
\Gamma(\nu + 1) = \nu\,!
$$

数学上常用的表示形式为

$$
\lim_{n \rightarrow \infty} \frac{\mathrm{e}^n n\,!}
{n^n\sqrt{n} } = \sqrt{2 \pi}
$$

或者

$$
\lim_{n \rightarrow \infty} \frac{n\,!}
{\sqrt{2 \pi n}\left(\frac{n}{\mathrm{e} }\right)^n} = 1
$$

斯特林公式来自于鞍点法：

$$
\begin{aligned}
    \Gamma(\nu + 1)
    &= \nu\,! \\
    &= \int\mathrm{e}^{-t}t^{\nu}\mathrm{d}t
    &= \int\mathrm{e}^{g(t)}\mathrm{d}t
\end{aligned}
$$

换元

$$
\begin{aligned}
    g(t) &= -t \\
    g'(t) &= -1 + \frac{\nu}{t} \\
    t_m &= \mu \\
    g''(t_m) &= -\frac{1}{\nu} \\
    \Gamma(\nu + 1) &\mathop{\approx}\limits^{\nu
        \rightarrow \infty}\mathrm{e}^{g(t_m)}
        \int\exp\left(\frac{1}{2}{g''(t_m)(t-t_m)^2}\right)
        \,\mathrm{d}t
\end{aligned}
$$

得出

$$
\nu\,! \mathop{\approx}\limits^{\nu \rightarrow \infty}
\mathrm{e}^{-\nu + \nu\log\nu}\sqrt{2 \pi \nu}
$$

## 2. 斯特林近似

考虑到

$$
\begin{aligned}
    \ln n\,!
    &= \ln 1 + \ln 2 + \cdots + \ln n \\
    &= \sum_{i=1}^n \ln i \\
    &\mathop{\approx}\limits^{n \rightarrow \infty}
    \int_{1}^{n}\ln x \,\mathrm{d}x \\
    &= \left[x\ln x - x\right]_1^n \\
    &= n\ln n - n + 1
\end{aligned}
$$

由斯特林公式，当 $n$ 足够大时，有

$$
n\,! \approx
\sqrt{2 \pi n}\left(\frac{n}{\mathrm{e} }\right)^n
$$

当 $n$ 充分大时，这两个估计结果是一致的。
