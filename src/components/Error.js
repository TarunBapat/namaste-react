import { useRouteError } from "react-router-dom";
const Error = () => {
  const { error, data } = useRouteError();
  console.log("error", error);
  return (
    <>
      <h1>OOps !! something went wrong</h1>
      <p>{data}</p>
    </>
  );
};
export default Error;
