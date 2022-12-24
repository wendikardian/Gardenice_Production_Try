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
import { useParams } from "react-router-dom";

const EditStore = () => {
  let { id } = useParams("id");
  const { store } = useContext(DataCtx);
  const navigate = useNavigate();
  const filter = store.filter((x) => x.id == id);
//   const newFilterData = Object.assign({}, ...filter);
  console.log(filter);

  const onFinish = async (values) => {
    // console.log(values)
    const data = {
      title: values.title,
      desc: values.desc,
      image: values.image,
      price: values.price,
    };
    console.log(data);
    axios.put(`http://localhost:8081/updateStore/${id}`, data).then(() => {
        message.success("Success ! Edit the feeds");
        setTimeout(() => {
            navigate("/shopping");
            window.location.reload();
        }, 1000)
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
            <h1>Edit Items </h1>
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
              {filter.map((x) => {
                return (
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ 
                        title : x.title,
                        desc : x.desc,
                        image : x.image,
                        price : x.price
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="title"
                      rules={[
                        { required: true, message: "Please insert the title" },
                      ]}
                    >
                      <Input prefix={<PlusOutlined />} placeholder="title" />
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
                        style={{ height: 300 }}
                      />
                    </Form.Item>
                    <Form.Item name="image">
                      <Input
                        prefix={<FileImageOutlined />}
                        placeholder="Image Link"
                      />
                    </Form.Item>
                    <Form.Item name="price">
                      <Input
                        prefix={<DollarOutlined />}
                        placeholder="Price"
                      />
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
                );
              })}
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default EditStore;
