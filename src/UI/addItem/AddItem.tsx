import React, {FC} from 'react';
import CircleButton from "../circleButton/circleButton";

interface AddItemProps {
    children?: React.ReactNode;
    onClick?: () => void;
    size:string;
}

const AddItem: FC<AddItemProps> =
    ({
        children,
         size,
        onClick,
        ...props
     }) => {
    return (
            <div onClick={onClick}>
                <CircleButton size={size}>
                    <i className="ic-plus"></i>
                    {/*{children}*/}
                </CircleButton>
            </div>
    );
};

export default AddItem;