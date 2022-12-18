import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../register/Register.css";
import './Login.css'
import logo from "./logo.png";
import login from "./login.png"
import axios from "axios";
import Cookies from "js-cookie";
// import { useHistory } from "react-router";
// import { DataCtx } from "./../../Data/Data.js";
import { useContext } from "react";

import { DataCtx } from "../../Data/Data";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  // let history = useHistory();
  // const { isLogin, setIsLogin } = useContext(DataCtx);
  
  const { isLogin, setIsLogin } = useContext(DataCtx);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios
      .post("http://localhost:8081/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        var email = res.data.email;
        var name = res.data.name;
        var id = res.data.id;
        var image = res.data.image;
        // var token = res.data.token;
        // Cookies.set("user", user.name, { expires: 1 });
        Cookies.set("email", email, { expires: 1 });
        Cookies.set("name", name, { expires: 1 });
        Cookies.set("id", id, { expires: 1 });
        Cookies.set("image", image, { expires: 1 });
        // Cookies.set("token", token, { expires: 1 });
        message.success(`welcome, ${name}`);
        setIsLogin(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error("Data tidak ditemukan")
      });
  };
  return (
    <div className="form-cons for-login">
      <div className="reg-form">
        <h1> Please Login </h1>
        <img src={login} className="login" />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{" "}
            <Link to="/register">
              <a>register now!</a>
            </Link>
            Or{" "}
            <Link to="/">
              <a>Back to home!</a>
            </Link>
          </Form.Item>
        </Form>
      </div>
      <div className="img-con">
        <img src={logo} className="logo-login"></img>
      </div>
    </div>
  );
};

export default LoginForm;
