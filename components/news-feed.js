import React from 'react';
import LoginForm from './login-form';
import Nav from './nav';
let e = React.createElement;
export default class NewsFeed extends React.Component {
    render(){
        return(
            <div className="card w-100">
            <div className="card-header bg-warning text-white">
                <Nav/>
            </div>
            <div className="card-body" className='Body'>
            <LoginForm/>
            </div>
        </div>

        );
    }
}