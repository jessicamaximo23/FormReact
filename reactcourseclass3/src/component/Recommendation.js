import React from "react";
import './style.css';

const Recommendations = ({recommendations,removeRecommendation})=>{
        return(
    <div>
    <h3>Books Got Recommended : </h3>
    <ul> {recommendations.length ===0 ? (
    <li>No Recommendations</li>
    ):(
        <>
        {(() => {
const recomendationItems = [];

    for(let index = 0;index < recommendations.length;index++){
    const recomendation = recommendations[index];
        recomendationItems.push(

        <li key={index}>

        <h3>{recomendation.title}</h3>
        <p>Author : {recomendation.author}</p>
        <p>Genre : {recomendation.genre}</p>
        <p>Description : {recomendation.description}</p>
        <button onClick={() => removeRecommendation(index)}>Remove</button>
    </li>
    );
}
    return recomendationItems;
    })()}
    </>

)}
    </ul>
    </div>
);
};
    export default Recommendations;