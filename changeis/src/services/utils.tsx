import { GoogleMap } from '@react-google-maps/api';
import noImage from '../assets/noimage.png';

class Utils {
    imageUI(apiData: any) {
        return <div className='my-3'>
            <img alt='no image found'
                className='opacity-50'
                src={noImage}
                style={{ height: '30vh', objectFit: 'contain', width: '100%' }} />
            <p className='text-end text-xs'>
                <p className='mb-2'>
                    <span className='red'>*Faker images not rendering for some reason..</span>
                </p>
                <div className='d-flex justify-content-end'>
                    <span className='w-50'>
                        <b className='blue'>URL:</b>{apiData?.url}<br />
                        <b className='brown'>DESCRIPTION:</b>{apiData?.description}
                    </span>
                </div>
            </p>
        </div>;
    }
    jsonUI(apiData: any) {
        return apiData && <p>
            <pre className='json'>{JSON.stringify(apiData, null, '\t')}</pre>
        </p>;
    }

    calculateUIFromResourceType(resourceType: string, apiData: any, setSelected: any, isLoaded: boolean, centerOfMap: any) {
        switch (resourceType) {
            case 'addresses': return this.mapUI(apiData, setSelected, isLoaded, centerOfMap);
            case 'images': return this.imageUI(apiData);
            case 'places': return this.mapUI(apiData, setSelected, isLoaded, centerOfMap);
            default: return this.jsonUI(apiData);
        }
    }

    mapUI(selected: any, setSelected: any, isLoaded: boolean, centerOfMap: any) {
        return isLoaded && <div className='my-3'>
            <GoogleMap center={centerOfMap} 
                mapContainerStyle={{ border: '2px solid white', borderRadius: '10px', width: '100%', height: '34vh' }}
                mapContainerClassName='map-container'
                onDragEnd={() => selected && setSelected({ lat: selected.getCenter().lat(), lng: selected.getCenter().lng() })}
                onLoad={m => { m.setOptions({ minZoom: 4, maxZoom: 18, zoom: 12 }); setSelected(m); }}
                options={{ gestureHandling: "greedy" }}
                zoom={8} />
            <p className='text-end'>
                {selected?.street && <><b className='red'>Address</b>: {selected.street}<br /></>}
                {selected?.city && <><b className='blue'>City</b>: {selected.city}<br /></>}
                {selected?.county_code && <><b className='brown'>County Code</b>: {selected.county_code}<br /></>}
                {selected?.zipcode && <><b className='green'>ZIP Code</b>: {selected.zipcode}<br /></>}
                {selected?.country && <><b className='pink'>Country</b>: {selected.country}<br /></>}
            </p>
        </div>;
    }
}
export default Utils;