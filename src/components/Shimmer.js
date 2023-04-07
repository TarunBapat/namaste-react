const Shimmer = () => {
  return (
    <>
      {Array(20)
        .fill("")
        .map((e) => {
          return (
            <section className="shine-div">
              <div className="shine shine-photo"></div>
              <div className="shine shine-photo"></div>
              <div className="shine shine-photo"></div>
            </section>
          );
        })}
    </>
  );
};
export default Shimmer;
