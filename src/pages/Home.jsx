import Navbar from "@/components/Home/Navbar";
import { Link } from "react-router-dom";
import background from "../assets/images/home-background.jpg";

export function Home() {
  return (
    <div className="">
      <div className="navbar h-20">
        <Navbar />
      </div>
      <div className="home-background-image relative flex justify-center items-center min-w-screen h-screen">
        <img
          src={background}
          alt="Home Background"
          className="h-full w-full brightness-[60%] object-cover"
        />
        <h1 className="text-6xl text-white font-bold absolute z-10">
          Welcome to my university
        </h1>
      </div>
    </div>
  );
}
