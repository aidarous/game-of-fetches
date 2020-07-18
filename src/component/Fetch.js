import React from 'react';
import axios from 'axios';

class Fetch extends React.Component {
    // initializes answers to be used for the api
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
    // function for first question
    async getFirstData(){
        const res = await axios.get("http://anapioficeandfire.com/api/characters/16");
        const answerOne =  res.data.born;
        // updates the state of answer1
        this.setState({
            answer1: answerOne
            
        })
    }
    // function for second question
    async getSecondData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/378")
        const answerTwo = res.data.region
        console.log(answerTwo);
        // updates state
        this.setState({
            answer2: answerTwo
        })
    }
    // function for third question
    async getThirdData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/229")
        const answerThree = res.data.coatOfArms
        console.log(answerThree);
        this.setState({
            answer3: answerThree
        })
    }
    // function for fourth question
    async getFourthData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/17")
        const answerFour = res.data.seats[1]
        console.log(answerFour);
        // updates state
        this.setState({
            answer4: answerFour
        })
    }
    // fetches data for fifth question
    async getFifthData(){
        const res = await axios.get("https://www.anapioficeandfire.com/api/characters/901")
        const answerFive = res.data.aliases[1]
        console.log(answerFive);
        //updates state
        this.setState({
            answer5: answerFive
        })
    }
    // fetches data for sixth question
    async getSixthData(){
        const res = await axios.get("https://anapioficeandfire.com/api/characters/209")
        const answerSix = res.data.name
        console.log(answerSix)
        // updates state
        this.setState({
            answer6: answerSix
        })
    }
    // fetches data for seventh question
    async getSeventhData(){
        const pov = await axios.get("https://www.anapioficeandfire.com/api/books/1");
        const pov2 = await axios.get("https://www.anapioficeandfire.com/api/books/2");
        const pov3 = await axios.get("https://www.anapioficeandfire.com/api/books/3");
        const answerSeven = pov.data.name
        const answerEight = pov2.data.name
        const answerNine = pov3.data.name
        // updates state
        this.setState({
            answer7: answerSeven,
            answer8: answerEight,
            answer9: answerNine
        })
    }
    componentDidMount () {
        this.getFirstData();
        this.getSecondData();
        this.getThirdData();
        this.getFourthData();
        this.getFifthData();
        this.getSixthData();
        this.getSeventhData();
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
                <h1> 6.What's the name of the founder of House Stark?</h1>
                <h2> {this.state.answer6}</h2>
                <h1>7. What are the title of Catelyn Stark's three POV books?</h1>
                <h2>{this.state.answer7}</h2>
                <h2>{this.state.answer8}</h2>
                <h2>{this.state.answer9}</h2>

            </div>
        )
    }
}
export default Fetch;