import imgUrl from '../../assets/facetime.svg';

const Facetime = (props) => {
    const {addVote, votesCount} = props;
    return (
        <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={addVote}>
                    <img src={imgUrl} alt="facetime" height='48px' width='48px'/>
                </a>
                <p>{votesCount}</p>
            </span>
    );
}

export default Facetime;
