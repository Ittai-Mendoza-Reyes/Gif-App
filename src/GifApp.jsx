import { useState } from "react"
import { AddCategory, GifGrid } from "../src/components";

export const GifApp = () => {

  const [categories, setCategories] = useState(['Jujutsu Kaisen']);
  const onAddCategory = (NewCategory) => {
    if(categories.includes(NewCategory) ) return;

    setCategories([NewCategory, ...categories]);
  }

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

        {categories.map(category => 
          <GifGrid 
            key={category} 
            category={category}
          />
        )}
    </>
  )
}