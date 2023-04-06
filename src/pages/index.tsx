import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Card details</title>
        <meta name="description" content="" />
      </Head>
      <main className="flex flex-col min-h-screen min-w-screen">
        <div className="bg-[url('/bg-main-mobile.png')] w-screen h-2/5"></div>
        <div className="w-screen h-3/5 flex flex-col space-y-4 p-8">
          <div>
            <h1 className="text-xs text-[#220930] m-1 ml-0">CARDHOLDER NAME</h1>
            <input type="text" placeholder="e.g. Jane Appleseed" className="w-full p-2 pl-4 placeholder:font-semibold border rounded-lg" />
          </div>
          <div>
            <h1 className="text-xs text-[#220930] m-1 ml-0">CARD NUMBER</h1>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" className="w-full p-2 pl-4 placeholder:font-semibold border rounded-lg" />
          </div>
          <div className="flex space-x-2">
            <div className="flex flex-col w-1/2">
              <h1 className="text-xs text-[#220930] m-1 ml-0">EXP. DATE (MM/YY)</h1>
              <div className="flex space-x-1">
                <input type="text" placeholder="MM" className="w-1/2 border rounded-lg p-2 pl-4 placeholder:font-semibold"/>
                <input type="text" placeholder="YY" className="w-1/2 border rounded-lg p-2 pl-4 placeholder:font-semibold" />
              </div>
            </div>
            <div>
              <h1 className="text-xs text-[#220930] m-1 ml-0">CVC</h1>
              <input type="text" placeholder="e.g. 123" className="w-full border rounded-lg p-2 pl-4 placeholder:font-semibold" />
            </div>
          </div>
          <button className="p-4 text-center rounded-lg text-white font-semibold bg-[#220930]">Confirm</button>
        </div>
      </main>
    </>
  );
};

export default Home;
