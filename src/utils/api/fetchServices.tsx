import { PDCard } from "../types";

export const getCards = async () => await fetch("http://localhost:3001/cards").then(res => {
    if(!res.ok){throw new Error(res.statusText)}
    return res.json();
});

export const addNewCardMutation = async (card: PDCard) => await fetch(`http://localhost:3001/wines`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    }).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});
