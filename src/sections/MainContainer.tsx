import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../components/pdGrid';
import { Card } from './CardComponent';
import { Header } from './Header';
import Pagination from '@material-ui/lab/Pagination';
import { useGetCards } from 'src/utils/hooks/useQueryHook';
import TextField from '@material-ui/core/TextField';
import {useQueryClient} from 'react-query';
import { getCards } from 'src/utils/api/fetchServices';

export const MainContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ filterValue: ""});
    const [isFiltering, setIsFiltering] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [filtered, setFiltered] = useState([]);

    const queryClient = useQueryClient();

    const  {data, isLoading, isError, isFetching} = useGetCards(isFiltering, filters, currentPage);

    const handlePageChange = (e:React.ChangeEvent<unknown>, p:number) => {
        setCurrentPage(p);
    };

    const handleValueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setFilterValue(event.target.value as string);
      };
    
    const submitFilter = () => {
        setIsFiltering(true);
        const obj = {
          filterValue: filterValue
        };
        setFilters(obj);
    };
    
    useEffect(() => {
        setFiltered(data);
        const nexPage = currentPage + 1;
        queryClient.prefetchQuery(["cards", nexPage], () => getCards(nexPage));
    }, [data, currentPage])

    if (isLoading) return <div>Loading...</div>;
    if (isFetching) return <div>Data is fetching...</div>;
    if (isError) {
        return <div>An error occured 😭</div>;
    }
    return (
        <StyledContainer>
            <Header>
                <StyledInput onSubmit={submitFilter}>
                    <TextField onChange={handleValueChange} id="outlined-search" label="Search field" type="search" variant="outlined" />
                </StyledInput>
            </Header>
            <Grid>
                {(filtered && filtered?.length === 0) ? <div>No cards found ...</div> : filtered?.map((card: any )=> <Card key={card.id} item={card} />) }
            </Grid>
            <StyledPagination>
                <Pagination page={currentPage} count={3} onChange={handlePageChange} size="large"/>
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

const StyledInput = styled.form`
  width: 200px;
  padding-left: 5px;
  font-size: 14px;
`

const StyledPagination = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;