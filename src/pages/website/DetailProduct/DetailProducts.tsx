import { CopyOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, InputNumber, Space } from 'antd'
import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import a from '~/asset/images/zalopay.png'

const DetailProducts = () => {
    const [quantity, setQuantity] = useState(1)

    const handleChange = (event: any) => {
        const value = Math.max(Number(event.target.value), 0) // Đảm bảo giá trị không nhỏ hơn 1
        setQuantity(value)
    }

    const increase = () => setQuantity(quantity + 1)
    const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1)

    return (
        <div className="container mx-auto p-6 mt-28">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex lg:w-1/2">
                    <div className="flex flex-col gap-4 mr-4">
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(1).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(2).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(3).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(3).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(3).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(3).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(3).JPG"
                            alt="Product Thumbnail"
                            className="w-20 h-24 object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src="https://m.yodycdn.com/products/ao-polo-nam-APM7467-XLU%20(1).JPG"
                            alt="Product"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-3">
                    <div className="!font-semibold lg:!font-semibold !text-yd-heading-7 lg:!text-yd-heading-8 text-yd-typo-title !font-medium line-clamp-2">
                        <h1>Áo Thun Thể Thao Nam Feel The Sport</h1>
                    </div>

                    <div>
                        <span className="uppercase text-[#292929] text-sm mr-1">
                            <Space>
                                SAM6071-DEN-M
                                <CopyOutlined style={{ height: 5 }} />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star text-yellow-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star text-yellow-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star text-yellow-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star text-yellow-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star text-yellow-400"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <span className="font-medium text-yd-label-3 text-yd-typo-title">4.8</span>
                                <span className="font-regular text-yd-label-4 text-yd-typo-subtitle">(120)</span>
                            </Space>
                        </span>
                    </div>

                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-semibold text-red-600 mr-2">$99.99</span>
                        <span className="line-through text-gray-500">$129.99</span>
                    </div>

                    <div>
                        <span className="text-black font-semibold text-[16px]">Khuyến mãi</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <a href="#" className="ml-2 text-black text-[14px]">
                            <span style={{ color: 'rgb(0, 0, 0)' }}>
                                Đăng ký Email nhận Voucher 100K cho đơn từ 400K
                            </span>

                            <span className="text-yellow-500 text-[14px]">(Nhận ngay)</span>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <a href="#" className="ml-2 text-black text-[14px]">
                            Voucher giảm 100k cho đơn từ 499k
                            <span className="text-yellow-500 text-[14px]">(Xem chi tiết)</span>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <a href="#" className="ml-2 text-black text-[14px]">
                            Nhập mã <span className="text-yellow-500">"ZLPYODY"</span> giảm thêm đến 50K khi thanh toán
                            qua ZaloPay
                            <span className="text-yellow-500 text-[14px]">(Xem chi tiết)</span>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.522-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.176-4.327c.197-.392.73-.392.927 0l2.176 4.327 4.898.696c.441.062.612.636.283.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <a href="#" className="ml-2 text-black text-[14px]">
                            Nhập mã
                            <span className="text-yellow-500 text-[14px]">"VNPAYPNS"</span> giảm tới 70K khi thanh toán
                            qua VNPAY QR
                            <span className="text-yellow-500 text-[14px]">(Xem chi tiết)</span>
                        </a>
                    </div>

                    <div className="flex items-center pt-2 pb-2">
                        <i className="bi bi-eye"></i>
                        <span className="ml-2 text-[14px]">
                            <strong className="text-base font-mono">32</strong> người xem sản phẩm này
                        </span>
                    </div>

                    <div>
                        <span className=" text-[14px]">
                            Chỉ còn <strong className="text-base font-mono">18</strong> sản phẩm trong kho!
                        </span>
                    </div>

                    <div className="mt-12">
                        <div className="pt-2 pb-2">
                            <span className="text-black font-semibold text-[15px]">
                                Màu sắc: <span className="capitalize">Đen</span>
                            </span>
                        </div>
                        <div className="product-color flex space-x-4 mt-2">
                            <div className="h-11 w-11 rounded-full bg-black"></div>
                            <div className="h-11 w-11 rounded-full bg-red-500"></div>
                            <div className="h-11 w-11 rounded-full bg-blue-500"></div>
                            <div className="h-11 w-11 rounded-full bg-green-500"></div>
                            <div className="h-11 w-11 rounded-full bg-yellow-500"></div>
                            <div className="h-11 w-11 rounded-full bg-purple-500"></div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <span className="text-black font-semibold text-[15px]">
                            Kích thước: <span className="capitalize ">XL</span>
                        </span>

                        <div className="product-size-picker_list__hBE7G flex space-x-4">
                            <div id="size-4-0" className="product-size-picker_list_item__Tq__e">
                                <div className="product-size-chip_wrapper__BMxDn product-size-chip_normal__4zL8U border border-gray-300 rounded-lg h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white">
                                    <span className="font-medium text-yd-button-text-5 text-current">M</span>
                                </div>
                            </div>
                            <div id="size-6-1" className="product-size-picker_list_item__Tq__e">
                                <div className="product-size-chip_wrapper__BMxDn product-size-chip_active__EnKdJ border border-gray-300 rounded-lg h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white">
                                    <span className="font-medium text-[14px]">L</span>
                                </div>
                            </div>
                            <div id="size-7-2" className="product-size-picker_list_item__Tq__e">
                                <div className="product-size-chip_wrapper__BMxDn product-size-chip_normal__4zL8U border border-gray-300 rounded-lg h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white">
                                    <span className="font-medium text-[14px]">XL</span>
                                </div>
                            </div>
                            <div id="size-8-3" className="product-size-picker_list_item__Tq__e">
                                <div className="product-size-chip_wrapper__BMxDn product-size-chip_normal__4zL8U border border-gray-300 rounded-lg h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white">
                                    <span className="font-medium text-[14px]">2XL</span>
                                </div>
                            </div>
                            <div id="size-10-4" className="product-size-picker_list_item__Tq__e">
                                <div className="product-size-chip_wrapper__BMxDn product-size-chip_disabled__iRBS_ border border-gray-300 rounded-lg h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white">
                                    <span className="font-medium text-[14px]">3XL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-black font-semibold text-[15px]">Số lượng :</label>
                    </div>
                    <div className="mb-4 flex items-center space-x-2">
                        <div className="flex items-center border border-gray-300 rounded-lg p-1">
                            <Button
                                className="border-none text-black rounded-lg h-9 w-10 flex items-center justify-center focus:outline-none"
                                onClick={decrease}
                            >
                                -
                            </Button>
                            <input
                                type="number"
                                min={0}
                                value={quantity}
                                onChange={handleChange}
                                className="w-16 text-center border-none outline-none"
                            />
                            <Button
                                className="border-none text-black rounded-lg h-9 w-10 flex items-center justify-center focus:outline-none"
                                onClick={increase}
                            >
                                +
                            </Button>
                        </div>
                        <div>
                            <Button className="h-12 w-[450px] border-black rounded-lg">
                                <span className="text-lg  font-semibold ">Thêm giỏ hàng</span>
                            </Button>
                        </div>
                    </div>
                    <div className="pt-3 pb-2">
                        <Button className="h-12 w-[615px] bg-amber-500  font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-amber-400 hover:shadow-lg">
                            <span className="text-lg">Mua ngay</span>
                        </Button>
                    </div>

                    <div className="bg-slate-100 h-24 pt-5">
                        <div className="flex items-center justify-center space-x-3 ">
                            <div className="w-auto h-8">
                                <img
                                    src="https://yody.vn/icons/zalopay.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-auto h-8">
                                <img
                                    src="https://yody.vn/icons/visa-card.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-auto h-8">
                                <img
                                    src="https://yody.vn/icons/master-card.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-auto h-8">
                                <img
                                    src="https://yody.vn/icons/vnpay-qr.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-auto h-8">
                                <img
                                    src="https://yody.vn/icons/momo.png"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-xs">Đảm bảo thanh toán an toàn và bảo mật</span>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm pt-2 text-slate-4">
                        <div className="flex space-x-2 ">
                            {' '}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                id=":S5:"
                                className="product-risk-reduce-policies_icon__Sr1Jg"
                            >
                                <path
                                    d="M12.9998 14.75H11.9998C11.5898 14.75 11.2498 14.41 11.2498 14C11.2498 13.59 11.5898 13.25 11.9998 13.25H12.9998C13.6898 13.25 14.2498 12.69 14.2498 12V2.75H5.99978C4.81978 2.75 3.73975 3.38998 3.15975 4.41998C2.95975 4.77998 2.49979 4.91002 2.13979 4.71002C1.77979 4.51002 1.64975 4.05 1.84975 3.69C2.68975 2.19 4.27978 1.25 5.99978 1.25H14.9998C15.4098 1.25 15.7498 1.59 15.7498 2V12C15.7498 13.52 14.5198 14.75 12.9998 14.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17C1.25 16.59 1.59 16.25 2 16.25C2.41 16.25 2.75 16.59 2.75 17C2.75 18.24 3.76 19.25 5 19.25H5.34998C5.67998 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.33 18.1 18.66 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H12C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M8 8.75H2C1.59 8.75 1.25 8.41 1.25 8C1.25 7.59 1.59 7.25 2 7.25H8C8.41 7.25 8.75 7.59 8.75 8C8.75 8.41 8.41 8.75 8 8.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M6 11.75H2C1.59 11.75 1.25 11.41 1.25 11C1.25 10.59 1.59 10.25 2 10.25H6C6.41 10.25 6.75 10.59 6.75 11C6.75 11.41 6.41 11.75 6 11.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M4 14.75H2C1.59 14.75 1.25 14.41 1.25 14C1.25 13.59 1.59 13.25 2 13.25H4C4.41 13.25 4.75 13.59 4.75 14C4.75 14.41 4.41 14.75 4 14.75Z"
                                    fill="currentcolor"
                                ></path>
                            </svg>
                            <span>
                                <strong>Miễn phí vận chuyển: </strong> Đơn hàng từ 498k
                            </span>
                        </div>

                        <div className="flex space-x-2">
                            {' '}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                id=":S6:"
                                className="product-risk-reduce-policies_icon__Sr1Jg"
                            >
                                <path
                                    d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
                                    fill="currentcolor"
                                ></path>
                            </svg>
                            <span>
                                <strong>Giao hàng: </strong> Từ 3 - 5 ngày trên cả nước
                            </span>
                        </div>

                        <div className="flex space-x-2">
                            {' '}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                id=":S7:"
                                className="product-risk-reduce-policies_icon__Sr1Jg"
                            >
                                <path
                                    d="M15.4902 20.7599C15.3002 20.7599 15.1102 20.6899 14.9602 20.5399C14.6702 20.2499 14.6702 19.7699 14.9602 19.4799L19.9702 14.4699C20.2602 14.1799 20.7402 14.1799 21.0302 14.4699C21.3202 14.7599 21.3202 15.2399 21.0302 15.5299L16.0202 20.5399C15.8702 20.6799 15.6802 20.7599 15.4902 20.7599Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M20.5 15.74H3.5C3.09 15.74 2.75 15.4 2.75 14.99C2.75 14.58 3.09 14.24 3.5 14.24H20.5C20.91 14.24 21.25 14.58 21.25 14.99C21.25 15.4 20.91 15.74 20.5 15.74Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M3.49994 9.75994C3.30994 9.75994 3.11994 9.68994 2.96994 9.53994C2.67994 9.24994 2.67994 8.76994 2.96994 8.47994L7.97994 3.46994C8.26994 3.17994 8.74994 3.17994 9.03994 3.46994C9.32994 3.75994 9.32994 4.23994 9.03994 4.52994L4.02994 9.53994C3.88994 9.67994 3.68994 9.75994 3.49994 9.75994Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M20.5 9.76001H3.5C3.09 9.76001 2.75 9.42001 2.75 9.01001C2.75 8.60001 3.09 8.26001 3.5 8.26001H20.5C20.91 8.26001 21.25 8.60001 21.25 9.01001C21.25 9.42001 20.91 9.76001 20.5 9.76001Z"
                                    fill="currentcolor"
                                ></path>
                            </svg>
                            <span>
                                <strong>Miễn phí đổi trả:</strong> Tại 267+ cửa hàng trong 15 ngày
                            </span>
                        </div>

                        <div className="flex space-x-2">
                            {' '}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                id=":S8:"
                                className="product-risk-reduce-policies_icon__Sr1Jg"
                            >
                                <path
                                    d="M12.0701 21.98C10.6601 21.98 9.24009 21.44 8.17009 20.37L3.64009 15.84C2.54009 14.74 1.96009 13.22 2.03009 11.67L2.27009 6.66999C2.38009 4.27999 4.27009 2.38999 6.67009 2.26999L11.6701 2.02999C13.2201 1.96999 14.7401 2.53999 15.8401 3.63999L20.3701 8.16999C22.5201 10.32 22.5201 13.83 20.3701 15.98L15.9801 20.37C14.9001 21.44 13.4901 21.98 12.0701 21.98ZM4.70009 14.77L9.23009 19.3C9.99009 20.06 11.0001 20.48 12.0701 20.48C13.1401 20.48 14.1501 20.06 14.9101 19.3L19.3001 14.91C20.0601 14.15 20.4801 13.14 20.4801 12.07C20.4801 11 20.0601 9.98999 19.3001 9.22999L14.7701 4.69999C13.9701 3.89999 12.8601 3.46999 11.7401 3.52999L6.74009 3.76999C5.11009 3.83999 3.84009 5.10999 3.76009 6.72999L3.52009 11.73C3.47009 12.86 3.90009 13.97 4.70009 14.77Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M9.5 12.75C7.71 12.75 6.25 11.29 6.25 9.5C6.25 7.71 7.71 6.25 9.5 6.25C11.29 6.25 12.75 7.71 12.75 9.5C12.75 11.29 11.29 12.75 9.5 12.75ZM9.5 7.75C8.54 7.75 7.75 8.54 7.75 9.5C7.75 10.46 8.54 11.25 9.5 11.25C10.46 11.25 11.25 10.46 11.25 9.5C11.25 8.54 10.46 7.75 9.5 7.75Z"
                                    fill="currentcolor"
                                ></path>
                            </svg>
                            <span>Sử dụng mã giảm giá ở bước thanh toán</span>
                        </div>

                        <div className="flex space-x-2">
                            {' '}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                id=":S9:"
                                className="product-risk-reduce-policies_icon__Sr1Jg"
                            >
                                <path
                                    d="M11.9999 22.7599C10.9099 22.7599 9.8299 22.4399 8.9799 21.8099L4.6799 18.5999C3.5399 17.7499 2.6499 15.9699 2.6499 14.5599V7.11994C2.6499 5.57994 3.7799 3.93994 5.2299 3.39994L10.2199 1.52994C11.2099 1.15994 12.7699 1.15994 13.7599 1.52994L18.7499 3.39994C20.1999 3.93994 21.3299 5.57994 21.3299 7.11994V14.5499C21.3299 15.9699 20.4399 17.7399 19.2999 18.5899L14.9999 21.7999C14.1699 22.4399 13.0899 22.7599 11.9999 22.7599ZM10.7499 2.93994L5.7599 4.80994C4.9099 5.12994 4.1599 6.20994 4.1599 7.12994V14.5599C4.1599 15.5099 4.8299 16.8399 5.5799 17.3999L9.8799 20.6099C11.0299 21.4699 12.9699 21.4699 14.1299 20.6099L18.4299 17.3999C19.1899 16.8299 19.8499 15.5099 19.8499 14.5599V7.11994C19.8499 6.20994 19.0999 5.12994 18.2499 4.79994L13.2599 2.92994C12.5799 2.68994 11.4199 2.68994 10.7499 2.93994Z"
                                    fill="currentcolor"
                                ></path>
                                <path
                                    d="M10.6602 14.23C10.4702 14.23 10.2802 14.16 10.1302 14.01L8.52023 12.4C8.23023 12.11 8.23023 11.63 8.52023 11.34C8.81023 11.05 9.29023 11.05 9.58023 11.34L10.6602 12.42L14.4302 8.65C14.7202 8.36 15.2002 8.36 15.4902 8.65C15.7802 8.94 15.7802 9.42 15.4902 9.71L11.1902 14.01C11.0402 14.16 10.8502 14.23 10.6602 14.23Z"
                                    fill="currentcolor"
                                ></path>
                            </svg>
                            <span>Thông tin bảo mật và mã hoá</span>
                        </div>
                    </div>

                    <div className="desciption text-sm pt-2">
                        <span>
                            Họa tiết ngôi sao trẻ trung, mới lạ tạo điểm nhấn cho trang phục. Thiết kế đơn giản, dễ phối
                            đồ phù hợp cho mọi lứa tuổi. Bề mặt dệt óng ánh như mắt chim tinh anh, sang trọng và thu
                            hút. Chất liệu mềm mại, thoáng mát, thoải mái khi mặc. Co giãn tốt, giữ phom lâu, chống nhăn
                            thích hợp cho nhiều hoạt động.
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h1 className="text-3xl font-semibold">Đã xem gần đây</h1>
            </div>

            <div className="productcontainer relative w-full max-w-5xl mx-auto mt-12">
                <div id="productContainer" className="product-daxem flex overflow-x-scroll space-x-4 px-8 gap-2">
                    <div className="products w-64 flex-shrink-0">
                        <div className="img-product h-80 bg-gray-200"></div>
                        <div className="pt-2 xlg:pt-3 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="font-medium text-yd-label-3 xlg:text-[14px] text-yd-typo-title line-clamp-1 min-h-[22px] xlg:min-h-[24px] !font-[400] capitalize">
                                    Áo thu đông nam kẻ in gấu
                                </div>
                            </div>
                            <div className="pt-2 xlg:pt-[8px]">
                                <div className="font-semibold text-yd-heading-7 xlg:text-[16px] text-yd-typo-title font-[600]">
                                    499.000 đ
                                </div>
                                <div className="product-color flex space-x-4 mt-2">
                                    <div className="h-6 w-6 rounded-full bg-black"></div>
                                    <div className="h-6 w-6 rounded-full bg-red-500"></div>
                                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products w-64 flex-shrink-0">
                        <div className="img-product h-80 bg-gray-200"></div>
                        <div className="pt-2 xlg:pt-3 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="font-medium text-yd-label-3 xlg:text-[14px] text-yd-typo-title line-clamp-1 min-h-[22px] xlg:min-h-[24px] !font-[400] capitalize">
                                    Áo thu đông nam kẻ in gấu
                                </div>
                            </div>
                            <div className="pt-2 xlg:pt-[8px]">
                                <div className="font-semibold text-yd-heading-7 xlg:text-[16px] text-yd-typo-title font-[600]">
                                    499.000 đ
                                </div>
                                <div className="product-color flex space-x-4 mt-2">
                                    <div className="h-6 w-6 rounded-full bg-black"></div>
                                    <div className="h-6 w-6 rounded-full bg-red-500"></div>
                                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products w-64 flex-shrink-0">
                        <div className="img-product h-80 bg-gray-200"></div>
                        <div className="pt-2 xlg:pt-3 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="font-medium text-yd-label-3 xlg:text-[14px] text-yd-typo-title line-clamp-1 min-h-[22px] xlg:min-h-[24px] !font-[400] capitalize">
                                    Áo thu đông nam kẻ in gấu
                                </div>
                            </div>
                            <div className="pt-2 xlg:pt-[8px]">
                                <div className="font-semibold text-yd-heading-7 xlg:text-[16px] text-yd-typo-title font-[600]">
                                    499.000 đ
                                </div>
                                <div className="product-color flex space-x-4 mt-2">
                                    <div className="h-6 w-6 rounded-full bg-black"></div>
                                    <div className="h-6 w-6 rounded-full bg-red-500"></div>
                                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products w-64 flex-shrink-0">
                        <div className="img-product h-80 bg-gray-200"></div>
                        <div className="pt-2 xlg:pt-3 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="font-medium text-yd-label-3 xlg:text-[14px] text-yd-typo-title line-clamp-1 min-h-[22px] xlg:min-h-[24px] !font-[400] capitalize">
                                    Áo thu đông nam kẻ in gấu
                                </div>
                            </div>
                            <div className="pt-2 xlg:pt-[8px]">
                                <div className="font-semibold text-yd-heading-7 xlg:text-[16px] text-yd-typo-title font-[600]">
                                    499.000 đ
                                </div>
                                <div className="product-color flex space-x-4 mt-2">
                                    <div className="h-6 w-6 rounded-full bg-black"></div>
                                    <div className="h-6 w-6 rounded-full bg-red-500"></div>
                                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products w-64 flex-shrink-0 ">
                        <div className="img-product h-80 bg-gray-200"></div>
                        <div className="pt-2 xlg:pt-3 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="font-medium text-yd-label-3 xlg:text-[14px] text-yd-typo-title line-clamp-1 min-h-[22px] xlg:min-h-[24px] !font-[400] capitalize">
                                    Áo thu đông nam kẻ in gấu
                                </div>
                            </div>
                            <div className="pt-2 xlg:pt-[8px]">
                                <div className="font-semibold text-yd-heading-7 xlg:text-[16px] text-yd-typo-title font-[600]">
                                    499.000 đ
                                </div>
                                <div className="product-color flex space-x-4 mt-2">
                                    <div className="h-6 w-6 rounded-full bg-black"></div>
                                    <div className="h-6 w-6 rounded-full bg-red-500"></div>
                                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProducts
