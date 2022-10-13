import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
const URL = 'https://api.jokes.one/jod';

function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get(URL)
    .then((response)=> {
      const joke = response.data.contents.jokes[0].joke;
      setTitle(joke.title);
      setText(joke.text);
    }).catch (error => {
      alert(error);
    });
  },[])

  return (
    <div style = {{paddingTop:40,paddingLeft:60,paddingRight:50}}>
      <h4>The joke of the day</h4>
      <div/>
      <h4>goes like this</h4>
      <hr></hr>
      <h3>{title}</h3>
      <hr></hr>
      <p>{text}</p>
    </div>
    
  );
  }
  
    


export default App;
