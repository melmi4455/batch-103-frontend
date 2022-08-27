import {FiPlusCircle,FiMinusCircle} from "react-icons/fi"


function MenuCard(){
    return(
        <div className="border rounded-sm flex">
                            <div className="flex-1 flex flex-col justify-center pl-3">
                                <h2 className="font-bold">Mexican Food</h2>
                                <h2 className="text-sm text-gray-400">$9.8</h2>
                                <div className="flex space-x-1 items-center">
                                    <FiMinusCircle size={20}/>
                                    <p>0</p>                                    
                                    <FiPlusCircle size={20}/>



                                </div>
                            </div>
                            <div><img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
                             alt="food" className="h-24 w-28"
                         /></div>
                        </div>

    )
}


export default MenuCard;