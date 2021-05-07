import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  state={
    bots: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(r => r.json())
    .then(data => {
      const bots = data.map(b => {return {...b, enlisted: false}})
      this.setState({
        bots: bots
      })
    })
  }

  enlistBot = (bot) => {
   console.log (bot)    
    if (!bot.enlisted) {
      const newBots = this.state.bots.map(b => b.id === bot.id? {...b, enlisted: true} : b)
      this.setState({
        bots: newBots
      })
    }
  }

  unenlistBot = (bot) => {
    console.log (bot) 
    const newBots = this.state.bots.map(b => b.id === bot.id? {...b, enlisted: false} : b)
    this.setState({
      bots: newBots
    })
  }

  deleteBot = (id) => {
    console.log(id)
    fetch(`http://localhost:6001/bots/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      this.setState({
        bots: this.state.bots.filter(b => b.id !== id)
      })
    })
  }

  render() {
    return (

      <div>
        <YourBotArmy army={this.state.bots.filter(b => b.enlisted === true)} deleteBot={this.deleteBot} unenlistBot={this.unenlistBot} />
        <BotCollection enlistBot={this.enlistBot} deleteBot={this.deleteBot} bots={this.state.bots} />
      </div>
    )
  }
}

export default BotsPage;
