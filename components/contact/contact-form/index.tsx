"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {
  TextField,
  Box,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  FormUI,
  OuterGrid2,
  OutlineWhiteBtn1,
  SmallFullStop,
} from "@/styles/MUI/common.styled";
import { apiUrl, careerFormFields } from "@/lib/constanst";
import ArrowRightWhite from "@/components/common/SVGIcons/arrowRightWhite";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
export type FormData = {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
};

export default function ContactForm() {
  const contactform = true;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
  });

  type FormErrors = Partial<Record<keyof FormData, string>>;
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "First name is required.";
    if (!formData.lastname.trim())
      newErrors.lastname = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.contactnumber.trim()) {
      newErrors.contactnumber = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contactnumber)) {
      newErrors.contactnumber = "Please enter valid 10-digit phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "contactnumber") {
      // Remove non-digits
      let numericValue = value.replace(/\D/g, "");

      // Limit to 10 digits
      if (numericValue.length > 10) {
        numericValue = numericValue.slice(0, 10);
      }

      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!recaptchaRef.current) {
      alert("reCAPTCHA not loaded.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Execute invisible reCAPTCHA
      const captchaToken = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!captchaToken) {
        alert("reCAPTCHA failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(apiUrl.api.saveApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: formData,
          type: "contact",
          captcha: captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          lastname: "",
          email: "",
          contactnumber: "",
          message: "",
        });
        setErrors({});
      } else {
        console.error("Form submission failed:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bgcolor={"custom.black2"}>
      <OuterGrid2 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={{ xs: 0, md: 5 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Stack>
                  <Typography color="custom.grey_700" variant="body_4_600">
                    CONTACT US
                    <SmallFullStop />
                  </Typography>
                  <Typography
                    color="custom.white2"
                    variant="body_6"
                    marginBottom={isTabletView ? 6 : 0}
                    display={"block"}
                  >
                    Get in <br></br>touch
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <FormUI className="blackTheme" contactform={contactform}>
                  <Typography
                    color="custom.white2"
                    variant="Caption"
                    fontWeight={500}
                  >
                    We&apos;re here to help and answer any questions you might
                    have. We look forward to hearing from you.
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    gap={7}
                    marginTop={isTabletView ? "56px" : "80px"}
                  >
                    {careerFormFields.map((item) => {
                      const isValidKey = (
                        key: string,
                      ): key is keyof FormData => {
                        return key in formData;
                      };
                      return (
                        <TextField
                          key={item.id}
                          label={
                            <Typography display={"flex"}>
                              {item.label}&nbsp;
                              <Typography
                                component={"span"}
                                sx={{ color: "custom.orange_600" }}
                              >
                                *
                              </Typography>
                            </Typography>
                          }
                          name={item.name}
                          value={
                            isValidKey(item.name) ? formData[item.name] : ""
                          }
                          onChange={handleChange}
                          variant="standard"
                          focused
                          error={
                            isValidKey(item.name)
                              ? Boolean(errors[item.name])
                              : false
                          }
                          helperText={
                            isValidKey(item.name) ? errors[item.name] : ""
                          }
                          autoComplete="off"
                        />
                      );
                    })}
                    <TextField
                      label={<Typography display={"flex"}>Message</Typography>}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="standard"
                      multiline
                      rows={4}
                      focused
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      autoComplete="off"
                    />
                    <OutlineWhiteBtn1 type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Please Wait..." : "SEND"}
                      <ArrowRightWhite />
                    </OutlineWhiteBtn1>

                    {submitted && (
                      <Typography color="green" mt={1}>
                        Thank you! Your message has been sent successfully. We
                        will get back to you soon!
                      </Typography>
                    )}
                  </Box>
                </FormUI>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={SITE_KEY}
                  size="invisible"
                  badge="bottomright" // badge position for invisible recaptcha
                  theme="dark"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid2>
    </Box>
  );
}
