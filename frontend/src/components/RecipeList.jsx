import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
// import { withRouter } from "react-router";

const RecipeList = () => {
    // const {id} = useParams();
    const [recipes, setRecipes] = useState([])
    
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/recipe/")
      .then(res => {
        console.log(res.data)
        setRecipes(res.data)
      })
      .catch(err => console.log(err.message))
    }, [])

    return(
        <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly bg-red-100 p-10">
            {/* <div className="self-center text-2xl font-bold whitespace-nowrap dark:text-white"> 
              <h2 className="p30">{Recipe.title}</h2>
              <h3 className="bg-grey-200 text-black">{Recipe.text}</h3>
            </div> */}
        </div>
    )
}

export default RecipeList