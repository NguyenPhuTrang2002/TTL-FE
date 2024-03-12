import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import useRegisterForm from "../../features/auth/forms/register-form";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const { register, handleSubmit, errors, onSubmit, } = useRegisterForm();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };
  return (
    <div className="flex justify-center items-center bg-[#FFF] h-screen">
      <div className="w-[600px] bg-[#FFF] rounded-lg h-auto px-4">
        <div className="flex flex-col justify-center items-center mx-auto">
          <img className="mt-10 mb-[24px]" src="./icons/logologin.svg" alt="logo.svg" />
          <h1 className="text-[#1B1B33] text-[32px] leading-[48px] mb-5 font-semibold">Đăng ký tài khoản</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <p className="mb-2">Tên người dùng</p><p className="ml-1 text-[#0f60ff]">*</p>
            </div>
            <input className={`border w-full border-gray-200 py-2 pl-2 rounded-md outline-none
          ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
              type="text" placeholder="Nhập Tên Người Dùng" {...register('name')} />
            <span className="mb-2 text-red-500">{errors.name?.message}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="mb-2">Email</p><p className="ml-1 text-[#0f60ff]">*</p>
            </div>
            <input className={`border w-full border-gray-200 py-2 pl-2 rounded-md outline-none
          ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
              type="text" placeholder="Nhập Email" {...register('email')} />
            <span className="mb-2 text-red-500">{errors.email?.message}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="relative">
            <div className="flex">
              <p className="mb-2">Mật khẩu</p><p className="ml-1 text-[#0f60ff]">*</p>
            </div>
            <div className={`relative flex items-center border bg-[#fff] border-gray-200 w-full h-[41.5px] pr-3 rounded-md`}>
              <input
                className={`pl-4 pr-10 w-full outline-none
          ${errors.password ? 'border-red-300' : 'border-gray-200'}`}
                type={`${showPass ? 'text' : 'password'}`}
                placeholder="Nhập Mật Khẩu"
                {...register("password")} />
              <img src={`${showPass ? './icons/show.svg' : './icons/eye.svg'}`}
                alt=""
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowPass(!showPass)} />
            </div>
            <span className="mb-2 text-red-500">{errors.password?.message}</span>
          </div>
          <div className="relative">
            <div className="flex">
              <p className="mb-2">Xác nhận mật khẩu</p><p className="ml-1 text-[#0f60ff]">*</p>
            </div>
            <div className={`relative flex items-center border bg-[#fff] border-gray-200 w-full h-[41.5px] pr-3 rounded-md`}>
              <input
                className={`pl-4 pr-10 w-full outline-none
          ${errors.confirmPassword ? 'border-red-300' : 'border-gray-200'}`}
                type={`${showRePass ? 'text' : 'password'}`}
                placeholder="Nhập Lại Mật Khẩu"
                {...register("confirmPassword")} />
              <img src={`${showRePass ? './icons/show.svg' : './icons/eye.svg'}`}
                alt=""
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowRePass(!showRePass)} />
            </div>
            <span className="mb-2 text-red-500">{errors.confirmPassword?.message}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <div className="flex">
              <p className="mb-2">Ngày sinh </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <div className="relative w-full">
              <input
                className={`border w-full border-gray-200 py-2 pl-4 pr-10 rounded-md outline-none ${errors.email ? 'border-red-300' : 'border-gray-200'} `} type="text" placeholder="DD/MM/YYYY"   {...register('birthday')} />
              <img className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500" src="./icons/birthday.svg" alt="birthday" />
            </div>
            <span className=" mb-3 text-red-500">{errors.birthday?.message}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="mb-2">Số điện thoại</p><p className="ml-1 text-[#0f60ff]">*</p>
            </div>
            <input className={`border w-full border-gray-200 py-2 pl-2 rounded-md outline-none
          ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
              type="text" placeholder="Nhập Số Điện Thoại" {...register('phone')} />
            <span className="mb-2 text-red-500">{errors.phone?.message}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <p className="mb-2">Link Avatar</p><p className="ml-1 text-[#0f60ff]">*</p>
          </div>
          <input className={`border w-full border-gray-200 py-2 pl-2 rounded-md outline-none
          ${errors.avatar ? 'border-red-300' : 'border-gray-200'}`}
            type="text" placeholder="Nhập Link Ảnh Avatar" {...register('avatar')}
            onKeyPress={handleKeyPress}
          />
          <span className="mb-2 text-red-500">{errors.avatar?.message}</span>
        </div>
        <div className="flex justify-center items-center py-5">
          <button className="bg-[#0F60FF] text-[#fff] w-[600px] leading-[45px] rounded-md  " type="submit" onClick={handleSubmit(onSubmit)}>
            Đăng ký
          </button>
        </div>
        <div className="flex pb-5 w-full justify-center">
          <p> Bạn đã có tài khoản ?</p>
          <Link to="/login" className="text-[#0F60FF] ml-5">Đăng nhập ngay !</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Register;
