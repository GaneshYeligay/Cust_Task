import React, { Component } from 'react'
import Form from './Form.js'

class List extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('list') == null)
            localStorage.setItem('list', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('list'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        let list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        let list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('list', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (
            <div>
                <Form
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <hr />
                <table style={{ width: "100%" }}>
                    <tr style={{ color: "orange " }}>
                        <th>Item Name</th>
                        <th>Item Quantity</th>
                        <th>Item Price</th>
                        <th>Order No</th>

                    </tr>
                    <tbody style={{ width: "100%" }}>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.Iname}</td>
                                <td>{item.Iquan}</td>
                                <td>{item.Iprice}</td>
                                <td>{item.Ordno}</td>
                                <td><button onClick={() => this.handleEdit(index)} className="edtbtn">Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)} className="rmvbtn">Remove</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List