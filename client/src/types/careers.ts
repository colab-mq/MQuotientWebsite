export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  desirable?: string[];
  active: boolean;
}

export interface CareerApplication {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume?: File;
  countryCode: string;
  sendResume: boolean;

}

export interface ContactUs {
  name: string;
  email: string;
  company: string;
  countryCode: string;
  phone: string;
  serviceArea: string;
  message: string;
}
