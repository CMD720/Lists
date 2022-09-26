import React, {FC} from 'react';
import style from "./rectangleButton.module.css";

interface RectangleButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    size?:string;
    color?:string
}

const RectangleButton: FC<RectangleButtonProps> =
    ({
         onClick,
         children,
         size,
         color,
         ...props
     }) => {
        const rootClasses = [style.rectangleButtonWrapper]
        if(size === 'small'){
            rootClasses.push(style.small)
        }else{if(size==='big'){
            rootClasses.push(style.big)
        }else{rootClasses.push(style.medium)}}
        if(color === 'white'){rootClasses.push(style.white)}else{rootClasses.push(style.lthgray)}
        return (
            <div className={rootClasses.join(' ')} onClick={onClick}>
                {children}
            </div>
        );
    };

export default RectangleButton;
