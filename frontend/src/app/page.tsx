import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 flex-shrink-0" />
        <main className="flex-1 p-6 overflow-y-auto bg-home ml-[250px]">
          <div className="details-section">
            <h1 className="text-slate-900">lorem300</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
