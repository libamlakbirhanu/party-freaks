import { Link } from "react-router-dom";

type Props = {};

function Index({}: Props) {
  return (
    <div className="w-full h-screen bg-dark overflow-clip relative">
      <img
        src="/assets/imgs/bear.svg"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        alt=""
      />
      <img
        src="/assets/imgs/dua.svg "
        className="absolute top-1/2 -translate-y-1/2"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-[rgba(255,255,255,.2)] min-w-[550px] px-[2rem] py-[3rem] rounded-lg">
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="usename"
            className="p-3 rounded-md text-primary border-none outline-none"
          />
          <input
            type="email"
            placeholder="email address"
            className="p-3 rounded-md text-primary border-none outline-none"
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 rounded-md text-primary border-none outline-none"
          />
          <input
            type="password"
            placeholder="confirm password"
            className="p-3 rounded-md text-primary border-none outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded-md bg-primary text-white"
          >
            Register
          </button>
        </form>
        <img
          src="/assets/imgs/google.png"
          className="mt-5 cursor-pointer"
          alt=""
        />
        <Link to="/login">
          <p className="cursor-pointer text-secondary mt-3 hover:text-white w-max">
            Already have an account? Login
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Index;
