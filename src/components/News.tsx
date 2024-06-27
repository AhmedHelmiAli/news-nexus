import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";
import Article from "./Article";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const apiUrl =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2e8a46212cb247a7b06bad0db11d616D";

export default function News() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>("");
  const news: Array<Item> = data?.articles;

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === "error") {
          throw new Error(data.message);
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
      <h2 className="px-2 mb-2 text-lg font-bold capitalize lg:text-2xl ">
        latest news
      </h2>
      <ul className="flex flex-wrap sm:gap-[2%] md:gap-[2%] lg:gap-[2%]">
        {news?.map((newItem) => (
          <li
            key={crypto.randomUUID()}
            className="w-full sm:w-[49%] md:w-[32%] lg:w-[23%] mb-3"
          >
            <Article newItem={newItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
