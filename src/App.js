import React, {Component} from 'react';
import Stadium from './components/Stadium';
import SelectPlayer from './components/SelectPlayer';

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            data: {
                goal: "",
                defenser1: "",
                defenser2: "",
                defenser3: "",
                defenser4: "",
                middle1: "",
                middle2: "",
                middle3: "",
                attaquant1: "",
                attaquant2: "",
                attaquant3: "",
            },
            playerClicked: null
        }
    }

    onChoosePlayer(e) {
        let data = Object.assign(this.state.data, {[this.state.playerClicked]: e.player_name});
        this.setState ({
            data: data,
            playerClicked: null
        });
    }

    onCircleSelect(player) {
        this.setState ({
            playerClicked: player
        });
    }


    render() {
        return (
            <div className="App">
                <h1>{this.state.playerClicked}</h1>
                {this.state.playerClicked !== null &&
                <SelectPlayer onChoosePlayer={(selectedPlayer) => this.onChoosePlayer(selectedPlayer)}
                              onTyped={(typed) => this.onTyped(typed)}/>}
                <Stadium data={this.state.data} onCircleSelect={(player) => this.onCircleSelect(player)}/>
            </div>
        );
    }
}

export default App;
