const HeaderChild = () => {
  return (
    <>
      <div className="flex justify-between items-center max-[1120px]:hidden">
        <div className="flex gap-[110px] items-center">
          <a href="">
            <img
              className="w-[160px] py-[22px] hover:fill-slate-600"
              src="/src/assets/images/logo.svg"
              alt="logo"
            />
          </a>
          <nav className="select-none">
            <ul className="flex items-center gap-10">
              <li className="text-[#95ABBA] text-[18px] leading-[normal] font-normal font-Inter z-10 hover:text-white has-[:focus]:text-[#cfd7e1]">
                <a href="#" className="">
                  Цены
                </a>
              </li>
              <li className="text-[#95ABBA] text-[18px] leading-[normal] font-normal font-Inter z-10 hover:text-white has-[:focus]:text-[#cfd7e1] transition-all duration-200">
                <a href="#" className="">
                  BotWebPay(BWP)
                </a>
              </li>
              <li className="text-[#95ABBA] text-[18px] leading-[normal] font-normal font-Inter z-10 hover:text-white has-[:focus]:text-[#cfd7e1] transition-all duration-200">
                <a href="#" className="">
                  Преимущества
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="group ">
          <a
            className="text-[#72BBFF] group-hover:text-[#A4D3FF] group-has-[:focus]:text-[#5589B8] text-[18px] font-bold leading-[normal] flex items-center gap-[18px] transition-all duration-200 hover:text-white focus:text-[#cfd7e1]"
            href="#"
          >
            <svg
              className="fill-[#72BBFF] group-hover:fill-[#A4D3FF] group-has-[:focus]:fill-[#5589B8] transition-all duration-200"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
            >
              <path d="M23.3125 0.15123L1.16735 9.51897C-0.343973 10.1849 -0.33523 11.1097 0.890063 11.5221L6.57562 13.4678L19.7303 4.36308C20.3524 3.94793 20.9207 4.17126 20.4535 4.62615L9.7956 15.1777H9.7931L9.7956 15.1791L9.40341 21.6078C9.97796 21.6078 10.2315 21.3187 10.5538 20.9776L13.3154 18.0317L19.0596 22.6861C20.1188 23.326 20.8794 22.9972 21.143 21.6106L24.9138 2.11603C25.2997 0.41841 24.323 -0.350246 23.3125 0.15123Z" />
            </svg>
            РЕГИСТРАЦИЯ ЧЕРЕЗ TELEGRAM
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderChild;
