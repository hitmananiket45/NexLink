import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import CommentModal from "../components/CommentModal";
import { ArrowLeftIcon } from "@heroicons/react/outline";
export default function chat({ newsResults, randomUsersResults }) {
    const router = useRouter();
    return <div>

        <main className="flex min-h-screen mx-auto">
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Chat</h2>
                </div>
                <div class="flex flex-col flex-auto h-full p-6">
    <div
      class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
    >
                     <div class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span>  </div>
                        </div>
                        <div class="flex flex-col items-center"> <i class="fa fa-star text-green-400"></i> </div>
                    </div>
      <div class="flex flex-col h-full overflow-x-auto mb-4">
        <div class="flex flex-col h-full">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  J
                </div>
                <div
                  class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div> Hey there! 👋 I came across your profile and noticed your expertise in software development. Impressive stuff! </div>
                </div>
              </div>
            </div>
            <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  J
                </div>
                <div
                  class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>
                  Are you currently open to new opportunities?
                  </div>
                </div>
              </div>
            </div>
            <div class="col-start-6 col-end-13 p-3 rounded-lg">
              <div class="flex items-center justify-start flex-row-reverse">
              
                <div
                  class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>Hi Jessica! Thanks a lot for reaching out. Yeah, I'm open to exploring new opportunities. </div>
                </div>
              </div>
            </div>
            <div class="col-start-6 col-end-13 p-3 rounded-lg">
              <div class="flex items-center justify-start flex-row-reverse">
                
                <div
                  class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>
                    What do you have in mind?
                  </div>
                </div>
              </div>
            </div>
            <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  J
                </div>
                <div
                  class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>Awesome! 😊 We have some exciting projects in the pipeline and are looking for skilled developers like yourself. </div>
                </div>
              </div>
            </div>
            <div class="col-start-6 col-end-13 p-3 rounded-lg">
              <div class="flex items-center justify-start flex-row-reverse">
                {/* <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  J
                </div> */}
                <div
                  class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>
                  Absolutely! I'd love to chat more. When works for you?
                  </div>
                  <div
                    class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                  >
                    Seen
                  </div>
                </div>
              </div>
            </div>
            <div class="col-start-1 col-end-8 p-3 rounded-lg">
              <div class="flex flex-row items-center">
                <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                >
                  J
                </div>
                <div
                  class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                >
                  <div>
                  Can we discuss more about your background and what you're looking for in your next role?
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
      <div
        class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
      >
        <div>
          <button
            class="flex items-center justify-center text-gray-400 hover:text-gray-600"
          >
            <svg
              class="w-5 h-5"
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
        <div class="flex-grow ml-4">
          <div class="relative w-full">
            <input
              type="text"
              class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
            <button
              class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
            >
              <svg
                class="w-6 h-6"
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
        <div class="ml-4">
          <button
            class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          >
            <span>Send</span>
            <span class="ml-2">
              <svg
                class="w-4 h-4 transform rotate-45 -mt-px"
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
            {/* Widgets */}

            <Widgets
                newsResults={newsResults.articles}
                randomUsersResults={randomUsersResults.results}
            />

            {/* Modal */}

            <CommentModal />

        </main>
    </div>
}

export async function getServerSideProps() {
    const newsResults = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
    ).then((res) => res.json());

    // Who to follow section

    let randomUsersResults = [];

    try {
        const res = await fetch(
            "https://randomuser.me/api/?results=30&inc=name,login,picture"
        );

        randomUsersResults = await res.json();
    } catch (e) {
        randomUsersResults = [];
    }

    return {
        props: {
            newsResults,
            randomUsersResults,
        },
    };
}

