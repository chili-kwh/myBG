/**
 * Created by Liqi on 17/3/27.
 */
"use strict";


import React from "react";
// import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'


import * as allPages from "../page"


class PageRoot extends React.Component {
    render() {
        return (
            <div>就看个人活动</div>
        )
        // return (
        //     <BrowserRouter>
        //         <div>
        //             {/*<Route path="/" component={allPages.Test}>*/}
        //             撒割发代首
        //             <Route path="/">
        //
        //                 <Route path="/route" component={allPages.Test2}/>
        //             </Route>
        //         </div>
        //     </BrowserRouter>
        // )
    }
}

export {
    PageRoot
}