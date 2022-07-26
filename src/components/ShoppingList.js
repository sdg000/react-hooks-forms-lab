import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

//STEP 2: saving variables to state
function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search, setSearch] = useState("")
  

  //function to handle category change selection
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  //changes items displayed based on; category selection, or search value input
  const itemsToDisplay = items
  //display items based on Category
   .filter((item) => {if (selectedCategory === "All") return true; else return item.category === selectedCategory;})
   
   //STEP 4. display items based on search
   .filter((item) => {if (search === "") return true; else return item.name.includes(search)}); 
  
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
