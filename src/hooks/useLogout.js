import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () =>{
    const {setAuth} = useAuth();
    const logout = async () =>{
        setAuth({});
        try {
            const res = await axios.post('/logout')
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return logout
}
export default useLogout