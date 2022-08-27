import {FiX} from "react-icons/fi"

function OrderCard(){
    return (

        <div className="flex space-x-1 items-center border px-2 py-3 rounded-sm">
                            <h2 className="text-sm">x2</h2>
                            <h2 className="flex-1 font-bold">Pizza</h2>
                            <h2>$14</h2>
                            <FiX className="text-red-500"/>
                        </div>


    )
}


export default OrderCard;