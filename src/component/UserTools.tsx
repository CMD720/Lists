import React from 'react';
import NewList from "../UI/newList/NewList";
import AddItem from "../UI/addItem/AddItem";
import {modalOnOffAuto} from "../store/reducers/ModalSlice";
import MyModal from "../UI/Modal/MyModal";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../ShopListItemHooks/redux";
import style from './UserTools.module.css'
import CreateList from "./CreateList/CreateList";

const UserTools = () => {
    const dispatch = useDispatch()
    const modal = useAppSelector(state => state.modal.modalWindow)
    return (
        <div className={style.tools_wrapper}>
            <NewList/>
            <AddItem onClick={() => dispatch(modalOnOffAuto())} size={'medium'}/>
            <MyModal visible={modal}>
                Hi am here
                <CreateList/>
            </MyModal>
        </div>
    );
};

export default UserTools;