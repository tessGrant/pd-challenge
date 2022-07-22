import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Grid } from '../components/pdGrid';
import { getCards } from '../utils/api/fetchServices';
import { Card } from './CardComponent';
import { Header } from './Header';
import Pagination from '@material-ui/lab/Pagination';

export const MainContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [filtered, setFiltered] = useState([]);
    const  {data, isLoading, isError} = useQuery(["cards", currentPage], () => getCards(currentPage ))

    const handleChange = (e:React.ChangeEvent<unknown>, p:number) => {
        setCurrentPage(p);
    };

    
    useEffect(() => {
        setFiltered(data);
    }, [data])

    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        return <div>An error occured 😭</div>;
    }
    return (
        <StyledContainer>
            <Header></Header>
            <Grid>
                {filtered?.map((card: any, i: number )=> <Card key={card.id} item={card} />)}
            </Grid>
            <StyledPagination>
                <Pagination page={currentPage} count={3} onChange={handleChange} size="large"/>
            </StyledPagination>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    margin: 20px auto;
    height: auto;
    width: 900px;
    padding-bottom: 30px;
`;

const StyledPagination = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;