import React from "react";
import './Mail.css';
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchlaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";

import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {selectOpenMail,openButton} from "./features/mailSlice";


function Mail() {

    const history = useHistory();
    const dispatch=useDispatch();
    const selectedMail = useSelector(selectOpenMail);
    const Back=()=>{
        dispatch(openButton())
    }

    return(
        <div className="mail">
            <div className="mail__tools">
               <div className="mail__toolsLeft">
                 <IconButton onClick={()=> history.push("/")}>
                     <ArrowBackIcon onClick={Back}/>
                 </IconButton>

                   <IconButton>
                       <MoveToInboxIcon/>
                   </IconButton>

                    <IconButton>
                       <ErrorIcon/>
                   </IconButton>

                    <IconButton>
                       <DeleteIcon/>
                   </IconButton>

                    <IconButton>
                      <EmailIcon/>
                   </IconButton>

                   <IconButton>
                       <WatchlaterIcon/>
                   </IconButton>

                   <IconButton className="icon">
                       <CheckCircleIcon/>
                   </IconButton>

                   <IconButton className="icon">
                       <LabelImportantIcon/>
                   </IconButton>

                   <IconButton className="icon">
                       <MoreVertIcon/>
                   </IconButton>

               </div>



                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>

                    <IconButton>
                        <PrintIcon/>
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>

                </div>


            </div>


            <div className="mail__body">
                <div className="mail__bodyHeader">
                      <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p className="mail_title">{selectedMail?.title}</p>
                    <p className="mail_time"> {selectedMail?.time}</p>
                </div>
                <div className="mail__message">
                   <p>{selectedMail?.description}</p>
                </div>

            </div>

        </div>
    )
}

export default Mail;