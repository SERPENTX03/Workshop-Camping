import { fetchLandmarks } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/Types";

const LandmarkContainer = async () => {
  const landmarks = await fetchLandmarks();
//   console.log(landmarks);
  return (
    <div>
      <LandmarkList landmarks={landmarks} />
    </div>
  );
};

export default LandmarkContainer;
