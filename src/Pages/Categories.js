import CategoriesSearch from "../Components/CategoriesSearch"
import CategoriesTable from "../Components/CategoriesTable"

function Categories() {
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
      <CategoriesSearch />
      <div>
        <CategoriesTable />
      </div>
    </div>
  )
}

export default Categories
