import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";
import { Check, CheckCircle2, Lock, RocketIcon, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 flex-shrink-0" />
        <main className="flex-1 p-6 overflow-y-auto bg-home ml-[250px]">
          <div className="details-section">
                <div className="ml-[22rem]">
                    <h1 className="text-black text-3xl">Good Morning, Kashif 🚀 </h1>
                </div>
                <div className="ml-[18rem] mb-12 mt-3 total-analytics flex justify-between bg-white rounded-full py-3 px-6" style={{width:'525px'}}>
                    <span className="flex text-base"> 
                        🏅 1 Projects
                        <i className="ms-2 border-r-2 border-black"></i>
                    </span>
                    <span className="flex text-base"> 
                        <CheckCircle2 className="me-1 text-xs"/> 
                        5 Tasks completed 
                        <i className="ms-2 border-r-2 border-black"></i>
                    </span>
                    <span className="flex text-base"> 
                        <Users className="me-2" /> 
                        3 Collaborators 
                        </span>
                </div>
                <div className="ml-[4rem] task-detail-section bg-white p-7 rounded-xl  hover:border border-1 border-gray-400" 
                    style=  {{width:'90%'}}
                >
                    <div className="Avatar-section flex items-center">
                        <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <span className="mb-0.5 ms-3 text-base font-semibold">My Tasks </span>
                        </div>
                    </div>
                    <div className="tab-section mt-2 ml-[49px]">
                        <Tabs defaultValue="account" className="">
                            <TabsList>
                                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                                <TabsTrigger value="overdue">Overdue</TabsTrigger>
                                <TabsTrigger value="completed">Completed</TabsTrigger>

                            </TabsList>
                            <TabsContent value="upcoming">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eveniet! Illum provident debitis deleniti atque? Veritatis nulla eum voluptas perferendis incidunt, ipsam totam nisi doloribus placeat delectus magni beatae molestias quis dolorem unde ut dolorum repellendus a quas quos sapiente! Distinctio error debitis quasi sit quae ipsam harum maiores nemo vero obcaecati ipsum ullam, numquam autem totam praesentium, tempora dicta earum quas, blanditiis illo? Dignissimos et quod exercitationem? Ea totam inventore delectus rerum asperiores tempore deleniti eius repellat id sequi veniam ad, at suscipit quas sunt architecto fugiat modi commodi in numquam, quaerat nemo illo! Soluta est nobis odit asperiores enim exercitationem porro pariatur a excepturi quo placeat tenetur, aspernatur deserunt iure qui quasi corrupti suscipit cupiditate! Quibusdam at quisquam deserunt quidem debitis ipsum est nemo repudiandae officia, corporis exercitationem! Sint, voluptate? Amet culpa facere quaerat alias, dolore, maxime vitae recusandae fugiat ipsam vero ipsa! Explicabo accusantium eaque, ratione possimus libero placeat nihil quaerat! Atque tenetur obcaecati accusantium doloribus odio tempora, neque nobis ratione laboriosam praesentium natus a corrupti inventore tempore dignissimos molestiae labore dicta illo iusto! Suscipit nostrum dignissimos dolorum corporis ipsum numquam, cupiditate fugit recusandae dolorem minus eos deleniti quo pariatur autem, iste nihil reprehenderit molestiae quasi. Sit!
                            </TabsContent>
                            <TabsContent value="overdue">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime praesentium impedit eveniet, veniam adipisci, nemo ipsum nisi iusto accusamus quidem dolorem consequuntur nobis distinctio. Facere, cupiditate laborum similique voluptatum debitis, aperiam odit quaerat delectus perferendis molestiae blanditiis minima facilis error, obcaecati quos? Consectetur modi aspernatur quibusdam assumenda, id distinctio voluptatum suscipit libero esse minima tempora quae dicta, ipsa odio sint nostrum debitis ab ad quis, accusamus culpa iste amet? Hic quia odio fugiat numquam dolorem est, accusamus delectus at tempore harum vel fugit eum perferendis porro minus odit voluptates. Blanditiis a accusamus eos ipsum veniam officia, corrupti dicta quis voluptatem natus obcaecati voluptate laboriosam itaque dolore beatae incidunt explicabo aperiam praesentium velit quas. Ad sint voluptatibus fugiat autem voluptas, vel nam tenetur cumque soluta impedit minima, veniam qui quisquam quam nemo veritatis. Quam blanditiis laudantium perspiciatis. Possimus asperiores fuga consequuntur aut? Molestiae odio magni quis laborum velit sint placeat voluptate rerum exercitationem, explicabo nihil voluptatum eaque error corporis. Soluta eius harum mollitia ut iusto dolorem voluptatem facilis facere possimus totam, iste doloremque aliquam odio pariatur incidunt eos ea! Expedita, vero quam voluptatum ad sit atque sapiente natus tenetur earum placeat voluptatem dolore at nulla dolorem. Pariatur corrupti magnam magni!
                            </TabsContent>
                            <TabsContent value="completed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsum tempora consequatur sint eius nam, iure deleniti alias repellendus! Praesentium reiciendis animi voluptates ipsam eum voluptatibus voluptas accusantium unde dolorum consequatur atque libero dolor alias veritatis aperiam asperiores et officiis, error quis. Molestias itaque dolor id doloribus odit culpa enim corrupti quaerat nam esse velit odio ea tenetur non expedita nemo voluptatum magni, provident reprehenderit, nostrum asperiores magnam. Quasi, quis nisi consequuntur tenetur deleniti, facere dolore iste aliquam id eius voluptates laudantium. Explicabo eveniet in repellendus hic iusto tempora error voluptates rem nihil! Eius hic voluptate facilis perferendis. Voluptas libero laudantium ipsam. Modi assumenda, doloribus numquam ad autem, voluptates dignissimos labore nesciunt omnis minus error non sint est culpa ea molestias suscipit similique fugit. Repudiandae omnis eum sequi excepturi voluptatem, qui reiciendis iste odit nobis deserunt fugiat? Soluta error ipsum iure sunt eaque ea repudiandae necessitatibus excepturi qui quam! Praesentium est nesciunt quis aliquam tenetur mollitia corrupti distinctio aut alias ipsa magnam deleniti libero, rem commodi totam doloremque, dolores exercitationem doloribus consectetur expedita facilis ipsam numquam adipisci fugiat? Maxime ex consequuntur adipisci debitis qui odit fugit, veritatis distinctio, aperiam, labore tempore nisi quas quia recusandae tenetur. Repellendus quod dolorum quam!
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
          </div>
        </main>
      </div>
    </div>
  );
}
