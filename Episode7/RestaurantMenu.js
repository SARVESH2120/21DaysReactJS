import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
  
    const {resId} = useParams();
    console.log(resId)


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(
             MENU_API + 
            resId 
        );
        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
    }

    if (resInfo === null ) return <Shimmer />;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return   (
        <div className="menu" >
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={itemCards[0].card.info.id}>  {item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice /100}</li>
                ))}
                {/* <li }> - {itemCards[0].card.info.price || itemCards[0].card.info.defaultPrice}</li> */}
                {/* <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
