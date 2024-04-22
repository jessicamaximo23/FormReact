import React from "react";
import flower from './image/flower.jpeg' ;
import './ImageComp.css';

const ImageComp =() =>{
    return(
        <div>
            <img src={flower} alt="didnt show up"  className="imageconmp"></img>
        </div>
    );
}

export default ImageComp;
