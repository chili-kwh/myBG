/**
 * Created by Liqi on 17/3/22.
 */
"use strict";

function isDebugServer(){
    return process.env.NODE_ENV === "development"
}

export {
    isDebugServer
}