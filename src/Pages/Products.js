import ProductsSearch from "../Components/ProductsSearch"
import ProductList from "../Components/ProductList"


function Products() {
    return (
        <div>
            <div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <span className="text-muted">Products</span>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <button className="btn btn-outline-dark">Create product</button>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '40px' }}>
                <ProductsSearch />
            </div>
            <div>
                <ProductList />
            </div>
        </div>
    )
}

export default Products
