import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setMessages(
          snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name!"));
  }, []);

  const sendMessage = evt => {
    evt.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        className="app__image"
        src="https://media.idownloadblog.com/wp-content/uploads/2016/01/12-messenger-app-icon-android.jpg"
      />
      <h1 className="app__h1">Messenger</h1>
      <h3>Welcome: {username}</h3>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>enter a message...</InputLabel>
          <Input
            className="app__input"
            value={input}
            onChange={evt => setInput(evt.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} user={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
