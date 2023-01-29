import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Ponch'])

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        // categories.push(newCategory);
        //Valorant

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

        // setCategories( cat => [ ...cat, 'valorant']);
        // let copia = [...categories]
        // copia.push('prueba')
        // setCategories(copia)
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
            categories.map((category) => (
                <GifGrid key={ category } category={ category }/>
            ))
            }
                {/*<li>ABC</li>*/}
        </>
    )
}

export default GifExpertApp