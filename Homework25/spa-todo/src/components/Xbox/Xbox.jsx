import imgUrl from '../../assets/xbox.svg';

const Xbox = (props) => {
    const {addVote, votesCount} = props;
    return (
        <span className="d-flex justify-content-between align-items-center gap-3">
                <a href="#" onClick={addVote}>
                    <img src={imgUrl} alt="xbox" height='48px' width='48px'/>
                </a>
                <p>{votesCount}</p>
            </span>
    );
}

export default Xbox;
