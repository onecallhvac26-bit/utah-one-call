"use client";

import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  type FormEvent,
  type InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  buildInquiryPayload,
  EMPTY_QUOTE_FORM_VALUES,
  HVAC_SERVICE_OPTIONS,
  HVAC_SYSTEM_OPTIONS,
  type QuoteField,
  type QuoteFormValues,
  type QuoteValidationErrors,
  sanitizeQuoteField,
  validateQuoteForm,
} from "@/lib/free-quote";
import { INQUIRIES_API_ROUTE } from "@/config/site";

const FIELD_HELPERS = {
  name: "Enter the full name for this quote request.",
  phone: "Enter the best 10-digit number to reach you.",
  email: "We will send your request confirmation here.",
  service: "Choose the closest match so we can route your request.",
  systemType: "Optional. Select the equipment involved.",
  address: "Optional. A street address helps us understand the property.",
  city: "Optional northern Utah city.",
  zipCode: "Optional 5-digit ZIP code.",
  details: "Optional. Share symptoms, urgency, or helpful access details.",
} as const;

export function FreeQuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(() => ({
    ...EMPTY_QUOTE_FORM_VALUES,
  }));
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<QuoteField, boolean>>
  >({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submitErrorRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const validationErrors = validateQuoteForm(values);

  useEffect(() => {
    if (submitError) {
      submitErrorRef.current?.focus();
    }
  }, [submitError]);

  const markFieldTouched = (field: QuoteField) => {
    setTouchedFields((previous) => ({ ...previous, [field]: true }));
  };

  const updateField = (field: QuoteField, value: string) => {
    setValues((previous) => ({
      ...previous,
      [field]: sanitizeQuoteField(field, value),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentErrors = validateQuoteForm(values);

    if (Object.keys(currentErrors).length > 0) {
      setTouchedFields({
        name: true,
        phone: true,
        email: true,
        service: true,
        systemType: true,
        address: true,
        city: true,
        zipCode: true,
        details: true,
      });
      setSubmitError("Please correct the highlighted fields before submitting.");
      return;
    }

    if (!termsAccepted) {
      setTermsTouched(true);
      setSubmitError("Please agree to be contacted about your request.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    try {
      const response = await fetch(INQUIRIES_API_ROUTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildInquiryPayload(values, true, website)),
      });
      const responseBody = (await response.json().catch(() => null)) as
        | {
            data?: { customerConfirmationSent?: boolean };
            error?: string;
          }
        | null;

      if (!response.ok) {
        throw new Error(responseBody?.error ?? "Unable to send your request.");
      }

      const customerConfirmationSent = Boolean(
        responseBody?.data?.customerConfirmationSent,
      );

      setValues({ ...EMPTY_QUOTE_FORM_VALUES });
      setTouchedFields({});
      setTermsAccepted(false);
      setTermsTouched(false);
      setWebsite("");
      setMoreInfoOpen(false);
      setSubmitMessage(
        customerConfirmationSent
          ? "Thanks. Your request was received—check your email for confirmation."
          : "Thanks. Your request was received and queued for review.",
      );
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="occ-form-card" id="free-quote-form">
      <div className="occ-form-head">
        <div className="occ-form-eyebrow">Request Service</div>
        <h2>
          Book a free
          <br />
          <em>HVAC quote.</em>
        </h2>
        <p>
          Tell us how to reach you and what kind of help you need. For an active
          no-heat or no-cool emergency, calling is still the fastest option.
        </p>
      </div>

      <form className="occ-quote-form" onSubmit={handleSubmit} noValidate>
        <div className="occ-form-honeypot" aria-hidden="true">
          <label htmlFor="quote-website">Website</label>
          <input
            id="quote-website"
            name="website"
            type="text"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <QuoteTextField
          field="name"
          label="Name"
          values={values}
          touchedFields={touchedFields}
          validationErrors={validationErrors}
          helperText={FIELD_HELPERS.name}
          onBlur={markFieldTouched}
          onChange={updateField}
          autoComplete="name"
          maxLength={100}
          required
        />

        <div className="occ-quote-grid is-two-column">
          <QuoteTextField
            field="phone"
            label="Phone number"
            values={values}
            touchedFields={touchedFields}
            validationErrors={validationErrors}
            helperText={FIELD_HELPERS.phone}
            onBlur={markFieldTouched}
            onChange={updateField}
            autoComplete="tel"
            inputMode="numeric"
            maxLength={10}
            type="tel"
            required
          />
          <QuoteTextField
            field="email"
            label="Email address"
            values={values}
            touchedFields={touchedFields}
            validationErrors={validationErrors}
            helperText={FIELD_HELPERS.email}
            onBlur={markFieldTouched}
            onChange={updateField}
            autoComplete="email"
            maxLength={254}
            type="email"
            required
          />
        </div>

        <QuoteSelectField
          field="service"
          label="Service needed"
          value={values.service}
          options={HVAC_SERVICE_OPTIONS}
          touchedFields={touchedFields}
          validationErrors={validationErrors}
          helperText={FIELD_HELPERS.service}
          placeholder="Select a service"
          onBlur={markFieldTouched}
          onChange={(value) => updateField("service", value)}
          required
        />

        <div className={`occ-more-info${moreInfoOpen ? " is-open" : ""}`}>
          <button
            type="button"
            className="occ-more-info-toggle"
            aria-expanded={moreInfoOpen}
            aria-controls="quote-more-information"
            onClick={() => setMoreInfoOpen((previous) => !previous)}
          >
            <span>
              <strong>Add property and system details</strong>
              <small>Optional, but it helps us prepare before we call.</small>
            </span>
            <motion.span
              className="occ-more-info-icon"
              aria-hidden="true"
              animate={{ rotate: moreInfoOpen ? 180 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.22,
                ease: "easeOut",
              }}
            >
              <ExpandMoreRoundedIcon />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {moreInfoOpen ? (
              <motion.div
                id="quote-more-information"
                className="occ-more-info-panel"
                initial={
                  prefersReducedMotion ? false : { height: 0, opacity: 0 }
                }
                animate={{ height: "auto", opacity: 1 }}
                exit={
                  prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="occ-more-info-fields">
                  <QuoteSelectField
                    field="systemType"
                    label="System type"
                    value={values.systemType}
                    options={HVAC_SYSTEM_OPTIONS}
                    touchedFields={touchedFields}
                    validationErrors={validationErrors}
                    helperText={FIELD_HELPERS.systemType}
                    placeholder="Select a system"
                    onBlur={markFieldTouched}
                    onChange={(value) => updateField("systemType", value)}
                  />
                  <QuoteTextField
                    field="address"
                    label="Street address"
                    values={values}
                    touchedFields={touchedFields}
                    validationErrors={validationErrors}
                    helperText={FIELD_HELPERS.address}
                    onBlur={markFieldTouched}
                    onChange={updateField}
                    autoComplete="street-address"
                    maxLength={120}
                    placeholder="123 Main Street"
                  />
                  <div className="occ-quote-grid is-address-row">
                    <QuoteTextField
                      field="city"
                      label="City"
                      values={values}
                      touchedFields={touchedFields}
                      validationErrors={validationErrors}
                      helperText={FIELD_HELPERS.city}
                      onBlur={markFieldTouched}
                      onChange={updateField}
                      autoComplete="address-level2"
                      maxLength={80}
                    />
                    <QuoteTextField
                      field="zipCode"
                      label="ZIP code"
                      values={values}
                      touchedFields={touchedFields}
                      validationErrors={validationErrors}
                      helperText={FIELD_HELPERS.zipCode}
                      onBlur={markFieldTouched}
                      onChange={updateField}
                      autoComplete="postal-code"
                      inputMode="numeric"
                      maxLength={5}
                    />
                    <TextField
                      disabled
                      fullWidth
                      label="State"
                      value="Utah"
                      variant="filled"
                      helperText="Fixed for this service area."
                      slotProps={{
                        input: { disableUnderline: true },
                        formHelperText: { sx: { marginInline: 0 } },
                      }}
                      sx={getQuoteFieldSx(false)}
                    />
                  </div>
                  <QuoteTextField
                    field="details"
                    label="What is going on?"
                    values={values}
                    touchedFields={touchedFields}
                    validationErrors={validationErrors}
                    helperText={FIELD_HELPERS.details}
                    onBlur={markFieldTouched}
                    onChange={updateField}
                    maxLength={2_000}
                    minRows={4}
                    multiline
                    placeholder="Share symptoms, system age, noises, error codes, or anything else that may help."
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="occ-quote-consent">
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(event) => {
                  setTermsAccepted(event.target.checked);
                  setTermsTouched(true);
                }}
                sx={getCheckboxSx()}
              />
            }
            label="I agree that One Call Heating & Air may contact me about this request."
            sx={{
              alignItems: "center",
              margin: 0,
              "& .MuiFormControlLabel-label": {
                color: "#334155",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.55,
              },
            }}
          />
          {termsTouched && !termsAccepted ? (
            <FormHelperText error sx={{ margin: 0, fontFamily: "Inter, sans-serif" }}>
              Please agree before submitting.
            </FormHelperText>
          ) : null}
        </div>

        <button
          type="submit"
          className="occ-quote-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <AutorenewRoundedIcon className="occ-submit-spinner" aria-hidden="true" />
              Sending request…
            </>
          ) : (
            <>
              <SendRoundedIcon aria-hidden="true" />
              Send request
            </>
          )}
        </button>

        {submitMessage ? (
          <Alert severity="success" variant="filled" className="occ-form-alert">
            {submitMessage}
          </Alert>
        ) : null}

        {submitError ? (
          <div ref={submitErrorRef} tabIndex={-1}>
            <Alert severity="error" variant="filled" className="occ-form-alert">
              {submitError}
            </Alert>
          </div>
        ) : null}

        <p className="occ-form-response-note">
          Most messages are answered within 24 hours. Phone is faster for
          emergencies.
        </p>
      </form>
    </div>
  );
}

function QuoteTextField({
  autoComplete,
  field,
  helperText,
  inputMode,
  label,
  maxLength,
  minRows,
  multiline = false,
  onBlur,
  onChange,
  placeholder,
  required = false,
  touchedFields,
  type = "text",
  validationErrors,
  values,
}: {
  autoComplete?: string;
  field: QuoteField;
  helperText: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  label: string;
  maxLength?: number;
  minRows?: number;
  multiline?: boolean;
  onBlur: (field: QuoteField) => void;
  onChange: (field: QuoteField, value: string) => void;
  placeholder?: string;
  required?: boolean;
  touchedFields: Partial<Record<QuoteField, boolean>>;
  type?: string;
  validationErrors: QuoteValidationErrors;
  values: QuoteFormValues;
}) {
  const error = touchedFields[field] ? validationErrors[field] : undefined;
  const hasSuccess = Boolean(
    touchedFields[field] && !validationErrors[field] && values[field].trim(),
  );

  return (
    <TextField
      autoComplete={autoComplete}
      color={hasSuccess ? "success" : "primary"}
      error={Boolean(error)}
      fullWidth
      helperText={error ?? (hasSuccess ? "Looks good." : helperText)}
      inputMode={inputMode}
      label={label}
      minRows={minRows}
      multiline={multiline}
      onBlur={() => onBlur(field)}
      onChange={(event) => onChange(field, event.target.value)}
      placeholder={placeholder}
      required={required}
      type={type}
      value={values[field]}
      variant="filled"
      slotProps={{
        input: { disableUnderline: true },
        htmlInput: maxLength ? { maxLength } : undefined,
        formHelperText: { sx: { marginInline: 0 } },
      }}
      sx={getQuoteFieldSx(hasSuccess)}
    />
  );
}

function QuoteSelectField({
  field,
  helperText,
  label,
  onBlur,
  onChange,
  options,
  placeholder,
  required = false,
  touchedFields,
  validationErrors,
  value,
}: {
  field: QuoteField;
  helperText: string;
  label: string;
  onBlur: (field: QuoteField) => void;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  touchedFields: Partial<Record<QuoteField, boolean>>;
  validationErrors: QuoteValidationErrors;
  value: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const error = touchedFields[field] ? validationErrors[field] : undefined;
  const hasSuccess = Boolean(touchedFields[field] && !error && value.trim());

  return (
    <TextField
      color={hasSuccess ? "success" : "primary"}
      error={Boolean(error)}
      fullWidth
      helperText={error ?? (hasSuccess ? "Looks good." : helperText)}
      label={label}
      onBlur={() => onBlur(field)}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      select
      value={value}
      variant="filled"
      slotProps={{
        input: { disableUnderline: true },
        formHelperText: { sx: { marginInline: 0 } },
        select: {
          MenuProps: {
            transitionDuration: prefersReducedMotion
              ? 0
              : { enter: 240, exit: 160 },
            slotProps: {
              paper: { className: "occ-select-menu-paper" },
            },
          },
        },
      }}
      sx={getQuoteFieldSx(hasSuccess)}
    >
      <MenuItem value="">{placeholder}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

function getQuoteFieldSx(hasSuccess: boolean) {
  return {
    "& .MuiFilledInput-root": {
      backgroundColor: hasSuccess ? "#f0fdf4" : "#f1f5f9",
      border: `1.5px solid ${hasSuccess ? "#15803d" : "rgba(15, 23, 42, 0.16)"}`,
      borderRadius: "8px",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
      transition:
        "box-shadow 0.18s ease, border-color 0.18s ease, background-color 0.18s ease",
    },
    "& .MuiFilledInput-root:not(.MuiInputBase-multiline)": {
      minHeight: "64px",
    },
    "& .MuiFilledInput-input:not(textarea)": {
      boxSizing: "border-box",
      minHeight: "61px",
      padding: "27px 14px 10px",
    },
    "& .MuiSelect-select.MuiFilledInput-input": {
      paddingRight: "38px",
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: hasSuccess ? "#f0fdf4" : "#ffffff",
      borderColor: hasSuccess ? "#15803d" : "rgba(24, 101, 217, 0.55)",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#ffffff",
      borderColor: "#1865d9",
      boxShadow: "0 0 0 3px rgba(24, 101, 217, 0.15)",
    },
    "& .MuiFilledInput-root.Mui-error": {
      backgroundColor: "#fff7f7",
      borderColor: "#c62828",
    },
    "& .MuiFilledInput-root.Mui-disabled": {
      backgroundColor: "#e2e8f0",
    },
    "& .MuiInputLabel-root": {
      color: hasSuccess ? "#15803d" : "#475569",
      fontFamily: "Inter, sans-serif",
      fontSize: "0.94rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    "& .MuiFormHelperText-root": {
      color: hasSuccess ? "#15803d" : "#64748b",
      fontFamily: "Inter, sans-serif",
      fontSize: "0.72rem",
      lineHeight: 1.45,
      marginTop: "6px",
      paddingInline: "2px",
    },
  };
}

function getCheckboxSx() {
  return {
    color: "#64748b",
    "&.Mui-checked": { color: "#1865d9" },
    "&.Mui-focusVisible": {
      outline: "3px solid rgba(24, 101, 217, 0.2)",
      outlineOffset: "2px",
    },
  };
}
