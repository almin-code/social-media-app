import { useState } from 'react';
import logo from '../assets/logo.png';
import right_arrow from '../assets/right-arrow.png';
import feed from '../assets/home.png';
import search from '../assets/search.png';
import addPost from '../assets/add-post.png';
import notifications from '../assets/bell.png';
import account from '../assets/account.png';
import settings from '../assets/setting.png';

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={isOpen ? "open" : ""}>
      <div className="sidebar-action" onClick={toggleSidebar}>
        <img src={right_arrow} alt="" />
      </div>
      <div className="container">
        <div className="header-wrapper">
          {/* <a href="/" className='logo'>
            <img src={logo} alt="" />
          </a> */}

          <div className="navbar">
            <a href="/"> <img src={feed} alt="" /> Feed</a>
            <a href="/search"> <img src={search} alt="" /> Search</a>
            <a href="/new-post"> <img src={addPost} alt="" /> Add new post</a>
            <a href="/notifications"><img src={notifications} alt="" /> Notifications</a>

          </div>

          <div className="user_links">
            <a href="/profile"><img src={account} alt="" /> Profile</a>
            <a href="/settings"><img src={settings} alt="" /> Settings</a>
            <div className="btn-container">

              <a href="/logout" className="btn btn-primary">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
