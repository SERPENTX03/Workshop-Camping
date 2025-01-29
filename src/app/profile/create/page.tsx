import Forminput from "@/components/form/Forminput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const CreateProfile = async() => {
  const user = await currentUser()
  if(user?.privateMetadata.hasProfile) redirect('/')
  return (
    <section className="">
      <div className=" h-[70vh] max-w-[800px] mx-auto mt-10 px-10">
        <div
          className="w-full h-full  flex 
       justify-center"
        >
          <div className="flex flex-col w-full">
            <h1 className="text-3xl text-center mb-10 font-bold">NewUser</h1>
            <FormContainer action={createProfileAction}>
              <Forminput
                className="py-10 mb-10"
                type="text"
                htmlFor="firstname"
                placeholder="First Name"
                id="firstname"
                name="firstName"
                label="FirstName"
              />
              <Forminput
                className="py-10 "
                type="text"
                htmlFor="lastname"
                placeholder="Last Name"
                id="lastname"
                name="lastName"
                label="LastName"
              />
              <SubmitButton className="mt-5 px-10 py-6" name="Submit" />
            </FormContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProfile;
