# 云数据库详情

#### 存储记录数量分布：

![数据库数据分布](..\imgs\数据库数据分布.png)

#### 结构及字段含义：

**hotel:**

```json
{
    "_id": id,
    "name": 酒店名称,
    "image": 封面图片,
    "location": 地址,
    "price": 价格,
    "commentNum": 点评数量,
    "comment": 卡片上展示的简短文字评论,
    "score": 评分,
    "lastCntTime": 上次统计并更新点评数量的时间
}


```

**comment:**

```json
{
    "_id": id,
    "ImgList": 图片地址数组,
    "content": 文字评论,
    "hotelId": 酒店_id,
    "liveTime": 点评提交时的时间,
    "location": 点评提交时所在地址,
    "nickname": 用户昵称，默认“匿名用户”,
    "pass": 审核状态，未审核为null，通过true，拒绝false,
    "star": 点评评分,
    "userImg": 用户头像，默认匿名头像,
    "userInfo": 用户信息(默认数据，无作用)
}

```

**admin:**

```json
{
    "_id": id,
    "name": 账号,
    "password": 密码
}
```



#### 大量点评数据的生成：

大量的comment记录由编写的代码自动生成，见“数据库点评data生成工具”下的Main.java文件
