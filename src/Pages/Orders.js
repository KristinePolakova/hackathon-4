import { useState } from "react"
import '../Components/Orders.css'
import Badge from 'react-bootstrap/Badge'
import getOrders from "../Components/Data/getOrders"
import OrdersSearch from "../Components/OrdersSearch";
import Pagination from "../Components/Pagination";

function Orders() {

    const vat = 21;
    const initialData = getOrders();

    const [data, setData] = useState(initialData)

    function onDelete(order) {
        let filter = data.filter(index => index.id != order.id);
        setData(filter);
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
            <div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <span className="text-muted">Orders</span>
                    </div>
                </div>
                <OrdersSearch />
            </div>

            <table className="table border my-3">
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
                <tbody>
                    {
                        data.map((row) => (
                            <tr key={row.id}>
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
                                    <h5> {drawStatusBox(row)} </h5>
                                </td>
                                <td className="rowStyle"><button className="btn btn-outline-dark">EDIT</button></td>
                                <td className="rowStyle"><button className="btn btn-outline-dark" onClick={() => onDelete(row)}>DELETE</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <Pagination />
            </div>
        </div>
    )
}


export default Orders