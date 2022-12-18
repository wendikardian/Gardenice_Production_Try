import React, { useState, useEffect } from "react";
import "./Discover.css";
import axios from "axios";
import { Image, Button, Modal, message } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout } from "antd";
import Cookies from "js-cookie";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const[open, setOpen] = useState(false)
  const { explore, userDataList } = useContext(DataCtx);
  const [selectedToDelete, setSelectedToDelete] = useState(0);
  const navigate = useNavigate();
  useEffect( () => {
    console.log(selectedToDelete)
  }, [selectedToDelete])  

  const deleteHandler = () => {
    
    axios
      .delete(`http://localhost:8081/deleteExplore/${selectedToDelete}`)
      .then(() => {
        message.success("Success adding new Explore");
        navigate("/explore");
        window.location.reload();
        
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      })
  }

  return (
    <div>
      <Modal
        title="Delete data"
        open={open}
        onOk={deleteHandler}
        onCancel={() => {setOpen(false)}}
      >
        <p>Are you sure wanna delete the data  ? </p>
      </Modal>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="card-container">
            <h1>Discover here .. </h1>
          </div>
          <div className="discover-cons">
            {explore.map((x) => {
              var newDate = moment(x.date * 1000).format("MM/DD/YYYY hh:MM");
              const userData = userDataList.filter(
                (user) => user.id == x.user_id
              );
              const newUserData = Object.assign({}, ...userData);
              console.log(newUserData.name);

              // console.log(newDate)
              return (
                <div className="discover-item">
                  <div className="header-explore">
                    <div className="user-discover">
                      <img
                        src={
                          newUserData.image != ""
                            ? newUserData.image
                            : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                        }
                      />
                      <p>{newUserData.name}</p>
                    </div>
                    <p>{newDate}</p>
                  </div>
                  <div class="explore-desc">
                    <Image width={700} height={500} src={x.gambar} />
                    <h3>{x.title}</h3>
                    <p>{x.post}</p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    
                      <CommentOutlined className="icon-side" onClick={() => { 
                        navigate(`/explore/detail/${x.id}`);
                    }} />
                    
                    <div>
                      {x.user_id == Cookies.get("id") ? (
                        <>
                          <EditOutlined className="icon-side" onClick={() => { 
                        navigate(`/explore/edit/${x.id}`);
                    }} />
                          <DeleteOutlined className="icon-side" onClick={() => {
                            setOpen(true);
                            setSelectedToDelete(x.id)}} />
                        </>
                      ) : (
                        <div></div>
                      )}
                    </div>
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
