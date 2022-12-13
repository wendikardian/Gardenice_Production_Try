import React, { useState, useEffect } from "react";
import "./Discover.css";
import axios from "axios";
import { Image, Button } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import moment from "moment";
const { Meta } = Card;

const Discover = () => {
  const { explore } = useContext(DataCtx);
  console.log(explore);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="card-container">
            <h1>Discover here .. </h1>
          </div>
          <div className="discover-cons">
            {explore.map((x) => {
              var newDate = moment(x.date * 1000).format("MM/DD/YYYY hh:MM");
              // console.log(newDate)
              return (
                <div className="discover-item">
                  <div className="header-explore">
                    <div className="user-discover">
                      <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
                      <p>Wendi Kardian</p>
                    </div>
                    <p>{newDate}</p>
                  </div>
                  <div class="explore-desc">
                    <Image width={700} height={500} src={x.gambar} />
                    <h3>{x.title}</h3>
                    <p>{x.post}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default Discover;
