import React from 'react'

const Table = props => {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody cd={characterData} rc={removeCharacter} />
    </table>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>ID</th>
      </tr>
    </thead>
  )
}

const TableBody = p => {
  const rows = p.cd.map((row) => {
    return (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row._id}</td>
        <td>
            <button onClick={() => p.rc(row._id)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default Table
