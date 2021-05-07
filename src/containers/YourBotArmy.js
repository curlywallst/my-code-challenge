import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    const botsList = this.props.army.map(b => <BotCard key={b.id} deleteBot={this.props.deleteBot} listBot={this.props.unenlistBot} bot={b} />)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {botsList}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
