function ProductLine(props) {

  const { item, deleteItem, index } = props
  let itemDiscount = item.price - (item.price * .5)

  return (
    <tr>
      <th scope="row"><img src={item.image} className="img-thumbnail" style={{ width: 100 }} alt="..." /></th>
      <td className="align-middle text-justify">{item.id}</td>
      <td className="align-middle text-justify">{item.title}</td>
      <td className="align-middle text-justify">{item.description}</td>
      <td className="align-middle text-center">{item.price}eur</td>
      <td className="align-middle text-center">{itemDiscount}eur</td>
      <td className="align-middle text-center">
        <div className="d-flex">
          <button type="button" className="btn btn-outline-dark" style={{ margin: '5px' }}>Edit</button>
          <button onClick={() => deleteItem(index)} type="button" className="btn btn-outline-dark" style={{ margin: '5px' }}>Delete</button>
        </div>
      </td>
    </tr>
  )
}

export default ProductLine