import { View, Text, Button, Image } from "@tarojs/components";
import "./index.scss";
import { navigateTo } from "@tarojs/taro";
import Taro from "@tarojs/taro";
import IconFont from '../../components/iconfont';
import { useEffect, useState } from "react";

export default function Index() {
  const [userInfo, setUserInfo] = useState({});

  const navigateHandle = (url) => {
    navigateTo({ url });
  };

  const getProfileInfo = () => {
    Taro.getUserProfile({
      desc: "用于完善会员资料",
    }).then((res) => {
      const { nickName, avatarUrl } = res.userInfo;

      setUserInfo(() => {
        return { nickName, avatarUrl };
      });

      Taro.setStorage({ key: "userInfo", data: { nickName, avatarUrl } });
    });
  };

  const loginout = () => {
    setUserInfo({});
    Taro.setStorage({ key: "userInfo", data: {} });
  };

  useEffect(() => {
    Taro.getStorage({ key: "userInfo" })
      .then((res) => {
        if (res.data.nickName && res.data.avatarUrl) {
          console.log(res.data);
          setUserInfo(res.data);
        }
      })
      .catch(() => { });
  }, []);

  return (
    <View className="commit-review-page">
      <View className="login-box">
        {!(userInfo.nickName && userInfo.avatarUrl) ? (
          <Button onClick={getProfileInfo} class="login_in">
            获取用户信息
          </Button>
        ) : (
          <View className="headerorname">
            <Image src={userInfo.avatarUrl} />
            <View>{userInfo.nickName}</View>
            <Text onClick={loginout} class="login_out">
              退出登录
            </Text>
          </View>
        )}
      </View>
      <View className="list">
        <View
          className="list-item"
          onClick={() => navigateHandle("/pages/hotel-list/index")}
        >
          <View className="button">查看酒店列表</View> <IconFont name="quanxiangyou" />
        </View>
        <View className="list-item">
          <Button open-type="feedback" class="button">
            意见反馈
          </Button>
          <IconFont name="quanxiangyou" />
        </View>
        <View className="list-item">
          <Button class="button" open-type="contact">
            在线客服
          </Button>
          <IconFont name="quanxiangyou" />
        </View>
        <View
          className="list-item"
          onClick={() => navigateHandle("/pages/admin/index")}
        >
          <View className="button"> 管理员登录</View> <IconFont name="quanxiangyou" />
        </View>
      </View>
    </View>
  );
}
