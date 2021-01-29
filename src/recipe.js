import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
    return (
        <div className={style.recipe} >
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <div className={style.subdiv}>
                <h3>Click here for detailed recipe</h3>
                <a className={style.link} href={props.url}><button className={style.button}>URL</button></a>
            </div>
            <img className={style.image} src={props.image} alt="" />

        </div>

    );

}


export default Recipe;
