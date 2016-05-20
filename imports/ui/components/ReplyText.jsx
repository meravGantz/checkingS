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
                        <button id="send" className="btn " type="submit"><img src="img/send.png" /></button>

                </div>
                <button id="finish_it" type="button" className="btn " onClick={this.props.finishedSession}><img src="img/finished.png" /></button>
            </form>
        )
    }
}
