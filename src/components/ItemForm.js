import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")


  //function to add new item
  function addNewItemName(e){
    setNewItemName(e.target.value)
  }

  //function to add new item category
  function addNewItemCategory(e){
    setNewItemCategory(e.target.value)
  }

  /**
   * 
   * @param {*} e 
   */
  function submitItem(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: newItemName,
      category: newItemCategory,
    })
  }


  

  return (
    <form className="NewItem" onSubmit={submitItem}>
      <label>
        Name: 
        <input type="text" name="name" value={newItemName} onChange={addNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={addNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
