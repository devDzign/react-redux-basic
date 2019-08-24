import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions'

import UserItem from '../components/UserItem'


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

                    this.props.myUsers.map( user => {
                        return <UserItem
                            user={user}
                            userSelected={this.props.onSelectedUser}
                            key={user.id}
                            selectedUser={(this.props.userSelected)?this.props.userSelected.id: null}
                        />
                    })
                }

                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        myUsers: state.myUsers,
        userSelected: state.userSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedUser: (user) => dispatch(actionCreators.userSelected(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);