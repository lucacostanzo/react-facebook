import React, { useState, useEffect } from 'react';

function PostComments() {
  return (
    <div className="bg-black bg-opacity-80 p-3">
      <div className="flex flex-grow py-2">
        <div>
          <img
            className="rounded-full w-9 h-9"
            src="https://scontent.fcta1-1.fna.fbcdn.net/v/t1.0-9/131325989_449110399744641_2869950323137009435_o.jpg?_nc_cat=103&ccb=3&_nc_sid=e3f864&_nc_ohc=v4mnFdsjWjUAX_4pm-w&_nc_ht=scontent.fcta1-1.fna&oh=93a9fc6f01ce055ee397ecef4efca68a&oe=604EE0BF"
          ></img>
        </div>
        <div className="bg-gray-500 flex rounded-2xl ml-3 cursor-pointer text-white text-xl p-2 ">
          <div className=" mt-1 ml-3 flex flex-col justify-center">
            <div className="text-sm font-semibold text-white">
              Alessia Tringale
            </div>
            <span className="text-gray-200 text-xs font-normal -mt">
              wow che belle parole!
            </span>
          </div>
          <svg
            class="h-5 w-5 text-gray-300 ml-3 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-grow py-6">
        <div>
          <img
            className="rounded-full w-9 h-9"
            src="https://scontent.fcta1-1.fna.fbcdn.net/v/t1.0-1/p320x320/45653784_10214365771553085_6106478261141766144_n.jpg?_nc_cat=101&ccb=3&_nc_sid=7206a8&_nc_ohc=aIOoYmcRbcMAX-1n-Tv&_nc_ht=scontent.fcta1-1.fna&tp=6&oh=65fcf2092423fd8c52aa28366e540b68&oe=604E344E"
          ></img>
        </div>
        <div className="bg-gray-500 flex rounded-2xl ml-3 cursor-pointer text-white text-xl p-2 ">
          <div className=" mt-1 ml-3 flex flex-col justify-center">
            <div className="text-sm font-semibold text-white">
              Giuseppe Battiato
            </div>
            <span className="text-gray-200 text-xs font-normal -mt">
              non sono molto d'accordo...
            </span>
          </div>
          <svg
            class="h-5 w-5 text-gray-300 ml-3 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-grow py-3">
        <div>
          <img
            className="rounded-full  w-9 h-9"
            src="https://scontent.fcta1-1.fna.fbcdn.net/v/t1.0-9/128420657_10159817281789305_2244913344021808263_n.jpg?_nc_cat=1&ccb=3&_nc_sid=09cbfe&_nc_ohc=FVFudzUMl4EAX_KaHLJ&_nc_ht=scontent.fcta1-1.fna&oh=1fbb7b1b4dadf618438c63404bad1093&oe=60501AE3"
          ></img>
        </div>
        <div className="bg-gray-500 flex rounded-2xl ml-3 cursor-pointer text-white text-xl p-2 ">
          <div className=" mt-1 ml-3 flex flex-col justify-center">
            <div className="text-sm font-semibold text-white">
              Francesco Renga
            </div>
            <span className="text-gray-200 text-xs font-normal -mt">
              giustissimo!!
            </span>
          </div>
          <svg
            class="h-5 w-5 text-gray-300 ml-3 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </div>
      </div>
      <div className="py-3 text-gray-300">
        <p>Visualizza altri commenti</p>
      </div>
      <div className="flex flex-grow mt-5 items-center">
        <div>
          <img
            className="rounded-full w-9 h-9"
            src="https://scontent.fcta1-1.fna.fbcdn.net/v/t1.0-9/13697075_602971306544915_5231291965757151231_n.jpg?_nc_cat=103&ccb=3&_nc_sid=e3f864&_nc_ohc=2nKpwHGpFYcAX_qa8Cz&_nc_ht=scontent.fcta1-1.fna&oh=d5aa6a8fd698e45d41ca77e491cc0d20&oe=604F67A0"
          ></img>
        </div>
        <div className="bg-gray-500 flex  rounded-2xl ml-3 text-white text-xl w-full p-2">
          <div className="flex-grow">
            <p className="text-sm ml-2">Write a comment... </p>
          </div>
          <div className="flex">
            <svg
              class="h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              class="h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              class="h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              class="h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComments;
