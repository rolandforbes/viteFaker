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
    const [dataQuantity, setDataQuantity] = useState<Number>(1);

    useEffect(() => {
        getDataFromFakerAPI();
    }, [activeResource]);

    useEffect(() => {
        console.log("api data is", apiData, activeResource)
    }, [apiData]);

    const getDataFromFakerAPI = async () => {
        if(!activeResource) return;
        const dataFromAPI = await api.getFakerData(activeResource, dataQuantity);
        if(dataFromAPI) {
            setApiData(dataFromAPI);
        }
    }

    const mapActiveResourceToHTML = () => {
        if(!apiData || apiData?.length === 0) return null;
        switch(activeResource) {
            case FakerResourcesEnum.images: return <img src={apiData[0].url} style={{ width: '20px', height: '20px'}} />;
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
                    <button className={['w-100', activeResource === FakerResourcesEnum[key] ? 'light-button' : ''].join(' ')} 
                        onClick={() => setActiveResource(FakerResourcesEnum[key])}>
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