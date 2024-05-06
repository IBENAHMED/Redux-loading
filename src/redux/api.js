import axios from "axios";
import { succesUser, startUser, errUser } from "./useSlice";

export const addUser = async (user, dispatch) => {
    dispatch(startUser());
    try {
        const res = await axios.post("http://localhost:5000/api/users", user);
        dispatch(succesUser(res.data));
    } catch {
        dispatch(errUser());
    };
};