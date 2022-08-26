import React from 'react'
import './Tab1.css'
// export default function Tab1(){
//     return (<h1>This is Tab1.</h1>)
// }

class Tab1 extends React.Component<any, any>{
    
    timerID: any;

    //this will be called before component is mounted, thus do not use setState here
    constructor(props: any) {
        super(props);
        this.state = {date : new Date()}
    }

    //will be called just after component mounts, can call setState here
    componentDidMount() { 
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    //invoked immediately after updating occurs. This method is not called for the initial render.
    //best place to do network request just after everything is setup
    componentDidUpdate() { }

    //invoked immediately before a component is unmounted and destroyed. 
    //Perform any necessary cleanup in this method, such as invalidating timers,
    //canceling network requests, or cleaning up any subscriptions that were created in
    //do not call setState here
    componentWillUnmount() {
        clearInterval(this.timerID)
     }


    tick(){
        this.setState({
            date : new Date()
        });
    }

    render() {
        return (
            <div className="tab1--parent">
                <h1>This is Tab1</h1>
                <h3>It is {this.state.date.toString()}</h3>
            </div>
        );
    }
}

export default Tab1