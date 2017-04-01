/**
 * Created by Liqi on 17/3/30.
 */
"use strict";

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

const AnimationExample = () => (
    <BrowserRouter>
        <Route
            // path="/dsg/:uid"
            //component={test2}
            render={({ location }) => {
        console.log("location");
        console.log(location);
        return (

                    <div style={styles.fill}>
                        <Route exact path="/" render={() => (
                          <Redirect to="/10/90/50"/>
                        )}/>

                        <ul style={styles.nav}>
                          <NavLink to="/10/90/50">Red</NavLink>
                          <NavLink to="/120/100/40">Green</NavLink>
                          <NavLink to="/200/100/40">Blue</NavLink>
                          <NavLink to="/310/100/50">Pink</NavLink>
                        </ul>

                        <div style={styles.content}>
                          <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                          >
                            {/* no different than other usage of
                                ReactCSSTransitionGroup, just make
                                sure to pass `location` to `Route`
                                so it can match the old location
                                as it animates out
                            */}
                            <Route
                              location={location}
                              key={location.key}
                              path="/:h/:s/:l"
                              component={HSL}
                            />
                          </ReactCSSTransitionGroup>
                        </div>
                    </div>
                )
        }}/>
    </BrowserRouter>
)

class testLocation extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>kfghdl</div>
        )
    }
}
const test2 = ({match, location}) => {
    console.log(match);
    console.log(location);
    console.log(arguments);
    return (
        <div>jkfhdgfasg</div>
    )
}

// class AnimationExample extends React.Component {
//     render() {
//         render(
//
//         )
//     }
// }


const NavLink = (props) => (
    <li style={styles.navItem}>
        <Link {...props} style={{ color: 'inherit' }}/>
    </li>
)

const HSL = ({match: {params}}) => {
    console.log("arguments");
    console.log(arguments);
    console.log("match");
    console.log({match: {params}});
    console.log("params");
    console.log(params);

    return (
        <div style={{
//    ...styles.fill,
  //  ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
    )
}

const styles = {}


styles.fill = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

styles.content = {
    //...styles.fill,
    top: '40px',
    textAlign: 'center'
}

styles.nav = {
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: 0,
    height: '40px',
    width: '100%',
    display: 'flex'
}

styles.navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
}

styles.hsl = {
    // ...styles.fill,
    color: 'white',
    paddingTop: '20px',
    fontSize: '30px'
}


export {
    AnimationExample
}