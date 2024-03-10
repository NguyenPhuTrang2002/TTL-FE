import Home from '../pages/Home/Index';
import Products from '../pages/Products/Index';
import Login from '../components/Login';
import Register from '../components/Register';

const publicRoutes = [
  { path: '/home', component: Home },
  { path: '/products', component: Products },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];
const defaultRoute = "/login";

// Kiểm tra đường dẫn mặc định và chuyển hướng đến trang login
const redirectToDefaultRoute = () => {
  const currentPath = window.location.pathname;
  if (currentPath === "/") {
    window.location.href = defaultRoute;
  }
};

// Gọi hàm redirectToDefaultRoute khi ứng dụng được khởi tạo
redirectToDefaultRoute();
export { publicRoutes } 