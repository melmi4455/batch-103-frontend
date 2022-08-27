import {Link} from "react-router-dom"
import {useState} from "react"
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {UserContext} from "../Utils/UserContext"



function Login() {

    const [inputs,setInputs] = useState ({});
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    async function onSubmit(){
        try{
            const res= await axios.post("http://localhost:4000/user/login", inputs)
            toast.success(res.data.message);
            localStorage.setItem("token",res.data.token)
            navigate("/home");
            setUser(true);

        }catch(e){
            toast.error(e.response.data.message);

        }
    }


    return (
        <div className="flex justify-center">
            <div className="bg-green-200 w-80 text-center py-4">
                <h1>Login in</h1>
                <div className="flex flex-col w-3/5 m-auto space-y-2 my-2">
                <input type="text" placeholder="Email"  className=" px-3 py-1 rounded-sm"
                 onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
                <input type="password" placeholder="Password"  className=" px-3 py-1 rounded-sm"
                 onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
                </div>
                <button className = "btn" onClick={onSubmit} >Login</button>
                <div>
                    <p className="text-sm text-gray-500 p-2">
                        You don't have an account? <Link to="/signup" className="font-bold">Create One</Link>  </p>
                </div>
                
            </div>


        </div>
    )
}

export default Login;