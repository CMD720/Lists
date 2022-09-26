import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "./ShopListItemHooks/redux";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import Navbar from "./component/Navbar";


interface AppProps {
    children?: React.ReactNode;
}

const App: FC<AppProps> =
    ({
        children,
     }) => {

    // const dispatch = useDispatch()
    // const modal = useAppSelector(state => state.modal.modalWindow)
    return (
        <div>
            {/*{children}*/}
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
};

export default App;