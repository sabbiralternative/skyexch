import { useSelector } from "react-redux";
import { useGroupQuery } from "../../redux/features/events/events";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import { Fragment } from "react";
import WhatsApp from "../../components/modules/Home/WhatsApp";

const Home = () => {
  const { data: lotusLobby } = useLotusHomeLobby();
  const { group } = useSelector((state) => state.global);

  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    },
  );

  return (
    <Fragment>
      <div className="w-full md:max-w-[76%] flex flex-col flex-1 m-auto overflow-auto hide-scrollbar bg-white pb-32 pb-[65px] md:pb-1">
        <div className="flex flex-col gap-[2px]">
          <div className="hidden md:block">
            <div className="flex flex-col md:gap-[1px] overflow-hidden" />
          </div>
          <div className="w-full">
            <div
              className="slick-slider home-banner-slider slick-initialized"
              dir="ltr"
            >
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-prev"
                style={{ display: "block" }}
              >
                Previous
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "4225px",
                    opacity: 1,
                    transform: "translate3d(-1690px, 0px, 0px)",
                  }}
                >
                  <div
                    data-index={-1}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "845px" }}
                  >
                    <div>
                      <div
                        className="w-full"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="/src/assets/img/banner-skyexch-B_5S3_YR.webp"
                          alt="banner-2"
                          className="w-full h-auto cursor-pointer object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={0}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "845px" }}
                  >
                    <div>
                      <div
                        className="w-full"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="/src/assets/img/main-banner-1-xp3XGuMw.webp"
                          alt="banner-1"
                          className="w-full h-auto cursor-pointer object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={1}
                    className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "845px" }}
                  >
                    <div>
                      <div
                        className="w-full"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="/src/assets/img/banner-skyexch-B_5S3_YR.webp"
                          alt="banner-2"
                          className="w-full h-auto cursor-pointer object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={2}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "845px" }}
                  >
                    <div>
                      <div
                        className="w-full"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="/src/assets/img/main-banner-1-xp3XGuMw.webp"
                          alt="banner-1"
                          className="w-full h-auto cursor-pointer object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={3}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "845px" }}
                  >
                    <div>
                      <div
                        className="w-full"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="/src/assets/img/banner-skyexch-B_5S3_YR.webp"
                          alt="banner-2"
                          className="w-full h-auto cursor-pointer object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-next"
                style={{ display: "block" }}
              >
                Next
              </button>
              <ul className="slick-dots" style={{ display: "block" }}>
                <li className>
                  <button>1</button>
                </li>
                <li className="slick-active">
                  <button>2</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative -top-1.5 flex flex-col space-y-0.5">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-0.5 w-full">
              <div className="w-full cursor-pointer relative col-span-4 md:col-span-6">
                <img
                  src="https://cdn.uvwin2024.co/mac88.gif"
                  alt="mac88"
                  className="w-full h-auto object-cover"
                />
                <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                    <span className="truncate">Mac88</span>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="w-full cursor-pointer relative col-span-2 md:col-span-3">
                <img
                  src="/src/assets/img/sports-banner-B8_8Up-D.webp"
                  alt="live-events"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute right-0 top-0 z-0 h-[calc(100%-32px)] bg-gradient-to-b from-black/95 to-black/30 w-[120px] md:w-[160px] text-white overflow-auto p-2">
                  <div className="w-16 h-5 overflow-hidden">
                    <img
                      className="object-cover h-4"
                      src="/src/assets/img/Live-DutKEkZT.svg"
                      alt="LiveGif"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Cricket</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        27
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Football</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        10
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Tennis</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        19
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Binary</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        1
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Politics</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        1
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>baseball</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        1
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Volleyball</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        1
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Table Tennis</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        3
                      </div>
                    </div>
                    <div className="text-[11px] leading-[10px] md:text-xs flex justify-between md:font-bold capitalize">
                      <div>Ice Hockey</div>
                      <div className="bg-white text-black rounded-sm py-[2px] px-1 font-normal">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                    <span className="truncate">Sports</span>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="w-full cursor-pointer relative col-span-2 md:col-span-3">
                <img
                  src="/src/assets/img/sportbook-A6agOWEZ.webp"
                  alt="sportsbook"
                  className="w-full h-auto object-cover"
                />
                <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                    <span className="truncate">Sports Book</span>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-0.5">
              <div className="hidden md:block relative">
                <img
                  src="/src/assets/img/aviator-Cb49ZjVs.gif"
                  alt="Aviator Game"
                  className="w-[100%] cursor-pointer"
                />
                <div className="flex w-full h-[33px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 uppercase break-words">
                    Aviator Game
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="/src/assets/img/mines-C-1eCwss.gif"
                  alt="Mines Game"
                  className="w-[100%] cursor-pointer"
                />
                <div className="flex w-full h-[33px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 uppercase break-words">
                    Mines Game
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="/src/assets/img/marble-run-DD5b2XVV.gif"
                  alt="Marble Run"
                  className="w-[100%] cursor-pointer"
                />
                <div className="flex w-full h-[33px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 uppercase break-words">
                    Marble Run
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="/src/assets/img/color_prediction-CN7wHO4x.gif"
                  alt="Chicken Games"
                  className="w-[100%] cursor-pointer"
                />
                <div className="flex w-full h-[33px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 uppercase break-words">
                    Chicken Games
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="md:hidden relative">
                <img
                  src="/src/assets/img/aviator-Cb49ZjVs.gif"
                  alt="Aviator Game"
                  className="w-[100%] h-[100px] sm:h-[113px] cursor-pointer"
                />
                <div className="flex w-full flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 capitalize break-words">
                    Aviator Game
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="md:hidden relative">
                <img
                  src="/src/assets/img/mines-C-1eCwss.gif"
                  alt="Mines Game"
                  className="w-[100%] h-[100px] sm:h-[113px] cursor-pointer"
                />
                <div className="flex w-full flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 capitalize break-words">
                    Mines Game
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="md:hidden relative">
                <img
                  src="/src/assets/img/marble-run-DD5b2XVV.gif"
                  alt="Marble Run"
                  className="w-[100%] h-[100px] sm:h-[113px] cursor-pointer"
                />
                <div className="flex w-full flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 capitalize break-words">
                    Marble Run
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="md:hidden relative">
                <img
                  src="/src/assets/img/color_prediction-CN7wHO4x.gif"
                  alt="Chicken Games"
                  className="w-[100%] h-[100px] sm:h-[113px] cursor-pointer"
                />
                <div className="flex w-full flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-goldenYellow">
                  <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-xs md:text-sm font-bold cursor-pointer min-w-0 capitalize break-words">
                    Chicken Games
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[13px] md:text-[16px] px-1.5 py-1 font-bold bg-goldenYellow text-black">
                  NEW LAUNCH
                </h2>
                <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/EZG_228000/__ANDAR-BAHAR.webp"
                        alt="Andar Bahar"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Andar Bahar</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/151026/__LANKESH.webp"
                        alt="Lankesh"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Lankesh</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/solitaire-DLPurGQ5.webp"
                        alt="Solitaire"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Solitaire</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/packs-BJoLGj68.webp"
                        alt="Packs"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Packs</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/naughty_button-D8uR1A0N.webp"
                        alt="Naughty Button"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Naughty Button</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/151181/__2-INSTANT-RUMMY.webp"
                        alt="Instant Rummy"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Instant Rummy</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/jhandi_munda-y7-UDV3W.webp"
                        alt="Jhandi Munda"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Jhandi Munda</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/twist_x-B88O91xa.webp"
                        alt="Twistx"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Twistx</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/deal_no_deal-BT7yh8D7.webp"
                        alt="Deal Or No Deal"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Deal Or No Deal</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/snakes-BdCozL5i.webp"
                        alt="Snakes"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Snakes</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/pump-DARDsGkc.webp"
                        alt="Pump"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Pump</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/151190/__1-VOLT-RUN.webp"
                        alt="Volt Run"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Volt Run</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[13px] md:text-[16px] px-1.5 py-1 font-bold bg-goldenYellow text-black">
                  RECOMMENDED GAMES
                </h2>
                <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/dragon_tiger-Eb89_2PZ.webp"
                        alt="Dragon Tiger"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Dragon Tiger</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/1day_dragon_tiger-EGiV4zG1.webp"
                        alt="1 Day Dragon Tiger"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">1 Day Dragon Tiger</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/dragon_tiger_2-CRchrSnb.webp"
                        alt="Dragon Tiger 2"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Dragon Tiger 2</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/baccarat-6g9_1iBo.webp"
                        alt="BACCARAT"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">BACCARAT</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/sicbo-G3OsW07v.webp"
                        alt="Sic Bo"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Sic Bo</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/roulette-3B9ZUssG.webp"
                        alt="Roulette"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Roulette</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/poker-D72je7c4.webp"
                        alt="Poker 1-Day"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Poker 1-Day</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/race20-DnqCVDeJ.webp"
                        alt="Race 20"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Race 20</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/test_teenpatti-Ds1bRHbk.webp"
                        alt="Test Teenpatti"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Test Teenpatti</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/5fivecricket-CfkRFL_f.webp"
                        alt="5 Five Cricket"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">5 Five Cricket</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/2020teenpatti-B84w6UUl.webp"
                        alt="20-20 Teenpatti"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">20-20 Teenpatti</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/2020teenpatti2-CPO6VZMm.webp"
                        alt="20 20 Teenpatti 2"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">20 20 Teenpatti 2</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/32cards-BWTXz7hb.webp"
                        alt="32 Cards"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">32 Cards</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/amar_akbar_anthony-ClhPvIeT.webp"
                        alt="Amar Akbar Anthony"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Amar Akbar Anthony</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/andarbahar-DGNZSt4i.webp"
                        alt="Andar Bahar"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Andar Bahar</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/bollywood_casino-CUtrnQZq.webp"
                        alt="Bollywood Casino "
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Bollywood Casino </span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/dream_wheel-BgyfzfW-.webp"
                        alt="Dream Wheel"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Dream Wheel</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/instant_2_card_teenpatti-DzNjBSEu.webp"
                        alt="Instant 2 Cards Teenpatti"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">
                            Instant 2 Cards Teenpatti
                          </span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/lucky7-C-B35qDO.webp"
                        alt="Lucky7"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Lucky7</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/muflis_teenpatti-DhrsPZs0.webp"
                        alt="Muflis Teenpatti"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Muflis Teenpatti</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/superover-KZP1SI9X.webp"
                        alt="SUPER OVER ONE DAY"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">SUPER OVER ONE DAY</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[13px] md:text-[16px] px-1.5 py-1 font-bold bg-goldenYellow text-black">
                  LIVE CASINO GAMES
                </h2>
                <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_bacbo-CC-E4PDI.webp"
                        alt="Bac Bo"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Bac Bo</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/classic_bet_stacker_blackjack-WOLJk0u_.webp"
                        alt="Bet Stacker Blackjack 1"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">
                            Bet Stacker Blackjack 1
                          </span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/blackjack_party-bQ_mvrgP.webp"
                        alt="Blackjack Party"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Blackjack Party</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_dt-CgRPB9bf.webp"
                        alt="Dragon Tiger"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Dragon Tiger</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/lightning_blackjack-B_KH8YhI.webp"
                        alt="Lightning Blackjack"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Lightning Blackjack</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_ld-C5kGxkp6.webp"
                        alt="Lightning Dice"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Lightning Dice</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/lightning_sic_bo-U80_py7W.webp"
                        alt="Lightning Sic Bo"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Lightning Sic Bo</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/marble_race-f0Ckc-Bm.webp"
                        alt="Marble Race"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Marble Race</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_rdr-6W_im2KZ.webp"
                        alt="Red Door Roulette"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Red Door Roulette</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_speedb-DFttoxcC.webp"
                        alt="Speed Baccarat A"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Speed Baccarat A</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_ssb-CGrW-sIl.webp"
                        alt="Super Sic Bo"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Super Sic Bo</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/evo_xlr-XlQksWlC.webp"
                        alt="XXXtreme Lightning Roulette"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">
                            XXXtreme Lightning Roulette
                          </span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[13px] md:text-[16px] px-1.5 py-1 font-bold bg-goldenYellow text-black">
                  SLOTS
                </h2>
                <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_372/__3-THREE-POT-DRAGONS.webp"
                        alt="3 Pot Dragons"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">3 Pot Dragons</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_228/__4-ARENA-FIGHTER.webp"
                        alt="Arena Fighter"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Arena Fighter</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_118/__1-BIG-SMALL.webp"
                        alt="Big Small"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Big Small</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_87/__2-BOOK-OF-GOLD.webp"
                        alt="Book of Gold"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Book of Gold</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/kingmidas_coin_toss-DqgVpXRp.webp"
                        alt="Coin Toss"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Coin Toss</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_469/__5-CRASH-CRICKET.webp"
                        alt="Crash Cricket"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Crash Cricket</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_604/__6-DROP-BALL.webp"
                        alt="Drop Ball"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Drop Ball</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_109/__7-FORTUNE-GEMS.webp"
                        alt="Fortune Gems"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Fortune Gems</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_10/__8-GEM-PARTY.webp"
                        alt="Gem Party"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Gem Party</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_4/__9-GOD-OF-MARTIAL.webp"
                        alt="God Of Martial"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">God Of Martial</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_397/__10-JHANDI-MUNDA.webp"
                        alt="Jhandi Munda"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Jhandi Munda</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_16/__11-JUNGLE-KING.webp"
                        alt="Jungle King"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Jungle King</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_51/__12-MONEY-COMING.webp"
                        alt="Money Coming"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Money Coming</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_324/__13-NIGHTFALL-HUNTING.webp"
                        alt="Nightfall Hunting"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Nightfall Hunting</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_76/__14-PARTY-NIGHT.webp"
                        alt="Party Night"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Party Night</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="/src/assets/img/gmz_pilot_coin-DOiRpjYW.webp"
                        alt="Pilot Coin"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Pilot Coin</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_113/__15-POKER-KING.webp"
                        alt="Poker King"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Poker King</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_100/__16-SUPER-RICH.webp"
                        alt="Super Rich"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Super Rich</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-shrink-0 w-[38%] md:w-[18%] lg:w-[15%] xl:w-[12%] 2xl:w-[10%] h-[210px] md:h-[190px]">
                    <div className="relative overflow-hidden flex-1">
                      <img
                        loading="lazy"
                        src="https://cdn.uvwin2024.co/casino/trending_thumbnail/JL_427/__18-THAI-HILOW.webp"
                        alt="Thai HIlo"
                        className="w-full h-full cursor-pointer object-cover"
                      />
                      <div className="flex w-full h-[32px] sm:h-[24px] flex-shrink-0 absolute bottom-0 left-0 right-0 border-b-4 border-[#ffb80c]">
                        <div className="flex flex-1 items-center bg-gradient-to-r from-black to-transparent text-white pl-2 pr-1 py-1 text-[11px] font-bold cursor-pointer min-w-0">
                          <span className="truncate">Thai HIlo</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center flex-shrink-0 bg-goldenYellow text-black px-2 pl-4 py-1 text-[11px] font-bold cursor-pointer min-w-[70px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] hover:opacity-90"
                        >
                          Play Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full py-[6px] px-[5px] text-[13px] md:text-[16px] uppercase my-[2px] font-bold text-black bg-goldenYellow">
              Top Providers
            </div>
            <div>
              <div className="grid grid-cols-3 pb-[1rem] md:mt-1 md:grid-cols-4 md:gap-1 gap-[1px] w-full">
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/mac88-CRGLTNsQ.webp"
                    alt="MAC88 LIVE"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        MAC88 LIVE
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/fun-games-Bit17XOl.webp"
                    alt="MAC88 FUN GAMES"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        MAC88 FUN GAMES
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/mac88-virtual-CBz_3hro.webp"
                    alt="MAC88 VIRTUALS"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        MAC88 VIRTUALS
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/spribe-CIkj7u62.webp"
                    alt="SPRIBE"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        SPRIBE
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/evolution-gaming-DpQV2-Fp.webp"
                    alt="Evolution"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        Evolution
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/turbo-games-CE3tjyLu.webp"
                    alt="TURBO GAMES"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        TURBO GAMES
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/smartsoft-DUVv5v47.webp"
                    alt="SMARTSOFT"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        SMARTSOFT
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/ezugi-Dn7l-xMI.webp"
                    alt="Ezugi"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        Ezugi
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/Jili-BmB3tPzb.webp"
                    alt="JILI"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        JILI
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/sexy-DzBc_Q4e.webp"
                    alt="AE SEXY"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        AE SEXY
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/betsoft-D1KeTTJ7.webp"
                    alt="BETSOFT"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        BETSOFT
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/gamzix-Dz4fvQ_W.webp"
                    alt="GAMZIX"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        GAMZIX
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/betgamestv-BgkAGJu7.webp"
                    alt="BetGames_TV"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        BetGames_TV
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/mac_excite-DcdOmyFU.webp"
                    alt="MAC EXCITE"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        MAC EXCITE
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/popok-iP8niSNx.webp"
                    alt="POPOK"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        POPOK
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full cursor-pointer">
                  <img
                    src="/src/assets/img/kingmaker-CQK56nl1.webp"
                    alt="KINGMAKER"
                    className="w-full sm:h-[200px]"
                  />
                  <div className="hidden md:block">
                    <div className="w-full bg-black text-white text-sm flex items-center justify-between px-2 py-1 overflow-x-auto">
                      <span className="whitespace-nowrap md:text-[12px] text-[8px] font-[500]">
                        KINGMAKER
                      </span>
                      <div className="button-wrapper">
                        <button className="home-animated">
                          <span />
                          <span />
                          <span />
                          <span />
                          Play Now
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 256 256"
                            className="w-2 h-2 text-[darkred]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
