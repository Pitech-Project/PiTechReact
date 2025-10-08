"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  TextField,
  Box,
  Typography,
  FormHelperText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AttachedFile,
  FileUpload,
  FormUI,
  OutlineWhiteBtn1,
  TellUsTypography,
} from "@/styles/MUI/common.styled";
import AttachFile from "../../../public/assets/img/attach_file.svg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { careerFormFields } from "@/lib/constanst";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export type FormData = {
  name: string;
  lastname: string;
  email: string;
  contactnumber: string;
  message: string;
  resume: File | null;
  appliedFor: string | null;
  appliedon: string;
};

export default function CareerForm() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
    appliedFor: title || "",
    appliedon: getCurrentDate(),
    resume: null as File | null,
  });
  type Errors = {
    name: string;
    lastname: string;
    email: string;
    contactnumber: string;
    message: string;
    resume: string;
  };
  const [errors, setErrors] = useState<Errors>({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
    resume: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validate = () => {
    const newErrors: Partial<Errors> = {}; // allow building step by step

    const { name, lastname, email, contactnumber, resume } = formData;

    if (!name.trim()) newErrors.name = "First name is required.";
    if (!lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format.";
    if (!contactnumber.trim()) {
      newErrors.contactnumber = "Contact number is required.";
    } else if (!/^\d{10}$/.test(contactnumber)) {
      newErrors.contactnumber = "Please enter valid 10-digit phone number.";
    }
    if (!resume) {
      newErrors.resume = "Resume is required.";
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(resume.type)
    ) {
      newErrors.resume = "Invalid file type. Use PDF or Word.";
    } else if (resume.size > 100 * 1024 * 1024) {
      newErrors.resume = "File size exceeds 100MB.";
    }

    setErrors({
      name: newErrors.name || "",
      lastname: newErrors.lastname || "",
      email: newErrors.email || "",
      contactnumber: newErrors.contactnumber || "",
      message: newErrors.message || "",
      resume: newErrors.resume || "",
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, resume: null }));

    setTimeout(() => {
      const fileInput = document.getElementById(
        "resume-upload",
      ) as HTMLInputElement | null;
      if (fileInput) fileInput.value = "";
    }, 0);
  };

  const handleFileUpload = async (file: File | null) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Upload failed");
    }

    return data.filePath; // resume path like /uploads/filename.pdf
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

      // Upload resume file first
      const uploadedFileUrl = await handleFileUpload(formData.resume);
      // if (!uploadedFileUrl) {
      //     setErrors((prev) => ({ ...prev, resume: 'File upload failed.' }));
      //     return;
      // }
      if (!uploadedFileUrl) {
        setErrors((prev) => ({ ...prev, resume: "File upload failed." }));
        setIsSubmitting(false);
        return;
      }

      console.log("uploadedFileUrl", uploadedFileUrl);

      // Prepare payload
      const payload = {
        ...formData,
        resume: uploadedFileUrl,
      };

      // Send data to your API with captcha token
      const response = await fetch("/api/save-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: payload,
          type: "career",
          captcha: captchaToken,
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
        appliedFor: title || "",
        appliedon: getCurrentDate(),
        resume: null,
      });
      setErrors({
        name: "",
        lastname: "",
        email: "",
        contactnumber: "",
        message: "",
        resume: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <FormUI
      className="blackTheme"
      marginTop={"120px"}
      id="CareerForm"
      width={isTabletView ? "100%" : "860px"}
    >
      <TellUsTypography>Tell us more about you</TellUsTypography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={7}
        marginTop={isTabletView ? "16px" : "80px"}
      >
        {careerFormFields.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TextField
              label={
                <Typography display="flex">
                  {item.label}
                  <Typography
                    component="span"
                    sx={{ color: "custom.orange_600" }}
                  >
                    &nbsp;*
                  </Typography>
                </Typography>
              }
              type={item.type}
              name={item.name}
              variant="standard"
              focused
              autoComplete="off"
              value={formData[item.name as keyof FormData] ?? ""}
              onChange={handleChange}
              error={Boolean(errors[item.name as keyof Errors])}
              helperText={errors[item.name as keyof Errors]}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <TextField
            label={<Typography display="flex">Message</Typography>}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box>
            <input
              id="resume-upload"
              type="file"
              style={{ display: "none" }}
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <label htmlFor="resume-upload">
              <FileUpload>
                <Box className="uploadResume">
                  <Typography variant="body_4" color="custom.white2" mb="4px">
                    Click to upload your CV/Resume
                  </Typography>
                  <Typography variant="body2" color="custom.white3">
                    Upload file in Word, PDF format (File size max. 100MB)
                  </Typography>
                </Box>
              </FileUpload>
            </label>
            {formData.resume && (
              <Stack direction="row" alignItems="center" gap={1} mt="24px">
                <AttachedFile>
                  <Image src={AttachFile} alt="Attach File" />
                  <Typography variant="body2" ml={2}>
                    {formData.resume.name}
                  </Typography>
                </AttachedFile>
                <CloseIcon
                  onClick={handleRemoveFile}
                  sx={{ width: 18, cursor: "pointer" }}
                />
              </Stack>
            )}
            {errors.resume && (
              <FormHelperText error>{errors.resume}</FormHelperText>
            )}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={SITE_KEY}
            size="invisible"
            badge="bottomright"
            theme="dark"
          />
          <OutlineWhiteBtn1
            type="submit"
            disabled={isSubmitting}
            sx={{ marginTop: "8px" }}
          >
            {isSubmitting ? "Please Wait..." : "SUBMIT"}
          </OutlineWhiteBtn1>
        </motion.div>

        {submitted && (
          <Typography color="green" mt={1}>
            Thank you for applying for the{" "}
            <strong>{(formData.appliedFor || "position").toUpperCase()}</strong>{" "}
            role. We’re reviewing your application and will reach out if your
            profile aligns with the role.{" "}
          </Typography>
        )}
      </Box>
    </FormUI>
  );
}
