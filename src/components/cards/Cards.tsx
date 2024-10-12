import { cardData } from "../helpers/cardData";

const Cards = () => {
  return (
    <>
      <div className="bg-bg-light">
        <div className="max-w-[1400px] m-auto w-full px-[10px] max-[375px]:px-[23px]">
          <div className="flex flex-col gap-[38px] pt-[65px] pb-[85px]">
            <h1 className="text-[41px] text-white font-medium leading-[124%] max-[375px]:text-[35px] max-[375px]:max-w-[265px]">
              <span className="text-[41px] text-white  font-bold leading-[124%] max-[375px]:text-[35px]">
                Наши преимущества
              </span>{" "}
              перед другими
            </h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-[38px] gap-y-[38px] max-xl:grid-cols-2 max-[800px]:grid-cols-1 max-[375px]:grid-cols-1">
              {cardData.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-[#2C3A4D] to-[#151E2B] p-[2px] rounded-[22px]"
                  >
                    <div className="flex gap-[26px] card-bg rounded-[20px] py-[25px] px-[30px] items-center max-[800px]:flex-col max-[800px]:gap-[20px] max-[375px]:items-start">
                      <img
                        className="w-[91px] h-[89px] max-[375px]:w-[110px] max-[375px]:h-[110px]"
                        src={e.cardPicture}
                        alt="bear"
                      />
                      <div className="flex flex-col gap-[10px]">
                        <h2 className="text-[#72BBFF] text-[17px] font-extrabold leading-[142%] max-w-[200px] max-[800px]:text-center max-[800px]:max-w-full max-[375px]:text-left max-[375px]:max-w-[275px] max-[375px]:text-[23px]">
                          {e.cardHeader}
                        </h2>
                        <p className="text-white text-[15px] font-semibold leading-[142%] max-w-[260px] max-[800px]:text-center max-[800px]:max-w-full max-[375px]:text-left max-[375px]:max-w-[275px] max-[375px]:text-[21px]">
                          {e.cardText}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
