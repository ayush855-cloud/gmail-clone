import React from "react";
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close"
import {Button} from "@material-ui/core";

import {useDispatch,useSelector} from "react-redux";
import {closeSendMessage} from "./features/mailSlice";
import {selectUser} from './features/userSlice';
import {db} from "./firebase";
import firebase from "firebase";

function SendMail() {
    
    const [inputs, setInputs] = React.useState({
        userEmail: "",
        subject: "",
        message: "",
      });
      const handleInput = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };
    
    const dispatch = useDispatch();
    const user=useSelector(selectUser);

    const registerUser = (e) => {
        e.preventDefault();


         db.collection('emails').add({
             to: inputs.userEmail,
             subject: inputs.subject,
             message: inputs.message,
             user:user.photoURL,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),

         });
         setInputs({ userEmail: "", subject: "", message: "" });
         dispatch(closeSendMessage());
    };

    return(
        <div className="sendMail">
               <div className="sendMail__header">
                    <h3>New Message </h3>
                   <CloseIcon onClick={()=> dispatch(closeSendMessage())}
                              className="sendMail__close"/>
               </div>
            <form onSubmit={registerUser}>
            <input
                      type="email"
                      name="userEmail"
                      className="model__input"
                      placeholder="To"
                      onChange={handleInput}
                      value={inputs.userEmail}
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      className="model__input"
                      placeholder="Subject"
                      onChange={handleInput}
                      value={inputs.subject}
                      required
                    />
                        <input
                      type="text"
                      name="message"
                      className="sendMail__message"
                      placeholder="Message..."
                      onChange={handleInput}
                      value={inputs.message}
                      required
                    />
                   <div className="sendMail__options">
                        <Button className="sendMail__send"
                                variant="contained"
                                color="primary"
                                type="submit"

                        >Send</Button>
                   </div>
            </form>
        </div>
    )
}

export default SendMail;