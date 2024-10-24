import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";



const Category = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/recipe/category'); 
        setCategory(response.data); 
      } catch (error) {
        console.error('Ошибка загрузки категорий:', error);
      }
    };

    fetchCategory();
  }, []); 

  return (
    <div>
      <h1>Категории</h1>
      {category.map(category => (
        <div key={category.id}> 
        {/* index - если нет уникального ключа */}
          <h2>{category.title}</h2>
          <button onClick={() => navigate(`/recipe/category/${category.id}`)}>
              Посмотреть рецепты
            </button>
          {/* <a href={`/recipe/recipe?category=${category.index}` }>Посмотреть рецепты</a> */}
        </div>
      ))
      }
    </div>
  );
};

export default Category;



