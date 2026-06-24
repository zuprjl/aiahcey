import Navigation from "@/components/Navigation";
import Lightbox from "@/components/ui/Lightbox";
import HeroSection from "@/components/sections/HeroSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import WhyAiahceySection from "@/components/sections/WhyAiahceySection";
import CharacterStudySection from "@/components/sections/CharacterStudySection";
import TheFormulaSection from "@/components/sections/TheFormulaSection";
import VideoSection from "@/components/sections/VideoSection";
import DirectQuotesSection from "@/components/sections/DirectQuotesSection";
import MeaningfulMomentsSection from "@/components/sections/MeaningfulMomentsSection";
import MemoryWallSection from "@/components/sections/MemoryWallSection";
import TweetInteractionsSection from "@/components/sections/TweetInteractionsSection";
import FanLensSection from "@/components/sections/FanLensSection";
import TimelineSection from "@/components/sections/TimelineSection";
import AiahceyFilesSection from "@/components/sections/AiahceyFilesSection";
import TikTokBondSection from "@/components/sections/TikTokBondSection";
import CrashoutWallSection from "@/components/sections/CrashoutWallSection";
import DisclaimerSection from "@/components/sections/DisclaimerSection";
import characterStudies from "@/data/characterStudies";

export default function Home() {
  const aiah = characterStudies.find((s) => s.id === "aiah")!;
  const stacey = characterStudies.find((s) => s.id === "stacey")!;

  return (
    <>
      <Navigation />
      <Lightbox />
      <main>
        {/* Act 1 — First impressions */}
        <HeroSection />
        <PhotoGallerySection />

        {/* Act 2 — Who they are */}
        <WhyAiahceySection />
        <TikTokBondSection />
        <CrashoutWallSection />
        <CharacterStudySection study={aiah} />
        <CharacterStudySection study={stacey} />
        <TheFormulaSection />

        {/* Act 3 — Watch and listen */}
        <VideoSection />
        <DirectQuotesSection />

        {/* Act 4 — Feel it */}
        <MeaningfulMomentsSection />
        <MemoryWallSection />
        <TweetInteractionsSection />

        {/* Act 5 — Go deeper */}
        <FanLensSection />
        <TimelineSection />
        <AiahceyFilesSection />
      </main>
      <DisclaimerSection />
    </>
  );
}
