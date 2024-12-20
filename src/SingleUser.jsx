import ApiCall from "./ApiCall";
import { useState } from "react";
function SingleUser() {

    let url=""

data = ApiCall(url,isTrue); 
   // let url = 'https://aptech.heritagejewels.com.pk/microservices/singlecard.php';
    const [input,setInput]=useState("")  
    const handlePressKey = (event)=>{
        if(event.key==="Enter"){
            setInput(event.target.value)
            isTrue=true
            
                   
        }
    }
    url = `https://aptech.heritagejewels.com.pk/microservices/singlecard.php?cardnumber=${input}`;
    console.log(url)
    console.log(isTrue)

    console.log(data)
    

    return (
      <div className="App">
    
      <label>Enter Card Number:
        <input type="text" placeholder="Enter Here" onKeyUp={handlePressKey} />
      </label>
   
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.cardnumber}</h3>
        </div>
      ))}
    </div>
      </div>
    );
  }
  
  export default SingleUser;
  


 