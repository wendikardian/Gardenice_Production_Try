import React, { useState, useEffect } from "react";
import "./Shopping.css";
import axios from "axios";

import { Image, Button } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import { DataCtx } from "../../Data/Data";
import {useContext} from 'react';
import {
    ShoppingCartOutlined,
    EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const Shopping = () => {
  // const [store, setStore] = useState([]);
  const {store} = useContext(DataCtx);
  console.log(store)
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="card-container">
            <h1>Shopping</h1>
          </div>
          <div className="shopping-cons">
            {
              store.map(x => {
                return(
                  <Card
              style={{
                width: 300,
              }}
              cover={
                <Image
              width={300}
              height={300}
              src={x.image}
            />
              }
              actions={[
                
                <ShoppingCartOutlined key="setting" onClick={() => {alert("Hello")}} />,
                <EyeOutlined key="detail" />
                
              ]}
            >
              <p>${x.price}</p>
              <Meta
                avatar={<Avatar src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />}
                title={x.title}
                description={x.desc}
              />
            </Card>
                )
              })
            }
            
            
            
            
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default Shopping;
