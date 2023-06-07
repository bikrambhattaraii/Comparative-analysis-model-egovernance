const Form = () => {
  return (
    <>
      <h1>upload new country </h1>
      <form action="">
        <div>
          <label>Country Name:
            
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
          <label>E-tax Payment:
           <input type="checkbox"/> 
          </label>
          
        </div>

      </form>
    </>
  );
};
export default Form;
