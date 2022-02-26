import { useState } from "react"
import CategoriesRow from "./CategoriesRow"
import getCategories from "./Data/getCategories"
function CategoriesTable() {
  const [items, setItems] = useState(getCategories())
  const [filterList, setFilterList] = useState("")

  // const listItems = carList.map((car) => <li key={car.toString()}>{car}</li>);

  const deleteItem = (itemIndex) => {
    items.splice(itemIndex, 1)
    setItems([...items])
  }
  const tableItems = items.map((item, id, title, description, index) => {
    return (
      <CategoriesRow
        key={id}
        item={item}
        id={id}
        title={title}
        description={description}
        deleteItem={deleteItem}
        index={index}
      />
    )
  })
  
  const findName = (event) => {
    if (event.target.value === "") {
      setFilterList(tableItems)
      return
    }
    const filteredValues = tableItems.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )
    setFilterList(filteredValues)
  }
  return (
    <div>
      <div>
        <div className="row my-3">
          <div className="col-md-6">
            <span className="text-muted">Categories</span>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className="btn btn-outline-dark">Create category</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end">
          <span className="p-2 mx-2">Search</span>
          <input type="text" onChange={findName}></input>
          {filterList && filterList.map((item) => <div>{item}</div>)}
        </div>
      </div>
      <div>
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{tableItems}</tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoriesTable
