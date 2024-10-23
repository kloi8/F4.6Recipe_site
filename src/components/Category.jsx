import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";

const [data, setData] = useState([])
// const Category = () => {
//     const category = useParams();
//     const [categories, setCategories] = useState([]) 
    // const [loading, setLoading] = useState(true)
  
    // useEffect(() => {
    //   axios.get("http://127.0.0.1:8000/api/recipe/category")
    //   .then(res => {
    //     console.log(res.data)
    //     setCategories(res.data)
    //     // setLoading(false)
    //   })
    //   .catch(err => console.log(err.message))
    // }, [])


    useEffect(() => {
      fetch("http://localhost:8000/api/recipe/category")
        .then(data => data.json())
        .then(response => setData(response))
        .catch(error => console.log(error))
    }, []);


      return(
          // <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
          //     <ul className='category'> 

          {category.map(category =>  { 
            return (
               <div>{ category }</div>
            )
                   
            })
          }
          
          // </ul>
          // </div>
      )


    //  </ul>
    //     </div>
//     )
// } }

export default Category