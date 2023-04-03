import { Link } from "react-router-dom";

function Card(props) {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">{props.img}</div>
      <div className="text-xl font-bold mt-2 mx-2">{props.title}</div>
      <div className="mt-2 mx-2">{props.description}</div>
      <Link
        to={{
          pathname: `/${props.id}`,
        }}
      >
        <button className="bg-blue-200 mx-2 my-4 rounded px-2 py-2">
          상세 설명
        </button>
      </Link>
    </li>
  );
}
export default Card;
