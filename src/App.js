import React from 'react'
import JobApply from './component/JobApply/JobApply'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import AdminDashboard from './component/Admin/AdminDashboard'

function App(){
    return(
        <BrowserRouter>
            <div>
                {/* <Link to = '/'>Home</Link>-
                <Link to =  '/users'>Users</Link>-
                <Link to = '/posts'>Posts</Link> */}

                <Route path = '/' component = {JobApply} exact = { true }/>
                <Route path = '/job-apply' component = { JobApply }  exact= { true } />
                <Route path = '/admin' component = { AdminDashboard } exact={ true } />

                
            </div>
        </BrowserRouter>
      
    )
}

export default App