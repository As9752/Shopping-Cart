import "./ProceedtoPayment.css"
const ProceedtoPayment = () => {
    return (
        <div className="Home">
        <div className="Payment">
            Shipping Details</div>
            <div className="input">
            <form>
            {/* <input type="text"></input> */}
            <input type="text" style={{width:"40%",
             height:"70vh",
             alignItems:"center",
             display:"grid",
             flexWrap:"wrap",
             marginLeft:"450px",
             marginTop:"30px"}}></input>
             
            </form>
        </div>
        </div>
    )
}

export default ProceedtoPayment
