# 使用方式

```javascript
支持按需引入的方式：
import { WutaoArea } from 'wutao-area';

Vue.use(WutaoArea);

页面：
<WutaoArea
  :base-url="baseUrl"
  :rank="3"
  @cancel="cancel"
  @confirm="confirm"
/>

```

props

|  属性  | 说明   |  类型    |
| ------ | ------ | ------ |
|  base-url  | 域名 |   string    |
|  rank  | 联动层级 |   [string, number] 数字对应的联动层级 1省份  2城市 3区县 4乡镇    |

Events

|  事件             | 说明                     | 回调参数                   |
| ------ | ------ | ------ |
|  cancel           | 点击取消按钮             |   Boolean                  |
|  confirm          | 点击确定按钮             |   当前所选的数据，object    |


