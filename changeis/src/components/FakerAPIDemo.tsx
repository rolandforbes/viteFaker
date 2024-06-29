import { useEffect, useMemo, useState } from 'react';
import ApiCalls from '../services/api';
import { FakerResourcesEnum } from '../services/fakerResources';
import { useLoadScript } from '@react-google-maps/api';
import Utils from '../services/utils';

interface IFakerProps {
    showFakerAPI: boolean
}

const FakerAPIDemo = ({ showFakerAPI }: IFakerProps) => {
    const api = new ApiCalls();
    const utils = new Utils();

    const [activeResource, setActiveResource] = useState<string>('');
    const [apiData, setApiData] = useState<any>(null);
    const centerOfMap = useMemo(() => ({ 
        lat: apiData?.latitude ? apiData.latitude : null, 
        lng: apiData?.longitude ? apiData.latitude : null
    }), [apiData]);
    const [quantity, setQuantity] = useState<Number>(1);
    const { isLoaded } = useLoadScript({ googleMapsApiKey: 'AIzaSyAZNiyxrXmftyRky4Fmu8A-9qO0LLcXNe8', libraries: ['places'] });

    useEffect(() => {
        getDataFromFakerAPI();
    }, [activeResource]);

    useEffect(() => {
        console.log('api data is', apiData);
    }, [apiData]);

    const getDataFromFakerAPI = async () => {
        const dataFromAPI = activeResource && await api.getFakerData(activeResource, quantity);
        if(dataFromAPI?.length > 0) {
            setApiData(dataFromAPI[0]);
        }
    }

    const selectDataTypeList = () => {
        return <div>
            <h3 className='fw-bold'>Select data type:</h3>
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
            <div className={['d-flex gap-2', !activeResource ? 'align-items-center' : ''].join(' ')}>
                {selectDataTypeList()}
                <div className='flex-fill ms-3'>
                    {utils?.calculateUIFromResourceType(activeResource, apiData, setApiData, isLoaded, centerOfMap)}
                </div>
            </div>
        </>}
    </div>;
}
export default FakerAPIDemo;