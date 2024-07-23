 const Home = () => {
    return (
        <div>
            {/* Slider Section */}
            <div className="slider w-full max-w-[1260px] h-auto mx-auto mt-[100px]">
                <div className="slide">
                    <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/fit-in/filters:format(webp)/products/ly2ofg4x44kani69so3__Hero_Web_1920x864_2x2.jpeg" alt="Slider Image" />
                </div>
            </div>
            
            {/* Featured Collections */}
            <div className="w-full max-w-[1440px] h-auto mx-auto">
                <h2 className="flex justify-center text-3xl font-bold m-[20px]">Bộ sưu tập nổi bật</h2>
                <div className="w-full max-w-[1260px] flex gap-[20px] mx-auto">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="relative w-[300px] h-[440px] bg-gray-100">
                            <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/sdn5020-den-15.jpg" alt="Featured Collection" className="w-full h-full" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <h1 className="text-3xl font-bold">Yody Sport</h1>
                                <a href=""><p className="text-lg underline">Khám phá</p></a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Promotional Banners */}
                <div className="relative w-full max-w-[1260px] mx-auto mt-[20px]">
                    <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/lxzy2kx3xsusrkez16__VIBRANT%20SUMMER%201920%20x864.png" alt="Promotional Banner" />
                    <a href="" className="absolute inset-0 flex items-center justify-center left-[910px] top-[200px]">
                        <button className="bg-white text-blue-800 w-[200px] h-[70px] rounded-[20px] font-medium underline">Khám phá ngay</button>
                    </a>
                </div>
                
                {/* Popular Products */}
                <h2 className="flex justify-center text-3xl font-bold m-[20px]">Sản phẩm ưa chuộng</h2>
                <div className="w-full max-w-[1260px] h-auto mx-auto flex justify-center gap-[20px]">
                    {['Áo thun', 'Jeans Flex', 'Áo polo', 'Chống UV', 'Office'].map((item, index) => (
                        <button key={index} className="w-[120px] bg-gray-100 hover:bg-[#FFA500] h-[50px] rounded-[25px] text-xl font-medium">
                            {item}
                        </button>
                    ))}
                </div>
                
                {/* Product Cards */}
                <div className="w-full max-w-[1260px] h-auto mx-auto flex gap-[10px] mt-[20px]">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="max-w-xs mx-auto bg-gray-100 shadow-lg overflow-hidden">
                            <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-TSN7268-TRA%20(1).jpg" alt="Product" className="w-full h-[460px] object-cover" />
                            <div className="p-4">
                                <p className="text-gray-800 text-base font-semibold mb-2">ÁO t-rit nữ ôm cổ cáo</p>
                                <h1 className="text-gray-900 font-bold text-xl mb-2">Price</h1>
                                <div className="flex gap-[10px]">
                                    <div className="flex items-center mb-2">
                                        <input type="radio" id={`size1-${index}`} name={`size-${index}`} className="form-radio h-4 w-4 text-gray-600" />
                                        <label htmlFor={`size1-${index}`} className="ml-2 text-gray-700">Size 1</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="radio" id={`size2-${index}`} name={`size-${index}`} className="form-radio h-4 w-4 text-gray-600" />
                                        <label htmlFor={`size2-${index}`} className="ml-2 text-gray-700">Size 2</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View More Button */}
                <a className="flex justify-center text-xl font-semibold m-[20px] underline" href="">
                    <button className="w-[400px] h-[50px] rounded-[20px] bg-gray-100 border-[3px] hover:bg-gray-200">Xem thêm</button>
                </a>
                
                {/* Another Promotional Banner */}
                <div className="relative w-full max-w-[1260px] mx-auto mt-[20px]">
                    <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/lxzxjplrwcq9ze5co6l__1920x864px%20heo%20banner%20web.png" alt="Promotional Banner" />
                    <a href="" className="absolute inset-0 flex items-center justify-center right-[710px] top-[200px]">
                        <button className="bg-white text-blue-800 w-[240px] h-[70px] rounded-[20px] font-medium underline">Xem ngay</button>
                    </a>
                </div>
                
                {/* Suggested Products */}
                <div className="flex justify-center items-center gap-[10px] mt-[20px] mb-[20px]">
                    <h2 className="text-2xl font-medium text-gray-600">Gợi ý sản phẩm</h2>
                    <a href="" className="underline text-2xl font-medium">Bán chạy</a>
                </div>
                <div className="w-full max-w-[1260px] h-auto mx-auto flex gap-[10px] mt-[20px]">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="max-w-xs mx-auto bg-gray-100 shadow-lg overflow-hidden">
                            <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-TSN7268-TRA%20(1).jpg" alt="Suggested Product" className="w-full h-[460px] object-cover" />
                            <div className="p-4">
                                <p className="text-gray-800 text-base font-semibold mb-2">ÁO t-rit nữ ôm cổ cáo</p>
                                <h1 className="text-gray-900 font-bold text-xl mb-2">Price</h1>
                                <div className="flex gap-[10px]">
                                    <div className="flex items-center mb-2">
                                        <input type="radio" id={`suggested-size1-${index}`} name={`suggested-size-${index}`} className="form-radio h-4 w-4 text-gray-600" />
                                        <label htmlFor={`suggested-size1-${index}`} className="ml-2 text-gray-700">Size 1</label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input type="radio" id={`suggested-size2-${index}`} name={`suggested-size-${index}`} className="form-radio h-4 w-4 text-gray-600" />
                                        <label htmlFor={`suggested-size2-${index}`} className="ml-2 text-gray-700">Size 2</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="flex justify-center text-xl font-semibold m-[20px] underline" href="">
                    <button className="w-[400px] h-[50px] rounded-[20px] bg-gray-100 border-[3px] hover:bg-gray-200">Xem thêm</button>
                </a>
                
            </div>
        </div>
    );
};

export default Home