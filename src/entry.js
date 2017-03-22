/**
 * Created by Liqi on 17/3/15.
 */
"use strict";



import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./scss/index.scss"
import "./tool"

import {Test} from "./js/reactTest"
import {isDebugServer} from "./tool/function/index";





ReactDOM.render(
    <Test />,
    document.getElementById("root")
);