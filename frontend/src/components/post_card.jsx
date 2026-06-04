import userImage from '../assets/person.jpg';
import postImage from '../assets/Nature.jpg';

function PostCard() {
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
        <p className='post_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam veritatis quo facilis accusantium quisquam quam nostrum sunt atque ducimus fuga eaque beatae, adipisci rem at a, quas sed. Modi?</p>
        <img src={postImage} alt="" />
      </div>
    </div>
  )
}

export default PostCard;
