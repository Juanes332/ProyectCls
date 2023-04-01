import * as React from 'react';
import './button.scss'

interface Props {
    state: boolean;
    text: string; 
    fatherFuntionButton:() => void;
    width?:string;
    height?: string;
}

const Button: React.FC <Props> = ({state, fatherFuntionButton, text, width, height}) =>{

    // --------inicio estados--------
    // --------fin estados--------

    // --------hooks--------
    // --------Fin hooks--------

    //Inicio de método
    const validateButton = () =>{
        if(state == true){
            fatherFuntionButton();
        }
    }
    //Fin de metodo
    
    // ----retorno de componente 
 return(
        <button  onClick={validateButton} className={state?'buttonCls buttonClsOn':'buttonCls buttonClsOff'} style={{width: width || '85%', height: height || '56px'}}>{text}</button>
 );
}

export default Button;