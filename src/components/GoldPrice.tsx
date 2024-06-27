import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function GoldPrice() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>("");

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-eoh10slxx7kh6y-io");
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.goldapi.io/api/XAU/EGP",
          requestOptions
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        } else {
          setData(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error as string} />;

  return (
    <>
      <div>
        <h2 className="mb-3 text-lg font-bold capitalize lg:text-2xl">
          gold prices per gram
        </h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">10K Gold</h3>
            <p>£{data["price_gram_10k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">14K Gold</h3>
            <p>£{data["price_gram_14k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">16K Gold</h3>
            <p>£{data["price_gram_16k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">18K Gold</h3>
            <p>£{data["price_gram_18k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">20K Gold</h3>
            <p>£{data["price_gram_20k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">21K Gold</h3>
            <p>£{data["price_gram_21k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">22K Gold</h3>
            <p>£{data["price_gram_22k"]?.toFixed(2)}</p>
          </div>
          <div className="px-2 py-1 text-lg text-blue-800 bg-blue-100 rounded shadow-sm">
            <h3 className="mb-1 font-semibold">24K Gold</h3>
            <p>£{data["price_gram_24k"]?.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
