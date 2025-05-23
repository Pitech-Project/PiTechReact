"use client";
 
import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  FormHelperText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {
  AttachedFile,
  FileUpload,
  FormUI,
  OuterSection,
  OutlineBtn1,
} from "@/styles/MUI/common.styled";
import AttachFile from "../../../public/assets/img/attach_file.svg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { apiUrl, fileExtension, careerFormFields } from "@/lib/constanst";
 
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
 
type FormErrors = Partial<Record<keyof FormData, string>>;
 
export default function CareerForm() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
 
  const getCurrentDate = () =>
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
 
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    email: "",
    contactnumber: "",
    message: "",
    appliedFor: title,
    appliedon: getCurrentDate(),
    resume: null,
  });
 
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const saveApi = apiUrl.api.saveApi;
 
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const { name, lastname, email, contactnumber, message, resume } = formData;
 
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format.";
    if (!contactnumber.trim())
      newErrors.contactnumber = "Contact number is required.";
    if (!message.trim()) newErrors.message = "Message is required.";
    if (!resume) {
      newErrors.resume = "Resume is required.";
    } else if (!Object.values(fileExtension).includes(resume.type)) {
      newErrors.resume = "Invalid file type. Use PDF or Word.";
    } else if (resume.size > 100 * 1024 * 1024) {
      newErrors.resume = "File size exceeds 100MB.";
    }
 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
    const fileInput = document.getElementById("resume-upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
 
    try {
      const response = await fetch(saveApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, type: "career" }),
      });
 
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          lastname: "",
          email: "",
          contactnumber: "",
          message: "",
          appliedFor: title,
          appliedon: getCurrentDate(),
          resume: null,
        });
        setErrors({});
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
 
  const theme = useTheme();
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"));
 
  return (
    <OuterSection sx={{ paddingTop: 0 }}>
      <FormUI>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={6}
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
                    <Typography component="span" sx={{ color: "custom.orange_600" }}>
                      &nbsp;*
                    </Typography>
                  </Typography>
                }
                type={item.type}
                name={item.name}
                value={(formData as any)[item.name]}
                onChange={handleChange}
                variant="standard"
                focused
                error={Boolean(errors[item.name as keyof FormData])}
                helperText={errors[item.name as keyof FormData]}
                autoComplete="off"
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
              label={
                <Typography display="flex">
                  Message
                  <Typography component="span" sx={{ color: "custom.orange_600" }}>
                    &nbsp;*
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
                    <Typography variant="body_4" color="custom.black" mb="4px">
                      Click to upload your CV/Resume
                    </Typography>
                    <Typography variant="body2" color="custom.black">
                      Upload file in Word, PDF format (File size max. 100MB)
                    </Typography>
                  </Box>
                  <Box className="addIcon">
                    <AddIcon sx={{ width: 19, height: 19 }} />
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
              {errors.resume && <FormHelperText error>{errors.resume}</FormHelperText>}
            </Box>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <OutlineBtn1 type="submit">
              APPLY <CallMadeIcon sx={{ ml: "8px" }} />
            </OutlineBtn1>
          </motion.div>
 
          {submitted && (
            <Typography color="green" mt={1}>
              Form submitted successfully!
            </Typography>
          )}
        </Box>
      </FormUI>
    </OuterSection>
  );
}
 