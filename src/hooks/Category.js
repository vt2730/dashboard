import { useDispatch } from "react-redux";
import { getCategory } from "./reducers/Index";

export const Category = () => {

    const dispatch = useDispatch();

    const getAllCategory = () => {
        const url = `https://646312614dca1a661353d0ee.mockapi.io/api/Category`;

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                dispatch(getCategory(response));
            })
    }

    return {
        getAllCategory 
    }
}