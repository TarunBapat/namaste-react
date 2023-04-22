import { useState } from "react";

const FaqSection = ({ id, title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="p-2 border-b border-gray">
        <h2
          onClick={() => setShow(!show)}
          className="bg-gray-50 text-slate-800  p-2 cursor-pointer"
        >
          {title}
        </h2>
        {show && <p className="p-2">{description}</p>}
      </div>
    </>
  );
};
export default FaqSection;
