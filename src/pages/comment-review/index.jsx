<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Index() {

  // useLoad(() => {
  // })

  return (
    <View className='commit-review-page'>
      <Text>Hello</Text>
    </View>
  )

<<<<<<< HEAD
=======
=======
import {
  View,
  Text,
  Input,
  Button,
  Checkbox,
  Icon,
  Image,
} from "@tarojs/components";
import arrows from "../../../image/arrows.png";
import "./index.scss";
import { navigateTo } from "@tarojs/taro";
import Taro from "@tarojs/taro";
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
      .catch(() => {});
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
        {userInfo.nickName && userInfo.avatarUrl ? (
          <View
            className="list-item"
            onClick={() => navigateHandle("/pages/hotel-list/index")}
          >
            我的订单 <Image src={arrows}></Image>
          </View>
        ) : (
          ""
        )}
        {userInfo.nickName && userInfo.avatarUrl ? (
          <View
            className="list-item"
            onClick={() => navigateHandle("/pages/comment-list/index")}
          >
            评价列表<Image src={arrows}></Image>
          </View>
        ) : (
          ""
        )}
        <View className="list-item">
          <Button open-type="feedback" class="button">
            意见反馈
          </Button>
          <Image src={arrows}></Image>
        </View>
        <View className="list-item">
          <Button class="button" open-type="contact">
            在线客服
          </Button>
          <Image src={arrows}></Image>
        </View>
        <View
          className="list-item"
          onClick={() => navigateHandle("/pages/admin/index")}
        >
          管理员登录<Image src={arrows}></Image>
        </View>
      </View>
    </View>
  );
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
}
