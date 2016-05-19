import React from 'react';

export const ListForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="col-md-4 zeroPadding">
                    <input type="text" className="form-control"
                           placeholder="Enter your list title" value={props.title}  onChange={props.handleTitle}/>
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-primary largerBtn">Add</button>
                </div>
            </div>
        </form>
    )
};