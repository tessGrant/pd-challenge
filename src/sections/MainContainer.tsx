import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Grid } from '../components/pdGrid';
import { getCards } from '../utils/api/fetchServices';
import { Card } from './CardComponent';
import { Header } from './Header';
import { PdPagination } from './Pagination';

const maxCardsPages = 3;

export const PdContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const  {data, isLoading, isError} = useQuery(["cards", currentPage], () => getCards(currentPage ))
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setFiltered(data)
    }, [data])

    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        return <div>An error occured 😭</div>;
    }

    return (
        <StyledContainer>
            <Header></Header>
            <Grid>
                {filtered?.map((card: any, i: number )=> <Card key={i} item={card} />)}
            </Grid>
            <div>
                <button
                    disabled={currentPage <= 1}
                    onClick={()=>{
                        setCurrentPage(previousValue => previousValue - 1)
                    }}
                >Prev. page</button>
                <span>Page {currentPage} from {maxCardsPages}</span>
                <button
                    disabled={currentPage >= maxCardsPages}
                    onClick={()=>{
                        setCurrentPage(previousValue => previousValue + 1)
                    }}
                >Next page</button>
            </div>
            <PdPagination pages={maxCardsPages} />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    margin: 20px auto;
    height: auto;
    width: 900px;
    padding-bottom: 30px;
`