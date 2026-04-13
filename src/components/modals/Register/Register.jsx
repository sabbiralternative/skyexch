const Register = () => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      role="presentation"
    >
      <div
        className="flex w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg shadow-xl bg-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-modal-title"
      >
        <div
          className="hidden md:flex flex-[0_0_45%] relative items-center justify-center min-h-[480px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/login_page_banner-CbcBaCVU.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex items-center justify-center p-8">
            <img
              src="/theme/Skyexch/title.png"
              alt="Logo"
              className="max-h-[120px] w-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-goldenYellow min-h-[480px] max-h-[90vh] relative">
          <button
            type="button"
            className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:opacity-90 transition-opacity"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col flex-1 overflow-y-auto px-6 py-8 pt-14">
            <h1
              id="signup-modal-title"
              className="text-xl font-semibold text-black text-center mb-2"
            >
              Create your account by following these simple steps.
            </h1>
            <p className="text-sm text-black4 text-center mb-6">Sign Up</p>
            <div className="flex justify-center">
              <div className="w-full max-w-md overflow-y-auto">
                <header className="flex flex-col justify-center items-center text-center">
                  <h1 className="text-2xl font-bold text-black3">Sign Up</h1>
                  <p className="text-xs text-black4 mt-1">
                    Create your account by following these simple steps.
                  </p>
                </header>
                <form className="flex flex-col w-full text-sm font-medium">
                  <div className="flex flex-col space-y-2">
                    <div className="mt-2">
                      <div className="flex gap-2.5 mt-1">
                        <div className="w-[80px] text-black p-[2px] h-[44px] flex items-center rounded-md border border-solid border-gray-300 bg-white">
                          <img
                            src="data:image/webp;base64,UklGRnYBAABXRUJQVlA4TGkBAAAvEYAEEGfiOJJtpRoctp6G5p8MxVa/y70nDTeSJDlRosHl/z42jzpXazEzDBpJUtT3DJJew6t9Xcw44xC2bVFZn+BPZLGEEkEqmXQjePsRvABUPiCwwQGBwF4Pw/P7/XjKeTl42u/3+XxeFqKCp3nK+/2wMAux+KngaSr5/8VTfr+fym63kwrbcVV/N9f1skTq+311W/fA5CNZIITgP1jChRA4IW2E/igUggfJ3C79DySEIChTwxeeENR4FFyIOI8JRd5ydMA8NCuRv1J1/d5+iiVXrrVoTN/JlN1wGNm2mrzg7gR3ojjE3dH+G+JLCxH9nwBAR2GQAGlim6qqqroVYVxNxeoewlGJbQDwVcoAwKDR42dKnZUY5Gg87TPIcg7Rqy8H3SGiwCDZ1n7XYBHYeWe9as5QeUR10q4tKoji94N8bTfvD/L3EKgVONCcAXiJTFIAQJFIJAX++QtGvHKAVe5HWT7dOPgHAA=="
                            alt=""
                          />
                          <div>+91</div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M128 192l128 128 128-128z" />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-gray-400 focus:ring-gray-400"
                          placeholder="Enter Phone Number"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="flex gap-2.5 self-start text-black4">
                      <input
                        type="checkbox"
                        id="termsAgreement"
                        className="flex shrink-0 w-6 h-6 bg-white rounded-lg border-gray-300"
                      />
                      <label
                        htmlFor="termsAgreement"
                        className="flex-auto my-auto text-black4 text-sm"
                      >
                        I agree to the{" "}
                        <button
                          type="button"
                          className="underline text-black4 bg-transparent border-0 p-0 cursor-pointer font-inherit text-inherit"
                        >
                          Terms and Conditions
                        </button>
                        .
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="username"
                        className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-gray-400 focus:ring-gray-400 mt-1"
                        placeholder="Enter username"
                        defaultValue
                      />
                    </div>
                    <div>
                      <div className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:border-gray-400 focus-within:ring-gray-400 mt-1">
                        <input
                          type="password"
                          id="password"
                          className="w-full bg-transparent border-none outline-none"
                          placeholder="Enter Password"
                          defaultValue
                        />
                        <div
                          className="cursor-pointer text-black4 shrink-0"
                          role="button"
                          aria-label="Show password"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 640 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="campaignCode"
                        className="flex items-center px-3 py-2 w-full h-[44px] bg-white rounded border border-solid border-neutral-200 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:border-gray-400 focus:ring-gray-400 mt-1"
                        placeholder="Enter Campaign Code"
                        defaultValue
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled
                    className=" active:opacity-70 w-full py-3 mt-2 text-base font-semibold text-center rounded-xl min-h-[44px] shadow-lg transition-all duration-200 bg-gray-400 text-white cursor-not-allowed"
                  >
                    Send OTP
                  </button>
                  <div className="self-center mt-2 text-sm text-center text-black4">
                    Already have account?{" "}
                    <button
                      type="button"
                      className="underline font-semibold text-black4 hover:opacity-80 bg-transparent border-0 p-0 cursor-pointer"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
