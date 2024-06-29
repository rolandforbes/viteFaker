
import { FakerResourcesEnum } from '../services/enums';

class ApiCalls {
    async getFakerData(resource: FakerResourcesEnum) {
        let res = await fetch(`https://fakerapi.it/api/v1/${resource}?_width=380`);
        return res;
    }
}
export default ApiCalls;