import React from "react";

function BasicCard({ title, imgUrl, body, tags }) {
  return (
    <div
      className="m-3 max-w-xs rounded-lg overflow-hidden shadow-xl bg-opacity-70 bg-tertiary-50
      transform transition duration-500 hover:scale-105 hover:bg-opacity-100
      opacity-90 hover:opacity-100">
      <img className="w-full" src={imgUrl} alt="" />
      <div className="px-6 py-4">
        <h5 className="text-gray-900 font-bold text-xl mb-2">{title}</h5>
        <p className="text-gray-800 text-base">{body}</p>
      </div>
      <div className="px-6 py-2">
        {tags.map((item, idx) => {
          return (
            <span
              key={idx}
              className="px-3 py-1 mr-2 mb-2 inline-block bg-primary-500
              rounded-full text-sm font-semibold text-white
              hover:bg-primary-600 active:bg-primary-700">
              #{item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BasicCard;
