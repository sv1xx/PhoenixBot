import LeftIntro from "./LeftIntro";
import RightIntro from "./RightIntro";

const Introducion = () => {
  return (
    <>
      <div className="bg-bg-darker z-20">
        <div className="max-w-[1400px] m-auto w-full px-[10px] max-[375px]:px-[23px] relative max-[1400px]:flex max-[1400px]:flex-col max-[1400px]:items-center max-[1400px]:justify-center max-[1400px]:text-center  max-[375px]:pt-[100px]">
          <div className="flex ">
            <LeftIntro />
            <RightIntro />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introducion;
