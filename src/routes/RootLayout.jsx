import MainHeader from "../components/MainHeader";
//outlet is for children
import { Outlet } from "react-router-dom";

function RootLayout(){
    return<>
        <MainHeader/>
        <Outlet></Outlet>
    </>
}

export default RootLayout;