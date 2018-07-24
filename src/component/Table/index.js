import React, {Component} from 'react'
import './index.css'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableBodyData: props.tableBodyData,
      tableHeadData: props.tableHeadData,
    }
  }

  render() {
    const {tableHeadData, tableBodyData} = this.state
    return (
      <table>
        {!!tableHeadData.length && <thead>
        <tr>{
          tableHeadData.map((tdItem) => {
            return <td>{tdItem}</td>
          })
        }</tr>
        </thead>}
        <tbody>
        {!!tableBodyData.length && tableBodyData.map((trItem) => {
          return <tr>{
            trItem.map((tdItem) => {
              return <td>{tdItem}</td>
            })
          }</tr>
        })
        }
        </tbody>
      </table>
    )
  }

}

export default Table