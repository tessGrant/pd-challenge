import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../components/pdGrid';
import { Card } from './CardComponent';
import { Header } from './Header';
import Pagination from '@material-ui/lab/Pagination';
import FormControl from '@material-ui/core/FormControl';
import { FilterCards } from './filter';
import { useGetCards } from 'src/utils/hooks/useQueryHook';

export const MainContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterKey, setFilterKey] = useState("");
    const [filters, setFilters] = useState({ filterKey: "", filterValue: ""});
    const [isFiltering, setIsFiltering] = useState(false);
    const [cleanFilter, setCleanFilter] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [filtered, setFiltered] = useState([]);

    const  {data, isLoading, isError} = useGetCards(isFiltering, filters, currentPage);

    const dataKeys = [
        {
          keyName: "title",
          label: "Card title"
        }
      ]

    const handlePageChange = (e:React.ChangeEvent<unknown>, p:number) => {
        setCurrentPage(p);
    };

    const handleValueChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setFilterValue(event.target.value as string);
      };
    
    const handleKeyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setFilterKey(event.target.value as string);
    };

    const submitFilter = () => {
        setIsFiltering(true);
        if(cleanFilter) {
          setFilterKey("");
          setFilterValue("");
          setIsFiltering(false);
        }
        const obj = {
          filterKey: filterKey,
          filterValue: filterValue
        };
        setFilters(obj);
        setCleanFilter(true);
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
            <Header>
                <FilterCards
                    filterKey={filterKey}
                    filterValue={filterValue}
                    dataKeys={dataKeys}
                    handleKeyChange={(e: any)=>handleKeyChange(e)}
                    handleValueChange={(e: any) => handleValueChange(e)}
                    onSubmitfunc={submitFilter}
                    cleanState={cleanFilter}
                />
            </Header>
            <Grid>
                {filtered?.map((card: any, i: number )=> <Card key={card.id} item={card} />)}
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

const StyledInput = styled(FormControl)`
  width: 180px;
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