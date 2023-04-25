import React from "react";

type Props = {};

function Chat({}: Props) {
  return (
    <>
      <div className="flex h-[calc(100vh-90px)] antialiased text-gray-800">
        <div className="flex flex-row w-full h-full overflow-x-hidden">
          <div className="flex flex-col flex-shrink-0 w-64 py-8 pl-6 pr-2 bg-white">
            <div className="flex flex-row items-center justify-center w-full h-12">
              <div className="flex items-center justify-center w-10 h-10 text-indigo-700 bg-indigo-100 rounded-2xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 text-2xl font-bold">QuickChat</div>
            </div>
            <div className="flex flex-col items-center w-full px-4 py-6 mt-4 bg-indigo-100 border border-gray-200 rounded-lg">
              <div className="w-20 h-20 overflow-hidden border rounded-full">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-2 text-sm font-semibold">Aminos Co.</div>
              <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
              <div className="flex flex-row items-center mt-3">
                <div className="flex flex-col justify-center w-8 h-4 bg-indigo-500 rounded-full">
                  <div className="self-end w-3 h-3 mr-1 bg-white rounded-full"></div>
                </div>
                <div className="ml-1 text-xs leading-none">Active</div>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full">
                  4
                </span>
              </div>
              <div className="flex flex-col h-48 mt-4 -mx-2 space-y-1 overflow-y-auto">
                <button className="flex flex-row items-center p-2 hover:bg-gray-100 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
                <button className="flex flex-row items-center p-2 hover:bg-gray-100 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                    M
                  </div>
                  <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                  <div className="flex items-center justify-center w-4 h-4 ml-auto text-xs leading-none text-white bg-red-500 rounded">
                    2
                  </div>
                </button>
                <button className="flex flex-row items-center p-2 hover:bg-gray-100 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 bg-orange-200 rounded-full">
                    P
                  </div>
                  <div className="ml-2 text-sm font-semibold">
                    Philip Tucker
                  </div>
                </button>
                <button className="flex flex-row items-center p-2 hover:bg-gray-100 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 bg-pink-200 rounded-full">
                    C
                  </div>
                  <div className="ml-2 text-sm font-semibold">
                    Christine Reid
                  </div>
                </button>
                <button className="flex flex-row items-center p-2 hover:bg-gray-100 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full">
                    J
                  </div>
                  <div className="ml-2 text-sm font-semibold">Jerry Guzman</div>
                </button>
              </div>
              <div className="flex flex-row items-center justify-between mt-6 text-xs">
                <span className="font-bold">Archivied</span>
                <span className="flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full">
                  7
                </span>
              </div>
              <div className="flex flex-col mt-4 -mx-2 space-y-1">
                <button className="flex flex-row items-center p-2 hover:bg-gray-100 rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-200 rounded-full">
                    H
                  </div>
                  <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-auto p-6 h-full">
            <div className="flex flex-col flex-auto flex-shrink-0 h-full p-4 bg-gray-100 rounded-2xl">
              <div className="flex flex-col h-full mb-4 overflow-x-auto">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
                      <div className="flex flex-row-reverse items-center justify-start">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
                      <div className="flex flex-row-reverse items-center justify-start">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div>Lorem ipsum dolor sit amet !</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
                      <div className="flex flex-row-reverse items-center justify-start">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                            ?
                          </div>
                          <div className="absolute bottom-0 right-0 mr-2 -mb-5 text-xs text-gray-500">
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                          A
                        </div>
                        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                          <div className="flex flex-row items-center">
                            <button className="flex items-center justify-center w-10 h-8 bg-indigo-600 rounded-full hover:bg-indigo-800">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </button>
                            <div className="flex flex-row items-center ml-4 space-x-px">
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-4 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-8 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-8 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-10 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-10 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-12 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-10 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-6 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-5 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-4 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-3 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-10 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-10 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-8 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-8 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-1 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-1 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-8 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-8 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-2 bg-gray-500 rounded-lg"></div>
                              <div className="w-1 h-4 bg-gray-500 rounded-lg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* send message component */}
              <div className="sticky bottom-0 flex flex-row items-center w-full h-16 px-4 bg-white  rounded-xl">
                {/* attachment button */}
                <div>
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* input */}
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-indigo-300"
                    />
                    <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* send button */}
                <div className="ml-4">
                  <button className="flex items-center justify-center flex-shrink-0 px-4 py-1 text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl">
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 -mt-px transform rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
