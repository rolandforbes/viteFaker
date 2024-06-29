
class ApiCalls {
    async getFakerData() {
        let res = await fetch(`https://fakerapi.it/api/v1/images?_width=380`);
        return res;
    }
}
export default ApiCalls;