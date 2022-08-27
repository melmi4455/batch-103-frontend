import {  FaLocationArrow,  } from "react-icons/fa";
import {Link} from "react-router-dom"

function RestaurantCard({name,location}){
    return(
        <Link to="restaurant">
        <div className="flex bg-white rounded-lg drop-shadow-md space-x-2">
        <div>
            <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
             alt="food" className="h-32" />
        </div>
        <div className="flex-1 py-2">
            <h3 className="text-2xl">{name}</h3>
            <p className="text-sm text-gray-500 py-2">Somali | Arabian | Indian</p>
            <div className="flex items-center">
                <FaLocationArrow size={14} className="text-green-400 mr-2"/>
                <p className="text-sm">{location}</p>
            </div>
        </div>
        <div className="p-2">
            <div className="bg-gray-300 rounded-full text-sm p-1">4.3</div>
        </div>
    </div>
    </Link>
    )
}

export default RestaurantCard;