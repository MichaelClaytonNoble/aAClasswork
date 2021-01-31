import React from 'react'; 

class Autocomplete extends React.Component{
  constructor(props){
    super(props);

    this.state = {inputVal: '', found: this.props.names};
    this.updateInput = this.updateInput.bind(this);
    this.updateInputOnClick = this.updateInputOnClick.bind(this);
  }

  updateInputOnClick(e){

    const text = e.target.innerText;
    const e_ = { target: {value: text }}
    this.updateInput(e_);
  }
  updateInput(e){

    const found = [];
   
    const current = e.target.value;
    this.props.names.forEach( (name_)=>{
      if( name_.toLowerCase().includes(current.toLowerCase())){
        found.push(name_);
      }
    });
    if(found.length === 0) found.push("No matches");
    this.setState({inputVal: current, found});

  }
  render(){
    return (
    <div className="autocomplete-widget">
      
      <input value={this.state.inputVal} onChange={this.updateInput} placeholder="search..."></input>

      <ul>
        {
          this.state.found.map( (name_, i)=>{
            return <li key={i} onClick={this.updateInputOnClick}> {name_}</li>
          })
        }
      </ul>

    </div>)
  }
}

export default Autocomplete;