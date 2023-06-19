import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import { Suspense } from "react";
import { lazy } from "react";

const RoutesProvider = () => {
  const HomeView = lazy(() => import("./pages/Home/Home"));
  const Login = lazy(() => import("./pages/Login/Login"));
  const Register = lazy(() => import("./pages/Register/Register"));
  const ProductDetail = lazy(() =>
    import("./pages/ProductDetails/ProductDetails")
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeView />} />
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
          {/* Uncreated Routes */}
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesProvider;
