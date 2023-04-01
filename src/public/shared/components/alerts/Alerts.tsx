import React, { useEffect, useState } from "react";
import './Alerts.scss';

interface AlertProps{
    type: string;
    message: string;
};


  // --------inicio estados--------
  const Alerts: React.FC <AlertProps> = ({type, message}) => {

    const [showAlert, setAlert] = useState(message);


  // --------fin estados--------

  // --------hooks--------

  // --------fin hooks--------

  // --------metodos--------
  // --------fin de metodos--------

  // --------retorno de componente
  if(type === 'error'){
    return (<div>
        <img src="../../../assets/images/error.png" className={type? 'Error': undefined }>
        </img>

    </div>) 
}
if(type === 'alert'){
    return (<div>
        <p className={type? 'Alert': undefined }>
            {message}
        </p>

    </div>) 
}
if(type === 'remember'){
    return (<div>
        <p className={type? 'Error': undefined }>
            {message}
        </p>

    </div>) 
}
if(type === 'congrats'){
    return (<div>
        <p className={type? 'Error': undefined }>
            {message}
        </p>

    </div>) 
}
  return(
        <div>
            <p className={type? 'Error': undefined }>
                {message}
            </p>

        </div>
    );

};

export default Alerts;