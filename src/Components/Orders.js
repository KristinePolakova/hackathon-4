import { useState } from "react"
import '../Components/Orders.css'


function Orders() {

    const vat = 21;
    const initialData =
        [
            {
                id: 1,
                name: 'John Doe',
                street: '52 Green Lane',
                city: 'HUDDERSFIELD',
                postcode: 'HD24 1FO52',
                country: 'United Kingdom',
                quantity: 10,
                price: 17.00,
                currency: 'EUR',
                status: 'pending'
            },
            {
                id: 2,
                name: 'Ann McDoe',
                street: '80 Park Lane',
                city: 'TRURO',
                postcode: 'TR28 2WB',
                country: 'United Kingdom',
                quantity: 5,
                price: 45.00,
                currency: 'EUR',
                status: 'completed'
            },
            {
                id: 3,
                name: 'Jane Smith',
                street: '88 North Road',
                city: 'WOLVERHAMPTON',
                postcode: 'WV39 8OK',                
                country: 'United Kingdom',
                quantity: 3,
                price: 12.00,
                currency: 'EUR',
                status: 'cancelled'
            },
            {
                id: 4,
                name: 'Connor McKenzie',
                street: '37 North Street',
                city: 'LERWICK',
                postcode: 'ZE80 3SW',
                country: 'United Kingdom',
                quantity: 1,
                price: 115.00,
                currency: 'EUR',
                status: 'completed'
            },
            {
                id: 5,
                name: 'Elizabeth Tailor',
                street: '9942 Mill Lane',
                city: 'NOTTINGHAM',
                postcode: 'NG78 5ED',
                country: 'United Kingdom',
                quantity: 7,
                price: 27.00,
                currency: 'EUR',
                status: 'pending'
            },
        ]

    const [data, setData] = useState(initialData)


    function onDelete(order) {
        let filter = data.filter(index => index.id != order.id);
        setData(filter);
    }

    // function changeStatus() {
    //     if (initialData.status === 'completed') {
    //         <badge className="bg-success">Completed</badge>
    //     } else if (initialData.status === 'pending') {
    //         <badge className="bg-warning">Pending</badge>
    //     } else if (initialData.status === 'cancelled') {
    //         <badge className="bg-danger">Cancelled</badge>
    //     }
    // }


    return (
        <div>
            <table className="borderStyle">
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
                        data.map((row) => (
                            <tr className="borderStyle" key={row.id}>
                                <td className="rowStyle">{row.id}</td>
                                <td className="rowStyle"><strong>{row.name}</strong><br />
                                    {row.street}<br />
                                    {row.city}<br />
                                    {row.postcode}<br />
                                    {row.country}<br />
                                </td>
                                <td className="rowStyle">{row.quantity}</td>
                                <td className="rowStyle">{row.price} {row.currency}</td>
                                <td className="rowStyle">{vat} %</td>
                                <td className="rowStyle">{row.price * row.quantity + (vat * row.price * row.quantity) / 100} {row.currency}</td>
                                <td className="rowStyle">
                                    <badge>{row.status}</badge>
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