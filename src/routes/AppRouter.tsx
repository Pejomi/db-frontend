import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MSSQL from "../pages/MSSQL";
import MongoDB from "../pages/MongoDB";
import Neo4j from "../pages/Neo4j";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mssql' element={<MSSQL />} />
            <Route path='/mongodb' element={<MongoDB />} />
            <Route path='/neo4j' element={<Neo4j />} />
        </Routes>
    );
}

export default AppRouter;