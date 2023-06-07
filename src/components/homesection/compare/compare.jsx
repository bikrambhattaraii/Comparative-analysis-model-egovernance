import React from "react";
import "./compare.css";

const Compare = () => {
  const handleSubmit=()=>{
console.log("h")
  }
  return (
    <>
    <div className="container-compare">
        <h1>choose the country Egovernance you want to compare with</h1>
      
      <div className="container-other-countries">
        
        <div className="form-options">
        <label for="cars">Choose the country</label>
        <select name="cars" id="cars">
          <option value="volvo">Estonia</option>
          <option value="saab">finland</option>
        
        </select>
    
      </div>
      <div className="container-other-countries">
        
        <div className="form-options">
        <label for="cars">Choose the country</label>
        <select name="cars" id="cars">
          <option value="volvo">Estonia</option>
          <option value="saab">finland</option>
        
        </select>
    </div> 
     </div>
       </div>
<button onClick={handleSubmit}>compare</button>   
 </div>
 </> 
 );
};

export default Compare;
