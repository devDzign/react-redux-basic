import React, {Component} from 'react';
import UserList from './UserList'
import UserDetail from './UserDetail'

class App extends Component {

    render() {
        return (
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-md-7 shadow-lg p-3 mb-5 bg-white rounded mr-4 ml-4">
                          <UserList/>
                        </div>

                        <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                           <UserDetail/>
                        </div>

                    </div>
                </div>
        );
    }
}

export default App;
