import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PostHeader from './PostHeader.jsx';
import PostBody from './PostBody.jsx';
import PostActionBar from './PostActionBar.jsx';
import PostComments from './PostComments.jsx';

function App() {
  return (
    <div className="h-screen bg-black bg-opacity-95">
      <div className="bg-white flex flex-col max-w-5xl mx-auto rounded-xl cursor-pointer">
        <PostHeader />
        <PostBody />
        <PostActionBar />
        <PostComments />
      </div>
    </div>
  );
}
export default App;
