import React, {FC} from 'react';
import style from "./circleButton.module.css";

interface CircleButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    size?:string;
}

const CircleButton: FC<CircleButtonProps> =
    ({
         onClick,
         children,
         size,
         ...props
     }) => {
        const rootClasses = [style.circleButtonWrapper]
        if(size === 'small'){
            rootClasses.push(style.small)
        }else{if(size==='big'){
            rootClasses.push(style.big)
        }else{rootClasses.push(style.medium)}}
        return (
            <div className={rootClasses.join(' ')} onClick={onClick}>
                {children}
            </div>
        );
    };

export default CircleButton;
