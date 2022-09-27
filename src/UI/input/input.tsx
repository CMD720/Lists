import React, {FC} from 'react';
import style from "./input.module.css"
import CircleButton from "../circleButton/circleButton";

interface InputProps {
    onChange?: (e: any) => void;
    onClick?: (item: any) => void;
    value?: string;
    type?: string;
    placeholder?: string;
    action?: boolean;

}

const Input: FC<InputProps> =
    ({
         onChange,
         onClick,
         value,
         type,
         placeholder,
         action,
         ...props
     })=> {
    return(
        <div className={style.textFieldWrapper}>
            <input className={style.textField} type="text" placeholder={placeholder} onChange={onChange}/>
            {action
                ? <div className={style.delItem} onClick={onClick}>
                    <CircleButton size={'small'}>
                        <i className="ic-cross"></i>
                    </CircleButton>
                  </div>
                : <div></div>
            }
        </div>
    );
};

export default Input;