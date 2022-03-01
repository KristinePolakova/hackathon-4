import { useState } from "react"
import getProducts from "./Data/getProducts"

function ProductList() {
    const [items, setItems] = useState(getProducts())

    const deleteItem = (productListIndex) => {
        items.splice(productListIndex, 1)
        setItems([...items])
    }
    const [startList, setStartList] = useState(0)

    const endList = startList + 5


    const moveLeft = () => {
        let nextSelected = startList - 5
        if (nextSelected < 0) {
            nextSelected = 0
        }
        setStartList(nextSelected)
    }
    const moveRight = () => {
        let nextSelected = startList + 5
        if (nextSelected > 20) {
            nextSelected = 20
        }
        setStartList(nextSelected)
    }
    const changePageOne = () => {
        setStartList(0)
    }
    const changePageTwo = () => {
        setStartList(5)
    }
    const changePageThree = () => {
        setStartList(10)
    }
    const changePageFour = () => {
        setStartList(15)
    }
    const changePageFive = () => {
        setStartList(20)
    }
    const listItems = items.slice(startList, endList).map((item, id) => {
        let itemDiscount = item.price - (item.price * .5)

        return (
            <tr key={item.title}>
                <th scope="row"><img src={item.image} className="img-thumbnail" style={{ width: 100 }} alt="..." /></th>
                <td className="align-middle text-justify">{item.id}</td>
                <td className="align-middle text-justify">{item.title}</td>
                <td className="align-middle text-justify">{item.description}</td>
                <td className="align-middle text-center">{item.price}eur</td>
                <td className="align-middle text-center">{itemDiscount.toFixed(2)}eur</td>
                <td className="align-middle text-center">
                    <div className="d-flex">
                        <button type="button" className="btn btn-outline-dark" style={{ margin: '5px' }}>Edit</button>
                        <button className="btn btn-outline-dark" style={{ margin: '5px' }} onClick={() => deleteItem(id)}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <div>
                <table className="table border my-3 table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="align-middle text-center">Image</th>
                            <th scope="col" className="align-middle text-center">ID</th>
                            <th scope="col" className="align-middle text-left">Title</th>
                            <th scope="col" className="align-middle text-left">Description</th>
                            <th scope="col" className="align-middle text-center">Price</th>
                            <th scope="col" className="align-middle text-center">Discount price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
            <div className="btn-group float-end" role="group" aria-label="Basic outlined example">
                <button onClick={() => moveLeft(startList)} type="button" className="btn btn-outline-secondary">‹</button>
                <button onClick={() => changePageOne(startList)} type="button" className="btn btn-outline-secondary">1</button>
                <button onClick={() => changePageTwo(startList)} type="button" className="btn btn-outline-secondary">2</button>
                <button onClick={() => changePageThree(startList)} type="button" className="btn btn-outline-secondary">3</button>
                <button onClick={() => changePageFour(startList)} type="button" className="btn btn-outline-secondary">4</button>
                <button onClick={() => changePageFive(startList)} type="button" className="btn btn-outline-secondary">5</button>
                <button onClick={() => moveRight(startList)} type="button" className="btn btn-outline-secondary">›</button>
            </div>
        </div>
    )
}

export default ProductList