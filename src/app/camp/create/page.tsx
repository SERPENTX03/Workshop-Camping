import Forminput from "@/components/form/Forminput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createLandmarkAction } from "@/actions/actions";

import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import MapLandmark from "@/components/map/MapLandmark";
import ImageInput from "@/components/form/ImageInput";

const CreateCamp = async () => {
  return (
    <section className="">
      <div className=" h-[70vh] max-w-[800px] mx-auto mt-10 px-10">
        <div
          className="w-full h-full  flex 
       justify-center"
        >
          <div className="flex flex-col w-full">
            <h1 className="text-3xl text-center mb-10 font-bold">
              Create Landmark
            </h1>
            <FormContainer action={createLandmarkAction}>
              <div className="flex justify-between  space-x-3 md:space-x-8">
                <Forminput
                  type="text"
                  htmlFor="landmark"
                  placeholder="Landmark"
                  id="landmark"
                  name="name"
                  label="Landmark"
                />

                <CategoryInput />
              </div>
              <TextAreaInput name="description" />
              <div className="flex mb-6 justify-between space-x-3 md:space-x-8">
                <Forminput
                  className=" "
                  type="number"
                  htmlFor="price"
                  placeholder="Price"
                  id="price"
                  name="price"
                  label="Price"
                />
                <ProvinceInput />
              </div>
              <ImageInput />

              <MapLandmark Location={{ lat: 14, lng: 100.5 }} />

              <div className="flex justify-center md:justify-start">
                <SubmitButton
                  className=" mt-4 h-14 w-40"
                  name="Create Landmark"
                />
              </div>
            </FormContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCamp;
