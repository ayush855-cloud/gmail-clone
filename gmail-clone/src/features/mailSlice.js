import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail:null,
    sendMessageIsOpen: false,
    openSidebar:false,
  },
  reducers: {
    selectMail:(state, action) =>{
      state.selectedMail = action.payload;
    },
    openButton:(state)=>{
      state.openSidebar=false;
    },
    closeButton: (state) => {
      state.openSidebar =true;
    },
    openSendMessage : (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen =false;
    },

  },
});

export const {selectMail, closeButton,openButton,openSendMessage, closeSendMessage} = mailSlice.actions;


export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state)  => state.mail.sendMessageIsOpen;

export const closeInMail=(state)=> state.mail.openSidebar;

export default mailSlice.reducer;