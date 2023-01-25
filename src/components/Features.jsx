import React from "react";
import { Link } from "react-router-dom";

function Features(props) {
  const featureName = props.featureName;
  const pathImage = props.pathImage;
  const path = props.path;

  return (
    <Link to={path}>
       <button className="border-2 rounded-3xl w-[163px] h-[206px] border-neutral-400">
      <div className="px-10">
        <img className="w-[80px]" src={pathImage} alt="icon-praying" />
        <h3 className="text-[24px] font-montserrat font-bold break-">
          {featureName}
        </h3>
      </div>
    </button>
    </Link>
   
  );
}

export default Features;
