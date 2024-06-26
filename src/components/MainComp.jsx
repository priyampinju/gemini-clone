import user from "../assets/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import send from "../assets/img/send.svg";
import image from "../assets/img/image.svg";
import mic from "../assets/img/mic.svg";
import compass from "../assets/img/compass.svg";
import message from "../assets/img/message.svg";
import code from "../assets/img/code.svg";
import bulb from "../assets/img/bulb.svg";
import brain from "../assets/img/logoicon.png";

import Card from "./Card";
import { useContext } from "react";
import { Context } from "../context/Context";

import bajaj from "../assets/img/bajaj.jpg";

const MainComp = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat,
  } = useContext(Context);

  const cardContent = [
    {
      id: 1,
      // para: "Suggest beautiful places to see on an upcoming road trip",
      para: "Khusbu Bajaj thoda bkl hai kya? Boka..",
      icon: compass,
    },
    {
      id: 2,
      para: "Briefly summarize this concept: urban planning",
      icon: bulb,
    },
    {
      id: 3,
      para: "Brainstorm team bonding activities for our work retreat",
      icon: message,
    },
    {
      id: 4,
      para: "Write me the python code to add two numbers",
      icon: code,
    },
  ];
  return (
    <div className="main flex-1 min-h-[100vh] w-[100%]relative">
      <div className="nav flex items-center justify-between text-[22px] px-8 pt-3 text-[#585858] w-[100%]">
        <p
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-lg sm:text-base"
          onClick={() => newChat()}
        >
          Boka.AI
        </p>
        <img src={bajaj} alt="user" className="rounded-full w-7 md:w-12" />
      </div>
      <div className="main-container w-[100%] sm:w-[900px] mx-auto mt-8">
        {!showResult ? (
          <>
            <div className="greet mx-0 mb-[50px] text-[#c4c7c5] p-[20px] font-semibold text-2xl md:text-6xl">
              <p>
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
                  Hello Boka Bajaj,
                </span>
              </p>
              <p className="mt-2">How can I help you today?</p>
            </div>
            <div className="cards flex flex-col md:grid gap-4 md:grid-cols-4 md:gap-[15px] md:px-[10px] pt-6">
              {cardContent.map((item) => (
                <Card key={item.id} para={item.para} icon={item.icon} />
              ))}
            </div>
          </>
        ) : (
          <div className="result py-0 px-3 max-h-[73vh] overflow-y-scroll">
            <div className="result-title mt-5 mb-10 mx-0 flex gap-5">
              <img
                src={bajaj}
                alt="user"
                width={70}
                className="w-10 rounded-full"
              />
              <p className="mt-4">{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img
                src={brain}
                alt="ndnd"
                width={70}
                className="w-10 rounded-full"
              />

              {loading ? (
                <div className="loader w-full flex flex-col gap-2 ">
                  Loading...
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-base font-normal leading-7"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom md:absolute md:bottom-10 w-full max-w-4xl py-2 md:py-0 px-0 m-auto">
          <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-[50px]">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="bg-transparent outline-none w-[70vw] text-[#585858]"
            />
            <div className="flex gap-5 pr-2 items-center ">
              <img
                src={image}
                alt="image"
                width={19}
                className="opacity-40 hover:opacity-70"
              />
              <img
                src={mic}
                alt="image"
                width={15}
                className="opacity-40 hover:opacity-70"
              />

              {/* <div className="w-[10vw] md:w-[5vw] hover:bg-[#ffffff] rounded-full p-1 md:p-2"> */}
              <img
                src={send}
                alt="send"
                onClick={() => onSent()}
                className="cursor-pointer md:hover:scale-110 w-4 "
              />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="bottom-info px-5 md:px-0 md:absolute md:bottom-2 w-[100%] md:w-[900px] flex justify-center text-xs">
          <p>
            Pie.AI may provide inaccurate response being an AI. Please double
            check the responses. Thank you
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
