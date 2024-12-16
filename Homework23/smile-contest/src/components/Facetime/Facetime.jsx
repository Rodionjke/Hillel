import {Component} from 'react';
import imgUrl from '../../assets/facetime.svg';

class Facetime extends Component {

    render() {
        return (
            <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={this.props.addVote}>
                    <img src={imgUrl} alt="facetime"/>
                </a>
                <p>{this.props.votesCount}</p>
            </span>
        );
    }
}

export default Facetime;
