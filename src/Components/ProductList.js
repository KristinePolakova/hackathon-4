import { useState } from "react"
import ProductLine from "./ProductLine"
import getProducts from "./Data/getProducts"

function ProductList() {
    const [items, setItems] = useState(getProducts())

    const deleteItem = (itemIndex) => {
        items.splice(itemIndex, 1)
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
    const itemsList = items.slice(startList, endList).map((item, image, id, title, description, price, itemDiscount, index) => {

        return (
            <ProductLine
                key={image}
                item={item}
                src={image}
                id={id}
                title={title}
                description={description}
                price={price}
                itemDiscount={itemDiscount}
                deleteItem={deleteItem}
                index={index}
            />
        )
    })

    return (
        <div>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="align-middle text-center">Image</th>
                            <th scope="col" className="align-middle text-center">ID</th>
                            <th scope="col" className="align-middle text-left">Title</th>
                            <th scope="col" className="align-middle text-left">Description</th>
                            <th scope="col" className="align-middle text-center">Price</th>
                            <th scope="col" className="align-middle text-center">Discount price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsList}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col">
                        <div className="btn-group float-end" role="group" aria-label="Basic outlined example">
                            <button onClick={() => moveLeft(startList)} type="button" class="btn btn-outline-secondary">«</button>
                            <button onClick={() => changePageOne(startList)} type="button" class="btn btn-outline-secondary">1</button>
                            <button onClick={() => changePageTwo(startList)} type="button" class="btn btn-outline-secondary">2</button>
                            <button onClick={() => changePageThree(startList)} type="button" class="btn btn-outline-secondary">3</button>
                            <button onClick={() => changePageFour(startList)} type="button" class="btn btn-outline-secondary">4</button>
                            <button onClick={() => changePageFive(startList)} type="button" class="btn btn-outline-secondary">5</button>
                            <button onClick={() => moveRight(startList)} type="button" class="btn btn-outline-secondary">»</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList