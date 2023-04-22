import { useState, useEffect } from "react";
import FaqSection from "./FaqSection";
const Help = () => {
  const [faqData, setFaqData] = useState([]);

  async function getFaqs() {
    const resp = await fetch("https://www.swiggy.com/dapi/support/issues/faq?");
    const data = await resp.json();
    console.log("faqs data", data.data.issues.data);
    setFaqData(data.data.issues.data);
  }
  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <>
      <div className="mb-2 mt-3 w-[800px]">
        <h2 className="">Frequently asked questions</h2>
        {faqData.map((data) => {
          return (
            <FaqSection
              key={data.id}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Help;
// https://www.swiggy.com/dapi/support/issues/faq?
