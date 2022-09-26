import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import style from './Navbar.module.css'
import RectangleButton from "../UI/rectangleButton/rectangleButton";
import UserTools from "./UserTools";
// import {Context} from "../context/Context";
// import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    // const {auth} = useContext(Context)
    // const [user] = useAuthState(auth)
    const user = true
    // const user = false
    return (
        <div className={style.navbar}>
            {user
                ? <div className={style.auth_wrapper}>
                    <div className={style.tools}>
                        <UserTools/>
                    </div>
                    <div className={style.user_auth}>
                        <div className={style.ava}></div>
                        <RectangleButton color={'white'}>LOGOUT</RectangleButton>
                    </div>
                  </div>
                : <NavLink to={LOGIN_ROUTE}>
                    <div className={style.user_auth}>
                    {/*<div className={style.ava}></div>*/}
                     <RectangleButton color={'white'}>LOGIN</RectangleButton>
                    </div>
                  </NavLink>
            }
        </div>
        // <AppBar  position="static">
        //     <Toolbar variant={"dense"}>
        //         <Grid container={true} justifyContent={"flex-end"}>
        //             {
        //                 user ? <Grid container={true} justifyContent={"flex-end"} >
        //                         <div className={"avatar"} style={{backgroundImage: "url(" + auth.currentUser.photoURL + ")" , marginRight:"10px"}}></div>
        //                         {/*<Avatar src={auth.currentUser.photoURL}/>*/}
        //                         <Button onClick={() => auth.signOut()} color={"inherit"} variant={"outlined"}>Logout</Button>
        //                        </Grid>
        //                      : <NavLink to={LOGIN_ROUTE}>
        //                         <Button color={"inherit"} variant={"outlined"}>Login</Button>
        //                        </NavLink>
        //             }
        //         </Grid>
        //     </Toolbar>
        // </AppBar>
    );
};

export default Navbar;