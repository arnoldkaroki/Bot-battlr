import React from 'react';

function Botarmy({ onBotClick, onRelease, onDischarge, army }) {
  const handleReleaseClick = (botId) => {
    onRelease(botId);
  };

  const handleDischargeClick = (botId) => {
    // Call the onDischarge function to remove the bot both from frontend and backend
    onDischarge(botId);
  };

  return (
    <>
      <h2>Your Bot Army</h2>
      <div id="botArmy">
      {army.map((bot) => (
        <div key={bot.id} className="bot-card" onClick={() => onBotClick(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p className="catchphrase">{bot.catchphrase}</p>
          <button onClick={() => handleReleaseClick(bot.id)}>Release</button>
          <button className="discharge-button" onClick={() => handleDischargeClick(bot.id)}>X</button>
        </div>
      ))}
    </div>
    </>

  );
}

export default Botarmy;