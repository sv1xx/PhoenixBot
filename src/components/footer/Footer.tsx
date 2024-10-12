const Footer = () => {
  return (
    <>
      <div className="bg-bg-light">
        <div className="max-w-[1400px] m-auto w-full px-[10px] max-[375px]:px-[23px]">
          <div className="flex justify-between pt-[60px] pb-[75px] ">
            <div className="flex flex-col gap-[50px] max-[375px]:gap-[25px]">
              <a href="" className="">
                <img
                  className="h-[36px] w-[164px]"
                  src="/src/assets/images/footerLogo.svg"
                  alt="logo"
                />
              </a>
              <div className="flex gap-7 max-[375px]:gap-[26px] items-center max-[375px]:flex-col-reverse max-[375px]:items-start">
                <p className="text-[#8DA2B1] text-[18px] font-Inter font-normal leading-[142%] max-[375px]:hidden">
                  © Phoenixbot, 2021
                </p>
                <p className="text-[#95ABBA] text-[21px] font-Inter font-normal leading-[142%] min-[376px]:hidden">
                  Copyright
                </p>
                <a
                  className="text-[#95ABBA] text-[18px] font-Inter font-normal leading-[142%] hover:text-white focus:text-[#cfd7e1] transition-all duration-200 max-[375px]:text-[21px]"
                  href="#3"
                >
                  Политика конидинциальности
                </a>
              </div>
            </div>
            <div className="">
              <nav className="select-none max-[750px]:hidden ">
                <ul className="flex items-center gap-10">
                  <li className="text-[#95ABBA] text-[18px] leading-[normal] font-normal font-Inter z-10 hover:text-white has-[:focus]:text-[#cfd7e1] transition-all duration-200">
                    <a href="#2" className="">
                      Цены
                    </a>
                  </li>
                  <li className="text-[#95ABBA] text-[18px] leading-[normal] font-normal font-Inter z-10 hover:text-white has-[:focus]:text-[#cfd7e1] transition-all duration-200">
                    <a href="#2" className="">
                      BotWebPay(BWP)
                    </a>
                  </li>
                  <li className="text-[#95ABBA] text-[18px] leading-[normal] font-normal font-Inter z-10 hover:text-white has-[:focus]:text-[#cfd7e1] transition-all duration-200">
                    <a href="#2" className="">
                      Преимущества
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
