import React, {FC} from 'react';
import Input from "../../UI/input/input";

interface ItemsProps {
    items: {
        id:number,
        value:string,
    }[];
    handleItem?: (item: any , e: any) => void;
    removeItem: (currentItem: any) => void;
}
const ListItems: FC<ItemsProps> =
    ({
        items,
         handleItem,
         removeItem,
        ...props
     }) => {
    return (
        <div>
            {
                items.map((item, i) => (
                    <Input key={i}  placeholder={"enter Action"} action={true}
                           onClick={e => removeItem(item)}
                           // onChange={e => handleItem(item,e)}
                    />
                ))
            }
        </div>
    );
};

export default ListItems;