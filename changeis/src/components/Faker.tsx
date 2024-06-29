import { useEffect, useMemo, useState } from 'react';
import ApiCalls from '../services/api';
import { FakerResourcesEnum } from '../services/fakerResources';
import Utils from '../services/utils';
import { useLoadScript } from '@react-google-maps/api';

interface IFakerProps {
    showFakerAPI: boolean
}

const Faker = ({ showFakerAPI }: IFakerProps) => {
    const api = new ApiCalls();
    const utils = new Utils();

    const [activeResource, setActiveResource] = useState<string>('');
    const [apiData, setApiData] = useState<any>(null);
    const [map, setMap] = useState<any>();
    const [quantity, setQuantity] = useState<Number>(1);
    const [selected, setSelected] = useState<any>();
    const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyAZNiyxrXmftyRky4Fmu8A-9qO0LLcXNe8', libraries: ["places"] });
    const center = useMemo(() => ({ lat: apiData?.latitude ? apiData.latitude : 45.68, lng: apiData?.longitude ? apiData.latitude : -111.04 }), [selected]);

    useEffect(() => {
        getDataFromFakerAPI();
    }, [activeResource]);

    useEffect(() => {
        console.log('api data is', apiData, activeResource)
    }, [apiData]);

    const getDataFromFakerAPI = async () => {
        if(!activeResource) return;
        const dataFromAPI = await api.getFakerData(activeResource, quantity);
        if(dataFromAPI?.length > 0) {
            setApiData(dataFromAPI[0]);
        }
    }

    const selectDataTypeList = () => {
        return <div>
            <h3 className='fw-bold'>
                Select data type:
            </h3>
            {(Object.keys(FakerResourcesEnum)).map(key => {
                return <div className='mb-1' key={key}>
                    <button className={activeResource == key ? 'light-button' : ''} onClick={() => setActiveResource(key)}>
                        {key}
                    </button>
                </div>;
            })}
        </div>;
    }

    return <div className={[showFakerAPI ? 'grow-tall' : '', 'border-bottom border-top'].join(' ')}>
        {showFakerAPI && <>
            <div className='align-items-center d-flex gap-2'>
                {selectDataTypeList()}
                <div className='flex-fill ms-3'>
                    {utils?.calculateUIFromResourceType(activeResource, map, setMap, setSelected, isLoaded, center)}
                </div>
            </div>
        </>}
    </div>;
}
export default Faker;