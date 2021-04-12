import React, { Component } from 'react'

class Form extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                Iname: '',
                Iquan: '',
                Iprice: '',
                Ordno: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    resetForm = () => {
        this.setState({
            ...this.state,
            Iname: '',
            Iquan: '',
            Iprice: '',
            Ordno: ''
        })
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit} autoComplete="off">
                <div>
                    <h2>Add Items</h2>
                </div>
                <div className="fOne">
                    <div className="fRight">
                        <label>Item Name</label><br></br>
                        < input name="Iname" onChange={this.handleInputChange} value={this.state.Iname} /><br />
                        <label>Item Quantity</label><br></br>
                        < input name="Iquan" onChange={this.handleInputChange} value={this.state.Iquan} /><br />
                    </div>
                    <div className="fLeft">
                        <label>Item Price</label><br></br>
                        < input name="Iprice" onChange={this.handleInputChange} value={this.state.Iprice} /><br />
                        <label>OrderNo</label><br></br>
                        < input name="Ordno" onChange={this.handleInputChange} value={this.state.Ordno} /><br /><br />
                    </div>
                </div>
                <button type="submit" className="btnsub">Submit</button>
                <button type="reset" className="btnrst" onClick={this.resetForm}>Reset</button>
            </form>
        )
    }
}

export default Form