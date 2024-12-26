import { createSlice } from "@reduxjs/toolkit";
const messages = [
  { id: 1, text: "Wishing you a joyful New Year filled with love and peace!" },
  { id: 2, text: "Cheers to a new beginning and endless possibilities!" },
  { id: 3, text: "May this New Year bring happiness and success to you!" },
  { id: 4, text: "Let’s celebrate a year full of blessings and harmony!" },
];
const initialState = {
  currentMessage: messages[Math.floor(Math.random() * messages.length)],
  allMessages: messages,
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setRandomMessage(state) {
      state.currentMessage =
        state.allMessages[Math.floor(Math.random() * state.allMessages.length)];
    },
  },
});

export const { setRandomMessage } = messageSlice.actions;
export default messageSlice.reducer;

