import React from 'react'

export default class Monitor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: ''
        }
    }
    setValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    showValue() {
        alert("Xin chao, " + this.state.email)
    }
    render() {
        return(
            <>
            <form action="" onSubmit={()=> this.showValue()}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={(e)=>this.setValue(e)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="pass" id="password" placeholder="Password" onChange={(e) => this.setValue(e)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="container">
                <h1>Hello, {this.state.email}</h1>
            </div>
            </>
        );
    }
}