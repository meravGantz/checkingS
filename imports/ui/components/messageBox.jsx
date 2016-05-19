import React from 'react';

export const MessageBox = (props)=>{
    let message;
    if (props.isUser) {
        message = "message2";
    } else {
        message = "message1";
    }

    return(
        <div className="row">
            <div id={message} >
                {props.text}
            </div>
        </div>
    )
};
