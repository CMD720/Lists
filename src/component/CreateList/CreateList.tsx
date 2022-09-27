import React, {useState} from 'react';
import style from "./CreateList.module.css"
import Input from "../../UI/input/input";
import RectangleButton from "../../UI/rectangleButton/rectangleButton";


const CreateList = () => {
    const [form , setForm] = useState({
        title: "",
        description: "",
        // items:[""],
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
        // const removePost = (post) => {
        //     setPosts(posts.filter(p => p.id !== post.id))
        // }
        const copyItems = form.items.filter((item,j) => item.id !== currentItem.id)

        setForm({
            ...form,
            // items: [...form.items.filter(item => item.id !== currentItem.id)]
            items: [...form.items = copyItems]
        })
        console.log('form.items',form.items)
    }

    const handleItem = (selectItem:any , e:any) =>{
        // e.preventDefault()
        console.log('item target value', e.target.value)
        console.log('item target ', e)
        selectItem.value = e.target.value
    }

    return (
        <div>
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
            <div>{
                form.items.map((item, i) => (
                <Input key={i}  placeholder={"enter Action"} action={true}
                       onClick={e => removeItem(item)}
                       onChange={e => handleItem(item,e)}
                />
                ))
            }
            </div>
            <div>
                <RectangleButton onClick={handleItemCount}>Add Item</RectangleButton>
            </div>
        </div>
    );
};

export default CreateList;