import { CgProfile } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import Logo from './Logo';
function Header() {
  return (
    <header className="h-16 shadow-sm ">
      <div className="h-full container mx-auto flex item-center px-4 justify-between ">
        <div>
          <Logo w={120} h={50} />
        </div>
        <div className="hidden md:flex gap-2 items-center border rounded-full focus-within:shadow-sm p-1 my-2 mx-1">
          <input
            type="text"
            placeholder="search product here"
            className="w-full outline-none px-4 m- "
          />
          <div className="text-lg min-w-[50px] bg-orange-600 items-center justify-center rounded-r-full text-white px-3 py-3">
            <FaSearch />
          </div>
        </div>
        <div className="flex py-4 gap-3">
          <div className="text-3xl ">
            <CgProfile />
          </div>
          <div className="text-3xl flex relative justify-center items-center p-1  ">
            <FaCartShopping />
            <div className="bg-orange-600 w-5 h-5  rounded-full absolute -top-2 -right-2 ">
              <p className="text-xs text-center text-white ">0</p>
            </div>
          </div>
          <div>
            <button className='bg-orange-600 px-3 rounded-full p-1 items-center justify-center text-white hover:bg-red-600'>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
