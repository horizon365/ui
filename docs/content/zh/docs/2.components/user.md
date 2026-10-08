---
description: '显示用户信息，包括名称、描述和头像。'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## 使用情况

### 姓名

使用`name`属性显示用户的名称。

::component-code
---
道具：
  姓名：“无名氏”
---
::

说明：

使用`description`属性显示用户的说明。

::component-code
---
道具：
  姓名：“无名氏”
  描述：“软件工程师”
---
::

虚拟人偶

使用`avatar`道具来显示[Avatar](/docs/components/avatar)组件。

::component-code
---
更漂亮：真的
忽略：
  姓名
  说明：
道具：
  姓名：“无名氏”
  描述：“软件工程师”
  头像：
    如果您是一个注册用户，请登录
    加载：惰性
    图标：i-lucide图像
---
::

::collapsible{name="all avatar properties"}

::component-props
---
名称：头像
忽略：
  尺寸：
- 的版本
---
::

::

芯片，芯片

使用`chip`道具来显示[芯片](组件。

::component-code
---
更漂亮：真的
忽略：
  姓名
  描述：
  - 虚拟形象. src
项目名称：
  chip.color:
    主要的
    第二个
    成功了！
    @@信息
    警告：
    发生错误
- 中性
  chip.position:
    - 左上角
    - 右上角
    - 左下角
    - 右下角
道具类：
  姓名：“无名氏”
  描述：“软件工程师”
  虚拟角色.src：'https：//i.pravatar.cc/150？u = john-doe'
  芯片：
    颜色：'主要'
    位置：右上
---
::

::collapsible{name="all chip properties"}

::component-props
---
产品名称：芯片
忽略：
  如图所示
  尺寸
- 独立
---
::

::

尺寸

使用`size`道具更改用户头像和文本的大小。

::component-code
---
更漂亮：真的
忽略：
  姓名
  描述：
  - 化身. src
  芯片
道具：
  姓名：“无名氏”
  描述：“软件工程师”
  虚拟角色.src：'https：//i.pravatar.cc/150？u = john-doe'
  芯片：真
  尺寸：xl
---
::

方向

使用`orientation`道具更改方向。默认为`horizontal`。

::component-code
---
更漂亮：真的
忽略：
  - 化身. src
道具：
  方向：'垂直'
  姓名：“无名氏”
  描述：“软件工程师”
  虚拟角色.src：'https：//i.pravatar.cc/150？u = john-doe'
---
::

链接

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，例如`to`、`target`、`rel`等。

::component-code
---
更漂亮：真的
忽略：
  姓名
  描述
  虚拟形象. src
  目标值
道具：
  发送至：“https：//github.com/benjamincanac”
  目的：'_blank'
  姓名：“本杰明·卡纳克”
  描述：“软件工程师”
  虚拟角色.src：“https：//github.com/benjamincanac.png”
---
::

::note
`NuxtLink`组件将继承您传递给`User`组件的所有其他属性。
::

活性成分

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
