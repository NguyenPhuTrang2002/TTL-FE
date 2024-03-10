import { FORM_VALIDATION, Regex } from "../../common/constants";
import yup from "../../../plugins/yup";
const emailSchema = yup
  .string()
  .required('Email là trường bắt buộc !')
  .matches(Regex.EMAIL, 'Email không đúng định dạng !');
const passwordSchema = yup
  .string()
  .required('Password là trường bắt buộc !')
  .min(FORM_VALIDATION.passwordMinLength, 'Mật khẩu phải có ít nhất 6 ký tự !')
  .max(FORM_VALIDATION.passwordMaxLength, 'Mật khẩu không được quá 20 ký tự !')
  .matches(Regex.PASSWORD, 'Mật khẩu không đúng định dạng !')

export const loginWithPasswordSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});


