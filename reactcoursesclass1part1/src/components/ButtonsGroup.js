//Colocar os imports
import React from "react";
import './ButtonGroup.css';

//Criar funcao ou constante
const ButtonGroup = () =>{
    return(
        <div>
        <div className="button-group">
            <button>Click </button>
            <button>Click Here</button>
            <button>Send</button>
            <button>Login</button>
            <button>Submit</button>
        </div>
        <div >
            <button id="difbtn">Activate</button>
        </div>
    </div>
    );
}

//exportar a funcao acima
export default ButtonGroup;