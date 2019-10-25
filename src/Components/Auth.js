import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    register() {
        axios.post('/auth/register', { username: this.state.username, password: this.state.password }).then(res => {
            this.setState({ email: '', password: '' })
            this.props.history.push('/dashboard')
        })
    }
    login() {
        axios.post('/auth/login', { username: this.state.username, password: this.state.password }).then(res => {
            this.setState({ email: '', password: '' })
            this.props.history.push('/dashboard')
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div>Auth
                <input
                    value={this.state.username}
                    name='username'
                    onChange={(e) => this.handleInput(e)}
                    placeholder='username'></input>
                <input
                    value={this.state.password}
                    name='password'
                    onChange={(e) => this.handleInput(e)}
                    placeholder='password'></input>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
    }
}

export default Auth