import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MSSQL from "../pages/MSSQL";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mssql' element={<MSSQL />} />
        </Routes>
    );
}

export default AppRouter;