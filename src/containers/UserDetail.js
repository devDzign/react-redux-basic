import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        const selectedUser = this.props.selectedUser;

        if(!selectedUser){
            return <h2>Selectionnez un utilisateur</h2>
        }

        return (

               <ul className="list-group">
                   <li className="list-group-item d-flex justify-content-between align-items-center">
                       id :
                       <span className="badge badge-primary badge-pill">{selectedUser.id}</span>
                   </li>
                   <li className="list-group-item d-flex justify-content-between align-items-center">
                       name :
                       <span className="badge badge-primary badge-pill">{selectedUser.name}</span>
                   </li>
                   <li className="list-group-item d-flex justify-content-between align-items-center">
                      role :
                       <span className="badge badge-primary badge-pill">{selectedUser.role}</span>
                   </li>
                   <li className="list-group-item d-flex justify-content-between align-items-center">
                       Active :
                       <span className="badge badge-primary badge-pill">{selectedUser.active}</span>
                   </li>

               </ul>
        );
    }

}

const mapStateToProps = state => {
    return {
        selectedUser: state.userSelected
    }
}


export default connect(mapStateToProps)(UserDetail);