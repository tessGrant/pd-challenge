import { useQuery } from "react-query"
import { filterByKey, getCards } from "../api/fetchServices";

export const useGetCards = (filter: boolean, filters?: any, pageNum?: number) => {   
    const queryKey = filter ? filters : pageNum;
    const queryFunc = filter ? filterByKey(filters) : getCards(pageNum);

    return useQuery(["cards", queryKey], () => queryFunc);
}