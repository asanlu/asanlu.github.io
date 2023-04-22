---
title: YAML 教程介绍
categories:
  - 工具
---

### yaml
数据序列化语言，通常用于编写配置文件，扩展名`.yml` 或 `.yaml`。YAML 拥有 Perl、C、XML、HTML 和其他编程语言的特性。YAML 也是**JSON 的超集**，所以 JSON 写法在 YAML 中有效。

三个破折号（---）用来表示文档的开始，而三个点（...）表示文档的结束。
 
### 基本语法
- 大小写敏感
- 缩进表示层级关系
- 缩进不允许使用tab，只允许空格。缩进的空格数不重要，相同层级的元素左对齐
- `#`表示注释

### 数据类型
- 对象：键值对，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）

``` yml
key: 
    child-key: value
    child-key2: value2

# 复杂点还可以：
?  
  - key1
  - key2
:
  - value1
  - value2
# 对象的属性是一个数组 [key1,key2]，对应的值也是一个数组 [value1,value2]
```

- 数组：又称为序列（sequence） / 列表（list）

``` yml
#  - 破折号开头，空格间开
- A
- B

# 多维数组
- Arr
 - A
 - B

# 数组和对象构成的复合
languages:
  - Ruby
  - Perl
  - Python 
websites:
  YAML: yaml.org 
  Ruby: ruby-lang.org 
  Python: python.org 
  Perl: use.perl.org

```

- 纯量（scalars）：单个的、不可再分的值。字符串、布尔值、整数、浮点数、Null、时间、日期

### 引用语法
用`&` 建立锚点和 用`*` 引用锚点，`<<` 表示合并到当前数据
``` yml
defaults: &defaults
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  <<: *defaults

# 相当于
development:
  database: myapp_development
  adapter:  postgres
  host:     localhost
```


