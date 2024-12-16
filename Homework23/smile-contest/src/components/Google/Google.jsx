import {Component} from 'react';
import imgUrl from '../../assets/google.svg';

class Google extends Component {
    render() {
        return (
            <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={this.props.addVote}>
                    <img src={imgUrl} alt="google"/>
                </a>
                <p>{this.props.votesCount}</p>
            </span>
        );
    }
}

export default Google;
