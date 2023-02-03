import { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      showAlert(true, "danger", "please enter value")
    }
    else {
      showAlert(true, "success", 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
    }
    setName('')
  }


  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({show, type, msg})
  }


  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };


  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  }


  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit} >
      {alert.show && <Alert {...alert}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      <div className='grocery-container'>
          <List items={list}  />
          <button className='clear-btn' onClick={clearList} >
            clear items
          </button>
        </div>
    </section>
  );
}

export default App;
