import { useState } from "react"
import getOrders from "../Components/Data/getOrders"

function OrdersSearch() {
  const [items] = useState(getOrders())
  const [searchTerm, setSearchTerm] = useState("")

  const filterList = items
    .filter((val) => {
      if (searchTerm === "") {
        return false
      } else if (
        val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.street
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      ) {
        return val
      }
      return false
    })

    .map((val, key) => {
      return (
        <table
          key={key}
          className="table border my-3"
          style={{ color: "green" }}
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Customer</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">VAT %</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{val.id}</th>
              <td>{val.name} {val.street} {val.city} {val.postcode} {val.country}</td>
              <td>{val.quantity}</td>
              <td>{val.price}</td>
              <td>{val.currency}</td>
              <td>{val.status}</td>
              <td>
                <button className="btn btn-outline-dark">Edit</button>
              </td>
              <td>
                <button className="btn btn-outline-dark">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      )
    })
  return (
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
      <div>{filterList}</div>
    </div>
  )
}

export default OrdersSearch
