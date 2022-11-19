import {useState} from 'react';
import PaystackPop from "@paystack/inline-js";

import "./Pay.css";

const Pay=()=>{
  
    // const[phonenumber,setNumber]=useState("");
    // const[location,setLocation]=useState("");
    // const[amount,setAmount]=useState("");
    
    const[email,setEmail]=useState("");
    const[amount,setAmount]=useState("");
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName ]=useState("");

const payWithPaystack=(e)=>{
  e.preventDefault();
  const paystack= new PaystackPop();
  paystack.newTransaction({
    key:"pk_test_9868f2ae9b5f8b46cd63d97ec66dbc9623d5d707",
    amount:amount * 100 ,
    email,
    firstName,
    lastName,
   
    onSuccess(transaction){
      let message=`Bolt Food is on the way. Reference ${transaction.reference}`
      alert (message)
      setEmail("")
      setAmount("")
      
      
    },
    onCancel(){
      alert("Order cancelled")
    }

  })

}
    return(
        <div className="makepayment">
            <h1><span style={{color:"rgb(34 197 94)"}}>Bọlt</span> <span style={{color:"#111"}}>Food</span></h1>
          <section className="sectionthree">
            </section>
          <div className="mypayform">
           
             <form id="paymentForm" >
 
  <div >
  <input type="text" 
    className="thisinput"
    value={firstName}
    placeholder="Enter your location(Bolt your deliver your food to this location)"
    onChange={(e)=>setfirstName(e.target.value)}
    id="first-name" />
  </div>
  <div >
    
    <input type="text"
      placeholder="Enter your phone number(A bolt courier will call this number when they arrive with your food)"
    className="thisinput" 
    value={lastName}
    onChange={(e)=>setlastName(e.target.value)}
    id="last-name" />
  </div>
  <div>
    
    <input type="email" 
    className="thisinput"
    placeholder="Email(Optional means of being contacted)"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    id="email-address" required />
  </div>
  <div>
    
    <input type="tel"
    className="thisinput"
    placeholder="Enter amount you're being charged"
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
     id="amount" required />
  </div>
  <div>
    <button  type="submit" onClick={payWithPaystack}> Pay </button>
  </div>
</form>
        </div>
        <div className="myfooter">
          <h1>Order Now!</h1>
        </div>
        </div>
        

    )
}
export default Pay;