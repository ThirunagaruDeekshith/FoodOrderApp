import { useState,useEffect } from "react";
import Errors from "./Errors";
import useHttp from "./Hooks/useHttp";
import MealItem from "./MealItem";
const requestConfig={};
export default function Meals(){
    // const [loadedMeals,setLoadedMeals]=useState([]);
    // useEffect(()=>{
    // async function fetchMeals(){

    // const response= await fetch('http://localhost:3000/meals');
    // if(!response.ok){

    // }
//     const meals=  await response.json();
//     setLoadedMeals(meals);
    
// } fetchMeals();  
// },[]);

    const {data:loadedMeals,isLoading,error,}=useHttp('https://foodorderapp-backend-4.onrender.com/meals',requestConfig,[]);
    // const {data:loadedMeals,isLoading,error,}=useHttp('http://localhost:8080/meals',requestConfig,[]);
    // console.log(data);
    // const loadedMeals=JSON.parse(data);
    if(isLoading){
        return <p className="error">Items fetching..,</p>
    }
    if(!loadedMeals){
        // return <p className="Center">no meals are present</p>
        return <Errors title="Error Fetching Meals" message="unable to fetch meals" />
    }
    !loadedMeals
    console.log(error);
    if(error){
        return <Errors title="Error Fetching Meals" message="unable to fetch meals"/>
    }

    return <ul id="meals">
        {loadedMeals.map(meal=><MealItem key={meal.id} meal={meal}>{meal.name}</MealItem>)}
    </ul>
}