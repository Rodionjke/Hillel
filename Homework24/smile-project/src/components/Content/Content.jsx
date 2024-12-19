import React from 'react';
import googleUrl from '../../assets/google.svg';
import xboxUrl from '../../assets/xbox.svg';
import facetimeUrl from '../../assets/facetime.svg';
import snapchatUrl from '../../assets/snapchat.svg';
import netflixUrl from '../../assets/netflix.svg';

const Content = ({votesCount}) => {
    const winner = Object.keys(votesCount).reduce((previousValue, currentValue) => votesCount[previousValue] > votesCount[currentValue] ? previousValue : currentValue);
    if (Math.max(...Object.values(votesCount)) === 0) {
        return <p className="mt-3 mb-3"> Нема переможця, проголосуйте будь-ласка</p>;
    } else {
        return (
            <div>
                <h3>Переможець</h3>
                {winner === 'googleVotes' && <img src={googleUrl} alt="google" className="mt-3 mb-3"/>}
                {winner === 'facetimeVotes' && <img src={facetimeUrl} alt="facetime" className="mt-3 mb-3"/>}
                {winner === 'netflixVotes' && <img src={netflixUrl} alt="netflix" className="mt-3 mb-3"/>}
                {winner === 'snapchatVotes' && <img src={snapchatUrl} alt="snapchat" className="mt-3 mb-3"/>}
                {winner === 'xboxVotes' && <img src={xboxUrl} alt="xbox" className="mt-3 mb-3"/>}
                <p>Кількість голосів: {votesCount[winner]}</p>
            </div>
        );
    }
}

export default Content;
