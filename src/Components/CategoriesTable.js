import { useState } from "react"
import getCategories from "./Data/getCategories"

function CategoriesTable() {
  const [items, setItems] = useState(getCategories())

  const deleteItem = (categoriesTableIndex) => {
    items.splice(categoriesTableIndex, 1)
    setItems([...items])
  }

  const tableItems = items.map((item, id) => {
    return (
      <tr key={item.title}>
        <th scope="row">{item.id}</th>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>
          <button className="btn btn-outline-dark">Edit</button>
        </td>
        <td>
          <button
            className="btn btn-outline-dark"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <div>
        <table className="table border my-3">
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
