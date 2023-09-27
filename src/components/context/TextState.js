import React, { useState } from 'react';
import textContext from './textContext';

const TextState = (props) =>{

    const s1= {
        'status': 'f',
        "name": "Shuv",
        'class': '5B'
    }

    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            if(state.status === 'f'){
                setState(
                    {
                    'status': 't',
                    'name': 'Sunil',
                    'class': '12A'
                    }
                )
            }else{
                setState(
                    {
                    'status':'f',
                    'name': 'Shuv',
                    'class': '5B'
                    }
                )
            }
        }, 0);
    }

    return(
        <textContext.Provider  value = {{state, update}}>
            {props.children}
        </textContext.Provider>
    )
}

export default TextState;