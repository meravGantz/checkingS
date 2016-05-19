import React from 'react';
import {Link} from 'react-router';
export const  NavigationBar  = ()=>{
    return(
        <header>
            <h1 className="pull-left" ><Link id="customLink" to={`/`}>Ugly Todos</Link></h1>
            <div className="pull-right">
                <Link to={`/lists/create`}>Create List</Link>
                |
                <Link  to={`/lists`}>Lists</Link>
            </div>
        </header>
    )
};