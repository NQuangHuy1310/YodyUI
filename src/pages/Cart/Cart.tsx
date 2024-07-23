import React from 'react';

const Cart = () => {
    return (
        <>
            <div className="bg-gray-100 mt-[110px]">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                                <h2 className="text-2xl font-semibold mb-4">Giỏ hàng</h2>
                                <div className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <span>Mua thêm <span className="font-bold">139K</span> nữa để nhận <span className="text-yellow-500">Miễn phí vận chuyển</span></span>
                                    </div>
                                    <div className="bg-gray-200 rounded-full w-full h-2 overflow-hidden">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-4">
                                    <span>Khuyến mại trong giỏ hàng của bạn chỉ còn trong <span className="font-bold">9 phút 32 giây</span> trước khi hết khuyến mãi</span>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input type="checkbox" id="select-all" className="mr-2 w-6 h-6" />
                                    <label htmlFor="select-all" className="text-lg font-semibold">Chọn tất cả</label>
                                </div>

                                <div className="border p-4 rounded-lg mb-4 flex items-center">
                                    <input type="checkbox" className="mr-4 w-6 h-6 item-checkbox" />
                                    <img src="https://m.yodycdn.com/fit-in/filters:format(webp)/100/438/408/products/quan-short-jeans-nu-yody-sjn6012-xdm-1.jpg?v=1689907278220" alt="Product Image" className="w-25 h-40 rounded-lg" />
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-lg font-semibold">Quần Short Jeans Nữ Túi Vuông</h3>
                                        <div className="text-gray-500 line-through">359.000 đ</div>
                                        <div className="text-red-500 font-bold">179.500 đ</div>
                                        <div className="text-gray-500">Xanh đậm, 25</div>
                                        <div className="text-red-600">Đã tiết kiệm -359.000đ</div>
                                    </div>
                                    <div className="flex items-center">
                                        <button className="text-gray-500">-</button>
                                        <input type="text" className="w-8 text-center border mx-2" value="1" />
                                        <button className="text-gray-500">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">Chi tiết đơn hàng</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Tổng giá trị sản phẩm</span>
                                    <span>359.000 đ</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span>Vận chuyển</span>
                                    <span>20.000 đ</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Tổng thanh toán</span>
                                    <span>379.000 đ</span>
                                </div>
                                <div className="text-red-500 mb-4">Bạn đã tiết kiệm được 359.000 đ</div>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">Mua hàng (2)</button>
                                <div className="flex justify-center mt-4 space-x-2">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Zalo_Pay.png" alt="Zalo Pay" className="h-8" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.png" alt="Mastercard" className="h-8" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Vnpay_logo.png" alt="VNPAY" className="h-8" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/MoMo_Logo.png" alt="MoMo" className="h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    {`
                    document.getElementById('select-all').addEventListener('change', function() {
                        const checkboxes = document.querySelectorAll('.item-checkbox');
                        checkboxes.forEach(checkbox => checkbox.checked = this.checked);
                    });
                    `}
                </script>
            </div>
        </>
    );
}

export default Cart;
