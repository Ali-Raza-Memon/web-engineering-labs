import React, { useState } from 'react';

const Card = () => {
  const [title, setTitle] = useState('');
  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddCard = () => {
    if (title.trim() !== '') {
      const newCard = {
        title: title,
        width: 100,
        height: 100,
      };
      setCards([...cards, newCard]);
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write Title"
        value={title}
        onChange={handleInputChange}
      />
      <button onClick={handleAddCard}>Add Card</button>
      <div style={{ display: 'flex' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: card.width,
              height: card.height,
              border: '1px solid black',
              margin: '0 10px',
            }}
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
