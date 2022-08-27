import {useState,useContext} from "react"
import axios from "axios"
import {toast} from "react-toastify"
import {useNavigate,Link} from "react-router-dom"
import {UserContext} from "../Utils/UserContext"



function Signup(){
const [inputs,setInputs] = useState({});
const {setUser} = useContext(UserContext)
const navigate = useNavigate();

async function handleOnSubmit(){
    try {
        const res = await axios.post("http://localhost:4000/user/", inputs);
        toast.success(res.data.message);
        localStorage.setItem("token",res.data.token)
        setUser(true);
        navigate("/");
    }
    catch (e){
        toast.error(e.response.data.message);

    }
}


    return (
        <div className="flex justify-center">
            <div className="bg-green-200 w-80 text-center py-4">
                <h1>Sign Up!</h1>
                <div className="flex flex-col w-3/5 m-auto space-y-2 my-2">
                <input type="text" placeholder="Name" className=" px-3 py-1 rounded-sm"
                onChange={(e)=> setInputs({...inputs, name: e.target.value})} />
                <input type="text" placeholder="Email"  className=" px-3 py-1 rounded-sm" 
                onChange={(e)=> setInputs({...inputs, email: e.target.value})}/>
                <select className=" px-3 py-1 rounded-sm" onChange={(e)=>setInputs({...inputs,role:e.target.value})}>
                    <option value="user">User</option>
                    <option value="owner">Restaurant Owner</option>
                </select>
                <input type="password" placeholder="Password"  className=" px-3 py-1 rounded-sm"
                onChange={(e)=> setInputs({...inputs, password: e.target.value})} />
                <input type="password" placeholder="Confirm Password"  className=" px-3 py-1 rounded-sm"
                onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})} />
                </div>
                <button className = "btn" onClick={handleOnSubmit}>Submit</button>
                <div>
                    <p className="text-sm text-gray-500 p-4">
                        You have an account? <Link to="/login" className="font-bold">Log in</Link>  </p>
                </div>
                
            </div>


        </div>
    );
}

export default Signup;