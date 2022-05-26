// TODO: answer here
import React, { useState, } from "react";
export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {

    // TODO: answer here
    const [countLike, setCountLike] = useState(likeCount);
  const [countDislike, setCountDislike] = useState(dislikeCount);
  
  const handleLike = () => {
    if (isLiked) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
      setCountDislike(countDislike -1);
    }
  }
  const handleDislike = () => {
    if (isDisliked) {
      setCountDislike(countDislike - 1);
    } else {
      setCountDislike(countDislike + 1);
      setCountLike(countLike - 1);
    }
  }

  return (
    <div>
      <button
        aria-label="Like Button"
        onClick={handleLike}
      >Like
      </button>
      <span aria-label="Like Count">{countLike}</span>
      <button
        aria-label="Dislike Button"
        onClick={handleDislike}
      >Dislike
      </button>
      <span aria-label="Dislike Count">{countDislike}</span>
    </div>
  )
}