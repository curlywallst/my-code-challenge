import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    const botsList = this.props.bots.map(b => <BotCard deleteBot={this.props.deleteBot} listBot={this.props.enlistBot} key={b.id} bot={b} />)
    return (
      <div className="ui four column grid">
        <div className="row">
            {botsList}
        </div>
      </div>
    );
  }
}

export default BotCollection;
