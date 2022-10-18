import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  // Fields of form
  const [userName, setUserName] = React.useState('')
  const [userMessage, setUserMessage] = React.useState('')
  
  // to get from server
  const [getMessages, setGetMessages] = React.useState(true)
  
  // to store from user
  const [messageList, setMessageList] = React.useState([])

  // send message to server
  const submitFeedback = () => {
    if (userName === '' || userMessage === '') {
      alert('Please enter the details!')
      return
    }
    fetch('https://zehra-base-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          userMessage: userMessage
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUserName('')
        setUserMessage('')
        setGetMessages(true)
      })
  }

  // get messages from server
  useEffect(() => {
    if (getMessages) {

      fetch('https://zehra-base-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json')
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const savedFeedback = []
          for(const key in data){
            savedFeedback.push({
              id: key,
              userName: data[key].userName,
              userMessage: data[key].userMessage
            })
          }
          // console.log(savedFeedback);
          setMessageList(savedFeedback)
        })
        setGetMessages(false)
    }
  }, [getMessages])


  return (
    <div className='app-container'>
      <div className="form-container">
        <h2>Feedback Form</h2>
        <TextField
          required
          id="outlined-required"
          label="Full Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="Feedback"
          rows={4}
          multiline
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <Button variant="contained" onClick={submitFeedback}>Submit</Button>
      </div>

      <div className="feedback-container">
        {messageList && messageList.map((e, id) => {
          return(
            <div className="feedback-item" key={id}>
              <h3>{e.userName}</h3>
              <p>{e.userMessage}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
