/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {
  FormUI,
  OuterSection,
  OutlineWhiteBtn1,
  SmallFullStop,
} from "@/app/styles/MUI/common.styled";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallDesktopView = useMediaQuery(theme.breakpoints.down("xl"));

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.contactnumber.trim()) newErrors.contactnumber = "Contact number is required.";
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

    if (!validate()) return;

    try {
      const response = await fetch("/api/save-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
          type: "contact",
        }),
      });

      if (!response.ok) throw new Error("Failed to save submission");

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
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <Box bgcolor={'custom.black2'}>
    <OuterSection flexDirection={isTabletView ? 'column' : 'row'} justifyContent={'space-between'}>
    <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
        <Stack>
            <Typography color='custom.white4' variant='body_4' marginBottom={2} fontWeight={600} display={'block'}>Contact US <SmallFullStop /></Typography>
            <Typography color='custom.white2' variant='body_6' marginBottom={isTabletView ? 6 : 0} display={'block'}>Get in touch</Typography>
        </Stack>
      </motion.div>  
      <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
        <FormUI className='blackTheme' width={isTabletView ? '100%' : isSmallDesktopView ? '500px' : '750px'}>
            <Typography color='custom.white2' variant='Caption' fontWeight={500}>We're here to help and answer any questions you might have. We look forward to hearing from you.</Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={6} marginTop={isTabletView ? '56px' : '80px'}>
                <TextField label={
                    <Typography display={'flex'}>
                        Name
                        <Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                    </Typography>
                }
                    name="name" value={formData.name} onChange={handleChange} variant="standard" focused error={Boolean(errors.name)} helperText={errors.name} autoComplete='off' />
                <TextField label={
                    <Typography display={'flex'}>
                        Last Name<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                    </Typography>
                } name="lastname" value={formData.lastname} onChange={handleChange} variant="standard" focused error={Boolean(errors.lastname)} helperText={errors.lastname} autoComplete='off' />
                <TextField label={
                    <Typography display={'flex'}>
                        Email<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                    </Typography>
                } name="email" type="email" value={formData.email} onChange={handleChange} variant="standard" focused error={Boolean(errors.email)} helperText={errors.email} autoComplete='off' />
                <TextField label={
                    <Typography display={'flex'}>
                        Contact Number<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                    </Typography>
                } name="contactnumber" type="number" value={formData.contactnumber} onChange={handleChange} variant="standard" focused error={Boolean(errors.contactnumber)} helperText={errors.contactnumber} autoComplete='off' />
                <TextField label={
                    <Typography display={'flex'}>
                        Message<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                    </Typography>
                } name="message" value={formData.message} onChange={handleChange} variant="standard" multiline rows={4} focused error={Boolean(errors.message)} helperText={errors.message} autoComplete='off' />


                <OutlineWhiteBtn1 type="submit">SEND <CallMadeIcon sx={{ marginLeft: '8px' }} /></OutlineWhiteBtn1>
                {submitted && <Typography color="green" mt={1}>Form submitted successfully!</Typography>}
            </Box>
        </FormUI>
        </motion.div>
    </OuterSection>
</Box>
  );
}
