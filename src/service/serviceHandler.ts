const serviceHandler = async (service: any) => {
    try {
        const res = await service();
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err)
        return err;
    }
}
export default serviceHandler