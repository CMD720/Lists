import React, {FC} from 'react';
import style from "./input.module.css"
import CircleButton from "../circleButton/circleButton";

interface InputProps {
    onChange?: (e: any) => void;
    onClick?: (item: any) => void;
    onKeyPress?: (e:any) => void
    value?: string;
    type?: string;
    placeholder?: string;
    action?: boolean;
}

const Input: FC<InputProps> =
    ({
         onChange,
         onClick,
         onKeyPress,
         value,
         type,
         placeholder,
         action,
         ...props
     })=> {
    return(
        <div className={style.textFieldWrapper}>
            <input className={style.textField} type="text"
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange}
                   onKeyPress={onKeyPress}
            />
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