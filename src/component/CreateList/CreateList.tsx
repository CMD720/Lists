import React, {useState} from 'react';
import style from "./CreateList.module.css"
import Input from "../../UI/input/input";
import RectangleButton from "../../UI/rectangleButton/rectangleButton";


const CreateList = () => {
    const [form , setForm] = useState({
        title: "",
        description: "",
        items:[""],
    })


    const handleItemCount = () =>{
        setForm({
            ...form,
            items:[...form.items,""]
        })
    }
    const removeItem = (item: any , i:any) =>{
        console.log('event', i)
        console.log('item', item)
        // const removePost = (post) => {
        //     setPosts(posts.filter(p => p.id !== post.id))
        // }
        const copyItems = form.items.splice(i,1)
        // const copyItems = form.items.filter(ite => ite !== item )
        // setForm({
        //     ...form,
        //     items: [...form.items.splice(i,1)]
        // })
        setForm({
            ...form,
            items: [...form.items.filter((ite,j) => ite !== i)]
        })
        console.log('form.items',form.items)
        console.log('copyItems',copyItems)
    }
    const handleItem = (e:any) =>{
        console.log('item target value', e.target.value)
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
                <Input key={i} placeholder={"enter Action"} action={true}
                       onClick={e => removeItem(item,i)}
                       onChange={e => handleItem(e)}
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