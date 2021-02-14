import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gray-900 ">
      <div className=" mx-24 flex px-24 bg-gray-800 rounded-xl cursor-pointer text-green-50 text-xl p-3">
        <div>
          <img
            className="rounded-full w-10 h-10 border-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBWMw05M04BIRa7SIuc9f4by2Sa0VR7ZcFw&usqp=CAU"
          ></img>
        </div>
        <div class=" mx-4 w-full">
          <div class="text-lg font-semibold">Giovanni Palestrato</div>
          <span class="text-gray-500 text-sm font-semibold">
            9 febbraio alle ore 16:20
          </span>
        </div>
        <div className="flex">
          <svg
            class="h-8 w-8 text-indigo-500 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default App;
