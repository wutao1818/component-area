# 使用方式

```javascript
支持按需引入的方式：
import { PicaArea } from 'pica-area';

Vue.use(PicaArea);

页面：
<PicaArea
  :base-url="baseUrl"
  :rank="3"
  @cancel="cancel"
  @confirm="confirm"
/>

v1.1.0 之后可以如下使用
<PicaArea
  v-model="showArea"
  @confirm="confirm"
/>

```

props

|  属性  | 说明   |  类型    |
| ------ | ------ | ------ |
|  v-model  | 是否显示组件 |   boolean    |
|  base-url  | 域名 |   string    |
|  rank  | 联动层级 |   [string, number] 数字对应的联动层级 1省份  2城市 3区县 4乡镇    |

Events

|  事件             | 说明                     | 回调参数                   |
| ------ | ------ | ------ |
|  cancel           | 点击取消按钮             |   Boolean                  |
|  confirm          | 点击确定按钮             |   当前所选的数据，object    |


