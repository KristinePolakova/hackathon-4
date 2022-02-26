import { useState } from "react"
import CategoriesRow from "./CategoriesRow"
import getCategories from "./Data/getCategories"
function CategoriesTable() {
  const [items, setItems] = useState(getCategories())

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

  return (
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
  )
}

export default CategoriesTable
