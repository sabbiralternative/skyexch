import { Fragment } from "react";
import WhatsApp from "../../components/modules/Home/WhatsApp";
import CasinoSlider from "../../components/modules/Home/CasinoSlider";
import { useIndexQuery } from "../../hooks";
import Banner from "../../components/modules/Home/Banner";
import HighlightCasino from "../../components/modules/Home/HighlightCasino";
import OurProvider from "../../components/modules/Home/OurProvider";

const Home = () => {
  const { data: casino } = useIndexQuery({
    type: "99_casino_dashboard",
  });

  return (
    <Fragment>
      <div className="w-full md:max-w-[76%] flex flex-col flex-1 m-auto overflow-auto hide-scrollbar bg-white pb-32 pb-[65px] md:pb-1">
        <div className="flex flex-col gap-[2px]">
          <Banner />
          <div className="relative -top-1.5 flex flex-col space-y-0.5">
            <HighlightCasino highlight_casino={casino?.highlight_casino} />
            <div className="flex flex-col gap-0.5">
              <CasinoSlider data={casino?.new_launch} title="New Launch" />
              <CasinoSlider
                data={casino?.my_favourites}
                title="My Favourites"
              />
            </div>
          </div>
          <OurProvider our_provider={casino?.our_provider} />
          <div className="flex-col flex items-center sm:px-0 md:px-20 gap-3">
            <div className="flex flex-col md:flex-row w-full max-w-[670px] mx-auto rounded-lg border border-black2 overflow-hidden md:min-h-[140px]">
              <div className="flex justify-center items-center w-full md:w-auto md:border-r border-r-black2 px-2 py-1 md:py-0">
                <img
                  src="data:image/svg+xml,%3csvg%20width='135'%20height='100'%20viewBox='0%200%20135%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5610_1161)'%3e%3cpath%20d='M87.2344%202.1829C87.2344%202.1829%20121.38%202.16181%20132.368%2050.7329C139.243%2015.1587%20126.151%20-7.32359%2087.2344%202.1829Z'%20fill='%23FFDE91'/%3e%3cpath%20d='M87.234%202.18262C86.8649%202.27225%2076.0561%205.23018%2061.7041%2011.2198C61.7041%2011.2198%20121.458%2016.1497%20123.093%2081.7144C126.267%2074.9602%20129.061%2065.9019%20131.719%2053.8857C131.951%2052.8311%20132.167%2051.7819%20132.367%2050.7485V50.7327C121.379%202.16153%2087.234%202.18262%2087.234%202.18262Z'%20fill='%233B92D1'/%3e%3cpath%20d='M61.7044%2011.2197H61.6991C54.7973%2014.0986%2047.0888%2017.6787%2039.3223%2021.9758C53.495%2028.0235%2081.9723%2041.9589%2096.899%2061.573C108.594%2076.9373%20112.885%2087.6671%20114.42%2094.0205C117.657%2091.2102%20120.504%2087.2294%20123.093%2081.7143C121.459%2016.1496%2061.7044%2011.2197%2061.7044%2011.2197Z'%20fill='%23EE1B23'/%3e%3cpath%20d='M39.3229%2021.9761C32.864%2025.5509%2026.3629%2029.6213%2020.273%2034.2032C18.9127%2035.2261%2017.6367%2036.2173%2016.4346%2037.1822C25.688%2040.2825%2048.223%2049.035%2067.9056%2066.1129C78.5141%2075.3189%2080.9026%2086.8026%2080.0642%2097.0789C84.7885%2098.8927%2089.8765%2099.9999%2095.5024%2099.9999C103.163%2099.9999%20109.28%2098.4867%20114.42%2094.0208C112.886%2087.6673%20108.594%2076.9376%2096.8996%2061.5732C81.9729%2041.9592%2053.4956%2028.0237%2039.3229%2021.9761Z'%20fill='%23681E5B'/%3e%3cpath%20d='M67.9051%2066.1128C48.2225%2049.0349%2025.6874%2040.2824%2016.434%2037.1821C13.1123%2039.8395%2010.3811%2042.2702%208.16134%2044.4899C6.86956%2045.787%205.74649%2047.005%204.78688%2048.1597C-2.71074%2057.1863%20-0.380259%2061.9686%204.78688%2063.9036C5.81504%2064.2885%206.95919%2064.5627%208.16134%2064.7314C8.43024%2064.7683%208.70442%2064.8052%208.97859%2064.8316C19.2285%2065.8809%2038.5578%2069.2553%2051.481%2078.688C60.4602%2085.2365%2069.3234%2092.9662%2080.0637%2097.0788C80.902%2086.8025%2078.5135%2075.3188%2067.9051%2066.1128Z'%20fill='%23BA1F61'/%3e%3cpath%20d='M84.1557%2048.123V55.8684C84.1557%2059.7754%2087.3246%2062.939%2091.2316%2062.939H99.673C102.979%2062.939%20105.758%2060.6718%20106.533%2057.6137H112.396V61.3414C112.396%2065.2484%20109.227%2068.4119%20105.32%2068.4119H85.5846C81.6776%2068.4119%2078.5088%2065.2484%2078.5088%2061.3414V42.65C78.5088%2038.743%2081.6776%2035.5742%2085.5846%2035.5742H105.32C109.227%2035.5742%20112.396%2038.743%20112.396%2042.65V44.8013H105.921C104.735%2042.5709%20102.378%2041.0472%2099.673%2041.0472H91.2316C87.3246%2041.0472%2084.1557%2044.216%2084.1557%2048.123Z'%20fill='white'/%3e%3cpath%20d='M46.4243%2048.123V55.8684C46.4243%2059.7754%2049.5931%2062.939%2053.5001%2062.939H61.9415C65.8485%2062.939%2069.0174%2059.7754%2069.0174%2055.8684V55.2094H58.1611V50H74.6643V61.3414C74.6643%2065.2484%2071.5007%2068.4119%2067.5938%2068.4119H47.8532C43.9462%2068.4119%2040.7773%2065.2484%2040.7773%2061.3414V42.65C40.7773%2038.743%2043.9462%2035.5742%2047.8532%2035.5742H67.5938C71.5007%2035.5742%2074.6643%2038.743%2074.6643%2042.65V43.9313H67.6465C66.3547%2042.1808%2064.2773%2041.0472%2061.9415%2041.0472H53.5001C49.5931%2041.0472%2046.4243%2044.216%2046.4243%2048.123Z'%20fill='white'/%3e%3cpath%20d='M115.111%2036.6811V39.5283H114.51V36.6811H112.986V36.1538H116.635V36.6811H115.111Z'%20fill='white'/%3e%3cpath%20d='M118.929%2039.5336L117.626%2036.7023V39.5336H117.041V36.1592H117.974L119.187%2038.8007L120.4%2036.1592H121.312V39.5336H120.721V36.7023L119.419%2039.5336H118.929Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5610_1161'%3e%3crect%20width='134.119'%20height='100'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="gc-image"
                  className="w-[120px] h-auto md:w-[120px] object-contain"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 sm:gap-3 md:p-3 p-1 md:px-4 w-full">
                <img
                  src="/src/assets/img/LIC-CzdZQF4t.svg"
                  alt="lic-image"
                  className="max-w-[100px] w-full h-auto object-contain"
                />
                <span className="text-[11px] text-center md:text-left leading-snug">
                  Laser is the trading name of Sports Target B.V., a company
                  incorporated and regulated in Curaçao under company number
                  148053 with its registered office at Fransche Bloemweg 4,
                  Willemstad, Curaçao.
                </span>
              </div>
            </div>
            <div className="hidden w-full md:flex flex-col gap-2 items-center md:px-12 lg:px-20">
              <div className="text-center text-xs text-gray5 px-4">
                Our website works best in the newest and last prior version of
                these browsers: Google Chrome. Firefox
              </div>
              <div className="h-[1px] w-[76%] bg-black2" />
            </div>
            <div className="grid grid-cols-10 md:flex justify-center w-full text-[13px] md:text-[11px] text-black3 md:text-black underline gap-3 text-center">
              <span className="col-span-4 cursor-pointer text-right">
                Privacy Policy
              </span>
              <span className="col-span-4 cursor-pointer text-right">
                Terms And Conditions
              </span>
              <span className="col-span-6 cursor-pointer text-left">
                Rules And Regulations
              </span>
              <span className="col-span-4 cursor-pointer">About Us</span>
              <span className="col-span-4 cursor-pointer">
                Responsible Gaming
              </span>
            </div>
          </div>
        </div>
      </div>

      <WhatsApp />
    </Fragment>
  );
};

export default Home;
