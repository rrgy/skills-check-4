import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { actionBuilder } from '../ducks/reducer'

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
        axios.post('/auth/register', { username: this.state.username, password: this.state.password })
            .then(
                this.setState({ username: '', password: '' }),
                this.props.history.push('/dashboard')
            )
            .catch(err => console.log(err))
        this.props.actionBuilder()
    }
    login() {
        axios.post('/auth/login', { username: this.state.username, password: this.state.password }).then(
            this.setState({ username: '', password: '' }),
            this.props.history.push('/dashboard')
        )
        this.props.actionBuilder()
    }
    render() {
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

export default connect(null, { actionBuilder })(Auth)