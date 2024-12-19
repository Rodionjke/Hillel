import imgUrl from '../../assets/snapchat.svg';

const Snapchat = (props) => {
    const {addVote, votesCount} = props;
    return (
        <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={addVote}>
                    <img src={imgUrl} alt="snapchat"/>
                </a>
                <p>{votesCount}</p>
            </span>
    );
}

export default Snapchat;
