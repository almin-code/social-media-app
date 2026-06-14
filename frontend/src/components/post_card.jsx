import userImage from "../assets/person.jpg";
import postImage from "../assets/Nature.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostCard() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost/auth/status", {
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json();

        setIsAuthenticated(data.authenticated);
      } catch (error) {
        console.error("Fail: ", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="card_wrapper">
      <div className="user_wrapper">
        <div className="user_image">
          <img src={userImage} alt="" />
        </div>
        <div className="user_data">
          <h3>Username</h3>
          <p>Role</p>
        </div>
      </div>
      <div className="post_content">
        <h2>Post Title</h2>
        <p className="post_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aperiam veritatis quo facilis accusantium quisquam quam nostrum sunt
          atque ducimus fuga eaque beatae, adipisci rem at a, quas sed. Modi?
        </p>
        <img src={postImage} alt="" />
        {isAuthenticated === false && (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostCard;
