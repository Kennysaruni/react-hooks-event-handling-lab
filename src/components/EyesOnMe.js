// Code EyesOnMe Component Here
function EyesOnMe(){
    function focus(){
        console.log("Good!")
    }
    function blur(){
        console.log("Hey,Eyes on me!")
    }
    return(
        <button onBlur={blur} onFocus={focus}>
          EyesOnMe
        </button>
    )
}
export default EyesOnMe