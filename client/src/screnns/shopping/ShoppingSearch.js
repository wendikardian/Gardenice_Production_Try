import React, { useState, useEffect } from "react";
import "./Shopping.css";
import axios from "axios";

import { Image, Button, Modal, message } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu , Input} from "antd";
import Cookies from "js-cookie";
import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined 
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const ShoppingSearch = () => {
  const navigate = useNavigate()
  let { id } = useParams("id");
  // const [store, setStore] = useState([]);
  const { store } = useContext(DataCtx);
  const filter = store.filter(x => x['title'].toUpperCase().includes(id.toUpperCase()));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [selectedIdToDelete, setSelectedIdToDelete] = useState(0);
  const [price, setPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [selectedId, setSelectedId] = useState(0)
  const showModal = (id, price) => {
    setIsModalOpen(true);
    setSelectedId(id)
    setPrice(price)
  };
  const searchHandle = (value) => {
    if(value !== ""){
      navigate(`/shopping/search/${value}`)
    }else{
        navigate(`/shopping`)

    }
}
  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity])
  const handleOk = () => {
    setIsModalOpen(false);
    const data = {
      user_id: parseInt(Cookies.get("id")),
      item_id: parseInt(selectedId),
      quantity : parseInt(quantity),
      process : 1,
      date: parseInt(moment().unix()),
    };

    console.log(data);

    axios
      .post("http://localhost:8081/insertTransaksi", data)
      .then(() => {
        message.success("Comment already been published");
        navigate("/order");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      });
  };

  const handleDeleteItem = () => {
    axios
      .delete(`http://localhost:8081/deleteStore/${selectedIdToDelete}`)
      .then(() => {
        message.success("Item has been deleted");
        navigate("/shopping");
        setTimeout(( ) => {
          window.location.reload();
        }, 1000)
        
      })
      .catch((err) => {
        console.log(err.response.data);
        message.error(err.response.data);
      })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { Search } = Input;
  console.log(store);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <Modal
            title="Buy item"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
           
          >
            <input name="quantity" value={quantity} onChange={(event) => {setQuantity(event.target.value)}} className="form-shop" placeholder="Insert the quantity" />
            <p>Total price : {totalPrice }</p>
          </Modal>
          <Modal
            title="Delete item"
            open={isModalOpenDelete}
            onOk={() => {
              handleDeleteItem()
            }}
            onCancel={() => {
              setIsModalOpenDelete(false)
            }}
            
          >
            <p>Are you sure wanna delete item ??? </p>
          </Modal>
          <div className="shopping-cart">
            <ShoppingCartOutlined />
          </div>
          <div className="card-container">
            <h1>Search Item</h1>
          </div>
            <Search placeholder="input search text"  onSearch={searchHandle} style={{ width: 600 , marginTop : 50}} />
            <p style={{marginTop: 20, fontWeight: "bold"}}>Keyword :  {id}</p>
          <div className="shopping-cons">
            {filter.map((x) => {
              return (
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={<Image width={300} height={300} src={x.image} />}
                  actions={[
                    Cookies.get("roles") == 1 ?<ShoppingCartOutlined
                    key="setting"
                    onClick={() => {showModal(x.id, x.price)}}
                  /> : <></>
                    , Cookies.get("roles") == 2 ? <DeleteOutlined 
                    key="setting"
                    onClick={() => {
                      setIsModalOpenDelete(true);
                      setSelectedIdToDelete(x.id)
                    }}
                  /> : <></> , Cookies.get("roles") == 2 ? <EditOutlined
                  key="setting"
                  onClick={() => { 
                        navigate(`/store/edit/${x.id}`) }}
                        
                /> : <></>

                  ]}
                >
                  <p>${x.price}</p>
                  <Meta
                    avatar={
                      <Avatar src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" />
                    }
                    title={x.title}
                    description={x.desc}
                  />
                </Card>
              );
            })}
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default ShoppingSearch;
