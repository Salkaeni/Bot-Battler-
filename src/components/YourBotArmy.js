import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ enlistedBots, onRelease, onDischarge }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              onEnlist={() => onRelease(bot)} 
              onDischarge={() => onDischarge(bot)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;