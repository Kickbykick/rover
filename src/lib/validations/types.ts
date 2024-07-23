import * as z from "zod"

export const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export const ClothItemSelectedSchema = z.object({
  name: z.string(),
  id: z.number(),
  amount: z.number(),
  size: z.string(),
  quantity: z.number(),
});

export const orderSchema = z.object({
  first_name: z.string().min(1, {message: "Please provide a first name."}),
  last_name: z.string().min(1, {message: "Please provide a last name."}),
  email: emailSchema.shape.email,
  phoneNumber: z.string().min(10, {message: "Please enter a valid phone number."}),
  deliveryAddress: z.string().min(10, {message: "Please enter a pickup address."}),
  // province: z.string().min(2, {message: "Please pick a province"}),
  // order: z.array(ClothItemSelectedSchema).nonempty({ message: "Please select at least one item." }),
  city: z.string().min(4, {message: "Please provide a city."}),
})

export type TEmailSchema = z.infer<typeof emailSchema>;
export type TOrderSchema = z.infer<typeof orderSchema>;