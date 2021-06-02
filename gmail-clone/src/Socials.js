import React,{useEffect,useState} from 'react';
import './EmailList.css'
import {db} from './firebase';
import EmailRow from './EmailRow';
import {Link} from 'react-router-dom';

function Socials() {
    const [desc,setDesc]=useState([]);
   
    useEffect(()=>{
        db.collection('emails').where('subject',"==","Recruitment")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setDesc(
                    snapshot.docs.map(doc =>({
                   id: doc.id,
                   data: doc.data(),
            }))));
    }, []);
            
    
    return (
        <Link to='./socials'>
               <div className="emailList__list">
                {desc.map(({id, data: {to, subject, message, timestamp}}) =>
                    (<EmailRow

                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description ={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                    ))}

            </div>
        </Link>
    )
}

export default Socials
