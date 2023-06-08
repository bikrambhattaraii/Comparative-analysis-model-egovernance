import "./form.css";
const Form = () => {

  return (
    <div className="form-container">
      <h1>upload new country </h1>
      <form action="" method="POST">
        <div>
          <label>Country Name:
            <input type="text" placeholder="enter the country name" />
          </label>
        </div>
        <div>
          <label>E-governannce Start date:
            <input type="date" />
          </label>
        </div>
        <div>
          <label>History:
            <input type="text" placeholder="enter the history of e governance of the specific country" />
          </label>
        </div>
        <div>
          <label>E passport:
            <input type='checkbox' />
          </label>
        </div>
        <div>
          <label>Birth Death Registration:
           <input type="checkbox"/> 
          </label>  
        </div>
        <div>
          <label>water-tap charges:
           <input type="checkbox"/> 
          </label>
        </div>
        <div>
          <label>Eelectricity bill:
           <input type="checkbox"/> 
          </label>
        </div>
      
      </form>
      
    </div>
  );
};
export default Form;
