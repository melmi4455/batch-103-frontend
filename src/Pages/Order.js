import OrderCard from "../Components/OrderCard";

function Order() {
    return (
        <div >
            <h2 className="text-center font-bold text-3xl mt-10">Place Your Order</h2>
        
        <div className="flex justify-center ">
            <div className="grid grid-cols-2 gap-8 bg-white w-3/5 mt-4 p-5">
                <div>
                    <h2 className="text-center font-bold pb-3">Enter Your Details</h2>
                    <div className="space-y-2 mt-2">
                        <input type="text" className="input w-full" placeholder="Full Name"></input>
                        <input type="text" className="input w-full" placeholder="Phone Number"></input>
                        <input type="text" className="input w-full" placeholder="Address"></input>
                        <input type="text" className="input w-full" placeholder="Payment Method"></input>
                    </div>
                    <div><button className="bg-green-500 w-full rounded-md p-2 font-bold my-2 ">Order Now!</button></div>
                </div>
                <div>
                    <h2 className="text-center font-bold pb-3">Order Items</h2>
                    <div className="space-y-2">
                        <OrderCard/>
                        <OrderCard/>
                        <OrderCard/>
                    </div>
                    <div className="font-bold py-2 text-end">Total: $30</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Order;