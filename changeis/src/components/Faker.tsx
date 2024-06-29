import { useEffect } from "react";
import ApiCalls from "../services/api";

interface IFakerProps {
    showFakerAPI: boolean
}

const Faker = ({ showFakerAPI }: IFakerProps) => {
    const api = new ApiCalls();

    useEffect(() => {
        if(showFakerAPI) {
            getDataFromFakerAPI();
        }
    }, [showFakerAPI]);

    const getDataFromFakerAPI = async () => {
        const dataFromAPI = await api.getFakerData();
        if(dataFromAPI) console.log("data from faker API is: ", dataFromAPI);
    }

    return <>
        
    </>;
}
export default Faker;