# 携程前端训练营考核项目-酒店点评信息处理

#### 介绍
携程前端训练营大作业考核项目 - 酒店点评信息处理

详细提交过程见gitee仓库地址：[携程前端训练营大作业: 携程前端训练营大作业 - 酒店点评信息处理 (gitee.com)](https://gitee.com/eerk/ctrip-camp-finalwork)

#### 软件架构
前端：Taro-React-微信小程序

服务：微信云开发（JSON 数据库、云函数、云存储）

#### 使用说明

1. **扫描小程序码体验：**

   ![小程序码.jpg (430×430) (gitee.com)](https://gitee.com/eerk/ctrip-camp-finalwork/raw/master/README_src/imgs/小程序码.jpg)

2. **开发环境运行：**

   2.1. 安装**NodeJS**(v18.13.0)，安装**React**、**Taro**；安装微信开发者工具及VS Code

   2.2. **git clone**或下载当前代码

   2.3. **npm install**相关依赖

   2.4. 配置微信**AppID**及微信**云开发**环境

   2.5. 向**云数据库**导入数据，根据README_src/cloudDB/ 目录下的每个**json**文件的名称，在云数据库中创建相同名称的collection，然后导入该文件的数据

   2.6. 修改cloudfunctions/ 目录下所有云函数的云环境ID，然后在开发者工具中上传并部署

   2.7. **npm run dev:weapp**或**npm run build:weapp**运行项目


#### 主要页面功能及实现说明

1. **酒店列表** pages/hotel-list/

   **1.1.** 查看酒店列表，一次加载10条数据，触及列表底部加载更多

   **1.2.** 根据评分、点评数、价格进行筛选

   **1.3.** 根据酒店名称或地址进行模糊搜索

   **1.组件.** HotelCard酒店卡片、LoadingDots转圈的点(表示加载的动画)、StarsScore星数评分

   **1.云函数.** get-hotel-list获取酒店数据、触发器timer自动更新每个酒店的点评数量

2. **点评列表** pages/comment-list/

   **2.1.** 查看针对一个酒店的点评，一次加载10条数据，触及列表底部加载更多

   **2.2.** 根据时间顺寻由新到旧排序

   **2.3.** ”有图“或”差评“的筛选条件

   **2.组件.** CommentListCard点评卡片

   **2.云函数.** get-comment-list获取点评数据、get-bad-comment获取差评数据

3. **点评提交** pages/comment-list/

   **3.1.** 打分、输入文字评论、上传图片

   **3.2.** 提交条件判断，必须有打分和5字以上评论

   **3.组件.** ScoreChecker星数打分、ImageAdder添加(压缩且可上传至云存储)并展示图片

   **3.云函数.** submit-comment提交点评数据

4. **用户界面** pages/comment-list/

   **4.1.** 页面跳转：酒店列表、管理员登陆

   **4.2.** 使用了微信提供的意见反馈和在线客服功能按钮

   **4.3.** 管理员登陆成功后进入点评审核页面

5. **点评审核 **pages/comment-list/

   **5.1.** 根据”未审核“、”审核且通过“、”审核未通过“三个状态对点评作筛选

   **5.2.** ”未审核“列表中的点评可以选择”审核通过“或”拒绝“

   **5.云函数.** getcomment根据审核状态获取点评数据、update-comment更新点评状态

6. **其它**

   6.1. ”pages/index0/“页面以及”test“云函数仅用于测试数据库连接，对项目无影响

   6.2. 云数据库详情见 README_src/cloudDB/README.md
