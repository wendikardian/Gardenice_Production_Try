import React from "react";
// import 'antd/dist/antd.css';
import { Layout, Menu, ConfigProvider } from "antd";
import {
    FileSearchOutlined,
    UserOutlined,
    ShopOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Sidebar = () => {
  return (
    <div>
      <Sider collapsible  style={{backgroundColor: "#5F8D4E", minHeight: "100%"}}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["3"]} mode="inline" style={{backgroundColor: "#5F8D4E"}}>

          <SubMenu key="sub1" title="Explore" icon={<FileSearchOutlined />}>
            <Link to="/explore">
              <Menu.Item key="3" style={{background : 'white', border: 'none', borderRadius :0, margin: 0,}}>Discover</Menu.Item>
            </Link>
            <Link to="/createfeeds">
              <Menu.Item key="4" style={{backgroundColor : 'white', border: 'none', borderRadius :0, margin: 0,}}>Create Feeds</Menu.Item>
            </Link>
          </SubMenu>
          <SubMenu key="sub2" title="Store" icon={<ShopOutlined />}>
            <Link to="/shopping">
              <Menu.Item key="6" style={{backgroundColor : 'white', border: 'none', borderRadius :0, margin: 0,}}>Shopping</Menu.Item>
            </Link>
            <Link to="/order">
              <Menu.Item key="8" style={{backgroundColor : 'white', border: 'none', borderRadius :0, margin: 0,}}>My Order</Menu.Item>
            </Link>
          </SubMenu>
          <SubMenu key="sub3"  title="Profile" icon={<UserOutlined />}>
            <Link to="/profile">
              <Menu.Item key="6" style={{backgroundColor : 'white', border: 'none', borderRadius :0, margin: 0,}}>See My Profile</Menu.Item>
            </Link>
            <Link to="/editprofile">
              <Menu.Item key="6" style={{backgroundColor : 'white', border: 'none', borderRadius :0, margin: 0,}}>Edit Profile</Menu.Item>
            </Link>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  );
};
export default Sidebar;
