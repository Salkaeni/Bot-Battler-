import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botData, setBotData] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(res => res.json())
      .then(data => setBotData(data));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(http://localhost:8002/bots/${bot.id}, {
      method: 'DELETE',
    })
    .then(() => {
      // Remove the bot from both enlistedBots and botData
      setEnlistedBots(enlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id));
      setBotData(botData.filter(b => b.id !== bot.id));
    });
  };

  return (
    <div>
      <YourBotArmy 
        enlistedBots={enlistedBots} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot} 
      />
      <BotCollection 
        bots={botData} 
        onEnlist={enlistBot} 
        onDischarge={dischargeBot} 
      />
    </div>
  );
}

export default BotsPage;