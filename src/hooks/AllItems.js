import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getItems } from "./reducers/Index";

export const AllItems = () => {

    const dispatch = useDispatch();

    const getAllItems = () => {
        const url = `https://646312614dca1a661353d0ee.mockapi.io/api/Files`;

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                dispatch(getItems(response));
            })
    }

    return {
        getAllItems
    }
}