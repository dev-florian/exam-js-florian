import React, {Component} from 'react';
import '../Stadium.css';

class SelectPlayer extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    onTyped(e) {

        if (e.target.value.length > 3) {


            let players = [];
            const apikey = "eb7490e0ca3a3d75eab567df34d6b3bce6f747b8b30c8bdeee27f52a1ed3b150";
            let url = "https://allsportsapi.com/api/football/?&met=Players&playerName=" + e.target.value + "&APIkey=" + apikey;
            fetch(url).then(rawData => {
                rawData.json().then(value => {
                    for (let i = 0; i < value.result.length; i++) {
                        players.push(<button onClick={() => this.props.onChoosePlayer(value.result[i])} className="player" key={i}
                                          value={value.result[i].player_name}>{value.result[i].player_name}</button>);
                    }
                    this.setState({
                        players: players
                    })
                });
            });

        }
    }

    render() {
        return (
            <div className="Form">
                <form>
                    <label>Selectionnez votre joueur</label> <br></br>
                    <input value={this.state.value} onChange={(e) => this.onTyped(e)} type={"text"}
                           name={"player_search"}
                           placeholder={"search"}/><br></br>
                </form>
                {this.state.players}
            </div>
        );
    }
}

export default SelectPlayer;
