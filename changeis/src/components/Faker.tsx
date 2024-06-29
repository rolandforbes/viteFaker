import { useEffect, useState } from 'react';
import ApiCalls from '../services/api';
import { FakerResourcesEnum } from '../services/enums';

interface IFakerProps {
    showFakerAPI: boolean
}

const Faker = ({ showFakerAPI }: IFakerProps) => {
    const api = new ApiCalls();
    const [activeResource, setActiveResource] = useState<FakerResourcesEnum | null>(null);
    const [apiData, setApiData] = useState<any>(null);

    useEffect(() => {
        getDataFromFakerAPI();
    }, [activeResource]);

    const getDataFromFakerAPI = async () => {
        if(!activeResource) return;
        const dataFromAPI = await api.getFakerData(activeResource);
        if(dataFromAPI) {
            console.log("data from faker API is: ", dataFromAPI);
            setApiData(dataFromAPI);
        }
    }

    const mapActiveResourceToHTML = () => {
        switch(activeResource) {
            case FakerResourcesEnum.Images: return null;
            default: return <></>;
        }
    }

    return <div className={[showFakerAPI ? 'grow-tall' : 'shrink-down', 'border-bottom border-top'].join(' ')}>
        {showFakerAPI && <>
            <h3 className='fw-bold'>
                What kind of data are you looking for?
            </h3>
            {mapActiveResourceToHTML()} 
        </>}
    </div>;
}
export default Faker;