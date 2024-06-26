import "../../index.css";
import logo from "../../assets/imgs/logo.jpg";
import { SimpleButton } from "../SimpleButton.jsx";
import { Input } from "../registration/Input.jsx";
import React from "react";

export function SignIn() {
  return (
    <div className="bg-white flex flex-row-reverse max-lg:flex-col">
      <div className="bg-[url('./assets/imgs/signinbg.jpg')] bg-cover h-screen w-[60%] flex flex-col justify-center gap-6 max-lg:hidden">
        <section className="p-20">
          <h2 className="text-custom-dark font-secondary text-9xl hidden font-bold sm:block">
            Discover Phyral Universe
          </h2>
          <p className="text-base hidden sm:block font-semibold">
            Lorem ipsum dolor sit amet consectetur. Nibh volutpat elementum
            massa sollicitudin varius rhoncus sapien. Blandit ipsum eget tempor
            diam nunc tincidunt nunc et. At blandit condimentum at tortor orci
            vulputate tincidunt tellus eros. Et blandit adipiscing vitae enim
            eget. Et adipiscing non arcu non eget. Dui porta fermentum lacus.
          </p>
        </section>
      </div>

      <div className=" bg-white items-center justify-center lg:w-[40%] w-full h-screen">
        <img className="m-[4rem_auto]" src={logo} alt="logo" />
        <h2 className="text-3xl font-main font-bold pb-7 text-center text-custom-dark">
          Sign In
        </h2>

        <form className="grid align-center gap-4 w-[50%] m-auto max-lg:w-[80%]">
          <label className="text-xs text-custom-dark font-medium opacity-80">
            name
          </label>
          <Input name="name" />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            last name
          </label>
          <Input name="lastname" />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            username
          </label>
          <Input name="username" />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            password
          </label>
          <Input name="password" type="password" />

          <label className="text-xs text-custom-dark font-medium opacity-80">
            confirm password
          </label>
          <Input name="password" type="password" />
        </form>

        <div className="grid gap-4 mt-16 justify-items-center">
          <SimpleButton href="{#}" name="Sign In" />

          <a
            className="font-main underline font-semibold text-custom-dark opacity-50 hover:opacity-100 text-sm"
            href="{#}"
          >
            Already registered
          </a>
        </div>
      </div>
    </div>
  );
}