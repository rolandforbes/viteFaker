import { GoogleMap } from '@react-google-maps/api';

class Utils {
    booksUI() {
        return <div>
            Books stuff will go here!
        </div>;
    }

    calculateUIFromResourceType(resourceType: string, selected: any, setSelected: any, isLoaded: boolean, centerOfMap: any) {
        switch (resourceType) {
            case 'addresses': return this.mapUI(selected, setSelected, isLoaded, centerOfMap);
            case 'books': return this.booksUI();
            default: return <></>;
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