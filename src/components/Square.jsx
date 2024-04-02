import PropTypes from "prop-types"
 
 export default function Square(props={}){
    const {message,width,height}=props
    return(
        <div>
        <div style={{width:width,height:height}} className="square">{message}</div>
        </div>
    )
 }
Square.propTypes={
    message:PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number,
}
