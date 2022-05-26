import "./App.css"
import axios from "axios"
import { API_URL } from './api/config';
import React, { useState } from "react";
// TODO: answer here
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
// import Profile from "./components/Profile"
import UploadForm from "./components/UploadForm"
import {BrowserRouter as Router} from "react-router-dom"
// import SessionContext from "./context/SessionContext"


function App() {

  // TODO: answer here
  const [submit, setSubmit] = useState(false)
  const [postList, setPostList] = useState([])

    // get data from api
    const getDataListPost = async () => {
      const response = await axios.get(
        `${API_URL}/post/list`, {
          withCredentials: true,
        }
        );

    }
    
    React.useEffect(() => {
      getDataListPost()
    }, [])  

  return (
    <div aria-label="App" className="App">
      <div className="ImportItem">
          <Navbar />
          <UploadForm onSubmit={() => {
            setSubmit(true)
          }} />
          {
            submit 
            &&
            <PostCard 
              caption="Test New Caption 9999"
            />
          }
          <PostCard
            image="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            caption="Test Caption 1111"
            username="User Testing 1"
          />
          <PostCard
            image="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            caption="Test Caption 2222"
            username="User Testing 2"
          />
      </div>
    </div>
    
  );
}

export default App;