import { useEffect, useState } from "react";
import Header from "./components/header";
import PostCard from "./components/post_card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="feed_wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="header_sticky">
                  <Header />
                </div>
                <main>
                  <div className="container feed_container">
                    <PostCard />
                  </div>
                </main>
              </>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
