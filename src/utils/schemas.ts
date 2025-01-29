import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "กรุณาใส่ชื่อ" })
    .max(20, { message: "ชื่อต้องน้อยกว่า 20 ตัว" }),
  lastName: z
    .string()
    .min(1, { message: "กรุณาใส่นามสกุล" })
    .max(20, { message: "ชื่อต้องน้อยกว่า 20 ตัว" }),
});

const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less thab 1MB");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร" }) // String อย่างน้อย 2 ตัวอักษร
    .max(20, { message: "ชื่อต้องไม่เกิน 20 ตัวอักษร" }),
  category: z.string().nonempty({ message: "ต้องเลือก Category" }), // ต้องไม่ว่างเปล่า
  description: z
    .string()
    .min(10, { message: "คำอธิบายต้องมีอย่างน้อย 10 ตัวอักษร" }),
  price: z
    .coerce
    .number()
    .int()
    .min(1, { message: "กรุณาใส่ราคาที่มากกว่า 0" }),
  province: z.string().nonempty({ message: "ต้องระบุจังหวัด" }),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});


export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
