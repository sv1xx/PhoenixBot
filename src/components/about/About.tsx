import { AboutRightData } from "../helpers/AboutRightData";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <>
      <div className="bg-bg-darker">
        <div className="max-w-[1400px] m-auto w-full px-[10px] max-[375px]:px-[23px]">
          <div className="flex justify-between items-center py-[100px] max-[375px]:py-0 max-[375px]:pb-[25px] max-[375px]:pt-[70px] max-[375px]:flex-col max-[375px]:max-w-[329px] max-[1320px]:flex-col max-[1320px]:gap-5 max-[1320px]:text-center">
            <AboutLeft />
            <AboutRight />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-end min-[376px]:hidden max-[375px]:gap-0 max-[375px]:pb-[115px]">
          {AboutRightData.map((e, index) => {
            return (
              <span
                key={index}
                className=" max-[375px]:even:bg-bg-darker max-[375px]:odd:bg-[#151f2e] text-[#72BBFF] text-[16px] max-[375px]:text-[21px] font-semibold leading-[182%] max-[375px]:leading-[140%] bg-[#0D2134] rounded-full px-[22px] py-[10px] border-[2px] border-[#163655] max-[375px]:rounded-none max-[375px]:border-none "
              >
                {e.text}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
