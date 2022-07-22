import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

interface PdProps {
    pages: number;
    // page: number;
    // handleChange: () => void;
}

export const PdPagination = (props: PdProps) => {
    return <Pagination count={props.pages} />
}