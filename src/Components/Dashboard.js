import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            checkbox: true,
            posts: []
        }
    }
    handleInput(e) {
        this.setState({ input: e.target.value })
    }
    handleMyPosts() {
        this.setState({ checkbox: false })
    }
    render() {
        const post = this.state.posts.map((element) => {
            return <div>{element}</div>
        })
        console.log(this.props.userId)
        return (
            <div>Dashboard
                <div>
                    <input onChange={(e) => this.handleInput(e)}></input>
                    <button>Search</button>
                    <button>Reset</button>
                    <input type='checkbox' onChange={() => this.handleMyPosts()}></input>
                    <label>My Posts</label>
                </div>
                <div>
                    {post}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.id
    }
}

export default connect(mapStateToProps)(Dashboard)