import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";

const Categories = () => {
  const [data, setData] = useState([])

      useEffect(() => {
        fetch("http://localhost:8000/api/recipe/category")
          .then(data => data.json())
          .then(response => setData(response))
          .catch(error => console.log(error))
      }, []);


        return(

            {data.map((category, index) => ( // Использование index в качестве ключа (если нет уникального ID)
          <div key={index}>{category}</div>
        ))}

        )
}

export default Category





