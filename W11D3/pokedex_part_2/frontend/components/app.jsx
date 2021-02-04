import { Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Route path="/" component={PokemonIndexContainer} />
         );
    }
}
 
export default App;