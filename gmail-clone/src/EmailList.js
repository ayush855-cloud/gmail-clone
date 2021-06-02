import React,{useState,useEffect} from "react";
import { Checkbox, IconButton} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import './EmailList.css'
import Section from "./Section";
import EmailRow from "./EmailRow";

import {db} from './firebase';


function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(()=>{
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setEmails(
                    snapshot.docs.map(doc =>({
                   id: doc.id,
                   data: doc.data(),
            }))));
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                 <div className="emailList__settingsLeft">
                      <Checkbox/>
                      <IconButton>
                          <ArrowDropDownIcon/>
                      </IconButton>

                      <IconButton>
                          <RedoIcon/>
                      </IconButton>

                      <IconButton>
                          <MoreVertIcon/>
                      </IconButton>
                 </div>
                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>

                    <IconButton>
                         <ChevronRightIcon/>
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>

                    <IconButton>
                         <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                  <Section Icon={InboxIcon} title='Primary' color='red' selected backgroundColor="red" number={99}/>
                  <Section Icon={PeopleIcon} title='Social' click color='#1A73E8' backgroundColor='#1A73E8' number={21} />
                  <Section Icon={LocalOfferIcon} title='Promotions' color='green' backgroundColor='green' number={11} />
            </div>

            <div className="emailList__list">
                {emails.map(({id, data: {to, subject, message, timestamp,user}}) =>
                    (<EmailRow

                            id={id}
                            key={id}
                            title={to}
                            user={user}
                            subject={subject}
                            description ={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                    ))}

            </div>

        </div>
    )
}

export default EmailList;
