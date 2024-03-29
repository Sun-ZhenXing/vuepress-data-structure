# 算法分析

::: info 这个专题使用什么语言？

如果没有特别说明，整个数据结构和算法专题将使用 Python 和 C++ 实现各种算法，但仍然将包括其他语言。原因如下：
- 本文不会陷入使用哪种语言更好的争端，Java、Python 各有所爱，使用哪种语言取决于你自己
- 使用一门语言意味着片面，我们需要综合考虑，相互比较，这是一个有意思的过程
- Python 相当简洁且优雅，对于快速实现算法，是脚本语言代表
- C++ 是竞赛、教学、大型工程的主流语言

:::

## 1. 算法分析的目标

本文的“算法分析”不仅仅指分析算法，也对一些数据结构操作进行探讨，为了比较哪些算法或数据结构是设计优秀、优雅的，我们需要使用一些分析算法的方法。

通常，我们可以使用时间来度量算法的性能。实际上，时间是一个良好的度量单位，因为计算机中最重要的资源是时间，进行一些大任务通常需要花费计算机很多时间。但是，计算机的运行时间是一个不准确的度量，因为算法的运行时间通常受到数据规模大小的影响，并且和计算机此时的运行状态、计算机的性能、操作系统、设计语言、CPU 架构和一些随机因素影响。

在相当多的场合下，这些也是一个算法能否应用到实际上需要考虑的内容，但是尽管有来自不同方面的干扰，我们最关注的还是算法有多大程度上受到数据规模的影响，并希望使用数学的方法进行理论分析，此时我们排除了真实情况的计算机执行情况。

## 2. 实验结果

如果算法已经实现，那么在进行数学分析之前，我们可以进行实际运行来计算它到底进行了多长的时间。

下面的代码将计算 `for` 循环 $100000000$ 次所花费的秒数：

::: code-tabs#code

@tab cpp

```cpp
#include <ctime>
#include <iostream>
using namespace std;

int main() {
    clock_t start, finish;
    start = clock();
    for (int i = 0; i < 100000000; i++);
    float sec = (float)(clock() - start) / CLOCKS_PER_SEC;
    finish = clock();
    cout << "time: " << sec << endl;
    // time: 0.219
    return 0;
}
```

@tab python

```python
from time import time

start = time()
for i in range(100000000):
    pass
end = time()
print(end - start)
# 5.468473672866821
```

:::

结果的差距是显而易见的。

::: tip Python 代码性能测试

Python 的标准库中有专门进行算法时间测试的库 `timeit`，`timeit` 会进行大量重复实验来消除随机性误差。

:::
