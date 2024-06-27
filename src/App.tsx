import AppNav from "./components/AppNav";
import Currency from "./components/Currency";
import GoldPrice from "./components/GoldPrice";
import News from "./components/News";

function App() {
  return (
    <>
      <AppNav />
      <div className="grid grid-cols-1 mx-auto max-w-7xl md:gap-2 md:grid-cols-3">
        <section className="col-span-2 p-3 md:max-h-screen-minus-5rem md:overflow-y-auto">
          <News />
        </section>
        <div className="self-start p-3 md:flex md:flex-col md:max-h-screen-minus-5rem md:overflow-y-auto">
          <section className="mb-5">
            <GoldPrice />
          </section>
          <section>
            <Currency />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;

// newsApiKey 2e8a46212cb247a7b06bad0db11d616d
// goldApiKey goldapi-ckr3slxv61cyg-io
// currencyApiKey ac9a9b895ef8e5b84455e1bf
