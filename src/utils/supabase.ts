import { createClient } from "@supabase/supabase-js";
const bucket = "Landmark-bucket";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const newName = `Serpentx-${timeStamp}-${image.name}`;

  const { data, error, } = await supabase.storage
    .from(bucket)
    .upload(newName, image,{
        cacheControl:'3600'
    });
  if (!data) throw new Error("Image uoload failed!!");

  return supabase.storage.from(bucket)
  .getPublicUrl(newName).data.publicUrl;
}
