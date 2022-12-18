import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import './Profile.css'
import axios from "axios";
import { Image, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Profile = () => {
    const navigate = useNavigate()
    
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
            <h1>Profile</h1>
          </div>
          <div className="container-profile1">
            
            <Image
              width={200}
              style={{borderRadius : '100px'}}
              src={Cookies.get('image')}
            />
            <div className="data-profile" style={{marginTop: 30}}>
                <p className="profile-title">Name</p>
                <p className="">:{ Cookies.get('name')}</p>
            </div>
            <div className="data-profile">
                <p className="profile-title">Email</p>
                <p className="">: { Cookies.get('email')}</p>
            </div>
            {/* <div className="data-profile">
                <p className="profile-title">Gender</p>
                <p className="">: Male</p>
            </div> */}
          </div>
          <Button type="dashed" icon={<EditOutlined />} size={24} onClick={() => {navigate('/editprofile')}}>
           Edit Profile
          </Button>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
