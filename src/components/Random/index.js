import {Component} from 'react'
import './index.css'

class Random extends Component{
    state={number:0}
    checknum =()=>{
        const{number}=this.state
        let newNum=Math.floor(Math.random()*100)
        this.setState((prev)=>({number:prev.number=newNum}))
    }
    render(){
        const{number}=this.state
        return(
            <div className='container-1'>
                <div className='container-2'>
                    <h1 className='head'>Random Number</h1>
                    <p>Generate a Random Number in the range of 0 to 100</p>
                    <button className='button-1' onClick={this.checknum}>Generate</button>
                    <p className='para'>{number}</p>
                </div>
            </div>
        )
    }
}
export default Random