"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillYoutube, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!showMenu);
  }
  const router = useRouter();

  const handleYoutube = () => {
    window.open("https://www.youtube.com/@SumanMalakar18/featured", "_blank");
  };
  const handleGitHub = () => {
    window.open("https://github.com/sumanmalakar", "_blank");
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/suman-malakar/?originalSubdomain=in",
      "_blank"
    );
  };
  return (
    <div className="border-2 flex justify-between m-2 sticky top-0">
      <div className="flex  gap-4 text-5xl m-2 font-bold ">
        <snap className="">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="logo"
            height={50}
            width={50}
          />
        </snap>
        <h1 className="sm:hidden lg:block md:block">Tailwinds</h1>
      </div>
      <nav className=" lg:block md:hidden sm:hidden flex justify-center items-center m-2">
        <ul className="flex gap-7 sm:text-1xl  md:text-3xl md:font-bold sm:font-semibold">
          <li>
            <Link href="/courses">courses</Link>
          </li>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <button onClick={handleYoutube}>
              <AiFillYoutube />
            </button>
          </li>
          <li>
            <button onClick={handleGitHub}>
              <FaGithub />
            </button>
          </li>
          <li>
            <button onClick={handleLinkedin}>
              <FaLinkedin />
            </button>
          </li>
        </ul>
      </nav>
      {showMenu && (
        <div className="fixed inset-x-0 top-16 flex flex-col items-center rounded-lg m-2">
          <ul className="border-2 w-full bg-black text-2xl font-bold text-center">
            <li className="mt-2">
              <Link href="/courses">courses</Link>
            </li>
            <li>
              <Link href="/projects">projects</Link>
            </li>
            <ul className="flex justify-center gap-5 m-4">
              <li>
                <button onClick={handleYoutube}>
                  <AiFillYoutube />
                </button>
              </li>
              <li>
                <button onClick={handleGitHub}>
                  <FaGithub />
                </button>
              </li>
              <li>
                <button onClick={handleLinkedin}>
                  <FaLinkedin />
                </button>
              </li>
            </ul>
          </ul>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="sm:block md:block lg:hidden m-3 text-3xl font-bold"
      >
        {showMenu ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
    </div>
  );
};

export default NavBar;
