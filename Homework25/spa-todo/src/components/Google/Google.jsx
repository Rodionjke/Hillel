import imgUrl from '../../assets/google.svg';

const Google = (props) => {
    const {addVote, votesCount} = props;
    return (
        <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={addVote}>
                    <img src={imgUrl} alt="google"/>
                </a>
                <p>{votesCount}</p>
            </span>
    );
}

export default Google;
