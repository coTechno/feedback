import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';


import './App.css';

function App() {
  // Fields of form
  const [userName, setUserName] = React.useState('')
  const [userMessage, setUserMessage] = React.useState('')
  
  // to get from server
  const [getMessages, setGetMessages] = React.useState(true)
  
  // to store from user
  const [messageList, setMessageList] = React.useState([])

  // showFeed
  const [showFeed, setShowFeed] = React.useState(false)

  // showAlert
  const [alert, setAlert] = React.useState('')

  // state
  const [state, setState] = React.useState('Show FeedBacks')
  // send message to server
  const submitFeedback = () => {
    if(userName === '' || userMessage === '') {
      setAlert('error')
      return;
    }else
    setAlert('success')
  
    // fetch('https://zehra-base-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
    fetch('https://testing-module-7-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
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
        setAlert('success')
      })
  }

  // get messages from server
  React.useEffect(() => {
    if (getMessages) {

      // fetch('https://zehra-base-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json')
      fetch('https://testing-module-7-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json')
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

// HandleFeedback
const toggleFeedBack = () => {
  if(showFeed === false){
    setState('Hide FeedBacks')
    setShowFeed(true)
  }
  else{
    setState('Show FeedBacks')
    setShowFeed(false)
  }
} 
setTimeout(() => {
  setAlert('')
}, 5000);
  return (
    <div className='app-container'>
      {
         alert === 'error' ? 
         <Alert severity="error">Please enter the details!</Alert>
         :<></>
      }
      {
        alert === 'success' ?
        <Alert severity="success">Thanks for your Feedback!</Alert>
        : <></>

      }

      {/* <Alert severity="error">Please enter the details!</Alert> */}
      
      {/* <Alert severity="success">Thanks for your Feedback!</Alert> */}


      <div className="form-container">
        <h2>Feedback Form</h2>
        <TextField
          required
          className='fields'
          id="outlined-textarea"
          label="Full Name"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          className='fields'
          label="Feedback"
          rows={4}
          multiline
          fullWidth
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <Button variant="contained" onClick={submitFeedback}>Submit</Button>
      </div>
      <Button variant="contained" onClick={toggleFeedBack}>{state}</Button>


      {
        showFeed ? 
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
      : null
      }
    </div>
  );
}

export default App;
