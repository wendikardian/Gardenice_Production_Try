import React, { useState, useEffect } from "react";
// import "./Discover.css";
import axios from "axios";
import { Image, Button } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout } from "antd";
import Cookies from "js-cookie";
import { Form, Input, Checkbox, message } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  FileImageOutlined,
  DollarOutlined
} from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const AddShopping = () => {
    const navigate = useNavigate()
  const { explore, setExplore } = useContext(DataCtx);
  console.log(explore);
  const onFinish = async (values) => {
    // console.log(values)
    const data = {
      user_id: parseInt(Cookies.get('id')),
      title: values.title,
      desc: values.desc,
      image: values.image,
      price : parseInt(values.price),
      date : parseInt(moment().unix())
    };
    console.log(data);
    axios
      .post("http://localhost:8081/insertItem", data)
      .then(() => {
        message.success("Success adding new Item");
        setTimeout(() => {
          navigate("/shopping");
        }, 1000)
        window.location.reload();
        
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      });
  };
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="card-container">
            <h1>Add item to the Store</h1>
          </div>
          <div
            className="discover-cons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="editform-cons">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                  onFinish={onFinish}
              >
                <Form.Item
                  name="title"
                  rules={[
                    { required: true, message: "Please insert the title" },
                  ]}
                >
                  <Input prefix={<PlusOutlined />} placeholder="insert the item name" />
                </Form.Item>
                <Form.Item
                  name="desc"
                  rules={[
                    {
                      required: true,
                      message: "Please insert the description",
                    },
                  ]}
                >
                  <Input
                    prefix={<FormOutlined />}
                    placeholder="Description"
                    style={{ height: 100 }}
                  />
                </Form.Item>
                <Form.Item name="image">
                  <Input
                    prefix={<FileImageOutlined />}
                    placeholder="Image Link"
                  />
                </Form.Item>
                <Form.Item
                  name="price"
                  rules={[
                    { required: true, message: "Please insert the price" },
                  ]}
                >
                  <Input prefix={<DollarOutlined />} placeholder="insert the item price" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="dashed"
                    htmlType="submit"
                    icon={<UploadOutlined />}
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

export default AddShopping;
