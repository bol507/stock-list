import { Navigate, Route, Routes } from "react-router";
import HomePage from "../home/page";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

export default PrivateRoutes;
