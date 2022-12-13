import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import axios from "axios";
import "./Postingan.css";
import Sidebar from "../Sidebar/Sidebar";
import { Layout, Menu } from "antd";

const Posting = () => {
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
            <h1>Posting</h1>
            {post.map((x) => {
              return (
                <Card
                  size="small"
                  title="Small size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>{x.title}</p>
                  <p>{x.post}</p>
                  <p>Card content</p>
                </Card>
              );
            })}
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default Posting;
