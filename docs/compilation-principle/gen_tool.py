# 写作过程中经常使用的工具
TEMPLATE = """$$
\\begin{{aligned}}
{0}
\\end{{aligned}}
$$"""


def gen_grammer(s: str, align_center=False) -> str:
    """生成文法的 LaTeX 代码

    输入：

    ```text
    <句子>      -> <动词短语>
    <动词短语>  -> <动词> <名词短语>
    <名词短语>  -> <名词> <名词短语>|<名词>
    <动词>      -> "提高"
    <名词>      -> "高人"|"人民"|"民生"|"生活"|"活水"|"水平"
    ```
    """
    if align_center:
        line_template = '    {0} \\rightarrow &\\; {1} \\\\'
    else:
        line_template = '    & {0} \\rightarrow {1} \\\\'

    def _expr_filter(__expr: str) -> str:
        __expr = __expr.strip()
        if __expr.startswith('<') or __expr.startswith('"'):
            return '\\text{{{}}}'.format(__expr.replace('"', ''))
        return __expr

    res: list[str] = []
    for line in s.splitlines():
        line = line.strip()
        if not line:
            continue
        left, right = map(str.strip, line.split(' -> '))
        left_tex = _expr_filter(left)
        right_tex = ' \\mid '.join(
            ' '.join(map(_expr_filter, expr.split()))
            for expr in right.split('|')
        )
        res.append(line_template.format(
            left_tex,
            right_tex
        ))
    return TEMPLATE.format('\n'.join(res))


def main():
    text = ' '
    while prop := input('> '):
        text += prop + '\n'
    is_align = input('is align center?(y/n) ')
    if is_align.lower() == 'y':
        print(gen_grammer(text, True))
    else:
        print(gen_grammer(text))


if __name__ == '__main__':
    main()
