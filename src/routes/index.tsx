import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/signin";
import Home from "../pages/home";
import Signup from "../pages/signup";
import SelfRegister from "../pages/selfRegister";
import ForgotPassword from "../pages/forgotPassword";

const Private = ({ Item }: any) => {
    const signed = false;

    return signed > true ? <Item /> : <Signin />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                    <Route path="/selfRegister" element={<SelfRegister />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;