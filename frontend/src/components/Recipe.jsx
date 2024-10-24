import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios";
// import { withRouter } from "react-router";

const Recipe = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null)
    
  
    useEffect(() => {
      const fetchRecipe = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/recipe/${id}`);
          setRecipe(response.data);
        } catch (error) {
          console.error(`Ошибка загрузки рецепта ${id}:`, error);
        }
      };
  
      fetchRecipe();
    }, [id]); 
  
    if (!recipe) {
      return <div>Здесь пока нет рецептов</div>;
    }
  
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.text}</p>
      </div>
    );
  };
  
  export default Recipe;




