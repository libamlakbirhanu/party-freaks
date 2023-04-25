import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

type Props = {};

function Index({}: Props) {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("api/auth/login", {
        ...input,
      });

      localStorage.setItem("refreshToken", res.data.token.refreshToken);
      setUser({ ...res.data.data, token: res.data.token.accessToken });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email address"
            className="p-3 rounded-md text-primary border-none outline-none"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 rounded-md text-primary border-none outline-none"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <button
            type="submit"
            className="p-3 rounded-md bg-primary text-white"
          >
            Login
          </button>
        </form>
        <img
          src="/assets/imgs/google.png"
          className="mt-5 cursor-pointer"
          alt=""
        />
        <Link to="/register">
          <p className="cursor-pointer text-secondary mt-3 hover:text-white w-max">
            Don't have an account? Register
          </p>
        </Link>
        <p className="cursor-pointer text-secondary mt-3 hover:text-white w-max">
          Forgot password?
        </p>
      </div>
    </div>
  );
}

export default Index;
