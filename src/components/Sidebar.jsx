import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faBars,
  faPlus,
  faMessage,
  faGear,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className=" min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] px-2 pt-[25px] font-Outfit">
      <div className="top">
        <FontAwesomeIcon
          icon={faBars}
          className=" block ml-5 cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div
          className={` new-chat mt-10 inline-flex items-center gap-3 py-4 pl-5 bg-[#e6eaf1] border rounded-[50px] text-sm text-gray-500 cursor-pointer pr-6`}
        >
          <FontAwesomeIcon icon={faPlus} className="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex- flex-col">
            <p className="mt-6 mb-4">Recent</p>
            <div className="recent-entry flex gap-2.5 p-2.5 pr-5 rounded-[50px] text-[#282828] cursor-pointer items-center hover:bg-[#e2e6eb]">
              <FontAwesomeIcon icon={faMessage} />
              <p>Did it hurt?</p>
            </div>
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
