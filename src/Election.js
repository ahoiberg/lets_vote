import React from 'react';
import ReactDOM from 'react-dom'
import {key} from './Keys.js'

export default class Election extends React.Component{

    constructor(props){
        super(props)
        this.state = {elections: []}
    }

    componentDidMount() {
        var self = this
        var first = "https://www.googleapis.com/civicinfo/v2/voterinfo?key="
        var middle = "&address="
        var address = '419 Boston Ave Medford MA 02155' 
        var electionID = "&electionId=2000"
        var api = first + key.civic_key + middle + address + electionID 
        fetch(api)
          .then(response =>
            response.json()
            ).then(data => {
                let contests = [] 
                data.contests.map((contest) =>
                    {   
                        if (contest.type === "General")             
                            {contests.push(contest.office)}
                   })
                let candidates = [] 
                data.contests.map((candidate) =>
                    {if (candidate.type === "General")
                         {candidates.push(candidate.candidates)}
                })
                let names = []
                for (var i = 0; i < candidates.length; i++){
                    let race = []
                    candidates[i].map((candidate) => race.push(candidate.name))
                    names.push(race)
                }
                names = names.map((race) => race.join(", "))
                console.log(names)
                var elections = {}
                contests.map((x,y) => elections[x] = names[y])
                this.setState({elections: elections})
            }) 
        
    }

    render(){
        return (
            <div classname="elections">
                <h3>Candidates in upcoming elections are: </h3>
                <ul>
                    {Object.keys(this.state.elections).map((name, index) =>
                        <li>{name}: {this.state.elections[name]} </li>)}
                </ul>
            </div>
            )
    }
}