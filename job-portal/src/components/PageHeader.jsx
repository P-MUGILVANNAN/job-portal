import React from "react";

const PageHeader = ({title,path}) => {
  return (
    <div className="py-24 mt-3 bg-[#bae8eb] rounded flex items-center justify-center">
      <div>
        <h2 className=" text-3x1 text-blue font-medium mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-center">
          <a href="/">Home</a> / {path}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
