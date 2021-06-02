
  
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {Avatar} from "@material-ui/core";

// import PersonIcon from "@material-ui/icons/Person";
// import DuoIcon from "@material-ui/icons/Duo";
// import PhoneIcon from "@material-ui/icons/Phone";

import { useDispatch , useSelector} from "react-redux";
import { openSendMessage} from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser);
    
    const dispatch = useDispatch();
   

    return (
        <div className="sidebar">
           <Button 
               startIcon={<AddIcon className="add" fontSize="large"  />}
               className={`sidebar__compose `}
               onClick={() => dispatch(openSendMessage())}
           >
                   Compose
           </Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number ={54} selected={true}/>
             <SidebarOption Icon={StarIcon} title="Starred" number={8}/>
             <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={17}/>

             <SidebarOption Icon={LabelImportantIcon} title="Important" number={2}/>
             <SidebarOption Icon={NearMeIcon} title="Sent" number={23}/>
             <SidebarOption Icon={NoteIcon} title="Drafts" number={54}/>
             <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
             <hr className="line"/>

             
                 <h3 className="title_name">Meet</h3>
                 <SidebarOption Icon={VideocamIcon} title="New Meeting" />
                 <SidebarOption Icon={KeyboardIcon} title="Join Meeting"/>

                 <hr/>
                 ,<h3 className="title_name">Hangouts</h3>
                 <div className="sidebar__foot">
                 <div className="sidebar__footer__sub">
                 <Avatar className="avatar" src={user?.photoURL}/>
                 <h3 className="title_nam">{user?.displayName}</h3>
                 <ArrowDropDownIcon className="header__inputCaret"/>
                 </div>
                 <AddIcon className="adder" fontSize="large"/>

                 

                 </div>
             

        </div>
        
    )
}

export default Sidebar;
