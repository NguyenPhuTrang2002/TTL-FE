import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthStore } from "../stores";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterWithSchema } from "../auth.schema.ts/register";
import { ErrorCode } from "../../common/constants";

interface RegisterFormInputs {
  name: string;
  email: string;
  birthday: string;
  phone: string;
  avatar: string;
  password: string;
  confirmPassword: string;
}

export const useRegisterForm = () => {
  const authStore = useAuthStore();

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(RegisterWithSchema)
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data: any) => {
    const res = await authStore.register({
      name: data.name,
      email: data.email,
      birthday: data.birthday,
      phone: data.phone,
      avatar: data.avatar,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    if (res.success) {
      toast.success("Đăng ký tài khoản thành công !", {
        position: "top-right",
        autoClose: 3000
      });
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } else {
      // Kiểm tra xem nội dung lỗi trả về có chứa chuỗi 'email đã tồn tại' không
      if (res.error && res.error.includes("email đã tồn tại")) {
        toast.warning("Email đã tồn tại. Vui lòng chọn một email khác !", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error("Đăng ký tài khoản không thành công. Vui lòng thử lại sau.", {
          position: "top-right",
          autoClose: 5000
        });
      }
    }
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit
  };
};

export default useRegisterForm;