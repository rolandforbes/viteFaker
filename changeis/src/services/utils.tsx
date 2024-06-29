import { GoogleMap } from '@react-google-maps/api';

class Utils {
    calculateUIFromResourceType(resourceType: any, map: any, setMap: any, setSelected: any, isLoaded: boolean, center: any) {
        switch (resourceType) {
            case 'addresses': return this.addressUI(map, setMap, setSelected, isLoaded, center);
            default: return this.noSelectionUI();
        }
    }

    addressUI(map: any, setMap: any, setSelected: any, isLoaded: boolean, center: any) {
        return isLoaded && <div className='text-center'>
            <GoogleMap center={center} 
                mapContainerStyle={{ border: '2px solid gray', borderRadius: '10px', width: '100%', height: '34vh' }}
                mapContainerClassName='map-container'
                onDragEnd={() => map && setSelected({ lat: map.getCenter().lat(), lng: map.getCenter().lng() })}
                onLoad={m => { m.setOptions({ minZoom: 4, maxZoom: 18, zoom: 12 }); setMap(m); }}
                options={{ gestureHandling: "greedy" }}
                zoom={4} />
                    <p className='opacity-50 text-end text-xs'>
                        *FakerAPI addresses aren't real, <b>but</b> it may successfully return lat/lng <br /> If not, show Bozeman!
                    </p>
        </div>;
    }

    noSelectionUI() {
        return <div className='text-center opacity-50'>
            No type selected
        </div>
    }
}
export default Utils;