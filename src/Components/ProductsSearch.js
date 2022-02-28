import { useState } from "react"
import getProducts from "../Components/Data/getProducts"

function ProductsSearch() {
    const [items] = useState(getProducts())
    const [searchTerm, setSearchTerm] = useState("")

    const filterList = items
        .filter((val) => {
            if (searchTerm === "") {
                return false
            } else if (
                val.title.toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                val.description
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
                            <th scope="col" className="align-middle text-center">Image</th>
                            <th scope="col" className="align-middle text-center">ID</th>
                            <th scope="col" className="align-middle text-center">Title</th>
                            <th scope="col" className="align-middle text-center">Description</th>
                            <th scope="col" className="align-middle text-center">Price</th>
                            <th scope="col" className="align-middle text-center">Discount price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{val.id}</th>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.price}</td>
                            <td>{val.id}</td>
                            <td>{val.itemDiscount}</td>
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

export default ProductsSearch
