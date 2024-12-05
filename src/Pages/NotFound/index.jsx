import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-h-[400px] max-w-[400px] flex flex-col items-center">
        <img
          className="h-1/2 object-cover"
          src="../../../public/img/404.png"
          alt="404 Not found"
        />
        <Link to={"/all"}>
          <a className="hover:decoration-blue-500 hover:underline hover:underline-offset-4">
            Back to home
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
