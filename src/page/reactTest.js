/**
 * Created by Liqi on 17/3/16.
 */
"use strict";

import React from "react";
import content from "../content.json";

class Test extends React.Component {

    pushMe(...args) {
        console.log(...args);
        console.log(args);
    }

    render() {
        return (
            <div>
                {/*{this.props.children}*/}
                <a href="./route">link</a>
                <div className="test">{content.greetText}富dd商大</div>
                <div className="testPic"
                    onClick={()=>{
                        this.pushMe({}, {s:4, r:4})
                    }}
                >
                    efarfcdsfdddewfdsaffsfdsadsfa
                    快给他喝{
                    content.greetText}
                </div>
            </div>
        )
    }


}

export {
    Test
}

