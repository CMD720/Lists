import React, {FC} from 'react';
import style from './MyModal.module.css'
import {useDispatch} from "react-redux";
import {modalOnOffAuto} from "../../store/reducers/ModalSlice";
import CircleButton from "../circleButton/circleButton";

interface ModalProps {
    children?: React.ReactNode;
    visible:boolean;
}

const MyModal: FC<ModalProps> =
    ({
         children,
         visible,
    }) => {
    const dispatch = useDispatch()
    const rootClasses = [style.myModal]
    if (visible) {
        rootClasses.push(style.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => dispatch(modalOnOffAuto())}>
            {/*<div className={style.closeModal}>*/}
            {/*    <CircleButton small={true}>*/}
            {/*        <i className="ic-cross"></i>*/}
            {/*    </CircleButton>*/}
            {/*</div>*/}
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.closeModal} onClick={() => dispatch(modalOnOffAuto())}>
                    <CircleButton size={'small'}>
                        <i className="ic-cross"></i>
                    </CircleButton>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MyModal;


