import React, { Component } from 'react'

class Table extends Component {
  render() {
     const {characterData} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody cd={characterData} />
      </table>
    )
  }
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
  const rows = p.cd.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default Table
