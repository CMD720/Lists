import React, {useState} from 'react';
import style from "./CreateList.module.css"
import Input from "../../UI/input/input";
import RectangleButton from "../../UI/rectangleButton/rectangleButton";
import ListItems from "../ListItems/ListItems";


const CreateList = () => {
    const [form , setForm] = useState({
        title: "",
        description: "",
        items:[{
            id: Date.now(),
            value:"",
        }],
    })


    const handleItemCount = () =>{
        const item = {
            id: Date.now(),
            value:"",
        }
        setForm({
            ...form,
            items:[...form.items,item]
        })
    }
    const removeItem = (currentItem:any ) =>{
        console.log('item', currentItem)
        const copyItems = form.items.filter((item,j) => item.id !== currentItem.id)

        setForm({
            ...form,
            // items: [...form.items.filter(item => item.id !== currentItem.id)]
            items: [...form.items = copyItems]
        })
        console.log('form.items',form.items)
    }

    const handleItem = (selectItem:any , e:any , i:number) =>{
        // e.preventDefault()
        console.log('item target value', e.target.value)
        const itemsClone = [...form.items]
        itemsClone[i].value = e.target.value

        setForm({
            ...form,
            items: itemsClone
        })
        console.log('form.items',form.items)

    }
    const keyPress = (e:KeyboardEvent) => {
        console.log('KEY LOG', e)
        if(e.key === 'Enter'){
            handleItemCount();
        }
    }

    return (
        <div>
            {/*<h2 className={style.label}>Add new list</h2>*/}
            <div className={style.label}>
               <h2>Add new list</h2>
            </div>
            <div>
                <div className={style.label}>Title</div>
                <Input
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                />
                <div className={style.label}>Description</div>
                <Input
                    value={form.description}
                    onChange={e => setForm({...form, description: e.target.value})}
                />
            </div>
            <div>
                {
                form.items.map((item, i) => (
                <Input key={i}  placeholder={"enter Action"} action={true}
                       value={item.value}
                       onClick={e => removeItem(item)}
                       onChange={e => handleItem(item,e,i)}
                       onKeyPress={e => keyPress(e)}
                />
                ))
            }
            </div>

            {/*<div>*/}
            {/*    {form.items.length !==0*/}
            {/*        ? form.items.map(item => (*/}
            {/*            <div key={item.id} style={{color:'black'}}>{item.value}</div>*/}
            {/*        ))*/}
            {/*        : <div style={{color:'black'}}>EMPTY</div>*/}
            {/*    }*/}
            {/*</div>*/}

            <div>
                <RectangleButton onClick={handleItemCount}>Add Item</RectangleButton>
            </div>
        </div>
    );
};

export default CreateList;