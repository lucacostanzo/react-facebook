import React, { useState, useEffect } from 'react';

function PostActionBar() {
  return (
    <div className="bg-black bg-opacity-80 p-3 flex">
      <div className="flex mt-5 items-center">
        <div>
          <img
            className="rounded-full ml-4 w-8 h-8"
            src="https://scontent.fcta1-1.fna.fbcdn.net/v/t1.0-9/13697075_602971306544915_5231291965757151231_n.jpg?_nc_cat=103&ccb=3&_nc_sid=e3f864&_nc_ohc=2nKpwHGpFYcAX_qa8Cz&_nc_ht=scontent.fcta1-1.fna&oh=d5aa6a8fd698e45d41ca77e491cc0d20&oe=604F67A0"
          ></img>
        </div>
        <div className="flex">
          <div className="bg-gray-500 flex-grow rounded-2xl ml-3 cursor-pointer text-white text-xl p-2">
            <p className="text-xs">Write a comment...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostActionBar;
