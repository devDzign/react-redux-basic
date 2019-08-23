import React, {Component} from 'react';

class UserList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.myusers.map(user => {
                        return <tr className="table-default" key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                        </tr>
                    })
                }

                </tbody>
            </table>
        );
    }
}

export default UserList;