import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import CommentModal from "../components/CommentModal";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
export default function messages({ newsResults, randomUsersResults }) {
    const router = useRouter();
    return <div>

        <main className="flex min-h-screen mx-auto">
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Messages</h2>
                </div>
  <div class="py-full px-full">
    <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div class="md:flex">
            <div class="w-full p-4">
                <div class="relative"> <i class="fa fa-search absolute right-3 top-4 text-gray-300"></i> </div>
                <ul>
                    <Link href={'/chat'}><li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey there! 👋 I came across</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li></Link>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Komeial Bolger</span> <span class="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">12:26</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Tamaara Suiale</span> <span class="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">8:26</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Sam Nielson</span> <span class="text-sm text-gray-400 truncate w-32">I suggest to start new business soon</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">7:16</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/uIgDDDd.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Caroline Nexon</span> <span class="text-sm text-gray-400 truncate w-32">We need to start new reseatch center.</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">9:26</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/tT8rjKC.jpg" width="40" height="40" class="rounded-full"></img>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Patrick Koeler</span> <span class="text-sm text-gray-400 truncate w-32">May be yes</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">3:26</span> <i class="fa fa-star text-green-400"></i> </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

         {/* <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
                <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                    <div className="hoverEffect" onClick={() => router.push("/")}>
                        <ArrowLeftIcon className="h-5 " />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                        Posts
                    </h2>
                </div>

            </div> */}

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

