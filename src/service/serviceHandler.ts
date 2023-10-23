import { toast } from "react-toastify";

function getErrorMessageFromResponseBody(string: string) {
  let errorString = string;
  try {
    let json = JSON.parse(string);
    if (json.errors) {
      errorString = json.errors[0].msg;
    }
  } catch (parseOrAccessError) {
    //catch
  }

  return errorString;
}

const serviceHandler = async (service: string, init?: any) => {
  try {
    const res = await fetch(service, init);
    if (!res.ok) {
      let responseText = await res.text();
      let errorString = getErrorMessageFromResponseBody(responseText);
      throw new Error(errorString);
    } else {
      const data = await res.json();
      return data;
    }
  } catch (err: any) {
    toast.error(err.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return {
      status: 500,
      err: err,
    };
  }
};
export default serviceHandler;
