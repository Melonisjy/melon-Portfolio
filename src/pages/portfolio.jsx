import { useSearchParams } from "react-router-dom";

function Portfolio() {
  const [serachParams] = useSearchParams();

  const title = serachParams.get("title");
  const desc = serachParams.get("desc");
  const image = serachParams.get("image");

  return (
    <div className="bg-green-100 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <div>
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
      </div>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
}

export default Portfolio;
