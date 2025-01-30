export interface FormState {
  message: string;
}

export type ActionFunction = (
  prevState: FormState,
  formData: FormData
) => Promise<FormState>;


export type LandmarkCardProps = {
  id: string;
  name: string;
  description: string;

  image: string;
  category: string;
  province: string;
  price: number;
  lat: number;
  lng: number;
};
