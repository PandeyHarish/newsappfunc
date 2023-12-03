import loading from '../loading.gif'

const Spinner = ()=> {
 
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="text-center">
          <img src={loading} alt="loading" height="50px" />
        </div>
      </div>
    );
  
}

export default Spinner;
