// import "antd/dist/antd.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DingdingOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import React, {useState, useContext, useEffect } from "react";
import { DataCtx } from "./../Data/Data.js";
import { useNavigate } from "react-router";
import { Button, Modal } from "antd";
import logo from './logo2.png'

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const { isLogin, setIsLogin, userDataList } = useContext(DataCtx);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [filteredUser, setFilteredUser] = useState([])
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const logout = () => {
    setOpen(false);
    setConfirmLoading(false);
    setIsLogin(false);
    // Cookies.remove('user')
    Cookies.remove("email");
    // Cookies.remove('token')
    navigate("/");
  };
  return (
     <>
      <Layout>
      <Modal
        title="Log out"
        open={open}
        onOk={logout}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Are you sure you wanna log out ? </p>
      </Modal>
        <Header className="header-all" style={{ backgroundColor: "#395144" }}>
          <div className="logo">
            <img src={logo} style={{width: 50, marginRight: 20, borderRadius: 90}} />
          </div>
          <div className="logo title">Gardenice</div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ float: "right", backgroundColor: "#395144" }}
          >
            <img style={{width: 50, height: 50, borderRadius: 100,}} src={Cookies.get('image')} />
            <h5 style={{marginTop: 10, marginLeft: 30, marginRight: 40, color: 'white'}}>{Cookies.get('name')}</h5>
            <Menu.Item style={{ width: "70px" }} onClick={showModal}>
              <p style={{
                backgroundColor : 'white',
                padding: 2,
                height: 10
              }}>  
              {" "}
              Logout{" "}
              </p>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
