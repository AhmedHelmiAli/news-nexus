import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";

interface Props {
  newItem: Item;
}

const Article: React.FC<Props> = ({ newItem }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = newItem.urlToImage;
    img.onload = () => setIsLoaded(true);
  }, [newItem.urlToImage]);

  return (
    <article className="border border-gray-200 rounded-lg shadow ">
      <div>
        {!isLoaded && (
          <img
            className="object-cover w-full rounded-t-lg aspect-video md:aspect-square"
            src="./image-placeholder.svg"
            alt=""
          />
        )}
        {isLoaded && (
          <img
            className="object-cover w-full rounded-t-lg aspect-video md:aspect-square"
            src={newItem.urlToImage}
            alt=""
          />
        )}
      </div>

      <div className="p-2 lg:p-3">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 line-clamp-2">
          {newItem.title}
        </h5>

        <p className="mb-3 text-sm font-normal text-gray-700 sm:line-clamp-3">
          {newItem.content}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
        </a>
      </div>
    </article>
  );
};

export default Article;
