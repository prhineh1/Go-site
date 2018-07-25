import React from 'react';
import Board from './Board';
import OptionsPanel from './OptionsPanel';
import { movable } from '../gameLogic/general';

export default class Game extends React.Component {
    state = {
        red: { concede: false, lost: 0},
        black: { concede: false, lost: 0},
        blacksTurn: true,
        toMoveTo: [[]],
        selectedPiece: [],
        boardState: [
                        [1, 'r', 1, 'r', 1, 'r', 1, 'r'],
                        ['r', 1, 'r', 1, 'r', 1, 'r', 1],
                        [1, 'r', 1, 'r', 1, 'r', 1, 'r'],
                        [1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1],
                        ['b', 1, 'b', 1, 'b', 1, 'b', 1],
                        [1, 'b', 1, 'b', 1, 'b', 1, 'b'],
                        ['b', 1, 'b', 1, 'b', 1, 'b', 1]
                    ]
    };
    concede = () => this.setState((prevState) => ({ black: { ...prevState.black, concede: true } }));
    selected = (coord, content) => this.setState(() => ({ toMoveTo : movable(this.boardState, coord, content), selected: coord }));
    render() {
        return (
            <div className="game-wrapper">
                <Board turn={this.state.blacksTurn ? 'black' : 'red'}
                    boardState={this.state.boardState}
                    selected={this.selected}
                    toMoveTo={this.toMoveTo}
                />
                <OptionsPanel concede={this.concede}
                    turn={this.state.blacksTurn ? 'black' : 'red'}
                    players={{ red: this.state.red, black: this.state.black }}
                />
            </div>
        )
    }
}