import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import RecipeList from './RecipeList';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
// import { withRouter } from "react-router";

const RecipeList = () => {
    const location = useLocation();
    // const queryString = new URLSearchParams(location.search);
    const categoryId = parseInt(location.pathname.split('/').pop());
    // const categoryId = queryString.get('category');
    
    // const { categoryId } = useParams();
    const [recipe, setRecipe] = useState([]);
  
    useEffect(() => {
      const fetchRecipe = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/recipe/');
            setRecipe(response.datafilter(recipe => recipe.categoryId === categoryId));
            } catch (error) {
              console.error('Ошибка загрузки рецептов:', error);
            }
            // let url = 'http://127.0.0.1:8000/api/recipe';
            // if (categoryId) {
            //     url += `?category=${categoryId}`;
        };

        fetchRecipe();
    }, [location.pathname]);
         
  
    return (
    <div>
        <h1>Список рецептов</h1>
        {recipe.map(recipe => (
            <div key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </div>
        ))}
    </div>
    );
}
  
  
  export default RecipeList;



