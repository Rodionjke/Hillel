import {Component} from 'react';
import Header from './components/Header/Header.jsx';
import Google from './components/Google/Google.jsx';
import Facetime from './components/Facetime/Facetime.jsx';
import Xbox from './components/Xbox/Xbox.jsx';
import Netflix from './components/Netflix/Netflix.jsx';
import Snapchat from './components/Snapchat/Snapchat.jsx';
import Title from './components/Title/Title.jsx';
import Content from './components/Content/Content.jsx';
import Button from './components/Button/Button.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            votesCount: {
                google: 0,
                facetime: 0,
                netflix: 0,
                snapchat: 0,
                xbox: 0,
            }
        }
    }
    componentDidMount() {
        const savedVotes = localStorage.getItem('votesCount');
        if (savedVotes) {
            this.setState({
                votesCount: JSON.parse(savedVotes),
            });
        }
    }
    saveVotesToLocalStorage = (votesCount) => {
        localStorage.setItem('votesCount', JSON.stringify(votesCount));
    }

    handleToggle = () => {
        this.setState((prevState) => {
            return {
                showResults: !prevState.showResults
            };
        });
    };

    resetResults = () => {
        const resetVotes = {
            google: 0,
            facetime: 0,
            xbox: 0,
            netflix: 0,
            snapchat: 0,
        };
        this.setState({
            votesCount: resetVotes
        });
        this.saveVotesToLocalStorage(resetVotes)
    };

    addVote = (appName) => {
        this.setState((prevState) => {
            const updatedVotes = {...prevState.votesCount};
            updatedVotes[appName] = updatedVotes[appName] + 1;

            this.saveVotesToLocalStorage(updatedVotes);
            return {votesCount: updatedVotes};
        });
    };

    render() {
        return (
            <>
                <Header/>
                <section className="container d-flex align-items-center justify-content-between">
                    <Google votesCount={this.state.votesCount.google} addVote={() => this.addVote('google')}/>
                    <Facetime votesCount={this.state.votesCount.facetime} addVote={() => this.addVote('facetime')}/>
                    <Netflix votesCount={this.state.votesCount.netflix} addVote={() => this.addVote('netflix')}/>
                    <Snapchat votesCount={this.state.votesCount.snapchat} addVote={() => this.addVote('snapchat')}/>
                    <Xbox votesCount={this.state.votesCount.xbox} addVote={() => this.addVote('xbox')}/>
                    <Button buttonText="Подивитись результати" onClick={this.handleToggle}/>
                </section>
                {this.state.showResults ? (
                    <section className="container d-flex text-center flex-column">
                        <Title/>
                        <Content votesCount={this.state.votesCount}/>
                        <Button buttonText="Скинути" onClick={this.resetResults}/>
                    </section>
                ) : null}
            </>
        )
    }
}

export default App;
