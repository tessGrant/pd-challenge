import { FilteredObj, PDCard } from "../types";

export const getCards = async (pageNum?: number) => 
    await fetch(`http://localhost:3001/cards?_page=${pageNum}&_limit=8`).then(res => {
        if(!res.ok){throw new Error(res.statusText)}
        return res.json();
    });


export const filterByKey = async (obj: FilteredObj) => await fetch(`http://localhost:3001/cards?title_like=${obj.filterValue}`).then(res => {
    if(!res.ok){throw new Error(res.statusText)}
    return res.json();
});

export const addNewCardMutation = async (card: PDCard) => await fetch(`http://localhost:3001/cards`,
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

export const deleteCardMutation = async (id: any) => await fetch(`http://localhost:3001/cards/${id}`, {method: 'DELETE'}).then(res => {
    if(!res.ok){throw new Error(res.statusText)};
    return res.json();
});

