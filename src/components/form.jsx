import "./form.css";
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    country_name: '',
    start_date:'',
    history:'',
    epassport:'',
    birthdeathcert:'',
    water_payment:'',
    electricity_payment:'',
    mobile_services:'',
    blockchain_adoption:'',
    electronic_voting:'',
    created_at:'',
    updated_at:'',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form data
    setFormData({
      country_name: '',
      start_date:'',
      history:'',
      epassport:'',
      birthdeathcert:'',
      water_payment:'',
      electricity_payment:'',
      mobile_services:'',
      blockchain_adoption:'',
      electronic_voting:'',
      created_at:'',
      updated_at:'',
    });
  };

  return (
    <div className="form-container">
      <h1>upload new country </h1>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div>
          <label>Country Name:
            <input type="text" 
            placeholder="enter the country name" 
            value={formData.country_name}
            onChange={handleInputChange}/>
          </label>
        </div>
        <div>
          <label>E-governannce Start date:
            <input type="date"
            onChange={handleInputChange} 
            value={formData.start_date}/>
          </label>
        </div>
        <div>
          <label>History:
            <input type="text" placeholder="enter the history of e governance of the specific country"
            onChange={handleInputChange} 
            value={formData.history}/>
          </label>
        </div>
        <div>
          <label>E passport:
            <input type='checkbox'
            value={formData.epassport}
            onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>Birth Death Registration:
           <input type="checkbox" 
           value={formData.birthdeathcert}
           onChange={handleInputChange}/> 
          </label>  
        </div>
        <div>
          <label>water-tap charges:
           <input type="checkbox"
           value={formData.water_payment}
           onChange={handleInputChange}/> 
          </label>
        </div>
        <div>
          <label>Eelectricity bill:
           <input type="checkbox"
           value={formData.electricity_payment}
           onChange={handleInputChange}/> 
          </label>
        </div>
        <div>
          <label>mobile services:
           <input type="checkbox" 
           value={formData.mobile_services}
           onChange={handleInputChange}/> 
          </label>

        </div>
        <div>
          <label>Blockchain Adoption:
           <input type="checkbox"  
           value={formData.blockchain_adoption}
           onChange={handleInputChange}/> 
          </label>
        </div>
        <div>
          <label>Eelectronic voting:
           <input type="checkbox" 
           value={formData.electronic_voting}
           onChange={handleInputChange}/> 
          </label>
        </div>
        <input type="submit"  />
      </form>
      
    </div>
  );
};
export default Form;
