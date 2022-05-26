import axios from "axios" 
 import { API_URL } from "../api/config" 
 import React, { useState } from "react" 
 import { useParams } from "react-router-dom" 
 import PostCard  from "../components/PostCard" 
 import LikeDislikeButon from "../components/LikeDislikeButton" 
  
 export default function Profile(props) { 
   // TODO: answer here 
  
   const { like, dislike, isLikedBtn, isDislikedBtn, userId } = props; 
  
   const [posts, setPosts] = useState([]) 
   const { id } = useParams() 
  
   const getDataListPost = async () => { 
     const res = await axios.get(`${API_URL}/profile/${id}` , { 
       withCredentials: true, 
       }) 
     setPosts(res.data.posts) 
   } 
    
   React.useEffect(() => { 
     getDataListPost() 
   }, [])  
  
   return ( 
     <div className="profile-component"> 
       <div className="profile-wrapper"> 
         <PostCard 
           userId="1" 
           image="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
           username="User Testing 2" 
           caption="Test Caption 2222" 
           date="2022-05-05" 
         /> 
         <PostCard 
           userId="1" 
           image="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
           username="User Testing 2" 
           caption="Test Caption 3333" 
           date="2022-03-05" 
         /> 
         <article className="post-card-component"> 
           <div className="post-card-wrapper"> 
             <section className="card-image"> 
               <div> 
                 <img src="https://images.unsplash.com/photo-1588795909853-b8b9b9f9f8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="post-img" aria-label="Post Image"/> 
               </div> 
             </section> 
             <section className="card-detail"> 
               <div> 
                 <h2 className="card-name" aria-label="Post User Name">User Testing 2</h2> 
               </div> 
               <div> 
                 <p className="card-caption" aria-label="Post Caption">Test Caption 3333</p> 
               </div> 
             </section> 
             <section className="card-date"> 
               <h3 aria-label="Post Date">2022-04-22</h3> 
             </section> 
             <section className="card-button"> 
               <LikeDislikeButon likeCount={like} dislikeCount={dislike} isLiked={isLikedBtn} isDisliked={isDislikedBtn} id={userId}/> 
             </section> 
           </div>   
         </article> 
  
       </div> 
     </div> 
   ) 
 }