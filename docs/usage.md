# effect-dropdown-vue

## 概览

包含如下组件：

- [`EffectDropdown`](#effectdropdown)
- [`EffectDropdownItem`](#effectdropdownitem)

## 组件

### `EffectDropdown`

根组件

**Attributes**

| 参数         | 说明             | 类型    | 可选值 | 默认值      |
| ----------- | ---------------- | ------ | ----- | ---------- |
| effect      | 效果类型 | String | 见下 `EFFECT_LIST` | simple |
| label       | 标题             | String  | --    | -- |
| gutter      | 激活时选项之间间隔 | Number | --    | 5 |
| activeColor | 激活时主色        | String  | 标准 css 颜色值 | #fc756f |
| raiseLabel  | 激活时 label 是否有 3d 效果  | Boolean | true / false | false |
| autoHide  | 点击外部或选项后是否自动隐藏  | Boolean | true / false | true |

- `EFFECT_LIST` 取值
  - `simple`（默认）
  - `random`
  - `camber`
  - `stagger`
  - `fence`

### `EffectDropdownItem`

单个选项，只能在 `EffectDropdown` 下使用

**Attributes**

| 参数         | 说明        | 类型     | 可选值 | 默认值      |
| ----------- | ----------- | ------- | ----- | ---------- |
| label       | 选项内容     | String  | --    | --          |
| disabled    | 是否禁用     | Boolean | true / false | false |

**Events**

| 事件名称    | 说明                     | 回调参数     |
| ---------- | ----------------------- | ----------- |
| click      | 选项被点击时触发的事件      | 第一个参数是 `vm`, 第二个参数是该选项的 `event` |
| mouseenter | 鼠标移动到选项上时触发的事件 | 第一个参数是 `vm`, 第二个参数是该选项的 `event` |
| mouseleave | 鼠标从选项上离开时触发的事件 | 第一个参数是 `vm`, 第二个参数是该选项的 `event` |

**Slots**

| Slot 名  | 说明                |
| -------- | ------------------ |
| default  | 选项内容 `label` 属性二选一 |

### 自定义样式

可自行根据 `classnames` 进行样式覆盖

- `effect-dropdown`: 根元素
- `effect-dropdown--active`: 根元素-激活状态
- `effect-dropdown__label`: 标题
- `effect-dropdown__label--raise`: 标题-激活时具有 3d 效果
- `effect-dropdown__content`: 选项容器
- `effect-dropdown-item`: 单个选项
- `effect-dropdown-item--active`: 展开后的单个选项
- `effect-dropdown-item--disabled`: 单个选项禁用状态
- `effect-dropdown-item--simple`: 单个选项-simple 效果
- `effect-dropdown-item--random`: 单个选项-random 效果
- `effect-dropdown-item--camber`: 单个选项-camber 效果
- `effect-dropdown-item--stagger`: 单个选项-stagger 效果
- `effect-dropdown-item--fence`: 单个选项-fence 效果
<!-- - `effect-dropdown-item--hover`: 单个选项 hover 状态 -->
