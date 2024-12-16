import {Component} from 'react';
import imgUrl from '../../assets/netflix.svg';

class Netflix extends Component {

    render() {
        return (
            <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={this.props.addVote}>
                    <img src={imgUrl} alt="netflix"/>
                </a>
                <p>{this.props.votesCount}</p>
            </span>
        );
    }
}

export default Netflix;
