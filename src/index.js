import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({ lat: pos.coords.latitude }),
            err => this.setState({ errorMessage: err.message }) //set state is a addative process
        )
    }

    // better to keep conditional logic out of render()
    renderContent() {
        if (!this.state.lat && this.state.errorMessage)
            return <h1>Error! {this.state.errorMessage}</h1>
        if (!this.state.errorMessage && this.state.lat)
            return <SeasonDisplay lat={this.state.lat} /> // the component will re-render any children as well
        return <Spinner message='Please Allow Access to your location' />
    }

    render() {
        return <div>
            {this.renderContent()}
        </div>
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));

//start from 3. Refactoring Data Loading to Lifecycle Methods