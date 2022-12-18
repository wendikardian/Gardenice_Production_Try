import React, { useState, useEffect } from "react";
import "./Discover.css";
import axios from "axios";
import { Image, Button, Input, Space } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Modal } from "antd";
import Cookies from "js-cookie";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Avatar, Card, message } from "antd";
import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const DetailExplore = () => {
  const { explore, userDataList, comment } = useContext(DataCtx);
  const navigate = useNavigate();
  const[open, setOpen] = useState(false)
  const[commentOpen, setCommentOpen] = useState(false)
  const [selectedToDelete, setSelectedToDelete] = useState(0)
  let { id } = useParams();
  const [filteredComment, setFilteredComment] = useState([]);
  useEffect(() => {
    console.log(comment);
    setFilteredComment(comment.filter((x) => x.post_id == id));
  }, [comment]);

  const [commentInput, setCommentInput] = useState("");
  const filter = explore.filter((x) => x.id == id);
  const newFilterData = Object.assign({}, ...filter);
  var newDate = moment(newFilterData.date * 1000).format("MM/DD/YYYY hh:MM");
  const userData = userDataList.filter(
    (user) => user.id == newFilterData.user_id
  );
  const newUserData = Object.assign({}, ...userData);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8081/deleteExplore/${id}`)
      .then(() => {
        message.success("Feeds has been deleted");
        navigate("/explore");
        window.location.reload();
        
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      })
  }
  const deleteCommentHandler = () => {
    axios
      .delete(`http://localhost:8081/deleteComment/${selectedToDelete}`)
      .then(() => {
        message.success("Your comment has been deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      })
  }

  
  const handleComment = () => {
    const data = {
      user_id: parseInt(Cookies.get("id")),
      post_id: parseInt(id),
      comment: commentInput,
      date: parseInt(moment().unix()),
    };

    console.log(data);

    axios
      .post("http://localhost:8081/insertComment", data)
      .then(() => {
        message.success("Comment already been published");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      });
  };

  // useEffect(() => {
  //     console.log(comment)
  // } ,[comment])
  // console.log(newDate)
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
        <Modal
        title="Delete Comment"
        open={commentOpen}
        onOk={deleteCommentHandler}
        onCancel={() => {setCommentOpen(false)}}
      >
        <p>Are you sure wanna delete the comment  ? </p>
      </Modal>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="discover-cons">
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
                <div>
                  <p>{newDate}</p>
                </div>
              </div>
              <div class="explore-desc">
                <Image width={700} height={500} src={newFilterData.gambar} />
                <h3>{newFilterData.title}</h3>
                <p>{newFilterData.post}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  {newFilterData.user_id == Cookies.get("id") ? (
                    <>
                      <EditOutlined className="icon-side" onClick={() => { 
                        navigate(`/explore/edit/${id}`);
                    }} />
                      <DeleteOutlined className="icon-side" onClick={() => setOpen(true)} />
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="comment-container">
            <Input
              id="hello"
              name="comment"
              value={commentInput}
              onChange={(event) => {
                setCommentInput(event.target.value);
              }}
              style={{
                width: 500,
                marginRight: 50,
              }}
            />
            <Button
              type="primary"
              icon={<CommentOutlined />}
              onClick={() => handleComment()}
            >
              Comment
            </Button>
          </div>
          <div className="discover-item full">
            {filteredComment.map((x) => {
              const userComment = userDataList.filter(
                (user) => user.id == x.user_id
              );
              const newUserComment = Object.assign({}, ...userComment);

              var commentDate = moment(x.date * 1000).format(
                "MM/DD/YYYY hh:MM"
              );
              if (filteredComment.length >= 1) {
                return (
                  <div classNmae="comment-item">
                    <div className="header-explore">
                      <div className="user-discover">
                        <img
                          src={
                            newUserComment.image != ""
                              ? newUserComment.image
                              : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                          }
                        />
                        <p>{newUserComment.name}</p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: 300,
                        }}
                      >
                        {x.user_id == Cookies.get("id") ? (
                          <DeleteOutlined
                            style={{ fontSize: 30, color: "red" }}
                            onClick={() => {
                                setSelectedToDelete(x.id)
                                setCommentOpen(true);
                            }}
                          />
                        ) : (
                          <></>
                        )}

                        <p>{commentDate}</p>
                      </div>
                    </div>
                    <div className="comment-box">
                      <p>{x.comment}</p>
                    </div>
                  </div>
                );
              }
            })}
            {filteredComment.length == 0 ? <h3>No Comment</h3> : <></>}
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default DetailExplore;
