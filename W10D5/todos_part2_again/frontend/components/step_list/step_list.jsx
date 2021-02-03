import React from 'react';
import SteplistItemContainer from './step_list_item_container';


class StepList extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

    return (
      <ul>
        <SteplistItemContainer />
      </ul>
    )
  }



}