/**
 * Created by Liqi on 17/3/16.
 */
"use strict";

import React from "react";
import content from "../content.json";

class Test extends React.Component {
    render() {
        return (
            <div>
                <div className="test">{content.greetText}富商大</div>
                <div className="testPic">efarfcdsadsfewfdsaffsfdsadsfa</div>
            </div>
        )
    }
}

export {
    Test
}

