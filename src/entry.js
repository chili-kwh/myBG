/**
 * Created by Liqi on 17/3/15.
 */
"use strict";


import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./scss/index.scss"
import "./tool"

import {Test} from "./page/reactTest"
import {PageRoot} from "./js/app.js"
import {isDebugServer} from "./tool/function/index";
import {Router, Route, hashHistory, browserHistory} from "react-router";
import * as allPages from "./page"
import {AnimationExample} from "./route";





ReactDOM.render(
    // <PageRoot />,
    <AnimationExample />,
    // <Router history={browserHistory}>
    //     <Route path="/" component={allPages.Test}/>
    // </Router>,
    document.getElementById("root")
);