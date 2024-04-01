import React, { useRef } from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
dotenv.config();

const Mail = ({ setFoxAnimation }) => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFokus = () => {
    setFoxAnimation("walk");
  };
  const handleBlur = () => {
    setFoxAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFoxAnimation("hit");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mateusz",
          from_email: form.email,
          to_email: "mateusz.work.1994@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setFoxAnimation("idle");
        }, [3000]);
      })
      .catch((err) => {
        setFoxAnimation("idle");
        setIsLoading(false);
        console.error(err);
      });
  };

  return (
    <div className="relative flex flex-col w-1/2 h-1/2 bg-[#1B3C73] shadow-black shadow-lg rounded-lg ">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1
          className="text-4xl textShadow text-white mt-5 font-serif font-bold text-center
         textShadow"
        >
          Skontaktuj się
        </h1>
        <form
          className="w-full flex flex-col gap-6 mt-11  items-center"
          onSubmit={handleSubmit}
        >
          <label className="text-white w-[85%] flex flex-col font-semibold">
            Imię :
            <input
              type="text"
              name="name"
              className="rounded-lg w-[85%] text-black shadow-md shadow-white h-[30px]"
              required
              placeholder="mateusz"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFokus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-white w-[85%]  flex flex-col font-semibold">
            Email :
            <input
              type="email"
              name="email"
              className="rounded-lg w-[85%] shadow-md text-black shadow-white h-[30px]"
              required
              placeholder="mateusz.u.94@gmail.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFokus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-white w-[85%]  flex flex-col  font-semibold">
            Wiadomość :
            <textarea
              name="message"
              rows={4}
              className="rounded-lg w-[85%] text-black shadow-md shadow-white h-[80px]"
              required
              placeholder="Cześć daj mi znać jak mogę pomóc ;)"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFokus}
              onBlur={handleBlur}
            ></textarea>
          </label>
          <Button
            type="submit"
            className={"w-[85%]"}
            disabled={isLoading}
            onFocus={handleFokus}
            onBlur={handleBlur}
          >
            {isLoading ? "Wysyłanie..." : "Wyślij"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
