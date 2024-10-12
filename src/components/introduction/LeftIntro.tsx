const LeftIntro = () => {
  return (
    <>
      <div className="flex flex-col max-w-[555px]">
        <div className="pt-[150px] pb-[200px] max-[375px]:pt-[40px] max-[375px]:pb-[50px]">
          <div className="pb-[50px] max-[375px]:flex max-[375px]:flex-col max-[375px]:items-start">
            <h1 className="text-white text-[41px] font-bold leading-[50px] pb-[40px] max-[375px]:text-[35px] max-[375px]:text-left max-[375px]:max-w-[330px]">
              Откройте свой магазин Telegram в{" "}
              <span className="text-[#72BBFF] text-[41px] font-bold leading-[50px] max-[375px]:text-[35px]">
                2 клика
              </span>
            </h1>
            <p className="text-[#96ABBA] text-[18px] font-normal font-Inter leading-[158%] pb-[35px] max-[375px]:text-[21px] max-[375px]:text-left max-[375px]:max-w-[330px]">
              Без знаний программирования, с возможностью продажи цифровых и
              физических товаров
              <br />
              <br />
              Открытие магазинов привязка к ним ботов абсолютно бесплатно,
              заработок сервиса происходит из-за комиссии на вывод у владельцев
              магазинов. .
            </p>
            <span className="text-[#25D295] text-nowrap text-[18px] font-semibold leading-[182%] border border-[#165537] max-[375px]:shadow-shadow-intro rounded-full px-[22px] py-[10px] max-w-[345px] max-[375px]:bg-bg-intro">
              Комиссия на данный момент - 4%
            </span>
          </div>
          <div className="flex items-center gap-3 max-[1400px]:justify-center max-[400px]:hidden">
            <button className="flex gap-[18px] items-center bg-[#16C2A3] hover:bg-[#4AFFDE] focus:bg-[#2D9280] p-[18px] rounded-[14px]  transition-all duration-200 text-white text-[20px] font-extrabold leading-[142%]">
              <img src="/src/assets/images/telegramWhite.svg" alt="telergam" />
              ПОЛУЧИТЬ БОТА
            </button>
            <button className="py-[18px] px-10 rounded-[14px] border-[2px] border-[#4F6070] hover:border-[#45FFDB] focus:border-[#2E8E7C] transition-all duration-200 text-[#8294A6] hover:text-[#45FFDB] focus:text-[#2E8E7C] text-[20px] font-extrabold leading-[142%]">
              ВОЙТИ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftIntro;
