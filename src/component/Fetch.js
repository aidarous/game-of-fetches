import React from 'react';
import axios from 'axios';

class Fetch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            answer6: "",
            answer7: "",
            answer8: "",
            answer9: "",
        }
    }

    async getFirstData(){
        const res = await axios.get("http://anapioficeandfire.com/api/characters/16");
        const answerOne =  res.data.born;
        
        this.setState({
           answer1: answerOne
            
        })
    }

    
    componentDidMount () {
        this.getFirstData();
        
    }
    render() {
        return (
            <div>
                <h1>1. Where was Margaery Tyrell born?</h1>
                <h2> {this.state.answer1}</h2>
                
            </div>
        )
    }
}
export default Fetch;