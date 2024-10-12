const AboutLeft = () => {
  return (
    <>
      <div className="flex flex-col gap-[30px] max-[375px]:items-center max-[1320px]:items-center">
        <h3 className="text-white text-[24px] font-semibold leading-[normal] max-w-[740px] ">
          <span className="text-[#25D295] text-[24px] font-bold leading-[normal]">
            BotWebPay это платежная система,
          </span>
          которая позволяет пользователям совершать покупки в разнообразных
          ботах подключенных к ней.
        </h3>
        <p className="text-[#96ABBA] text-[18px] font-medium leading-[182%] max-w-[630px] max-[375px]:text-[21px] ">
          Пользователь, пополнив баланс единожды, может тратить деньги так же и
          в других ботах. Это позволяет добиться честной конкуренции между
          магазинами и уменьшает количество действий пользователей для покупки
          товара, что увеличивает количество конверсий вашего магазина.
        </p>
      </div>
    </>
  );
};

export default AboutLeft;
