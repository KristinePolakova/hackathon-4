// import { useState } from "react"
import CategoriesTable from "../Components/CategoriesTable"

function Categories(props) {
    // const [filterList, setFilterList] = useState("")
    // const {tableItems} = props
    // // const listItems = carList.map((car) => <li key={car.toString()}>{car}</li>);
    // const findName = (event) => {
    //     if (event.target.value === "") {
    //       setFilterList(tableItems);
    //       return;
    //     }
    //     const filteredValues = tableItems.filter(
    //       (item) =>
    //         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    //     );
    //     setFilterList(filteredValues);
    //   };
  return (
    <div>
      {/* <div>
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
        <div className="col-md-12 d-flex justify-content-end"><span className="p-2 mx-2">Search</span>
          <input type="text" onChange={findName}></input>
          {filterList &&
            filterList.map((item) => (
              <div>{item}</div>
            ))}
        </div>
      </div> */}
      <div>
        <CategoriesTable />
      </div>
    </div>
  )
}

export default Categories
