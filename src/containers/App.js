import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Search';
import Scroll from '../components/Scroll';
import './app.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {

    state = {
        robots: [],
        searchfield: ''
    }
    SearchFieldChange(event) {
        this.setState({
            searchfield: event.target.value
        })
        
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(user=>{return user.json()}).then(user=>{
            this.setState({
                robots: user
            })
        })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
       const title = this.state.robots.length===0 ? 'Loading' : 'Robofriends';
        return (
            <div className="tc">
                <h1 className="f1">{title}</h1>
             <SearchBox onSearchChange={this.SearchFieldChange.bind(this)}/>
             <Scroll>
                <ErrorBoundary><CardList robots={filteredRobots} /></ErrorBoundary>
             
             </Scroll>
                
            </div>
        )
    }
   
}
export default App;