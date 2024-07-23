const Header = () => {
    return (
      <div>
        <header className="fixed top-0 left-0 right-0 bg-white shadow z-10">
          <div
            className="container mx-auto p-4 flex gap-[100px] items-center"
            style={{ maxWidth: '1440px', paddingLeft: '100px', paddingRight: '100px' }}
          >
            <a href="/">
              <div className="text-2xl font-bold text-yellow-500">yody</div>
            </a>
            <nav>
              <ul className="flex space-x-8 items-center">
                <li className="relative group">
                  <a href="#" className="text-gray-700 hover:text-gray-900">Nam</a>
                  <div
                    className="submenu absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg p-4 grid grid-cols-6 gap-4 w-[600px]"
                  >
                    <div className="flex gap-[50px]">
                      <ul>
                        <li className="font-bold">Áo Nam</li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo polo</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo thun</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo sơ mi</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo chống nắng</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo khoác</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo hoodie - Áo nỉ</a>
                        </li>
                      </ul>
                      <ul>
                        <li className="font-bold">Quần Nam</li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần jeans</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần âu</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần kaki</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần dài</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần short</a>
                        </li>
                      </ul>
                      <div className="col-span-1">
                        <img
                          src="https://yody.vn/images/menu-desktop/menu_man.png"
                          alt="Promo"
                          className="w-[200px] h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <a href="#" className="text-gray-700 hover:text-gray-900">Nữ</a>
                  <div
                    className="submenu absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg p-4 grid grid-cols-6 gap-4 w-[600px]"
                  >
                    <div className="flex gap-[50px]">
                      <ul>
                        <li className="font-bold">Áo Nam</li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo polo</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo thun</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo sơ mi</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo chống nắng</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo khoác</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo hoodie - Áo nỉ</a>
                        </li>
                      </ul>
                      <ul>
                        <li className="font-bold">Quần Nam</li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần jeans</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần âu</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần kaki</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần dài</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần short</a>
                        </li>
                      </ul>
                      <div className="col-span-1">
                        <img
                          src="https://yody.vn/images/menu-desktop/menu_woman.png"
                          alt="Promo"
                          className="w-[200px] h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <a href="#" className="text-gray-700 hover:text-gray-900">Trẻ em</a>
                  <div
                    className="submenu absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg p-4 grid grid-cols-6 gap-4 w-[600px]"
                  >
                    <div className="flex gap-[50px]">
                      <ul>
                        <li className="font-bold">Áo Nam</li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo polo</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo thun</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo sơ mi</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo chống nắng</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo khoác</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Áo hoodie - Áo nỉ</a>
                        </li>
                      </ul>
                      <ul>
                        <li className="font-bold">Quần Nam</li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần jeans</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần âu</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần kaki</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần dài</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900">Quần short</a>
                        </li>
                      </ul>
                      <div className="col-span-1">
                        <img
                          src="https://yody.vn/images/menu-desktop/menu_children.png"
                          alt="Promo"
                          className="w-[200px] h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group">
                  <a href="#" className="text-gray-700 hover:text-gray-900">Bộ sưu tập</a>
                  <div
                    className="submenu absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg p-4 grid grid-cols-6 gap-4 w-[1000px]"
                  >
                    <div className="flex gap-[50px]">
                      <ul>
                        <li className="font-bold">Áo Nam</li>
                        <div className="col-span-1">
                          <img
                            src="https://yody.vn/images/header/about/jeans_flex.png"
                            alt="Promo"
                            className="w-[250px] h-auto object-cover"
                          />
                        </div>
                      </ul>
                      <ul>
                        <li className="font-bold">Quần Nam</li>
                        <div className="col-span-1">
                          <img
                            src="https://yody.vn/images/header/about/bst_polo.png"
                            alt="Promo"
                            className="w-[250px] h-auto object-cover"
                          />
                        </div>
                      </ul>
                      <ul>
                        <li className="font-bold">Quần Nam</li>
                        <div className="col-span-1">
                          <img
                            src="https://yody.vn/images/header/about/yoguu.png"
                            alt="Promo"
                            className="w-[250px] h-auto object-cover"
                          />
                        </div>
                      </ul>
                      <ul>
                        <li className="font-bold">Quần Nam</li>
                        <div className="col-span-1">
                          <img
                            src="https://yody.vn/images/header/about/yoguu.png"
                            alt="Promo"
                            className="w-[250px] h-auto object-cover"
                          />
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">Đồng phục</a>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="   Tìm kiếm ...."
                    className="w-[200px] ml-[300px] h-[40px] border-[2px] border-gray-400 rounded-[17px]"
                  />
                </li>
                <a href="/cart">
                  <li>
                    <button data-quantity="0" className="btn-cart">
                      <svg
                        className="icon-cart"
                        viewBox="0 0 24.38 30.52"
                        height="30.52"
                        width="24.38"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>icon-cart</title>
                        <path
                          transform="translate(-3.62 -0.85)"
                          d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                        ></path>
                      </svg>
                      <span className="quantity"></span>
                    </button>
                  </li>
                </a>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  };
  
  export default Header;
  