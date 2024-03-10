import * as yup from 'yup';
import { FORM_VALIDATION, Regex } from "../../common/constants";

const nameSchema = yup
  .string()
  .required('Tên người dùng là trường bắt buộc !')
  .min(FORM_VALIDATION.passwordMinLength, 'Tên người dùng quá ngắn !')
  .max(FORM_VALIDATION.nameMaxLength, 'Tên người dùng quá dài !');

const emailSchema = yup
  .string()
  .required('Email là trường bắt buộc !')
  .matches(Regex.EMAIL, 'Email không đúng định dạng !');

const birthdaySchema = yup
  .string()
  .required('Ngày sinh là trường bắt buộc !')
  .matches(Regex.DATE_OF_BIRTH, 'Sai định dạng ngày tháng năm !');

const phoneSchema = yup
  .string()
  .required('Số điện thoại là trường bắt buộc !')
  .matches(Regex.PHONE, 'Sai định dạng số điện thoại !')
  .min(FORM_VALIDATION.phoneMinLength, 'Số điện thoại phải đủ 10 số !')
  .max(FORM_VALIDATION.phoneMaxLength, 'Số điện thoại không được quá dài !');

const avatarSchema = yup
  .string()
  .required('Hình ảnh người dùng là trường bắt buộc !')
  .min(FORM_VALIDATION.urlMinLength, 'Link hình ảnh không được quá ngắn !')
  .max(FORM_VALIDATION.urlMaxLength, 'Link hình ảnh không được quá dài !');

const passwordSchema = yup
  .string()
  .required('Mật khẩu là trường bắt buộc !')
  .min(FORM_VALIDATION.passwordMinLength, 'Mật khẩu phải có ít nhất 6 ký tự !')
  .max(FORM_VALIDATION.passwordMaxLength, 'Mật khẩu không được quá 20 ký tự !')
  .matches(Regex.PASSWORD, 'Mật khẩu không đúng định dạng !');

const confirmPasswordSchema = yup
  .string()
  .required('Mật khẩu là trường bắt buộc !')
  .oneOf([yup.ref('password'), ''], 'Xác thực mật khẩu không khớp  !');

export const RegisterWithSchema = yup.object().shape({
  name: nameSchema,
  email: emailSchema,
  birthday: birthdaySchema,
  phone: phoneSchema,
  avatar: avatarSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema
});
