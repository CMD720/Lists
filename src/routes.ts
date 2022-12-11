import {LOGIN_ROUTE, MAIN_ROUTE} from "./utils/consts";
// import Login from "./component/Login";
import Main from "./component/Main";
import Login from "./component/Login/Login";


export const privateRoutes = [
    {path: MAIN_ROUTE, Element: Main}
]
export const publicRoutes = [
    {path: LOGIN_ROUTE, Element: Login}
]
