import imgUrl from '../../assets/netflix.svg';

const Netflix = (props) => {
    const {addVote, votesCount} = props;
    return (
        <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={addVote}>
                    <img src={imgUrl} alt="netflix"/>
                </a>
                <p>{votesCount}</p>
            </span>
    );
}

export default Netflix;
