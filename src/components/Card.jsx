import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ para, icon }) => {
  return (
    <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-xl relative cursor-pointer">
      <p>{para}</p>
      <FontAwesomeIcon
        icon={icon}
        className=" p-1 absolute bg-white rounded-3xl bottom-2 right-2"
        size="2x"
      />
    </div>
  );
};

export default Card;
