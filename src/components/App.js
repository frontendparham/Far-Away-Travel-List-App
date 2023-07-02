import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function App() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState("light");
  const mySwal = withReactContent(Swal);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    items.length >= 1 &&
      mySwal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#509af8",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete all!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            setItems([]);
          }
        });

    // const confirmed =
    //   items.length >= 1 &&
    //   window.confirm("Are you sure you want to delete all the items?");

    // confirmed && setItems([]);
  }

  useEffect(() => {
    document.body.className = `theme--${theme}`;
  }, [theme]);

  return (
    <div className={`app theme--${theme}`}>
      <div className="app__sidebar">
        <SideBar theme={theme} setTheme={setTheme} />
      </div>
      <div className="app__main">
        <Header />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onPackItem={handlePackItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}
