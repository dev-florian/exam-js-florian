import React, {Component} from 'react';
import '../Stadium.css';

class Stadium extends Component {
    constructor() {
        super();

        this.state = {
            team: {
                goal: 1,
                defenser: 4,
                middle: 3,
                attacker: 3
            },

            playerClicked: null,
        }
    }

    renderStadium() {

        let span = [];
        for (let i = 1; i < this.state.team.goal + 1; i++) {
            span.push(<button onClick={() => this.props.onPlayerSelect("goal")} className="goal" key={"goal"}
                              value={"goal"}><span>{this.props.data["goal"] ? this.props.data["goal"] : ""}</span></button>);
        }
        for (let i = 1; i < this.state.team.defenser + 1; i++) {
            span.push(<button onClick={() => this.props.onPlayerSelect("defenser" + i)} className="defenser" key={"defenser" + i}
                              value={"defenser" + i}><span>{this.props.data["defenser" + i] ? this.props.data["defenser" + i] : ""}</span></button>);
        }
        for (let i = 1; i < this.state.team.middle + 1; i++) {
            span.push(<button onClick={() => this.props.onPlayerSelect("middle" + i)} className="middle" key={"middle" + i}
                              value={"middle" + i}><span>{this.props.data["middle" + i] ? this.props.data["middle" + i] : ""}</span></button>);
        }
        for (let i = 1; i < this.state.team.attacker + 1; i++) {
            span.push(<button onClick={() => this.props.onPlayerSelect("attacker" + i)} className="attacker" key={"attacker" + i}
                              value={"attacker" + i}><span>{this.props.data["attacker" + i] ? this.props.data["attacker" + i] : ""}</span></button>);
        }

        return (
            <div>{span}</div>
        );
    }

    render() {
        return (
            <div className="Stadium">
                {this.renderStadium()}
            </div>
        );
    }
}

export default Stadium;
