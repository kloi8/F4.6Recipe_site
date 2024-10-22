import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";


const Category = () => {
    const category = useParams();
    const [categories, setCategories] = useState([])
    // const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/recipe/category")
      .then(res => {
        console.log(res.data)
        setCategories(res.data)
        // setLoading(false)
      })
      .catch(err => console.log(err.message))
    }, [])

    return(
        <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
            <ul className='category'> 

        {categories.map(category =>  ( 
            <Link to={'recipe/category'} className='text-red-200 hover:text-green-500'>{category.title}</Link> 
        ))}
     </ul>
        </div>
    )
}

export default Category