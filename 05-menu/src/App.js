import items from "./data";
import {useState} from "react";
import Categories from "./Categories";
import Menu from "./Menu";


const allCatogories = ["all", ...new Set(items.map((item) => item.category))] 
//! aynı catogory leri tekrardan yazmasın diye küme işlemi yaptık

// const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
// console.log([...new Set(numbers)]) 
// [2, 3, 4, 5, 6, 7, 32]

function App() {
const [categories, setCategories] = useState(allCatogories);
const [menuItems, setMenuItems] = useState(items)

const filterItems = (category) => {
  if(category === "all") {
    setMenuItems(items);
    return;
  };
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems)
}


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  );
}

export default App;
