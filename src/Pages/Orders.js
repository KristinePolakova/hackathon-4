import { useState } from "react"
import '../Components/Orders.css'
import Badge from 'react-bootstrap/Badge'
import getOrders from "../Components/Data/getOrders"

function Orders() {

    const vat = 21;
    const initialData = getOrders();

    const [data, setData] = useState(initialData)
    const [searchResults, setSearchResults] = useState(initialData);
    const [searchCriteria, setSearchCriteria] = useState('');


    function onDelete(order) {
        let filter = data.filter(index => index.id != order.id);
        setData(filter);
        runSearch(searchCriteria);
    }

    function runSearch(value) {
       
       value = value.toLowerCase();

       if (value=='')
       {
            setSearchResults(data);
       }
       else
       {
            setSearchResults(data.filter(element=>element.name.toLowerCase().includes(value) || element.street.toLowerCase().includes(value) ));
       }
       setSearchCriteria(value);
    }

    function drawStatusBox(row) {
        if (row.status === 'completed') {
            return <Badge className="bg-success">Completed</Badge>
        } else if (row.status === 'pending') {
            return <Badge className="bg-warning">Pending</Badge>
        } else if (row.status === 'cancelled') {
            return <Badge className="bg-danger">Cancelled</Badge>
        }
    }

    return (
        <div>
            <div className="row row my-3">
                <div className="col-md-6">
                    <span className="text-muted top-style">Orders</span>
                </div>
            </div>
            <Search runSearch={runSearch} />
            <table className="borderStyle tableStyle">
                <thead>
                    <tr>
                        <th className="rowStyle">ID</th>
                        <th className="rowStyle">Customer</th>
                        <th className="rowStyle">Quantity</th>
                        <th className="rowStyle">Price</th>
                        <th className="rowStyle">VAT %</th>
                        <th className="rowStyle">Total</th>
                        <th className="rowStyle">Status</th>
                    </tr>
                </thead>
                <tbody className="borderStyle">
                    {
                        searchResults.map((row) => (
                            <tr className="borderStyle" key={row.id}>
                                <td className="rowStyle">{row.id}</td>
                                <td className="rowStyle"><strong>{row.name}</strong><br />
                                    {row.street}<br />
                                    {row.city}<br />
                                    {row.postcode}<br />
                                    {row.country}<br />
                                </td>
                                <td className="rowStyle">{row.quantity}</td>
                                <td className="rowStyle">{row.price.toFixed(2)} {row.currency}</td>
                                <td className="rowStyle">{vat} %</td>
                                <td className="rowStyle">{(row.price * row.quantity + (vat * row.price * row.quantity) / 100).toFixed(2)} {row.currency}</td>
                                <td className="rowStyle">
                                    <h4> {drawStatusBox(row)} </h4>
                                </td>
                                <td className="rowStyle"><button className="btn outline-dark">EDIT</button></td>
                                <td className="rowStyle"><button className="btn btn-dark" onClick={() => onDelete(row)}>DELETE</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Orders