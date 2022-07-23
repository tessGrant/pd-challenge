export interface PDCard {
    id: string;
    title: string;
    description: string;
    imagePath: string;
};

export interface PDCards {
    cards: PDCard[];
}

export interface FilteredObj {
    filterValue: any;
}