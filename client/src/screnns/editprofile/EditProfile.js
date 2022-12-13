import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import "./EditProfile.css";
import axios from "axios";
import { Image, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";

const EditProfile = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosting = async () => {
      const dataPosting = await axios.get(`http://localhost:9080/post`);
      setPost(
        dataPosting.data.map((x) => {
          return {
            id: x.id,
            user_id: x.user_id,
            title: x.title,
            post: x.post,
            gambar: x.gambar,
            date: x.date,
          };
        })
      );
    };
    fetchPosting();
  }, []);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="card-container">
            <h1>Edit Profile</h1>
          </div>
          <div className="container-profile1">
            <div className="editform-cons">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                //   onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="email" />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please insert your username" },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="dashed"
                    htmlType="submit"
                    icon={<EditOutlined />}
                    size={24}
                  >
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default EditProfile;
