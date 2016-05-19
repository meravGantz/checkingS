import React from 'react';
import MsgContainer from '../containers/msgContainer.jsx';
import ProcessPage from '../containers/processesContainer.jsx';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="operatorBoard">
                <div className="msgBoard">
                    <MsgContainer />
                </div>
                <div className="processBoard">
                    <ProcessPage />
                </div>
            </div>
        )
    }
}

