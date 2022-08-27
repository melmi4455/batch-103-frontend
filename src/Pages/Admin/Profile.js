import AdminNav from "../../Components/AdminNav";
import axios from "axios";
import {useState} from "react"
import {toast} from "react-toastify"


function Profile() {
const [passwordInputs,setPasswordInputs] = useState ({});
async function handleOnChange(){

    try{
    const token = localStorage.getItem("token")
    const res = await axios.put("http://localhost:4000/user/changePassword", passwordInputs,
    {
        headers:{
            authentication:token,
        }
    });
    toast.success(res.data.message);
}
catch(e){
    toast.error(e.response.data.message);
}

}


    return(
        <div>
        <AdminNav/>
       
        <div className="flex justify-center">
            <div className="w-1/2 ">
                <div className="bg-white p-4  drop-shadow-md">
                <h2 className="font-bold text-2xl text-center">Profile</h2>
                <div className="mt-5 space-y-2">
                    <div className="flex space-x-2">
                    <input type="text" 
                    className="input w-full" 
                     placeholder="Name"/>
                     <input type="text" 
                    className="input w-full"
                     placeholder=" Phone"/>
                    </div>
                    <div className="flex space-x-2">
                    <input type="text" 
                    className="input w-full" 
                     placeholder="Email"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn">Update</button>
                    </div>
                    </div>
                    
                    
                </div>
                <div className="bg-white p-4  drop-shadow-md mt-5">
                <h2 className="font-bold text-2xl text-center">Change Password</h2>
                <div className="mt-5 space-y-2  pt-2">
                    
                    <input type="text" 
                    className="input w-full" 
                     placeholder="Old Password" 
                     onChange={(e)=>setPasswordInputs({...passwordInputs,oldPassword:e.target.value,})}/>
                     <input type="text" 
                    className="input w-full"
                     placeholder="New Password"
                     onChange={(e)=>setPasswordInputs({...passwordInputs,newPassword:e.target.value,})}/>
                    <input type="text" 
                    className="input w-full" 
                     placeholder="Confirm New Password"
                     onChange={(e)=>setPasswordInputs({...passwordInputs,confirmNewPassword:e.target.value,})}/>

                    <div className="flex justify-center">
                        <button className="btn" onClick={handleOnChange}>Change</button>
                    </div>
                    
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile;