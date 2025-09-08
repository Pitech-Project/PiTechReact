"use client";

import React, { useState } from "react";
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

export type FormData = {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
};

export default function ContactForm() {
  const contactform = true;
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
  });

  type FormErrors = Partial<Record<keyof FormData, string>>;

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.lastname.trim())
      newErrors.lastname = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.contactnumber.trim())
      newErrors.contactnumber = "Contact number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const saveApi = apiUrl.api.saveApi;

    if (validate()) {
      try {
        const response = await fetch(saveApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: formData,
            type: "contact",
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: "",
            lastname: "",
            email: "",
            contactnumber: "",
            message: "",
          });
          setErrors({
            name: "",
            lastname: "",
            email: "",
            contactnumber: "",
            message: "",
          });
        }
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  return (
    <Box bgcolor={"custom.black2"}>
      <OuterGrid2 container spacing={5} justifyContent={"space-between"}>
        <Grid
          size={{ xs: 12, lg: 9, xl: 8.3 }}
          offset={{ xs: 0, lg: 2, xl: 2.3 }}
        >
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Stack>
                  <Typography color="custom.white4" variant="body_4_600">
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
                                sx={{ color: "custom.red" }}
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
                      label={
                        <Typography display={"flex"}>
                          Message&nbsp;
                          <Typography
                            component={"span"}
                            sx={{ color: "custom.red" }}
                          >
                            *
                          </Typography>
                        </Typography>
                      }
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

                    <OutlineWhiteBtn1 type="submit">
                      SEND
                      <ArrowRightWhite />
                    </OutlineWhiteBtn1>
                    {submitted && (
                      <Typography color="green" mt={1}>
                        Form submitted successfully!
                      </Typography>
                    )}
                  </Box>
                </FormUI>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </OuterGrid2>
    </Box>
  );
}
