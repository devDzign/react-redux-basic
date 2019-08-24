import React, {Component} from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">role</th>
                    <th scope="col">active</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.myUser.map( user => {
                        return <tr className="table-default" key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.active}</td>
                        </tr>
                    })
                }

                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        myUser: state.users
    }
}

export default connect(mapStateToProps)(UserList);