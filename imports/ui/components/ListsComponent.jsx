import React from 'react';
import {Link} from 'react-router';
import CreateListPage from '../pages/CreateListPage.jsx';
export const ListsComponent = (props)=>{
    const  lists = props.lists.map((list)=>{
        return(
            <div key={list._id} className="col-md-4">
                <Link to={`/lists/${list._id}`}>{list.title}</Link>
            </div>
        )
    });
    return(
        <div>
            <h3 className="text-center">All My Lists</h3>
            <div className="row">
                {lists}
            </div>
            <CreateListPage />
        </div>
    )

};