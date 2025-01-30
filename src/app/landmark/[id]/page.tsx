import { fetchLandmarkDetail } from "@/actions/actions";
import ToggleButton from "@/components/card/ToggleButton";
import Description from "@/components/landmark/Description";
import ImageContainer from "@/components/landmark/ImageContainer";
import LandmarkBreadcrumb from "@/components/landmark/LandmarkBreadcrumb";
import ShareButton from "@/components/landmark/ShareButton";
import MapLandmark from "@/components/map/MapLandmark";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetail({ id });
  if (!landmark) redirect("/");

  return (
    <section className="max-w-6xl mx-auto  mt-4 px-8">
      <div className="">
        <LandmarkBreadcrumb name={landmark.name} />
        <header className="mt-4 flex justify-between items-center">
          <h1 className="text-lg md:text-3xl font-semibold">{landmark.name}</h1>
          <div className="flex items-center space-x-4">
            <span>
              <ShareButton landmarkId={landmark.id} name={landmark.name} />
            </span>
            <span>
              <ToggleButton landmarkId={landmark.id} />
            </span>
          </div>
        </header>
        {/* Image */}
        <div className="mt-4">
          <ImageContainer mainImage={landmark.image} name={landmark.name} />
          {/* Deteil */}
          <section>
            <div>
              <Description description={landmark.description} />
            </div>
            <MapLandmark Location={{ lat: landmark.lat, lng: landmark.lng }} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default LandmarkDetail;
