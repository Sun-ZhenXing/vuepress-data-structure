# 平衡三进制

*@def* **平衡三进制** 是一种非标准的 [记数系统](https://zh.wikipedia.org/wiki/%E8%AE%B0%E6%95%B0%E7%B3%BB%E7%BB%9F)，它是一种基数为 $3$ 的进位制系统，其中用于计数的符码为 $-1,0,1$。

与标准基数 $3$ 进制系统对比：其中的计数符号为 $0,1,2$。以平衡三进制所记录的数字可以表达出全部整数，由于 $-1$ 的引入，而且对负数不必使用额外的负号；应用在于解决 [秤重问题](https://zh.wikipedia.org/wiki/%E7%A8%B1%E7%90%83%E5%95%8F%E9%A1%8C)，或在一些早期的计算机中使用。[^1]

[^1]: 平衡三进制，维基百科，<https://zh.wikipedia.org/wiki/%E5%B9%B3%E8%A1%A1%E4%B8%89%E9%80%B2%E4%BD%8D>

有些地方使用不同符码来表示平衡三进制中的三个数符。本文中以 $\mathrm{T}$ 表示。

平衡三进制和其他进制一样，各位的数字和位权相乘然后叠加起来，就是该数的数值。

::: code-tabs#code

@tab cpp

```cpp
int bt_to_dec(string s) {
    int res = 0;
    for (auto ch : s) {
        res *= 3;
        if (ch == '1') {
            res += 1;
        } else if (ch == 'T') {
            res -= 1;
        }
    }
    return res;
}
```

@tab python

```python
def bt_to_dec(s: str) -> int:
    res = 0
    for ch in s:
        res *= 3
        if ch == '1':
            res += 1
        elif ch == 'T':
            res -= 1
    return res
```

:::

