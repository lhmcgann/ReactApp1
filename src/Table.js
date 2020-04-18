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
      </tr>
    </thead>
  )
}

const TableBody = p => {
  const rows = p.cd.map((row) => {
     // TODO: remove console logs once tested! issue: can't remove POSTed chars
     //  bc App doesn't get POSTed data from backend --> no id for new ppl
     console.log(row);
     console.log(row.id);
    return (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
            <button onClick={() => p.rc(row.id)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default Table
