import user from "../assets/img/user.jpg";

import {
  faCompass,
  faLightbulb,
  faMessage,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const MainComp = () => {
  const cardContent = [
    {
      id: 1,
      para: "Suggest beautiful places to see on an upcoming road trip",
      icon: faCompass,
    },
    {
      id: 2,
      para: "Briefly summarize this concept: urban planning",
      icon: faLightbulb,
    },
    {
      id: 3,
      para: "Brainstorm team bonding activities for our work retreat",
      icon: faMessage,
    },
    {
      id: 4,
      para: "Write me the python code to add two numbers",
      icon: faCode,
    },
  ];
  return (
    <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-[22px] p-8 text-[#585858]">
        <p>Gemini</p>
        <img src={user} alt="user" width={50} className="rounded-full" />
      </div>
      <div className="main-container w-[900px] mx-auto ">
        <div className="greet mx-0 mb-[50px] text-[#c4c7c5] p-[20px] font-semibold text-6xl">
          <p>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
              Hello Geeks,
            </span>
          </p>
          <p className="mt-4">How can I help you today?</p>
        </div>

        <div className="cards grid grid-cols-4 gap-[15px] px-[10px] pt-6">
          {cardContent.map((item) => (
            <Card key={item.id} para={item.para} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComp;
