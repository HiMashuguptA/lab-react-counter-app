import React from "react"

class Counter extends React.Component{
  // count=0

  state = {
    count : 0
  }
  Inc = () => {
    this.setState({ count : this.state.count +1 })
    // this.count=this.count+1;
    // console.log("INc");
  }
  Res = () => {
    this.setState({ count : this.state.count=0 })
  }
  render(){
    let Dec = () => {
      if(this.state.count>0){
        this.setState({ count : this.state.count -1 })
      }
    }
    return(
      <>
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
        <div className="buttons_div">
          <button onClick={ this.Inc } className="Background">+</button>
          <button onClick={ Dec } className="Background">-</button>
          <button onClick={ this.Res } className="Background">Reset</button>
        </div>
      </>
    )
  }
}

export default Counter