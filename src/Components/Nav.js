import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends Component {
    render() {
        const username = this.props.username
        const picture = this.props.picture
        return (
            <div>Nav
                {picture}
                {username}
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div >
        )
    }
}



const mapStateToProps = state => {
    const { username, picture } = state
    return {
        username, picture
    }
}
export default connect(mapStateToProps)(Nav)