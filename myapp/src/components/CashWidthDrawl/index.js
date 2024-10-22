// Write your code here
import React from "react";
import "./index.css";
import { Component } from "react";
import WidthDrawButton from '../DenominationItem'
class CashWidthDrawl extends  Component {
    state={amount:2000,content:"Choose Sum"}
    onDecrease=(id,amount,content)=>{
        const{denominationsList}=this.props
        const reduceAmount=denominationsList.find((item)=>item.id===id) 
        if(amount>=reduceAmount.value)
        {         
        this.setState((prevState)=>({amount:prevState.amount-reduceAmount.value}))
        this.setState({content:"Choose Sum"}) 

        }
        else{
            this.setState({content:"Insufficient Funds"})

        }
        
    }
            
  render(){   
     const{amount,content}=this.state   
     const{denominationsList}=this.props 
  return (
    
      <div className="withdrawal-card">
      <div className="profile">
        <div className="avatar">S</div>
        <h2>Sarah Williams</h2>
      </div>
      <p className="label">Your Balance</p>
      <h1 className="balance">{amount}</h1>
      <p className="currency">In Rupees</p>

      <div className="withdraw-section">
        <h3>Withdraw</h3>
        <p className="sub-label">{content}</p>
        <div className="buttons">
            {
                denominationsList.map((item)=>(<WidthDrawButton details={item} amount={amount} onDecrease={this.onDecrease}key={item.id}/>))
            }
          
        </div>
      </div>
    </div>
  );
        }  
};

export default CashWidthDrawl;
