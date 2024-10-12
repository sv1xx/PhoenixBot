import { AboutRightData } from "../helpers/AboutRightData";

const AboutRight = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-end max-[375px]:hidden max-[1320px]:items-center">
        {AboutRightData.map((e, index) => {
          return (
            <span
              key={index}
              className="  text-[#72BBFF] text-[16px] font-semibold leading-[182%] bg-[#0D2134] rounded-full px-[22px] py-[10px] border-[2px] border-[#163655]"
            >
              {e.text}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default AboutRight;
