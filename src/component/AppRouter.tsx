import React, {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
// import {Context} from "../context/Context";
// import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    // const {auth} = useContext(Context)
    // const [user] = useAuthState(auth)
    // const user = true
    const user = false

    return(
        user
            ?
                <Routes>
                    {privateRoutes.map(({path, Element}) =>
                        <Route key={path} path={path} element={<Element/>}/>
                    )}
                    <Route path='/*' element={<Navigate to={MAIN_ROUTE} replace={true}/>}/>
                </Routes>
            :
                <Routes>
                    {publicRoutes.map(({path, Element}) =>
                        <Route key={path} path={path} element={<Element/>}/>
                    )}
                    <Route path='/*' element={<Navigate to={LOGIN_ROUTE} replace={true} />}/>
                    {/*<Route path="*" element={<Navigate to={LOGIN_ROUTE} replace/>}/>*/}
                </Routes>
    );
};

export default AppRouter;