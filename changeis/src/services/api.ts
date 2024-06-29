
import { FakerResourcesEnum } from '../services/enums';

class ApiCalls {
    async getFakerData(resource: FakerResourcesEnum, quantity: Number) {
        let res = await fetch(`https://fakerapi.it/api/v1/${resource}?_quantity=${quantity}`);
        let data = await res?.json();
        return data?.data?.length > 0 ? data.data : null;
    }
}
export default ApiCalls;