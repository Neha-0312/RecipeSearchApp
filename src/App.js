import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {

	const APP_ID = "a20576e7";
	const APP_KEYS = "4bfab81a65e5e30bdc9d1f1ccaee569b";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");


	useEffect(() => {
		getRecipes();
	}, [query]);

	//Fetching the recipies from API
	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = (event) => {
		setSearch(event.target.value);
		console.log(search);
	};

	const finalSearch = (event) => {
		event.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="app" >
			<form onSubmit={finalSearch} className="search-form">
				<input className="search-text" type="text" placeholder="Search Recipe" value={search} onChange={updateSearch} />
				<button className="search-button" type="submit">
					Search
			</button>

			</form>

			<div className="recipess">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						url={recipe.recipe.url}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>

	);
}

export default App;