import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from './Mail';
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import {auth} from "./firebase";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {openSendMessage,selectSendMessageIsOpen,closeInMail} from "./features/mailSlice";
import {selectUser} from "./features/userSlice";
import {login} from "./features/userSlice";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function App() {

    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
    const user = useSelector(selectUser);
    const show=useSelector(closeInMail);
    const dispatch = useDispatch();
    const [color,setColor]=useState(false);
    const [colour,setColour]=useState(false);

    const footerMail=()=>{
        setColor(true)
        setColour(false)
    }

    const footerMeet=()=>{
        setColour(true)
        setColor(false)
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
               dispatch(login({
                   displayName: user.displayName,
                   email: user.email,
                   photoURL: user.photoURL
               }))
            }

        })

    }, [])


  return (
      <Router>
          {!user ? (
              <Login/>
          ): (
              <div className="App">
                   <Header/>
              <div className="app_body">

                    <Sidebar/>
                  <Switch>
                      <Route path="/mail">
                          <Mail/>
                      </Route>

                      <Route path="/">
                          <EmailList/>
                      </Route>

                  </Switch>
              </div>
              {sendMessageIsOpen && <SendMail/> }
              <Button 
               startIcon={<AddIcon className="add" fontSize="large"  />}
               className={`sidebar__compose hide ${show && 'compose'}`}
               onClick={() => dispatch(openSendMessage())}
           >
                   Compose
           </Button>
              <div className="footer">
              <div onClick={footerMail} className={`footer_desc ${color && 'active'}`}>
               <MailIcon/>
               Mail
              </div>
              <div onClick={footerMeet} className={`footer_desc ${colour && 'active'}`}>
               <VideocamOutlinedIcon/>
               Meet
              </div>
            </div>
          </div>

          )}

      </Router>

  );
}

export default App;