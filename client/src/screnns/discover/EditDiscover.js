import React, { useState, useEffect } from "react";
import "./Discover.css";
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
} from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditDiscover = () => {
  let { id } = useParams("id");
  const { explore, setExplore } = useContext(DataCtx);
  const navigate = useNavigate();
  const filter = explore.filter((x) => x.id == id);
//   const newFilterData = Object.assign({}, ...filter);
  console.log(filter);

  const onFinish = async (values) => {
    // console.log(values)
    const data = {
      title: values.title,
      post: values.post,
      gambar: values.image,
    };
    console.log(data);
    axios.put(`http://localhost:8081/updateExplore/${id}`, data).then(() => {
        setTimeout(() => {
            message.success("Success ! Edit the feeds");
        }, 1000)
        navigate("/explore");
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
            <h1>Edit Your Feeds </h1>
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
                        post : x.post,
                        image : x.gambar
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
                      name="post"
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

export default EditDiscover;
