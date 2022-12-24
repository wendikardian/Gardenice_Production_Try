import React, { useState, useEffect } from "react";
import "./Shopping.css";
import axios from "axios";

import { Image, Button, Modal, message } from "antd";
// import "./Postingan.css";
import Sidebar from "../../Sidebar/Sidebar";
import { Layout, Menu } from "antd";
import Cookies from "js-cookie";
import { DataCtx } from "../../Data/Data";
import { useContext } from "react";
import {
  ShoppingCartOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const SeeOrder = () => {
  const { transaksi, store, userDataList} = useContext(DataCtx);
//   const [filteredTransaksi, setFilteredTransaksi] = useState([]);
//   useEffect(() => {
//     setFilteredTransaksi(
//       transaksi.filter((x) => x.user_id == Cookies.get("id"))
//     );
//     console.log(filteredTransaksi);
//   }, [transaksi]);

const sendPackage = (id) => {
    const data = {
        process : 2
      };
      console.log(data);
      axios
        .put(`http://localhost:8081/updateTransaksi/${id}`, data)
        .then(() => {
            message.success("Success ! Send Package");
          setTimeout(() => {
              window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          console.log(err.response.data);
          message.error(err.response.data);
        });
}
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar style={{ minHeight: "100vh" }} />
        <Layout className="site-layout">
          <div className="card-container">
            <h1>Order List</h1>
          </div>
          <div className="table-container">
            <table>
              <tr className="heading-table">
                <th>ID transaksi</th>
                <th>Buyer</th>
                <th>Item Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Date Transaction</th>
                <th>Status</th>
              </tr>
              {transaksi.map((x) => {
                var newDate = moment(x.date * 1000).format("MM/DD/YYYY hh:MM");
                const itemData = store.filter(
                  (store) => store.id == x.item_id
                );
                const newItemData = Object.assign({}, ...itemData);
                const userData = userDataList.filter(
                  (user) => user.id == x.user_id
                );
                const newUserData = Object.assign({}, ...userData);
                console.log(newItemData);
                return (
                  <tr className="body-table">
                    <td>{x.id}</td>
                    <td>{newUserData.name}</td>
                    <td>{newItemData.title}</td>
                    <td><img src={newItemData.image} className="order-image" /></td>
                    <td>$ {newItemData.price}</td>
                    <td>{x.quantity}</td>
                    <td>$ {newItemData.price * x.quantity}</td>
                    <td>{newDate}</td>
                    <td>{x.process == 1 ? 
                  <Button onClick={() => {
                    sendPackage(x.id)
                  }}>Send Package</Button> :
                  x.process == 2 ? 
                  <>
                  <Button className="btn-yellow">On Delivery</Button>
                  </>
                   :
                  <Button className="btn-green">Finished</Button> 
                     
                  }</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default SeeOrder;
