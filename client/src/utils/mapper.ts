import { CareerApplication, ContactUs } from "@/types/careers";

export function mapContactFormToApiPayload(formData: ContactUs) {
  return {
    name: formData.name,
    email: formData.email,
    company: formData.company,
    country_code: formData.countryCode,
    phone_number: formData.phone,
    service_area: formData.serviceArea,
    message: formData.message,
  };
}
