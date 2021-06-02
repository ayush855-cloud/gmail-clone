  
import React from "react";
import {useHistory} from 'react-router-dom';
import './Section.css';

function Section({ Icon, title, color, selected,click,number,backgroundColor}) {
    const history=useHistory();
    return(
        <div className={`section ${selected && 'section--selected'}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`
        }}
        >
                {click? (<Icon onClick={()=>history.push('./socials')} />):(<Icon/>)}
            
            <h4>{title}</h4>
            <div className="notify"  style={{
            backgroundColor: `${backgroundColor}`,
            
        }}>
                <p>{`${number}`}</p>
            </div>


        </div>
    )
}
export default Section;