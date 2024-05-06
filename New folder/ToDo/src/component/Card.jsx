import React, { useState } from "react";

const Card = () => {
    const [title, setTitle] = useState("");
    const [showCard, setShowCard] = useState(false);
    const [showNewDiv, setShowNewDiv] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSave = () => {
        if (title) {
            setShowCard(true);
            setShowNewDiv(true);
        }
    };

    const handleDelete = () => {
        setTitle("");
        setShowCard(false);
        setShowNewDiv(false);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Card Title"
                value={title}
                onChange={handleTitleChange}
            />
            <button onClick={handleSave}>Save</button>
            <div style={{ width: "100px", height: "100px", marginTop: "10px" }}>
                {showCard && (
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    >
                        <p>{title}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
            {showNewDiv && (
                <div style={{ width: "100px", height: "100px", backgroundColor: "blue", marginTop: "10px" }}>
                    New empty div
                </div>
            )}
        </>
    );
};

export default Card;
