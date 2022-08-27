import MenuCard from "../Components/MenuCard";
import OrderCard from "../Components/OrderCard";
import {Link} from "react-router-dom"
import {FiShoppingCart} from "react-icons/fi";

function Restaurant(){

    return (


        <div className="p-10">
            <div className="grid grid-cols-4 gap-3">
                {/* RESTAURANT CARD */}
                <div className="col-span-3 bg-white rounded-md drop-shadow-md">
                    {/* BACKGROUND IMAGE */}
                 <div className="bg-[url('../public/food.jpg')] bg-bottom bg-no-repeat bg-cover h-52 flex justify-center items-center"></div>
                  {/* BACKGROUND IMAGE */}
                    <div className="flex">
                        <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
                         alt="food" className="h-28 w-28 rounded-full bg-black p-1 -m-10 ml-5"
                         />
                         <div className="pl-12">
                            <h2 className=" text-2xl font-bold">Sultan</h2>
                            <p className="text-sm text-gray-400">Arabian | Somali | Indian</p>
                         </div>
                    </div>
                    <div className="p-5">
                        <p>Description about the Restaurant</p>
                    </div>
                </div>
                {/* RESTAURANT CARD */}
                {/* CART CARD */}
                <div className="bg-white p-5 rounded-md row-span-2  h-fit drop shadow-md">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Cart</h2>
                        <FiShoppingCart size={20}/>
                    </div>
                    <div className="py-2 space-y-2">
                        {/* CART ITEM */}
                        <OrderCard/>
                        <OrderCard/>
                        {/* CART ITEM */}
                        {/* CART TOTAL */}
                        <div className="border-t mt-4">
                            <div className="flex align-items justify-between py-1 ">
                                <h2 className="font-bold">Total</h2>
                                <h2>$14</h2>
                            </div>
                            <div className="flex align-items justify-between py-1 ">
                                <h2 className="font-bold">Delivery</h2>
                                <h2>$2</h2>
                            </div>
                            <div className="flex align-items justify-between py-1 ">
                                <h2 className="font-bold">Sub Total</h2>
                                <h2>$16</h2>
                            </div>
                            <Link to="/order">
                            <button className="bg-green-500 w-full rounded-md p-2 font-bold my-2 ">Order Now!</button>
                            </Link>
                        </div>
                        {/* CART TOTAL */}
                    </div>
                </div>
                 {/* CART CARD */}

                 {/* MENU CARD */}
                 <div className="bg-white col-span-3 p-5">
                    <h3 className="text-lg font-bold">Menu Items</h3>
                    <div className="grid grid-cols-2 gap-3 py-4">
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        
                       
                    </div>
                 </div>
            </div>
        </div>
    )
}


export default Restaurant;