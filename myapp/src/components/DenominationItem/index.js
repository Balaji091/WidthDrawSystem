// Write your code here
import {Component} from 'react'
import './index.css'
class WidthDrawButton extends Component{
    render(){
    const {details,onDecrease,amount}=this.props
    const {value,id}=details
    
                    
        return(
            <button onClick={()=>onDecrease(id,amount)}>{value}</button>
        )
    }

}
export default WidthDrawButton