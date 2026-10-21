export const HVAC_SERVICE_OPTIONS = [
  "New HVAC System / Replacement",
  "Heating Repair",
  "Air Conditioning Repair",
  "Tune-Up / Maintenance",
  "Heat Pump / Mini-Split",
  "24/7 Emergency Service",
  "Not Sure / General Quote",
] as const;

export const HVAC_SYSTEM_OPTIONS = [
  "Furnace",
  "Central Air Conditioner",
  "Heat Pump",
  "Mini-Split / Ductless",
  "Multiple Systems",
  "Not Sure",
] as const;

export type QuoteField =
  | "name"
  | "phone"
  | "email"
  | "service"
  | "systemType"
  | "address"
  | "city"
  | "zipCode"
  | "details";

export interface QuoteFormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  systemType: string;
  address: string;
  city: string;
  zipCode: string;
  details: string;
}

export interface InquiryPayload extends QuoteFormValues {
  state: "Utah";
  termsAccepted: boolean;
  source: "contact-free-quote-form";
  website: string;
}

export type QuoteValidationErrors = Partial<Record<QuoteField, string>>;

export const EMPTY_QUOTE_FORM_VALUES: QuoteFormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  systemType: "",
  address: "",
  city: "",
  zipCode: "",
  details: "",
};

const NAME_PATTERN = /^[\p{L}][\p{L} .'-]{1,99}$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CITY_PATTERN = /^[\p{L}][\p{L} .'-]{1,79}$/u;
const ADDRESS_PATTERN = /^(?=.*[\p{L}])(?=.*\d)[\p{L}\d#.,'\/-][\p{L}\d#.,'\/\- ]{4,119}$/u;
const ZIP_CODE_PATTERN = /^\d{5}$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(record: Record<string, unknown>, field: string): string {
  return typeof record[field] === "string" ? record[field] : "";
}

export function sanitizeQuoteField(field: QuoteField, value: string): string {
  switch (field) {
    case "name":
      return value
        .replace(/[^\p{L} .'-]/gu, "")
        .replace(/\s{2,}/g, " ")
        .slice(0, 100);
    case "phone":
      return value.replace(/\D+/g, "").slice(0, 10);
    case "zipCode":
      return value.replace(/\D+/g, "").slice(0, 5);
    case "city":
      return value.replace(/[^\p{L} .'-]/gu, "").slice(0, 80);
    case "email":
      return value.slice(0, 254);
    case "address":
      return value.slice(0, 120);
    case "details":
      return value.slice(0, 2_000);
    default:
      return value.slice(0, 100);
  }
}

export function validateQuoteForm(values: QuoteFormValues): QuoteValidationErrors {
  const errors: QuoteValidationErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const address = values.address.trim();
  const city = values.city.trim();
  const zipCode = values.zipCode.trim();
  const details = values.details.trim();

  if (!name) {
    errors.name = "Enter your name.";
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = "Enter a valid full name.";
  }

  if (values.phone.length !== 10) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!HVAC_SERVICE_OPTIONS.some((service) => service === values.service)) {
    errors.service = "Select the service you need.";
  }

  if (
    values.systemType &&
    !HVAC_SYSTEM_OPTIONS.some((systemType) => systemType === values.systemType)
  ) {
    errors.systemType = "Select a valid system type.";
  }

  if (address && !ADDRESS_PATTERN.test(address)) {
    errors.address = "Include a street number and street name.";
  }

  if (city && !CITY_PATTERN.test(city)) {
    errors.city = "Enter a valid city.";
  }

  if (zipCode && !ZIP_CODE_PATTERN.test(zipCode)) {
    errors.zipCode = "Enter a valid 5-digit ZIP code.";
  }

  if (details && (details.length < 5 || !/[\p{L}]/u.test(details))) {
    errors.details = "Add a little more detail or leave this field blank.";
  }

  return errors;
}

export function buildInquiryPayload(
  values: QuoteFormValues,
  termsAccepted: boolean,
  website = "",
): InquiryPayload {
  return {
    name: values.name.trim(),
    phone: values.phone,
    email: values.email.trim().toLowerCase(),
    service: values.service,
    systemType: values.systemType,
    address: values.address.trim(),
    city: values.city.trim(),
    state: "Utah",
    zipCode: values.zipCode,
    details: values.details.trim(),
    termsAccepted,
    source: "contact-free-quote-form",
    website,
  };
}

export function parseInquiryPayload(
  value: unknown,
):
  | { success: true; data: InquiryPayload }
  | { success: false; errors: QuoteValidationErrors; message: string } {
  if (!isRecord(value)) {
    return {
      success: false,
      errors: {},
      message: "Invalid request body.",
    };
  }

  const values: QuoteFormValues = {
    name: sanitizeQuoteField("name", readString(value, "name")).trim(),
    phone: sanitizeQuoteField("phone", readString(value, "phone")),
    email: sanitizeQuoteField("email", readString(value, "email")).trim().toLowerCase(),
    service: sanitizeQuoteField("service", readString(value, "service")),
    systemType: sanitizeQuoteField("systemType", readString(value, "systemType")),
    address: sanitizeQuoteField("address", readString(value, "address")).trim(),
    city: sanitizeQuoteField("city", readString(value, "city")).trim(),
    zipCode: sanitizeQuoteField("zipCode", readString(value, "zipCode")),
    details: sanitizeQuoteField("details", readString(value, "details")).trim(),
  };
  const errors = validateQuoteForm(values);

  if (value.termsAccepted !== true) {
    return {
      success: false,
      errors,
      message: "Consent is required before submitting.",
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      message: "Please correct the highlighted fields.",
    };
  }

  return {
    success: true,
    data: buildInquiryPayload(
      values,
      true,
      sanitizeQuoteField("details", readString(value, "website")),
    ),
  };
}

export function isHoneypotSubmission(value: unknown): boolean {
  return isRecord(value) && readString(value, "website").trim().length > 0;
}
