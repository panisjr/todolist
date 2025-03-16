import React from "react";

const Content = () => {
  return (
    <>
      <div className="h-full p-5 grow">
        <div className="border-b border-gray-300 pb-3 items-center">
          <h5>Today's</h5>
        </div>
        <div className="bg-gray-200 p-3">
          <button> + Add New Task</button>
        </div>
        <div className="flex justify-between items-center py-2 px-2 border-b border-gray-100 shadow-sm">
          <div className="flex gap-5">
            <input type="checkbox" />
            <p>Research Content Ideas</p>
          </div>
          <p>-</p>
        </div>
        <div className="flex justify-between items-center py-2 px-2 border-b border-gray-100 shadow-sm">
          <div className="flex gap-5">
            <input type="checkbox" />
            <p>Create a database of guest authors</p>
          </div>
          <p>-</p>
        </div>
        <div className="flex justify-between items-center py-2 px-2 border-b border-gray-100 shadow-sm">
          <div className="flex gap-5">
            <input type="checkbox" />
            <p>Renew driver's license</p>
          </div>
          <p>-</p>
        </div>
        <div className="flex justify-between items-center py-2 px-2 border-b border-gray-100 shadow-sm">
          <div className="flex gap-5">
            <input type="checkbox" />
            <p>Consult to doctor</p>
          </div>
          <p>-</p>
        </div>
        <div className="flex justify-between items-center py-2 px-2 border-b border-gray-100 shadow-sm">
          <div className="flex gap-5">
            <input type="checkbox" />
            <p>Print Gotyme card</p>
          </div>
          <p>-</p>
        </div>
      </div>
    </>
  );
};

export default Content;
