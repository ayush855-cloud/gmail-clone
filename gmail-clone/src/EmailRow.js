import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import {Avatar, IconButton} from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import './EmailRow.css'
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {selectMail} from "./features/mailSlice";
import {closeButton} from "./features/mailSlice";


function EmailRow({ id, title, subject, description, time,user}) {

    const history = useHistory();
    
    const dispatch = useDispatch();


    const openMail = (sel) => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        })
      );
       


        history.push("/mail");
    };
    const closeCompose=()=>{
        dispatch(closeButton())
    }

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">

                <Checkbox/>
                <IconButton>
                   <StarBorderOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>

            </div>
            <Avatar src={user} className="writer"></Avatar>

            <h3 className="emailRow__title">
                {title}
            </h3>    
            <div className="emailRow__message" onClick={closeCompose}>
                <h4>
                    {subject} -
                    <span className="emailRow__description">
                {description}
                 </span>
                </h4>

            </div>


            <p className="emailRow__time">
                {time}
            </p>
            </div>


        
    )
}

export default EmailRow;











