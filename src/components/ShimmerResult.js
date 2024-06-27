import React from "react";

const ShimmerResult = () => {
  return (
    <div className="flex flex-col mx-auto w-fil h-full flex-wrap justify-center">
      {Array.apply(null, Array(8)).map((_, i) => {
        return (
          <div
            className="relative flex h-60 rounded-md overflow-hidden"
            key={i}
          >
            <div className="bg-gray-100 rounded-xl md:w-72 w-52 h-28"></div>
            <div className="flex">
              <div>
                <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-60 h-2"></div>
                <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-60 h-2"></div>
                <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-[40rem] h-2"></div>
                <div className="bg-gray-100 mt-3 ml-3 rounded-xl w-32 md:w-[40rem] h-2"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShimmerResult;
