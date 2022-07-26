import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

/**
 * ADDING SEARCH FILTER:
 * 
 * 1. PASS cb function "onItemFormSubmit" as prop {to add new "shopping Item" to old "item List"} from "App Component" to "ShoppingList Component"
 * 2. In "ShoppingList Component", save "search" to state, set value to ""
 * 3. In "shoppingList Component", include filter to show "search values"
 * 4. In "shoppingList Component", pass "search" "setsearch" "onItemFormSubmit" as prop to "Filter Component"
 * 
 * ADDING NEW ITEM:
 * 1. PASS cb function "onItemFormSubmit" as prop {to add new "shopping Item" to old "item List"} from "App Component" to "ShoppingList Component"
 * 2. in "itemForm component", save "new item", "newcategory" to state
 * 3. In "ItemForm Component", create functions to handle adding "new item" and "new category " on event
 * 4. In "ItemForm Component", "onSubmit", pass new items created(id, name, category) to "onItemFormSubmit" function- to be added to the items-list in the "App Component"
 */