import React from 'react'
import {Helmet} from 'react-helmet-async'
import '../styles/Tab1.css';

class Tab1 extends React.Component<any, any>{
    
    timerID : any;
    
    //this will be called before component is mounted, thus do not use setState here
    constructor(props: any) {
        super(props);
        this.state = { date: null }
    }

    //will be called just after component mounts, can call setState here
    componentDidMount() {
        this.setState({ date: new Date().toLocaleTimeString() })
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //invoked immediately after updating occurs. This method is not called before the initial render.
    //best place to do network request just after everything is setup
    componentDidUpdate() {
    }

    //invoked immediately before a component is unmounted and destroyed. 
    //Perform any necessary cleanup in this method, such as invalidating timers,
    //canceling network requests, or cleaning up any subscriptions that were created in
    //do not call setState here
    componentWillUnmount() {
        clearInterval(this.timerID)
    }


    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }


    //in order to display components in class component render function should return some element.
    render() {
        return (
            <div className="tab1--parent">
                <Helmet>
                    <title>Digital Clock</title>
                    <meta name="description" content='page related cotent' />
                    <link rel='canonical' href='/tab3' />
                </Helmet>
                <h2>Digital Colck</h2>
                <p>{this.state.date}</p>
            </div>
        );
    }
}

export default Tab1