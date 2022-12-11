import React from 'react';
import {useDispatch} from "react-redux";
import style from './UserTools.module.css'
import {useAppSelector} from "../../ShopListItemHooks/redux";
import NewList from "../../UI/newList/NewList";
import AddItem from "../../UI/addItem/AddItem";
import CreateList from "../CreateList/CreateList";
import {modalOnOffAuto} from "../../store/reducers/ModalSlice";
import MyModal from "../../UI/Modal/MyModal";

const UserTools = () => {
    const dispatch = useDispatch()
    const modal = useAppSelector(state => state.modal.modalWindow)
    return (
        <div className={style.tools_wrapper}>
            <NewList/>
            <AddItem onClick={() => dispatch(modalOnOffAuto())} size={'medium'}/>
            <MyModal visible={modal}>
                <CreateList/>
            </MyModal>
        </div>
    );
};

export default UserTools;