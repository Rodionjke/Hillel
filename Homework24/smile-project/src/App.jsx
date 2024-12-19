import {useEffect, useState} from 'react'
import Header from './components/Header/Header.jsx';
import Google from './components/Google/Google.jsx';
import Facetime from './components/Facetime/Facetime.jsx';
import Xbox from './components/Xbox/Xbox.jsx';
import Netflix from './components/Netflix/Netflix.jsx';
import Snapchat from './components/Snapchat/Snapchat.jsx';
import Title from './components/Title/Title.jsx';
import Content from './components/Content/Content.jsx';
import Button from './components/Button/Button.jsx';

const App = () => {
    const [showResults, setShowResults] = useState(false);
    const handleToggle = () => {
        setShowResults(!showResults);
    }
    const [votesCount, setVotesCount] = useState(() => {
        let savedVotes = localStorage.getItem('votesCount');
        if (savedVotes) {
            return JSON.parse(savedVotes);
        } else {
            return {
                googleVotes: 0,
                snapchatVotes: 0,
                xboxVotes: 0,
                netflixVotes: 0,
                facetimeVotes: 0
            };
        }
    });

    useEffect(() => {
        localStorage.setItem('votesCount', JSON.stringify(votesCount));
    }, [votesCount]);
    const resetResults = () => {
        const resetVotes = {
            googleVotes: 0,
            snapchatVotes: 0,
            xboxVotes: 0,
            netflixVotes: 0,
            facetimeVotes: 0
        };
        setVotesCount(resetVotes);
        localStorage.setItem('votesCount', JSON.stringify(resetVotes));
    };

    const addVote = (appName) => {
        setVotesCount((votesCount) => ({
            ...votesCount,
            [`${appName}Votes`]: votesCount[`${appName}Votes`] + 1,
        }));
    };

    return (
        <>
            <Header/>
            <section className="container d-flex align-items-center justify-content-between">
                <Google votesCount={votesCount.googleVotes} addVote={() => addVote('google')}/>
                <Facetime votesCount={votesCount.facetimeVotes} addVote={() => addVote('facetime')}/>
                <Netflix votesCount={votesCount.netflixVotes} addVote={() => addVote('netflix')}/>
                <Snapchat votesCount={votesCount.snapchatVotes} addVote={() => addVote('snapchat')}/>
                <Xbox votesCount={votesCount.xboxVotes} addVote={() => addVote('xbox')}/>
                <Button buttonText="Подивитись результати" onClick={handleToggle}/>
            </section>
            {showResults ? (
                <section className="container d-flex text-center flex-column">
                    <Title/>
                    <Content votesCount={votesCount}/>
                    <Button buttonText="Скинути" onClick={resetResults}/>
                </section>
            ) : null}
        </>
    )
}

export default App