import { useState } from 'react'
import { AddCategoty, GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'Dragon Ball']);
    
    const onAddCategory = (categorie) => {
        if (categories.includes(categorie)) { return; }
        setCategories([categorie, ...categories]);
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategoty 
                onNewCategory =   { onAddCategory }
            />

            {
                categories.map(c =>  (
                    <GifGrid key= {c} category = { c }/>
                ))
            }
        </>
    )
}
