import { useState } from "react"
import "./likeButton.css";

export default function LikeButton() {
    let [isliked, setIslike] = useState(false);

    let toggleLike = () => setIslike(!isliked);
    let likeStyle = { color: "red" };
    return (
        <span className="like-btn">
            <span onClick={toggleLike}>{isliked ? (<i className="fa-regular fa-heart"></i>) : (<i className="fa-solid fa-heart" style={likeStyle}></i>)} </span>
        </span>
    )
}