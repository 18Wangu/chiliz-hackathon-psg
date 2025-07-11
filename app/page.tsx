import Navbar from "../components/Navbar";
import GamesList from "../components/GamesList";
import StreamSection from "../components/StreamSection";
import ChatSection from "../components/ChatSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative">
        <Navbar />
        <div className="h-[4px] bg-gradient-to-r from-[#0B0518] via-[#FF0052] to-[#0B0518]"></div>
        <div className="absolute w-full h-6 bg-gradient-to-b from-[rgba(255,0,82,0.2)] to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-[#FF0052] opacity-30"></div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4">
          <GamesList />
        </div>
        <div className="w-2/4">
          <StreamSection />
        </div>
        <div className="w-1/4">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}
