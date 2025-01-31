import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import HeroSection from "../hero/HeroSection";
import { LandmarkCardProps } from "@/utils/Types";
import Categories from "../hero/Categories";
import EmtyList from "./EmtyList";

interface LandmarkContainerProps {
  search?: string;
  category?: string;
}

const LandmarkContainer = async ({ search, category }: LandmarkContainerProps) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search, category });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();

  return (
    <div>
      <HeroSection landmarks={landmarksHero} />
      <Categories search={search} category={category} />
      {landmarks.length === 0 ? (
        <EmtyList />
      ) : (
        <LandmarkList landmarks={landmarks} />
      )}
    </div>
  );
};

export default LandmarkContainer;