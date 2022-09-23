import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../containers";
import { Footer, Header } from "../components";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
