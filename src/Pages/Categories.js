import CategoriesTable from "../Components/CategoriesTable"
import { useState } from "react"
import getCategories from "../Components/Data/getCategories"
import CategoriesRow from "../Components/CategoriesRow"

function Categories() {
  const [items] = useState(getCategories())
  const [searchTerm, setSearchTerm] = useState("")

  const filterItems = items
    .filter((item) => {
      if (searchTerm === "") {
        return false
      } else if (
        item.title
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        item.description
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      ) {
        return true
      }
      return false
    })
    .map((item, id, title, description, index) => {
      return (
        <>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style={{ color: "green" }}>
            <CategoriesRow
            key={title}
              item={item}
              id={id}
              title={title}
              description={description}
              index={index}
            />
          </tbody>
        </>
      )
    })

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
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value)
            }}
          ></input>
        </div>
      </div>
      <table className="table border my-3">{filterItems}</table>
      <div>
        <CategoriesTable />
      </div>
    </div>
  )
}

export default Categories
