import React, { useState, useEffect } from 'react';

function PostActionBar() {
  return (
    <div>
      <div className="bg-black bg-opacity-80 py-3 flex">
        <div className="flex items-center justify-between">
          <svg
            class="h-4 w-4 text-gray-400 ml-3 mt-2"
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
          <svg
            class="h-4 w-4 text-gray-400 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-300 ml-1 mt-2 text-xs"> 10 </p>
          <p className="text-gray-300 ml-1 mt-2 text-xs"> Commenti: 45 </p>
        </div>
      </div>
      <div className="flex flex-row bg-black bg-opacity-80 border border-gray-400 justify-around">
        <div className=" bg-transparent py-2  appearance-none flex-1 flex items-center justify-center text-center max-w-xs">
          <svg
            class="h-6 w-6 text-gray-300 ml-3 mt-2"
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
          <p className="text-gray-300 ml-2 mt-2 text-m">Mi Piace</p>
        </div>
        <div className="bg-transparent py-2 appearance-none flex-1 flex items-center justify-center text-center max-w-xs">
          <svg
            class="h-6 w-6 text-gray-300 ml-3 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <p className="text-gray-300 ml-2 mt-2 text-m">Condividi</p>
        </div>
        <div className="bg-transparent py-2  appearance-none flex-1 flex items-center justify-center text-center max-w-xs">
          <svg
            class="h-6 w-6 text-gray-300 ml-3 mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <p className="text-gray-300 ml-2 mt-2 text-m">Commenta</p>
        </div>
      </div>
    </div>
  );
}

export default PostActionBar;
