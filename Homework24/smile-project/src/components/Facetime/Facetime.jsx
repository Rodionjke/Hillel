import imgUrl from '../../assets/facetime.svg';

const Facetime = (props) => {
    const {addVote, votesCount} = props;
    return (
        <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={addVote}>
                    <img src={imgUrl} alt="facetime"/>
                </a>
                <p>{votesCount}</p>
            </span>
    );
}

export default Facetime;
