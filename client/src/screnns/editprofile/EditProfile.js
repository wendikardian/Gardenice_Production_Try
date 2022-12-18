import React, { useState, useEffect, useContext } from "react";
import { Card, message } from "antd";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, MailOutlined, PictureOutlined } from "@ant-design/icons";
import "./EditProfile.css";
import axios from "axios";
import { Image, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import { DataCtx } from "../../Data/Data";

const EditProfile = () => {
  const { userDataList } = useContext(DataCtx);
  const filter = userDataList.filter((x) => x.id == Cookies.get("id"));
  console.log(filter)
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
              {filter.map((x) => {
                return (
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ 
                      email : x.email,
                      username  : x.name,
                      image : x.image
                     }}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                      ]}
                      values={Cookies.get("email")}
                    >
                      <Input prefix={<MailOutlined />} placeholder="email" />
                    </Form.Item>

                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please insert your username",
                        },
                      ]}
                    >
                      <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="image"
                      rules={[
                        {
                          required: true,
                          message: "Please input your image link",
                        },
                      ]}
                    >
                      <Input
                        prefix={<PictureOutlined />}
                        placeholder="Profile picture"
                      />
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
                );
              })}
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default EditProfile;
