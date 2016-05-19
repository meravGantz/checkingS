import React from 'react';
export default class ReplyText extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="row">
                    <div className="col-md-8">
                        <textarea className="form-control" type="text" onChange={this.props.handleText} />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </form>
        )
    }
}