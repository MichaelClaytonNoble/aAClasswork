import React from 'react';
import ReactDOM from 'react-dom';


class Tabs extends React.Component{

  constructor(props){
    super(props);
    this.state = ({ tabIndex: 0});
    this.switchTab= this.switchTab.bind(this);
  }

  switchTab(e){
    const tabIndex = e.target.getAttribute("data-id");
    this.setState({tabIndex});
  }

  render(){
    const {tabIndex} = this.state;
    const currentTab = this.props.tabInfo[tabIndex];
    return (

      <div className="tab-widget">
        <ul className="tab-header">
          {this.props.tabInfo.map( (tab,i) => {
            return <h1 onClick={this.switchTab} key={i} data-id={i}>{tab.title}</h1>
          })}
          
        </ul>
        <article className="tab-content">{currentTab.content}</article>
        </div>
      );
  }
}

export default Tabs;
