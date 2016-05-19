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
                        <button id="send" className="btn " type="submit"><img src="https://mail.google.com/mail/u/0/?ui=2&ik=06d9e46803&view=fimg&th=154cb021fdd509d7&attid=0.1.2&disp=emb&attbid=ANGjdJ_zH_zKGjbSMUrZYSv70ZprWdfoe-x-8odefsGEsRv2bWTwEATPlb4_REi_zvYw2mQC018qVbGcCR_jXr7etlEB5zPzIb8MEV5DUPWfs6LiAOyOsfBeZ9HAPD4&sz=w94-h68&ats=1463695150711&rm=154cb021fdd509d7&zw&atsh=1" /></button>

                </div>
                <button id="finish_it" type="button" className="btn " onClick={this.props.finishedSession}><img src="https://mail.google.com/mail/u/0/?ui=2&ik=06d9e46803&view=fimg&th=154cb021fdd509d7&attid=0.1.1&disp=emb&attbid=ANGjdJ-PX6eeluQRP7FRm_KHfOjz_snIf4HKIGx5J9GC7x_oaeONGTCetrm_QPrQg62WsKnAnSy5kDhkSk4LKx-0fM_3SoTZLI2BpXoPpanYSlX8ntTsMVeJe7nnoj4&sz=w80-h80&ats=1463695150711&rm=154cb021fdd509d7&zw&atsh=1" /></button>
            </form>
        )
    }
}
