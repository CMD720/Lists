import React, {FC} from 'react';
import CircleButton from "../circleButton/circleButton";

interface NewListProps {
    children?: React.ReactNode;
    onClick?: () => void;
    size?:string
}

const NewList: FC<NewListProps> =
    ({
         children,
         size,
         onClick,
         ...props
     }) => {
        return (
            <div onClick={onClick}>
                <CircleButton size={size}>
                    <i className="ic-file-empty"></i>
                </CircleButton>
            </div>
        );
    };

export default NewList;