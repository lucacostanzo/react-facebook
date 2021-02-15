import React, { useState, useEffect } from 'react';

function PostHeader() {
  return (
    <div className=" flex bg-black bg-opacity-80 text-xl">
      <div className="mt-2 ml-3">
        <img
          className="rounded-full w-10 h-10"
          src="https://scontent.fcta1-1.fna.fbcdn.net/v/t1.0-9/13697075_602971306544915_5231291965757151231_n.jpg?_nc_cat=103&ccb=3&_nc_sid=e3f864&_nc_ohc=2nKpwHGpFYcAX_qa8Cz&_nc_ht=scontent.fcta1-1.fna&oh=d5aa6a8fd698e45d41ca77e491cc0d20&oe=604F67A0"
        ></img>
      </div>
      <div className=" mx-4 flex-grow mt-1 flex flex-col justify-center">
        <div className="text-lg font-semibold text-white">
          Giovanni Palestrato
        </div>
        <span className="text-gray-400 text-xs font-normal -mt-1">
          9 febbraio alle ore 16:25
        </span>
      </div>
      <div className="flex mr-4">
        <svg
          class="h-6 w-6 text-gray-400 mt-4 mr-3"
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
  );
}

export default PostHeader;
