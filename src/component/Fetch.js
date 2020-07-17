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
    async getSecondData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/378")
        const answerTwo = res.data.region
        console.log(answerTwo);
        this.setState({
            answer2: answerTwo
        })
    }
    async getThirdData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/229")
        const answerThree = res.data.coatOfArms
        console.log(answerThree);
        this.setState({
            answer3: answerThree
        })
    }
    async getFourthData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/17")
        const answerFour = res.data.seats[1]
        console.log(answerFour);
        this.setState({
            answer4: answerFour
        })
    }
    async getFifthData(){
        const res = await axios.get("https://www.anapioficeandfire.com/api/characters/901")
        const answerFive = res.data.aliases[1]
        console.log(answerFive);
        this.setState({
            answer5: answerFive
        })
    }
    componentDidMount () {
        this.getFirstData();
        this.getSecondData();
        this.getThirdData();
        this.getFourthData();
        this.getFifthData();
    }
    render() {
        return (
            <div>
                <h1>1. Where was Margaery Tyrell born?</h1>
                <h2> {this.state.answer1}</h2>
                <h1>2.  What region is House Targaryen in?</h1>
                <h2> {this.state.answer2}</h2>
                <h1>3. What's the coat of arms of House Lannister?</h1>
                <h2>{this.state.answer3}</h2>
                <h1>4. What is the second seat of House Baratheon</h1>
                <h2>{this.state.answer4}</h2>
                <h1>5. What is Robert Baratheon's second alias?</h1>
                <h2>{this.state.answer5}</h2>

            </div>
        )
    }
}
export default Fetch;