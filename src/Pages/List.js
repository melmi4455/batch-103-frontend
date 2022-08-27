import {FaSearch} from "react-icons/fa"
import RestaurantCard from "../Components/RestaurantCard";
import {Link} from "react-router-dom"
function List() {




    return (
        <div>
            {/* SEARCH BOX */}
            <div className="bg-white flex justify-center py-3 border-t">
                <div>
                    <div className="flex items-center bg-gray-200 p-3">
                <FaSearch size={20} className ="mr-3"/>
                <input type="text" placeholder="Search...." className="bg-gray-200" />
                </div>
                    
                </div>
                <select className="text-sm px-2 bg-gray-200  ">
                    <option>Hargeisa</option>
                    <option>Burco</option>
                    <option>Boorama</option>
                </select>
                <button className="bg-black text-white text-sm font-bold px-5">Search</button>
            </div>
            {/* SEARCH BOX */}
            {/* LIST */}
            <div className="flex justify-center">
                <div className="bg-white w-2/3">
                    <Link to="/Restaurant">
                    <div className="grid grid-cols-2 mt-5 gap-2">
                        <RestaurantCard name={"sultan"}/> 
                        <RestaurantCard name={"25"}/> 
                    </div>
                    </Link>
                </div>
                </div>
            {/* LIST */}
        </div>

    )
}

export default List;