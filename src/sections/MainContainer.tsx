import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Grid } from '../components/pdGrid';
import { getCards } from '../utils/api/fetchServices';
import { Card } from './CardComponent';
import { Header } from './Header';

export const PdContainer = () => {
    const  {data, isLoading, isError} = useQuery(["cards"], getCards)
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
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    margin: 20px auto;
    height: auto;
    width: 900px;
    padding-bottom: 30px;
`