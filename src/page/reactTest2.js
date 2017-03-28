/**
 * Created by Liqi on 17/3/16.
 */
"use strict";

import React from "react";
import content from "../content.json";

class Test2 extends React.Component {

    pushMe(...args) {
        console.log(...args);
        console.log(args);
    }

    render() {
        return (
            <div>
                <div className="test">{content.greetText}富dd商大</div>
                <div className="testPic"
                    onClick={()=>{
                        this.pushMe({}, {s:4, r:4})
                    }}
                >
                    人啊
                </div>
            </div>
        )
    }


}

export {
    Test2
}

