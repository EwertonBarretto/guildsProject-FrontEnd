import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/signin";
import Home from "../pages/home";
import SelfRegister from "../pages/selfRegister";
import ForgotPassword from "../pages/forgotPassword";
import { useAuth } from "../hooks/useAuth";
import Layout from "../pages/layout";

const Private = ({ Item }: any) => {
    const { signed } = useAuth();

    console.log(signed, 'route')
    return signed === true ? <Item /> : <Signin />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="*" element={<Signin />} />
                    <Route path="/selfRegister" element={<SelfRegister />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={<Private Item={Layout} />} >
                        <Route path="/dashboard/home" element={<Home />} />
                    </Route>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;