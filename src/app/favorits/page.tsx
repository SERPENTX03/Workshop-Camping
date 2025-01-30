import { fetchFavorites } from "@/actions/actions";
import React from "react";
import LandmarkList from "@/components/home/LandmarkList";
import EmtyList from "@/components/home/EmtyList";


const favoritsPage = async () => {
  const favolites = await fetchFavorites();
  if(favolites.length ===0){
    return <EmtyList heading="No items favorits" />
  }

  return (
    <div>

      <LandmarkList landmarks={favolites} />

    </div>
  );
};

export default favoritsPage;
