import ProductList from "../Components/ProductList"

function Products() {
    return (
        <div>
            <div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <span className="text-muted">Product</span>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <button className="btn btn-outline-dark">Create product</button>
                    </div>
                </div>
                <ProductList />
            </div>
        </div>
    )
}

export default Products
