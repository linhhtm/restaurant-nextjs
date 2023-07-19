const serviceHandler = async (service: string, init?: any) => {
  try {
    const res = await fetch(service, init);
    if (!res.ok) {
      return;
    } else {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
export default serviceHandler;
