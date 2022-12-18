import logo from "./logo.svg";
import "./App.css";
import Posting from "./components/Posting.js";
import Home from "./screnns/home/Home";
import LoginForm from "./screnns/login/Login";
import RegisterForm from "./screnns/register/Register";
import DataApp from "./Data/Data";
import { useContext } from "react";
import { DataCtx } from "./Data/Data";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar/Navbar";
import Profile from "./screnns/profile/Profile";
import EditProfile from "./screnns/editprofile/EditProfile";
import Shopping from "./screnns/shopping/Shopping";
import Discover from "./screnns/discover/Discover";
import AddDiscover from "./screnns/discover/AddDiscover";
import DetailExplore from "./screnns/discover/DetailExplore";
import EditDiscover from "./screnns/discover/EditDiscover";

function App() {
  // const { isLogin, setIsLogin } = useContext(DataCtx);
  return (
    <div className="App">
      <Router>
      <DataApp>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/post" exact element={
            <>
            <Navbar />
            <Posting/>
            </>
          } />
          <Route path="/profile" exact element={
            <>
            <Navbar/>
            <Profile />
            </>
          } />
          <Route path="/editprofile" exact element={
            <>
            <Navbar/>
            <EditProfile />
            </>
          } />
          <Route path="/shopping" exact element={
            <>
            <Navbar/>
            <Shopping />
            </>
          } />
          <Route path="/explore" exact element={
            <>
            <Navbar/>
            <Discover />
            </>
          } />
          <Route path="/explore/detail/:id" exact element={
            <>
            <Navbar/>
            <DetailExplore />
            </>
          } />
          <Route path="/explore/edit/:id" exact element={
            <>
            <Navbar/>
            <EditDiscover />
            </>
          } />
          <Route path="/createfeeds" exact element={
            <>
            <Navbar/>
            <AddDiscover />
            </>
          } />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<RegisterForm/>} />
        </Routes>
        </DataApp>
      </Router>
    </div>
  );
}

export default App;
