# 数组

[[TOC]]

## 1. 数组的定义

## 2. C++ 数组

## 3. Python 数组

本节探索基于数组的序列，主要基于 Python 语言的几种序列类 `list`、`tuple` 和 `str`。这些类都是序列类型的，都支持下标取值 `seq[i]`。

### 3.1 低层次数组

Python 不包含底层的连续数组，Python 的数组类型（不包含 `array.array` 或第三方库）都是引用类型的数组。Python 数组内的每一个值都是一个对象引用，复制它们会产生一个经典问题，即 Python 的 **浅拷贝和深拷贝**。

关于 Python 引用对象的本质本章不会考虑，本章节先考虑 Python 内置的连续数组，然后实现一个底层上连续的数组类型，以模拟动态数组的特点。

### 3.2 使用紧凑数组

`array.array` 是标准库内的紧凑数组类型。有时候，使用 `array` 类型将比内置的整数类型获得更高的储存性能。

```python
from array import array

primes = array('i', [2, 3, 5, 7, 11, 13, 17, 19])
```

我们在调用 `primes[3]` 时得到的是一个整型值（`int` 类型），这意味获取下标时，Python 将底层值自动转为 `int` 类型，不需要考虑类型转换问题。

其中 `'i'` 是标志码，表示实际储存的类型，可用的标志码如下：

| 代码 | 数据类型 | Python 类型 | 字节数 |
|:----:|:-------|:------------|:-------:|
| `'b'` | `signed char` | `int` | 1 |
| `'B'` | `unsigned char` | `int` | 1 |
| `'u'` | `wchar_t` | Unicode 字符 | 2 或 4 |
| `'h'` | `signed short` | `int` | 2 |
| `'H'` | `unsigned short` | `int` | 2 |
| `'i'` | `signed int` | `int` | 2 或 4 |
| `'I'` | `unsigned int` | `int` | 2 或 4 |
| `'l'` | `signed long` | `int` | 4 |
| `'L'` | `unsigned long` | `int` | 4 |
| `'q'` | `signed long long` | `int` | 8 |
| `'Q'` | `unsigned long long` | `int` | 8 |
| `'f'` | `float` | `float` | 4 |
| `'d'` | `double` | `float` | 8 |

### 3.3 动态数组

Python 的列表类提供了对底层数组的抽象，该列表运行增添元素，对于列表内元素的总数没有明显的限制。为了提供这种抽象，Python 使用了 **动态数组**。

一个列表通常关联一个底层数组，，该数组通常比列表的长度更长。如果用户创建了具有 $5$ 个元素的列表，系统可能会预留能储存 $8$ 个对象引用的底层数组。通过利用下面可用的储存单元，这样增添列表就会变得容易。

如果用户持续添加元素，那么最终储存空间会被耗尽。此时，应该向系统请求一个新的，更大的数组，然后用原来的值初始化该数组。这样，原来的储存空间就不需要了，被系统回收。这种策略直观看上去像寄居蟹一样。

Python 的 `list` 类确实基于这种策略，使用 `sys.getsizeof()` 可以得到对象的底层大小。我们可以做个实验证明：

```python
import sys

data = []
for k in range(30):
    a = len(data)
    b = sys.getsizeof(data)
    print('[Length]: {:3d}, [Size]: {:4d}'.format(a, b))
    data.append(None)
```

结果：

```log
[Length]:   0, [Size]:   56
[Length]:   1, [Size]:   88
[Length]:   2, [Size]:   88
[Length]:   3, [Size]:   88
[Length]:   4, [Size]:   88
[Length]:   5, [Size]:  120
[Length]:   6, [Size]:  120
[Length]:   7, [Size]:  120
[Length]:   8, [Size]:  120
[Length]:   9, [Size]:  184
[Length]:  10, [Size]:  184
[Length]:  11, [Size]:  184
[Length]:  12, [Size]:  184
[Length]:  13, [Size]:  184
[Length]:  14, [Size]:  184
[Length]:  15, [Size]:  184
[Length]:  16, [Size]:  184
[Length]:  17, [Size]:  248
[Length]:  18, [Size]:  248
[Length]:  19, [Size]:  248
[Length]:  20, [Size]:  248
[Length]:  21, [Size]:  248
[Length]:  22, [Size]:  248
[Length]:  23, [Size]:  248
[Length]:  24, [Size]:  248
[Length]:  25, [Size]:  312
[Length]:  26, [Size]:  312
[Length]:  27, [Size]:  312
[Length]:  28, [Size]:  312
[Length]:  29, [Size]:  312
```
