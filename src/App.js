import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import List from "./Pages/List";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Restaurant from "./Pages/Restaurant";
import Header from "./Components/Header"
import Order from "./Pages/Order"
import OrderList from "./Pages/Admin/Order"
import Menu from "./Pages/Admin/Menu"
import RestaurantDetails from "./Pages/Admin/RestaurantDetails";
import MenuForm from "./Pages/Admin/MenuForm";
import Profile from "./Pages/Admin/Profile"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {useState,useEffect} from "react"
import {UserContext} from "./Utils/UserContext"
import axios from "axios";
import Protect from "./Protect";



function App() {

  const [user,setUser]= useState(false);
  const [loading,setLoading]=useState(true);
  

  useEffect(() => 
  {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:4000/user/checkuser" , {
      headers:{authentication:token},
    }).then (()=> {
    setUser(true);
    
    }).catch((e)=> {
    setUser(false); 
  });
    setLoading(false);
  },[]);
if(loading) return <h1>Loading ...</h1>;
console.log(user)


  return (

    <UserContext.Provider value={{user,setUser}}>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/restaurant" element={<Restaurant/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/list/restaurant" element={<Restaurant/>} />

      <Route path="/admin" element={<Protect/>}>
      <Route path="restaurant" element = {<RestaurantDetails/>} />
      <Route path="order" element = {<OrderList/>} />
      <Route path="menu" element = {<Menu/>} />
      <Route path="menu/new" element = {<MenuForm/>} />
      <Route path="profile" element = {<Profile/>} />
      </Route>
      
    
     </Routes>
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </BrowserRouter>
    </UserContext.Provider>
    
      
  );
}

export default App;
