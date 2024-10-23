// import axios from 'axios'
import react from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Category from './components/Category'
// import NavBar from './components/NavBar'
import Recipe from './components/Recipe'
import RecipeList from './components/RecipeList'




// const API_URL = 'http://localhost:8000';

// export default class App{
	
// 	constructor(){}
	
	
// 	getRecipes() {
// 		const url = `${API_URL}/api/recipe/`;
// 		return axios.get(url).then(response => response.data);
// 	}  
// 	getRecipeByURL(link){
// 		const url = `${API_URL}${link}`;
// 		return axios.get(url).then(response => response.data);
// 	}
// 	getCategory(pk) {
// 		const url = `${API_URL}/api/category/${pk}`;
// 		return axios.get(url).then(response => response.data);
// 	}
// }






function App() {

  
  return (
    <Router>
      <Routes>
        <Route path = "recipe/category" element={<Category/>}/>
        <Route path = "/recipe/:id" element={<Recipe/>}/>
        <Route path = "/" element={<RecipeList/>}/>


      </Routes>
    </Router>

  );
}

export default App;
