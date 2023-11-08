import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body =() =>{

  const [listOfRestaurants, setlistOfRestaurant] = useState([])
  const [searchText, setSearchText] =useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);



  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
 
    const json = await data.json();
    console.log(json);
    //optional chaninig
    setlistOfRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //Shimmer UI
  //Conditional Rendering(Rendering acoording to condition)

  console.log("Body render")


    return listOfRestaurants.length === 0 ? <Shimmer /> :(
     <div className="body">

       <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}  onChange={(e)=>{setSearchText(e.target.value)}} />
          <button onClick={()=>{
            //Filter the restaurant carda and update the UI
            //searchText
            console.log(searchText);
            const filteredRestaurant = listOfRestaurants.filter(
              (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
            )
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          // console.log("button clicked");
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4 );
          setFilteredRestaurant(filteredList);
        }}
        >
          Top Rated Restaurants</button>
       </div>
       <div className="res-container">
         {/* ReastaurantCard  */}
       {
         filteredRestaurant.map((restaurant) => (
           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
         ))
       }
      
     
     
       </div>
     </div>
    )
   }

   export default Body;

   //useeffect takes two argument first one is callback function and second one is dependency array....
   //the callback function is called when the components are render
   //first the body rendered then useeffect is called...


   //Why we use state variable instead of local js variable
   //If we want something to create dynamic then we have to use a local state varibale i.e useState
   //whenever state variable update, react triggers a reconciliation cycle(re-renders the component);
   //
