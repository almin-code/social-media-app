import { useEffect, useState } from "react";
import Header from "./components/header";
import PostCard from "./components/post_card";

function App() {
  const [message, setMessage] = useState("loading...")

  useEffect(() => {
    fetch("http://localhost/api/db-test")
      .then((response) => response.json())
      .then((data) => {
        setMessage(`${data.message} Users: ${data.users_count}`)
      })

      .catch((error) => {
        console.log(error)
        setMessage("Nije moguce ucitati laravel api")
      })
  }, [])


  return (
    <>
      <div className="feed_wrapper">
        <div className="header_sticky">
          <Header />
        </div>
        <main>
          <div className="container feed_container">
            <PostCard />
          </div>
        </main >
      </div>
    </>

  )
}

export default App;
