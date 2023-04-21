import { View, Image, Button } from "@tarojs/components";
import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import dayjs from "dayjs";

export default function Comment() {
  const tabbar = ["未审核", "审核通过", "审核未通过"];
  const [activeTabbarIndex, setActiveTabbarIndex] = useState(0);
  const [commentlist, setCommentList] = useState([]);

  const tabbarChange = (index) => {
    setActiveTabbarIndex(index);
  };

  const getData = () => {
    Taro.cloud.init({ env: "cloud-3g1s9anved8781a2" });

    Taro.cloud
      .callFunction({
        name: "getcomment",
        data: {
          index: activeTabbarIndex,
        },
      })
      .then((res) => {
        setCommentList(res.result.data);
      });
  };

  const checkHandle = (pass, _id) => {
    Taro.cloud.init({
      env: "cloud-3g1s9anved8781a2",
    });

    Taro.cloud.callFunction({
      name: "update-comment",
      data: {
        _id,
        pass,
      },
      success: function (res) {
        console.log(res);
      },
      fail: console.error,
    });
  };

  useEffect(() => {
    getData();
  }, [activeTabbarIndex]);

  return (
    <View className="wrapper">
      <View className="tabbar">
        {tabbar.map((item, index) => {
          return (
            <View
              className={`tabbar-item ${
                index === activeTabbarIndex ? "active" : ""
              }`}
              onClick={() => tabbarChange(index)}
            >
              {item}
            </View>
          );
        })}
      </View>

      <View className="list">
        {commentlist.map((item, index) => {
          return (
            <View className="item">
              <View>序号:{index + 1}</View>
              <View className="info">
                <Image className="head" src={item.userImg} />
                <View className="headinfo">
                  <View>{item.nickname}</View>
                  <View className="timeorplace">
                    {dayjs(item.liveTime).format("YYYY年MM月")}入住|发布于
                    {item.location}
                  </View>
                </View>
              </View>
              <View>{item.content}</View>

              <View className="imglist">
                {item.ImgList.map((item) => {
                  return <Image src={item} />;
                })}
              </View>
              {activeTabbarIndex === 0 ? (
                <View className="func">
                  <Button
                    onClick={() => checkHandle(true, item._id)}
                    class="Pass"
                  >
                    审核通过
                  </Button>
                  <Button
                    onClick={() => checkHandle(false, item._id)}
                    class="Reject"
                  >
                    拒绝
                  </Button>
                </View>
              ) : (
                ""
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
