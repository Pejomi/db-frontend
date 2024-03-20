import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MSSQL from "../pages/MSSQL";
import MongoDB from "../pages/MongoDB";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mssql' element={<MSSQL />} />
            <Route path='/mongodb' element={<MongoDB />} />
        </Routes>
    );
}

export default AppRouter;