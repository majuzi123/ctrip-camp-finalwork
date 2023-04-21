import { View, Input, Text, Button } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";
import Taro from "@tarojs/taro";

export default function Admin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [commentlist, setCommentlist] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    const db = Taro.cloud.database({
      env: "cloud-3g1s9anved8781a2",
    });
    if (!name && !password) {
      return Taro.showToast({ title: "请输入账号密码", icon: "none" });
    }

    if (!name) {
      return Taro.showToast({ title: "请输入账号", icon: "none" });
    }
    if (!password) {
      return Taro.showToast({ title: "请输入密码", icon: "none" });
    }

    db.collection("admin")
      .where({
        name: name,
        password: password,
      })
      .get()
      .then((res) => {
        console.log("登陆成功", res);
        if (res.data && res.data.length > 0) {
          setIsAdmin(true);
          let admin = {
            name: name,
            password: password,
          };
          Taro.setStorageSync("admin", admin);
          // 跳转
          Taro.reLaunch({ url: "/pages/comment/index" });
        } else {
          setIsAdmin(false);
          Taro.showToast({
            icon: "none",
            title: "账号或密码错误",
          });
        }
      })
      .catch((res) => {
        console.log("登陆失败", res);
        Taro.showToast({
          icon: "none",
          title: "账号或密码错误",
        });
        setIsAdmin(false);
      });
  };

  const inputHandle = (key, e) => {
    if (key === "name") {
      setName(e.detail.value);
    } else if (key === "password") {
      setPassword(e.detail.value);
    }
  };

  return (
    <View className="wrapper">
      <View className="login-box">
        <View className="login-item">
          <Text>账号</Text>{" "}
          <Input
            onInput={(e) => inputHandle("name", e)}
            placeholder="请输入账号"
          ></Input>
        </View>
        <View className="login-item">
          <Text>密码</Text>
          <Input
            type="password"
            onInput={(e) => inputHandle("password", e)}
            placeholder="请输入密码"
          ></Input>
        </View>
        <Button className="login-btn" onClick={login}>
          管理员登录
        </Button>
      </View>
    </View>
  );
}
