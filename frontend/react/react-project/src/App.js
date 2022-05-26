import UploadForm from "./components/UploadForm"
function App() {
  // TODO: answer here
  const [LikeButton, setLike] = useState(0);
  const [DisLikeButton, setDislike] = useState(0);
  return (
    <div aria-label="App" className="App">
      <h1 aria-label="App Title">Clone Instagram</h1>
      
    <div className="ImportItem">
        <Navbar />
        {/* <SessionContext  /> */}
        <LikeDislikeButon likeCount={LikeButton} dislikeCount={DisLikeButton}/>
        
        <PostCard />
        <Profile />
        <UploadForm />
    </div>
  </div>
  );
}

export default App