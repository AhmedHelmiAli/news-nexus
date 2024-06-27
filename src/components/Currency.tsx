import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

export default function Currency() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>("");
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("EGP");
  const [amount, setAmount] = useState<number>(1);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/ac9a9b895ef8e5b84455e1bf/latest/${from}`
      );

      const data = await response.json();
      if (data.result === "error") {
        throw new Error(data["error-type"]);
      } else {
        setData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error as string} />;

  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-bold lg:text-2xl">
          Currency Converter
        </h2>
      </div>
      <div className="px-5 py-2 border border-gray-200 rounded-lg shadow">
        <div className="flex justify-between mb-3 ">
          <div>
            <label
              htmlFor="from-currency"
              className="block mb-2 text-sm font-medium"
            >
              From:
            </label>
            <select
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              id="from-currency"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full p-2.5"
            >
              <option value={"USD"}>USD</option>
              <option value={"GBP"}>GBP</option>
              <option value={"EUR"}>EUR</option>
              <option value={"EGP"}>EGP</option>
              <option value={"AED"}>AED</option>
              <option value={"SAR"}>SAR</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="to-currency"
              className="block mb-2 text-sm font-medium"
            >
              To:
            </label>
            <select
              onChange={(e) => setTo(e.target.value)}
              value={to}
              id="to-currency"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full p-2.5"
            >
              <option value={"EGP"}>EGP</option>
              <option value={"USD"}>USD</option>
              <option value={"GBP"}>GBP</option>
              <option value={"EUR"}>EUR</option>
              <option value={"AED"}>AED</option>
              <option value={"SAR"}>SAR</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[30%]">
            <input
              type="number"
              min={1}
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none w-full focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
              placeholder="Enter amount"
            />
          </div>
          <button
            type="button"
            onClick={getData}
            className="bg-indigo-500 text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Convert
          </button>
        </div>

        {data?.["conversion_rates"] && (
          <p className="py-1 text-lg font-semibold">
            {data?.["conversion_rates"]?.[to] * amount}
          </p>
        )}
      </div>
    </>
  );
}
