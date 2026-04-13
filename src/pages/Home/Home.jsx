import { useSelector } from "react-redux";
import { useGroupQuery } from "../../redux/features/events/events";
import { useLotusHomeLobby } from "../../hooks/lotusHomeLobby";
import { Fragment } from "react";

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
      <div className="md:hidden">
        <div className="grid grid-cols-5 items-center fixed bottom-0 w-full bg-mobile-footer-background-color z-20 h-[60px]">
          <a
            className="flex flex-col items-center justify-center h-full"
            href="/exchange_sports/sports/cricket"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[24px] w-[24px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-white text-xs text-center">Sports</div>
          </a>
          <a
            className="flex flex-col items-center justify-center h-full"
            href="/exchange_sports/inplay"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="h-[24px] w-[24px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M470 124.837l-98.443-81.78-27.814 32.931 98.442 81.769L470 124.837zM167.192 74.919L139.366 42 42 124.837l27.814 32.919 97.378-82.837zm99.509 97.709H234.6v127.446l101.649 60.539L352.3 334.06l-85.6-49.917V172.628zM256 87.665c-107 0-192.601 86.021-192.601 191.166C63.399 383.98 149 470 256 470c105.936 0 192.601-86.02 192.601-191.169 0-105.144-86.665-191.166-192.601-191.166zm0 339.855c-82.393 0-149.8-66.906-149.8-148.688 0-81.777 67.407-148.684 149.8-148.684 82.394 0 149.8 66.906 149.8 148.684 0 82.839-67.406 148.688-149.8 148.688z" />
            </svg>
            <div className="text-white text-xs text-center">In-Play</div>
          </a>
          <a
            className="flex flex-col items-center justify-center h-full"
            href="/home"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="h-[24px] w-[24px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z" />
              <path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
            </svg>
            <div className="text-white text-xs text-center">Home</div>
          </a>
          <a
            className="flex flex-col items-center justify-center h-full"
            href="/multi-markets"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="h-[24px] w-[24px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354" />
            </svg>
            <div className="text-white text-xs text-center">Multi Market</div>
          </a>
          <a
            className="flex flex-col items-center justify-center h-full"
            href="/mobile-menu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="h-[24px] w-[24px] text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <div className="text-white text-xs text-center">Account</div>
          </a>
        </div>
      </div>
      <div />
      <a
        href="https://wa.link/skyexchho"
        target="_blank"
        rel="noreferrer"
        className="bottom-[70px] right-4 z-50 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:opacity-90 fixed"
        aria-label="WhatsApp"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className="absolute -top-1 -right-1 bg-white rounded-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z" opacity=".87" />
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="12 10 59 59"
        >
          <g filter="url(#filter0_d_496_54)">
            <path
              d="M42 12C57.464 12 70 24.536 70 40C70 55.464 57.464 68 42 68C37.0255 68 32.3553 66.7004 28.3066 64.4258L14.7598 67.0938L18.2373 54.8125C15.5532 50.5157 14 45.4396 14 40C14 24.536 26.536 12 42 12Z"
              fill="#2AA81A"
            />
            <path
              d="M41.5 10C57.7924 10 71 23.2076 71 39.5C71 55.7924 57.7924 69 41.5 69C39.5727 69 36.5485 68.7663 33.666 68.0566C32.2229 67.7013 30.77 67.2161 29.4932 66.5537C28.7918 66.1899 28.1169 65.7577 27.5195 65.2441L14.8145 67.9668L12.4385 68.4756L13.0479 66.124L16.2266 53.8594C14.6536 51.9953 13.6689 49.5456 13.0518 47.252C12.2629 44.3199 12 41.3621 12 39.5C12 23.2076 25.2076 10 41.5 10ZM41.5 13C26.8645 13 15 24.8645 15 39.5C15 41.1378 15.2372 43.8298 15.9482 46.4727C16.6721 49.163 17.8158 51.5317 19.4375 52.8291L19.0771 53.2783L19.4521 53.376L16.5615 64.5234L28.1855 62.0332L28.2803 62.4785L28.748 62.168C29.1578 62.7826 29.8658 63.3671 30.875 63.8906C31.8751 64.4094 33.0854 64.8239 34.3838 65.1436C36.9845 65.7838 39.7607 66 41.5 66C56.1355 66 68 54.1355 68 39.5C68 24.8645 56.1355 13 41.5 13Z"
              fill="white"
            />
            <mask
              id="path-3-outside-1_496_54"
              maskUnits="userSpaceOnUse"
              x="30.5"
              y="29.5"
              width={13}
              height={9}
              fill="black"
            >
              <rect fill="white" x="30.5" y="29.5" width={13} height={9} />
              <path d="M30.9312 37.5V36.38L33.5577 33.9417C33.7824 33.727 33.9707 33.5337 34.1227 33.3619C34.2747 33.1868 34.3903 33.0167 34.4696 32.8515C34.5489 32.683 34.5885 32.5013 34.5885 32.3063C34.5885 32.0883 34.539 31.9016 34.4398 31.7463C34.3407 31.5911 34.2069 31.4705 34.0384 31.3846C33.8699 31.2987 33.6767 31.2557 33.4586 31.2557C33.2339 31.2557 33.0374 31.302 32.8689 31.3945C32.7004 31.4837 32.5699 31.6142 32.4774 31.786C32.3882 31.9545 32.3436 32.1577 32.3436 32.3955H30.8568C30.8568 31.9099 30.9658 31.4903 31.1839 31.1368C31.4053 30.78 31.7125 30.5041 32.1057 30.3092C32.5021 30.1142 32.9581 30.0168 33.4735 30.0168C33.9988 30.0168 34.458 30.1109 34.8512 30.2992C35.2443 30.4843 35.5499 30.742 35.768 31.0723C35.9861 31.3994 36.0951 31.7777 36.0951 32.2072C36.0951 32.4847 36.0406 32.759 35.9315 33.0299C35.8225 33.2975 35.6292 33.5981 35.3517 33.9318C35.0742 34.2622 34.681 34.657 34.1722 35.1163L33.0919 36.1718V36.2264H36.1942V37.5H30.9312ZM36.7294 36.2016V34.9775L39.807 30.1159H40.8675V31.8207H40.2381L38.2954 34.8933V34.9527H42.6813V36.2016H36.7294ZM40.2679 37.5V35.8299L40.2976 35.2798V30.1159H41.7645V37.5H40.2679Z" />
            </mask>
            <path
              d="M30.9312 37.5V36.38L33.5577 33.9417C33.7824 33.727 33.9707 33.5337 34.1227 33.3619C34.2747 33.1868 34.3903 33.0167 34.4696 32.8515C34.5489 32.683 34.5885 32.5013 34.5885 32.3063C34.5885 32.0883 34.539 31.9016 34.4398 31.7463C34.3407 31.5911 34.2069 31.4705 34.0384 31.3846C33.8699 31.2987 33.6767 31.2557 33.4586 31.2557C33.2339 31.2557 33.0374 31.302 32.8689 31.3945C32.7004 31.4837 32.5699 31.6142 32.4774 31.786C32.3882 31.9545 32.3436 32.1577 32.3436 32.3955H30.8568C30.8568 31.9099 30.9658 31.4903 31.1839 31.1368C31.4053 30.78 31.7125 30.5041 32.1057 30.3092C32.5021 30.1142 32.9581 30.0168 33.4735 30.0168C33.9988 30.0168 34.458 30.1109 34.8512 30.2992C35.2443 30.4843 35.5499 30.742 35.768 31.0723C35.9861 31.3994 36.0951 31.7777 36.0951 32.2072C36.0951 32.4847 36.0406 32.759 35.9315 33.0299C35.8225 33.2975 35.6292 33.5981 35.3517 33.9318C35.0742 34.2622 34.681 34.657 34.1722 35.1163L33.0919 36.1718V36.2264H36.1942V37.5H30.9312ZM36.7294 36.2016V34.9775L39.807 30.1159H40.8675V31.8207H40.2381L38.2954 34.8933V34.9527H42.6813V36.2016H36.7294ZM40.2679 37.5V35.8299L40.2976 35.2798V30.1159H41.7645V37.5H40.2679Z"
              fill="white"
            />
            <path
              d="M30.9312 37.5H30.9068V37.5243H30.9312V37.5ZM30.9312 36.38L30.9146 36.3621L30.9068 36.3694V36.38H30.9312ZM33.5577 33.9417L33.5743 33.9596L33.5745 33.9593L33.5577 33.9417ZM34.1227 33.3619L34.1409 33.3781L34.1411 33.3779L34.1227 33.3619ZM34.4696 32.8515L34.4915 32.862L34.4916 32.8618L34.4696 32.8515ZM32.8689 31.3945L32.8803 31.416L32.8806 31.4158L32.8689 31.3945ZM32.4774 31.786L32.4559 31.7744L32.4558 31.7746L32.4774 31.786ZM32.3436 32.3955V32.4199H32.3679V32.3955H32.3436ZM30.8568 32.3955H30.8325V32.4199H30.8568V32.3955ZM31.1839 31.1368L31.1632 31.1239L31.1632 31.124L31.1839 31.1368ZM32.1057 30.3092L32.0949 30.2873L32.0949 30.2873L32.1057 30.3092ZM34.8512 30.2992L34.8407 30.3212L34.8408 30.3213L34.8512 30.2992ZM35.768 31.0723L35.7477 31.0858L35.7477 31.0859L35.768 31.0723ZM35.9315 33.0299L35.9541 33.0391L35.9541 33.039L35.9315 33.0299ZM35.3517 33.9318L35.3704 33.9475L35.3704 33.9474L35.3517 33.9318ZM34.1722 35.1163L34.1559 35.0982L34.1552 35.0989L34.1722 35.1163ZM33.0919 36.1718L33.0749 36.1544L33.0675 36.1616V36.1718H33.0919ZM33.0919 36.2264H33.0675V36.2507H33.0919V36.2264ZM36.1942 36.2264H36.2185V36.202H36.1942V36.2264ZM36.1942 37.5V37.5243H36.2185V37.5H36.1942ZM30.9312 37.5H30.9555V36.38H30.9312H30.9068V37.5H30.9312ZM30.9312 36.38L30.9477 36.3978L33.5743 33.9596L33.5577 33.9417L33.5412 33.9239L30.9146 36.3621L30.9312 36.38ZM33.5577 33.9417L33.5745 33.9593C33.7995 33.7443 33.9884 33.5505 34.1409 33.3781L34.1227 33.3619L34.1044 33.3458C33.953 33.5169 33.7652 33.7097 33.5409 33.9241L33.5577 33.9417ZM34.1227 33.3619L34.1411 33.3779C34.2941 33.2015 34.4111 33.0296 34.4915 32.862L34.4696 32.8515L34.4476 32.8409C34.3695 33.0037 34.2552 33.1721 34.1043 33.346L34.1227 33.3619ZM34.4696 32.8515L34.4916 32.8618C34.5725 32.6899 34.6129 32.5047 34.6129 32.3063H34.5885H34.5642C34.5642 32.4979 34.5252 32.676 34.4476 32.8411L34.4696 32.8515ZM34.5885 32.3063H34.6129C34.6129 32.0845 34.5624 31.8931 34.4604 31.7332L34.4398 31.7463L34.4193 31.7594C34.5155 31.9101 34.5642 32.0921 34.5642 32.3063H34.5885ZM34.4398 31.7463L34.4604 31.7332C34.3589 31.5742 34.2217 31.4507 34.0495 31.3629L34.0384 31.3846L34.0274 31.4063C34.1921 31.4902 34.3226 31.6079 34.4193 31.7594L34.4398 31.7463ZM34.0384 31.3846L34.0495 31.3629C33.8771 31.275 33.6799 31.2314 33.4586 31.2314V31.2557V31.2801C33.6734 31.2801 33.8628 31.3223 34.0274 31.4063L34.0384 31.3846ZM33.4586 31.2557V31.2314C33.2305 31.2314 33.0298 31.2783 32.8571 31.3731L32.8689 31.3945L32.8806 31.4158C33.0449 31.3256 33.2373 31.2801 33.4586 31.2801V31.2557ZM32.8689 31.3945L32.8575 31.373C32.6846 31.4645 32.5507 31.5985 32.4559 31.7744L32.4774 31.786L32.4988 31.7975C32.5891 31.6299 32.7161 31.5029 32.8803 31.416L32.8689 31.3945ZM32.4774 31.786L32.4558 31.7746C32.3644 31.9474 32.3192 32.1547 32.3192 32.3955H32.3436H32.3679C32.3679 32.1607 32.4119 31.9616 32.4989 31.7974L32.4774 31.786ZM32.3436 32.3955V32.3712H30.8568V32.3955V32.4199H32.3436V32.3955ZM30.8568 32.3955H30.8812C30.8812 31.9136 30.9893 31.4986 31.2046 31.1496L31.1839 31.1368L31.1632 31.124C30.9424 31.482 30.8325 31.9061 30.8325 32.3955H30.8568ZM31.1839 31.1368L31.2046 31.1496C31.4234 30.7968 31.7272 30.524 32.1165 30.331L32.1057 30.3092L32.0949 30.2873C31.6978 30.4842 31.3871 30.7631 31.1632 31.1239L31.1839 31.1368ZM32.1057 30.3092L32.1164 30.331C32.509 30.138 32.9612 30.0411 33.4735 30.0411V30.0168V29.9924C32.955 29.9924 32.4953 30.0905 32.0949 30.2873L32.1057 30.3092ZM33.4735 30.0168V30.0411C33.9959 30.0411 34.4514 30.1347 34.8407 30.3212L34.8512 30.2992L34.8617 30.2773C34.4646 30.0871 34.0017 29.9924 33.4735 29.9924V30.0168ZM34.8512 30.2992L34.8408 30.3213C35.2303 30.5046 35.5323 30.7595 35.7477 31.0858L35.768 31.0723L35.7883 31.0589C35.5676 30.7245 35.2583 30.4639 34.8615 30.2772L34.8512 30.2992ZM35.768 31.0723L35.7477 31.0859C35.9629 31.4086 36.0707 31.7821 36.0707 32.2072H36.0951H36.1194C36.1194 31.7734 36.0092 31.3903 35.7883 31.0588L35.768 31.0723ZM36.0951 32.2072H36.0707C36.0707 32.4815 36.0169 32.7526 35.909 33.0208L35.9315 33.0299L35.9541 33.039C36.0643 32.7653 36.1194 32.488 36.1194 32.2072H36.0951ZM35.9315 33.0299L35.909 33.0207C35.8013 33.2851 35.6096 33.5836 35.333 33.9163L35.3517 33.9318L35.3704 33.9474C35.6488 33.6127 35.8438 33.3098 35.9541 33.0391L35.9315 33.0299ZM35.3517 33.9318L35.3331 33.9162C35.0566 34.2454 34.6643 34.6393 34.1559 35.0982L34.1722 35.1163L34.1885 35.1343C34.6978 34.6747 35.0918 34.2791 35.3704 33.9475L35.3517 33.9318ZM34.1722 35.1163L34.1552 35.0989L33.0749 36.1544L33.0919 36.1718L33.1089 36.1893L34.1893 35.1337L34.1722 35.1163ZM33.0919 36.1718H33.0675V36.2264H33.0919H33.1162V36.1718H33.0919ZM33.0919 36.2264V36.2507H36.1942V36.2264V36.202H33.0919V36.2264ZM36.1942 36.2264H36.1699V37.5H36.1942H36.2185V36.2264H36.1942ZM36.1942 37.5V37.4757H30.9312V37.5V37.5243H36.1942V37.5ZM36.7294 36.2016H36.7051V36.2259H36.7294V36.2016ZM36.7294 34.9775L36.7051 34.9621V34.9775H36.7294ZM39.807 30.1159V30.0915H39.7936L39.7864 30.1029L39.807 30.1159ZM40.8675 30.1159H40.8918V30.0915H40.8675V30.1159ZM40.8675 31.8207V31.845H40.8918V31.8207H40.8675ZM40.2381 31.8207V31.7963H40.2247L40.2175 31.8077L40.2381 31.8207ZM38.2954 34.8933L38.2711 34.8779V34.8933H38.2954ZM38.2954 34.9527H38.2711V34.9771H38.2954V34.9527ZM42.6813 34.9527H42.7057V34.9284H42.6813V34.9527ZM42.6813 36.2016V36.2259H42.7057V36.2016H42.6813ZM40.2679 37.5H40.2435V37.5243H40.2679V37.5ZM40.2679 35.8299L40.2435 35.8286V35.8299H40.2679ZM40.2976 35.2798L40.3219 35.2811V35.2798H40.2976ZM40.2976 30.1159V30.0915H40.2732V30.1159H40.2976ZM41.7645 30.1159H41.7888V30.0915H41.7645V30.1159ZM41.7645 37.5V37.5243H41.7888V37.5H41.7645ZM36.7294 36.2016H36.7538V34.9775H36.7294H36.7051V36.2016H36.7294ZM36.7294 34.9775L36.75 34.9905L39.8275 30.1289L39.807 30.1159L39.7864 30.1029L36.7089 34.9645L36.7294 34.9775ZM39.807 30.1159V30.1402H40.8675V30.1159V30.0915H39.807V30.1159ZM40.8675 30.1159H40.8432V31.8207H40.8675H40.8918V30.1159H40.8675ZM40.8675 31.8207V31.7963H40.2381V31.8207V31.845H40.8675V31.8207ZM40.2381 31.8207L40.2175 31.8077L38.2749 34.8802L38.2954 34.8933L38.316 34.9063L40.2587 31.8337L40.2381 31.8207ZM38.2954 34.8933H38.2711V34.9527H38.2954H38.3198V34.8933H38.2954ZM38.2954 34.9527V34.9771H42.6813V34.9527V34.9284H38.2954V34.9527ZM42.6813 34.9527H42.657V36.2016H42.6813H42.7057V34.9527H42.6813ZM42.6813 36.2016V36.1772H36.7294V36.2016V36.2259H42.6813V36.2016ZM40.2679 37.5H40.2922V35.8299H40.2679H40.2435V37.5H40.2679ZM40.2679 35.8299L40.2922 35.8312L40.3219 35.2811L40.2976 35.2798L40.2733 35.2785L40.2435 35.8286L40.2679 35.8299ZM40.2976 35.2798H40.3219V30.1159H40.2976H40.2732V35.2798H40.2976ZM40.2976 30.1159V30.1402H41.7645V30.1159V30.0915H40.2976V30.1159ZM41.7645 30.1159H41.7402V37.5H41.7645H41.7888V30.1159H41.7645ZM41.7645 37.5V37.4757H40.2679V37.5V37.5243H41.7645V37.5Z"
              fill="white"
              mask="url(#path-3-outside-1_496_54)"
            />
            <mask
              id="path-5-outside-2_496_54"
              maskUnits="userSpaceOnUse"
              x="45.7242"
              y="41.3411"
              width={6}
              height={9}
              fill="black"
            >
              <rect fill="white" x="45.7242" y="41.3411" width={6} height={9} />
              <path d="M46.4477 49.3411L49.5054 43.2851V43.2355H45.9422V41.9569H51.126V43.2554L48.0633 49.3411H46.4477Z" />
            </mask>
            <path
              d="M46.4477 49.3411L49.5054 43.2851V43.2355H45.9422V41.9569H51.126V43.2554L48.0633 49.3411H46.4477Z"
              fill="white"
            />
            <path
              d="M46.4477 49.3411L46.426 49.3301L46.4081 49.3654H46.4477V49.3411ZM49.5054 43.2851L49.5298 43.2974V43.2851H49.5054ZM49.5054 43.2355H49.5298V43.2112H49.5054V43.2355ZM45.9422 43.2355H45.9179V43.2599H45.9422V43.2355ZM45.9422 41.9569V41.9326H45.9179V41.9569H45.9422ZM51.126 41.9569H51.1503V41.9326H51.126V41.9569ZM51.126 43.2554L51.1503 43.2676V43.2554H51.126ZM48.0633 49.3411V49.3654H48.0783L48.085 49.352L48.0633 49.3411ZM46.4477 49.3411L46.4694 49.352L49.5271 43.2961L49.5054 43.2851L49.4837 43.2741L46.426 49.3301L46.4477 49.3411ZM49.5054 43.2851H49.5298V43.2355H49.5054H49.4811V43.2851H49.5054ZM49.5054 43.2355V43.2112H45.9422V43.2355V43.2599H49.5054V43.2355ZM45.9422 43.2355H45.9666V41.9569H45.9422H45.9179V43.2355H45.9422ZM45.9422 41.9569V41.9813H51.126V41.9569V41.9326H45.9422V41.9569ZM51.126 41.9569H51.1016V43.2554H51.126H51.1503V41.9569H51.126ZM51.126 43.2554L51.1042 43.2444L48.0415 49.3301L48.0633 49.3411L48.085 49.352L51.1477 43.2663L51.126 43.2554ZM48.0633 49.3411V49.3167H46.4477V49.3411V49.3654H48.0633V49.3411Z"
              fill="white"
              mask="url(#path-5-outside-2_496_54)"
            />
            <line
              x1="49.6471"
              y1="33.1832"
              x2="36.1145"
              y2="46.7158"
              stroke="white"
              strokeWidth="0.779074"
            />
            <path
              d="M38.706 22.2792C38.1446 22.3147 37.6332 22.212 37.1718 21.9712C36.7103 21.7303 36.3366 21.3679 36.0506 20.884C35.7644 20.3972 35.5994 19.8073 35.5556 19.1144C35.5114 18.4156 35.6006 17.8082 35.8234 17.2921C36.0489 16.7729 36.3738 16.3649 36.7983 16.0679C37.2257 15.7708 37.7201 15.6045 38.2815 15.569C38.6265 15.5472 38.9527 15.5764 39.2602 15.6568C39.5706 15.737 39.8516 15.8645 40.1034 16.0394C40.3552 16.2143 40.5672 16.4342 40.7396 16.6993C40.9149 16.9641 41.0398 17.2688 41.1145 17.6134L40.1233 17.6761C40.0718 17.4651 39.9883 17.2825 39.8729 17.1284C39.7602 16.9711 39.6243 16.8417 39.4652 16.7402C39.3089 16.6356 39.1354 16.5615 38.9448 16.5178C38.7569 16.471 38.5591 16.4541 38.3515 16.4672C37.9773 16.4909 37.6456 16.6073 37.3565 16.8164C37.0701 17.0224 36.8523 17.3151 36.7031 17.6944C36.5566 18.0706 36.5001 18.5233 36.5336 19.0525C36.5673 19.5847 36.6819 20.028 36.8775 20.3826C37.073 20.7342 37.3257 20.9942 37.6358 21.1624C37.9459 21.3307 38.2866 21.4031 38.6579 21.3796C38.8655 21.3664 39.0596 21.3263 39.2403 21.2591C39.421 21.1919 39.5839 21.0979 39.7289 20.9772C39.8739 20.8564 39.9926 20.7139 40.0849 20.5495C40.18 20.3821 40.2413 20.1918 40.269 19.9787L41.2601 19.916C41.231 20.2437 41.1489 20.5468 41.0139 20.8254C40.8786 21.1011 40.6988 21.3444 40.4744 21.5553C40.2498 21.7632 39.9888 21.9309 39.6916 22.0583C39.3942 22.1828 39.0657 22.2565 38.706 22.2792ZM49.2622 16.8083L50.1957 17.1342L48.7764 21.2002C48.6258 21.6317 48.3897 21.9791 48.0682 22.2423C47.7504 22.5037 47.3742 22.6657 46.9397 22.7281C46.5062 22.7878 46.0419 22.7312 45.5468 22.5584C45.0544 22.3865 44.6557 22.1419 44.3508 21.8244C44.0495 21.5051 43.8545 21.1438 43.7656 20.7404C43.6805 20.3353 43.7133 19.9169 43.8639 19.4854L45.2833 15.4194L46.2168 15.7453L44.8235 19.7366C44.726 20.016 44.7 20.2862 44.7454 20.5472C44.7946 20.8064 44.9108 21.0378 45.0942 21.2414C45.2803 21.446 45.5297 21.6029 45.8422 21.712C46.1575 21.8221 46.4503 21.8544 46.7206 21.8092C46.9909 21.7639 47.2245 21.6546 47.4215 21.4813C47.6223 21.3062 47.7714 21.079 47.8689 20.7997L49.2622 16.8083ZM51.6761 25.2641C51.3085 24.9413 51.0396 24.6037 50.8693 24.2515C50.7032 23.899 50.639 23.5481 50.6765 23.199C50.7141 22.8499 50.8546 22.519 51.0979 22.2064L51.8442 22.8617C51.703 23.0536 51.6297 23.2524 51.6244 23.4583C51.6232 23.6639 51.6778 23.8659 51.7882 24.0642C51.8987 24.2626 52.0497 24.4459 52.2412 24.6141C52.4503 24.7977 52.6664 24.929 52.8895 25.008C53.1126 25.0869 53.3226 25.1076 53.5194 25.0699C53.7204 25.0319 53.8914 24.9326 54.0326 24.7719C54.1602 24.6266 54.2227 24.471 54.2203 24.3051C54.22 24.1411 54.1756 23.9676 54.0869 23.7844C54.0001 23.599 53.889 23.4059 53.7535 23.205L53.3148 22.5391C53.0114 22.0854 52.837 21.6535 52.7917 21.2433C52.7484 20.831 52.8765 20.4542 53.1762 20.113C53.4256 19.829 53.719 19.648 54.0565 19.5701C54.3962 19.4941 54.7482 19.5128 55.1126 19.6262C55.4812 19.7393 55.8295 19.9399 56.1575 20.2279C56.4921 20.5218 56.7337 20.8393 56.8825 21.1805C57.0354 21.5214 57.0957 21.859 57.0634 22.1932C57.0352 22.5272 56.9094 22.8281 56.6859 23.0959L55.9661 22.4637C56.1388 22.2138 56.1878 21.9449 56.1131 21.657C56.0406 21.3711 55.8623 21.1034 55.5784 20.854C55.3803 20.68 55.1783 20.5592 54.9726 20.4916C54.771 20.4237 54.5811 20.409 54.403 20.4476C54.2271 20.488 54.0763 20.5798 53.9506 20.7229C53.8153 20.877 53.7524 21.044 53.762 21.224C53.7738 21.4059 53.8228 21.5854 53.9091 21.7625C53.9994 21.9394 54.093 22.1014 54.1897 22.2488L54.5554 22.798C54.6769 22.9749 54.7912 23.1689 54.8983 23.3799C55.0054 23.5909 55.082 23.8123 55.1282 24.0438C55.1785 24.2752 55.1769 24.5078 55.1236 24.7417C55.0744 24.9753 54.9522 25.2033 54.7569 25.4256C54.5153 25.7008 54.2272 25.8845 53.8927 25.9767C53.5602 26.0668 53.2034 26.0557 52.8225 25.9434C52.4435 25.8289 52.0613 25.6025 51.6761 25.2641ZM60.0994 24.9577L60.8483 24.5597L63.2284 29.0378L62.4795 29.4358L61.5225 27.6353L56.4895 30.3103L56.0275 29.441L61.0605 26.766L60.0994 24.9577ZM58.5789 36.0149C58.5232 35.4551 58.6074 34.9403 58.8315 34.4705C59.0556 34.0007 59.4041 33.6127 59.8771 33.3066C60.353 33.0001 60.9364 32.8125 61.6273 32.7438C62.3241 32.6744 62.9345 32.7432 63.4585 32.9501C63.9855 33.1568 64.4051 33.4683 64.7174 33.8847C65.0297 34.3012 65.2137 34.7893 65.2694 35.349C65.3257 35.9146 65.2417 36.4308 65.0173 36.8977C64.7929 37.3646 64.4426 37.7498 63.9664 38.0533C63.4934 38.3595 62.9086 38.5473 62.2118 38.6166C61.518 38.6856 60.909 38.6167 60.385 38.4098C59.8612 38.2058 59.4433 37.897 59.1313 37.4835C58.8193 37.07 58.6351 36.5804 58.5789 36.0149ZM59.4753 35.9256C59.5127 36.3017 59.6394 36.6277 59.8553 36.9036C60.0712 37.1794 60.3697 37.3838 60.751 37.5166C61.1325 37.6523 61.5871 37.6939 62.1147 37.6414C62.6453 37.5886 63.0843 37.4581 63.4316 37.2498C63.7821 37.0442 64.0359 36.7849 64.1932 36.4718C64.3505 36.1588 64.4104 35.8143 64.373 35.4382C64.3359 35.0651 64.2092 34.7391 63.993 34.4603C63.7771 34.1844 63.477 33.9788 63.0925 33.8433C62.711 33.7076 62.255 33.6661 61.7244 33.7189C61.1967 33.7714 60.7592 33.9018 60.4119 34.1101C60.0646 34.3184 59.8124 34.579 59.6551 34.892C59.4981 35.2079 59.4382 35.5525 59.4753 35.9256ZM65.6796 42.6211L65.2784 43.7563L59.7862 44.0244L59.7613 44.0948L63.8637 47.7588L63.4565 48.9107L57.283 46.7286L57.6052 45.817L62.0717 47.3957L62.0922 47.3377L58.2798 43.9347L58.5405 43.1972L63.6413 42.968L63.6619 42.91L59.1912 41.3298L59.5061 40.439L65.6796 42.6211ZM56.9532 48.6424L61.757 53.0919L58.9649 56.1064L58.3427 55.53L60.4629 53.241L59.0153 51.9002L57.0444 54.028L56.4254 53.4547L58.3963 51.3268L56.9036 49.9442L54.7625 52.2558L54.1402 51.6795L56.9532 48.6424ZM52.8671 53.3947L55.8035 59.2472L53.7139 60.2956C53.2609 60.5229 52.8457 60.6329 52.4684 60.6255C52.0923 60.6208 51.7601 60.5171 51.4715 60.3144C51.1843 60.1144 50.9501 59.8337 50.7687 59.4723C50.5901 59.1162 50.507 58.7645 50.5196 58.4173C50.5323 58.0701 50.6517 57.7463 50.8779 57.4459C51.1016 57.1469 51.4412 56.8831 51.8968 56.6545L53.4719 55.8642L53.8503 56.6183L52.3577 57.3672C52.067 57.5131 51.8537 57.6726 51.7177 57.8457C51.579 58.0201 51.5079 58.205 51.5042 58.4002C51.498 58.5967 51.55 58.805 51.6604 59.0249C51.772 59.2475 51.9098 59.4177 52.0738 59.5354C52.239 59.6557 52.4337 59.7137 52.6577 59.7094C52.8805 59.7091 53.1372 59.6361 53.4278 59.4902L54.5394 58.9325L51.9833 53.8381L52.8671 53.3947ZM49.5363 55.0659L52.2805 56.9979L51.3025 57.4886L48.5307 55.5704L49.5363 55.0659ZM40.9103 56.9859C41.3954 57.0498 41.8066 57.1808 42.1439 57.3789C42.478 57.5795 42.7265 57.8353 42.8895 58.1464C43.0524 58.4574 43.1196 58.8105 43.0912 59.2057L42.1066 59.076C42.1172 58.8381 42.0675 58.6321 41.9575 58.458C41.8441 58.2865 41.6864 58.149 41.4843 58.0455C41.2823 57.9421 41.0549 57.8737 40.8022 57.8404C40.5262 57.8041 40.2736 57.8151 40.0443 57.8736C39.8149 57.932 39.629 58.0316 39.4863 58.1724C39.3404 58.3157 39.2534 58.4934 39.2255 58.7054C39.2003 58.8971 39.2348 59.0612 39.3291 59.1978C39.4205 59.3339 39.554 59.4534 39.7295 59.5564C39.9047 59.6622 40.1045 59.7609 40.3288 59.8525L41.0637 60.162C41.5682 60.3703 41.9533 60.6323 42.219 60.9481C42.4844 61.2667 42.5874 61.6511 42.5281 62.1013C42.4787 62.476 42.3355 62.7896 42.0984 63.042C41.8583 63.2941 41.5553 63.4743 41.1894 63.5827C40.8202 63.6937 40.4192 63.7206 39.9864 63.6636C39.5449 63.6055 39.1675 63.476 38.8541 63.2751C38.5374 63.0768 38.2996 62.8298 38.1406 62.534C37.9783 62.2408 37.9155 61.9208 37.9523 61.574L38.9021 61.6991C38.8976 62.0028 39.0064 62.2536 39.2286 62.4513C39.4478 62.6486 39.7448 62.7719 40.1195 62.8213C40.3809 62.8557 40.6159 62.8438 40.8245 62.7856C41.0299 62.7299 41.1958 62.6365 41.3224 62.5054C41.4461 62.374 41.5204 62.2139 41.5453 62.0251C41.572 61.8217 41.5314 61.6479 41.4233 61.5037C41.3124 61.3591 41.1718 61.2371 41.0017 61.1379C40.8283 61.0412 40.6604 60.9585 40.498 60.8898L39.8887 60.6367C39.6893 60.5572 39.4865 60.4596 39.2801 60.3438C39.0737 60.2279 38.887 60.0866 38.7198 59.9198C38.5494 59.7555 38.4213 59.5613 38.3356 59.3373C38.2465 59.1158 38.2214 58.8583 38.26 58.5649C38.3078 58.2019 38.4451 57.889 38.6717 57.6263C38.898 57.3665 39.2007 57.1774 39.5798 57.0589C39.9585 56.9433 40.402 56.9189 40.9103 56.9859ZM29.7421 60.4112L28.8841 59.9198L31.0243 56.1826C31.2514 55.786 31.5472 55.4878 31.9115 55.2879C32.2718 55.0891 32.6712 54.9988 33.1098 55.017C33.5469 55.0378 33.993 55.1785 34.4481 55.4391C34.9006 55.6983 35.2477 56.0118 35.4894 56.3798C35.727 56.7489 35.8526 57.1398 35.866 57.5526C35.8754 57.9665 35.7666 58.3718 35.5394 58.7684L33.3992 62.5056L32.5412 62.0142L34.6421 58.3456C34.7892 58.0889 34.8643 57.828 34.8674 57.5631C34.8666 57.2993 34.7947 57.0505 34.6517 56.8167C34.5062 56.5815 34.2898 56.3816 34.0026 56.2171C33.7127 56.0511 33.4308 55.9656 33.1569 55.9606C32.8829 55.9556 32.6332 56.0203 32.4077 56.1545C32.1783 56.2898 31.9901 56.4859 31.843 56.7426L29.7421 60.4112ZM30.1703 53.4261L25.0365 57.4903L23.5854 55.6573C23.2708 55.2599 23.0834 54.8721 23.0231 54.4939C22.9605 54.1175 23.0037 53.7638 23.1527 53.4328C23.2994 53.1037 23.5301 52.8145 23.8448 52.5654C24.1595 52.3163 24.495 52.1572 24.8513 52.0881C25.2054 52.0208 25.5604 52.061 25.9166 52.2088C26.2686 52.3561 26.6028 52.6296 26.9192 53.0293L27.9121 54.2834L27.2574 54.8017L26.3219 53.6199C26.12 53.3649 25.9136 53.1939 25.7027 53.1068C25.4899 53.0174 25.2795 52.9971 25.0716 53.0459C24.8595 53.0942 24.657 53.1948 24.464 53.3475C24.2688 53.5021 24.1256 53.6752 24.0345 53.8669C23.9392 54.0582 23.9119 54.2667 23.9523 54.4924C23.9928 54.7182 24.114 54.9586 24.3158 55.2136L25.0878 56.1886L29.5566 52.6508L30.1703 53.4261ZM25.9264 48.4681L19.6727 50.4086L18.9798 48.1758C18.8296 47.6917 18.7946 47.2624 18.8747 46.8878C18.952 46.5142 19.1198 46.1998 19.3781 45.9448C19.6336 45.6907 19.953 45.5042 20.3363 45.3852C20.7197 45.2663 21.09 45.2388 21.4472 45.3028C21.8017 45.3676 22.1184 45.5332 22.3973 45.7994C22.6726 46.0637 22.8858 46.4392 23.0368 46.9261L23.5109 48.4539L22.7134 48.7013L22.2667 47.2617C22.1704 46.9511 22.0395 46.7172 21.8741 46.5599C21.7079 46.3998 21.519 46.3051 21.3074 46.2756C21.0921 46.2443 20.867 46.265 20.632 46.338C20.3941 46.4118 20.1982 46.5217 20.0441 46.6676C19.8863 46.8117 19.7856 46.9963 19.742 47.2215C19.6984 47.4467 19.7247 47.7146 19.8211 48.0251L20.1897 49.2129L25.6333 47.5238L25.9264 48.4681ZM24.0846 39.7242C24.0349 40.2845 23.8562 40.7745 23.5483 41.1942C23.2405 41.614 22.8257 41.9301 22.3039 42.1427C21.7792 42.355 21.171 42.4304 20.4794 42.3691C19.7819 42.3072 19.1951 42.1257 18.7189 41.8247C18.2397 41.5233 17.8856 41.139 17.6564 40.6716C17.4273 40.2042 17.3376 39.6904 17.3873 39.1301C17.4375 38.5639 17.6164 38.0724 17.924 37.6556C18.2315 37.2388 18.6476 36.9257 19.172 36.7163C19.6938 36.5038 20.3034 36.4284 21.0009 36.4903C21.6954 36.5519 22.2808 36.7333 22.7571 37.0343C23.2336 37.3325 23.5865 37.7138 23.8159 38.1783C24.0453 38.6427 24.1349 39.158 24.0846 39.7242ZM23.1873 39.6446C23.2207 39.2681 23.1571 38.9242 22.9964 38.6129C22.8358 38.3016 22.5806 38.0451 22.2309 37.8435C21.8814 37.639 21.4425 37.5133 20.9143 37.4664C20.3832 37.4193 19.9276 37.4657 19.5475 37.6055C19.1648 37.7421 18.867 37.9496 18.6541 38.2277C18.4412 38.5059 18.318 38.8332 18.2847 39.2097C18.2515 39.5832 18.3151 39.9271 18.4755 40.2413C18.6361 40.5526 18.8926 40.8107 19.2451 41.0155C19.5946 41.22 20.0349 41.3458 20.566 41.3929C21.0942 41.4398 21.5483 41.3933 21.9284 41.2535C22.3084 41.1137 22.6049 40.9047 22.8178 40.6265C23.031 40.3454 23.1541 40.0181 23.1873 39.6446ZM24.13 34.9187L18.318 31.9029L19.3948 29.8278C19.6282 29.3779 19.8999 29.0452 20.2097 28.8297C20.517 28.6129 20.8469 28.5019 21.1994 28.4967C21.5494 28.4901 21.9038 28.58 22.2627 28.7662C22.6163 28.9497 22.8899 29.1857 23.0835 29.4743C23.277 29.7629 23.3703 30.0951 23.3633 30.4711C23.3577 30.8444 23.2375 31.2574 23.0027 31.7098L22.1911 33.274L21.4422 32.8854L22.2113 31.4031C22.3611 31.1145 22.4403 30.8602 22.4488 30.6402C22.4587 30.4175 22.4078 30.2261 22.2962 30.0659C22.186 29.9031 22.0216 29.765 21.8032 29.6516C21.5822 29.5369 21.3707 29.4801 21.1689 29.481C20.9645 29.4805 20.7729 29.5477 20.5939 29.6826C20.4138 29.8136 20.2488 30.0234 20.099 30.312L19.5262 31.4159L24.5854 34.0411L24.13 34.9187ZM25.8464 31.611L22.4905 31.6569L22.9945 30.6857L26.3645 30.6124L25.8464 31.611ZM22.9567 24.8524L22.3518 24.2579L25.9063 20.6408L26.5112 21.2353L25.082 22.6897L29.1474 26.6846L28.4574 27.3867L24.3921 23.3918L22.9567 24.8524Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_496_54"
              x={0}
              y={0}
              width={87}
              height={87}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx={2} dy={4} />
              <feGaussianBlur stdDeviation={7} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.219332 0 0 0 0 0.214193 0 0 0 0 0.22352 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_496_54"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_496_54"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </a>
    </Fragment>
  );
};

export default Home;
