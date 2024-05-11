import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faBars,
  faPlus,
  faMessage,
  faGear,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import message from "../assets/img/message.svg";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar flex flex-col justify-between min-h-[100vh] bg-[#f0f4f9] px-2 pt-[25px] font-Outfit">
      <div className="top">
        <FontAwesomeIcon
          icon={faBars}
          className=" block ml-5 cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div
          onClick={() => newChat()}
          className={` new-chat mt-10 inline-flex items-center gap-3 py-4 pl-5 bg-[#e6eaf1] border rounded-[50px] text-sm text-gray-500 cursor-pointer pr-6`}
        >
          <FontAwesomeIcon icon={faPlus} className="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex- flex-col">
            <p className="mt-6 mb-4">Recent</p>
            {prevPrompt.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                className="recent-entry flex gap-2.5 p-2.5 pr-5 rounded-[50px] text-[#282828] cursor-pointer items-center hover:bg-[#e2e6eb]"
                key={index}
              >
                <img src={message} alt="message" width={20} />
                {/* <p>{item} ...</p> */}
                <p>{item.slice(0, 12)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="bottom flex flex-col border-t-[1.75px] border-l-gray-950">
        <div className="help flex gap-2.5 pl-4 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer items-center hover:bg-[#e2e6eb]">
          <FontAwesomeIcon icon={faQuestion} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="activities flex gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer items-center hover:bg-[#e2e6eb]">
          <FontAwesomeIcon icon={faClockRotateLeft} />
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="settings flex gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer items-center hover:bg-[#e2e6eb]">
          <FontAwesomeIcon icon={faGear} />
          {extended ? <p>Settings</p> : null}
        </div>

        {extended ? (
          <div className="footer mt-1 mb-2 w-full flex justify-center border-t-2">
            <p className="text-xs">
              ©2024 <br /> Developed by{" "}
              <a href="https://priyampinju.vercel.app/">Pinju</a>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
