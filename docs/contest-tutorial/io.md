# I/O 优化

[[TOC]]

## 1. C++ I/O 优化

解除 `stdio` 同步：

```c++
std::ios::sync_with_stdio(false);
std::cin.tie(nullptr);
```
