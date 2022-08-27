import AdminNav from "../../Components/AdminNav";
import {MdRemoveRedEye,MdRemoveCircle} from "react-icons/md"



function Order() {
    return (
        
        <div>
        <AdminNav/>
        <div className="flex justify-center">
            <div className=" flex justify-center w-1/2">
                <table className="bg-white drop-shadow-md">
                    <tr>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>
                            Ali

                        </td>
                        <td>Jigjiga yar</td>
                        <td>06333333</td>
                        <td>
                            <MdRemoveRedEye className="text-blue-400 m-auto" size="20"/>
                            </td>
                        <td><MdRemoveCircle className="m-auto" color="red" size="20"/></td>
                    </tr>


                </table>
            </div>
        </div>
    
    
    </div>
    )
}

export default Order;