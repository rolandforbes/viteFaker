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

    useEffect(() => {
        console.log("api data is", apiData)
    }, [apiData]);

    const getDataFromFakerAPI = async () => {
        if(!activeResource) return;
        const dataFromAPI = await api.getFakerData(activeResource);
        if(dataFromAPI) {
            setApiData(dataFromAPI);
        }
    }

    const mapActiveResourceToHTML = () => {
        switch(activeResource) {
            case FakerResourcesEnum.images: return null;
            default: return <></>;
        }
    }

    const selectDataType = () => {
        return <div>
            <h3 className='fw-bold'>
                Select data type:
            </h3>
            {(Object.keys(FakerResourcesEnum) as Array<keyof typeof FakerResourcesEnum>).filter((v) => !isNaN(Number(v))).map(key => {
                return <div className='mb-1' key={key}>
                    <button className={['w-100', activeResource === FakerResourcesEnum[key] ? 'light-button' : ''].join(' ')} onClick={() => setActiveResource(FakerResourcesEnum[key])}>
                        {FakerResourcesEnum[key]}
                    </button>
                </div>;
            })}
        </div>;
    }

    return <div className={[showFakerAPI ? 'grow-tall' : 'shrink-down', 'border-bottom border-top'].join(' ')}>
        {showFakerAPI && <>
            <div className='align-items-center d-flex gap-2'>
                {selectDataType()}
                <div>
                    {mapActiveResourceToHTML()}
                </div>
            </div>
        </>}
    </div>;
}
export default Faker;