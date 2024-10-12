import BurgerMenu from "./Burger";
import HeaderChild from "./HeaderChild";

const Header = () => {
  return (
    <>
      <header className="bg-bg-light max-[1120px]:bg-[#232e3c] max-[1120px]:fixed max-[1120px]:w-full z-10">
        <div className="max-w-[1400px] m-auto w-full px-[10px] max-[1120px]:px-[23px]">
          <HeaderChild />
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
