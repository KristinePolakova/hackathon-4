function CategoriesRow(props) {
  const { item, deleteItem, index } = props

  return (
    <>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default CategoriesRow
