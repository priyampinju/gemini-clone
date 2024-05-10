import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ para, icon }) => {
  return (
    <div className="h-[150px] p-[15px] bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
      <p className="text-[#585858] text-lg">{para}</p>
      <img
        src={icon}
        alt="icon"
        width={25}
        className=" p-1 absolute bg-white rounded-3xl bottom-2 right-2"
      />
    </div>
  );
};

export default Card;
