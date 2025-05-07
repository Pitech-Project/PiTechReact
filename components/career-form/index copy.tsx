"use client";
 
import React, { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    IconButton,
    FormHelperText,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { AttachedFile, FileUpload, FormUI, OuterSection, OutlineBtn1 } from '@/app/styles/MUI/common.styled';
import AttachFile from '../../public/assets/img/attach_file.svg'
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import { useSearchParams } from 'next/navigation';
 
export default function CarrerForm() {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');

    const getCurrentDate = () => {
        return new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        contactnumber: '',
        message: '',
        appliedFor: title,
        appliedon: getCurrentDate(),
        resume: null as File | null,
    });
 
    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        email: '',
        contactnumber: '',
        message: '',
        appliedFor:title,
        appliedon: getCurrentDate(),
        resume: '',
    });
 
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [submitted, setSubmitted] = useState(false);
 
    useEffect(() => {
        fetchSubmissions();
    }, []);
 
    const fetchSubmissions = async () => {
        try {
            const response = await fetch('/api/get-submissions?type=career');
            if (!response.ok) throw new Error("Failed to load data");
            const data = await response.json();
            setSubmissions(data);
        } catch (error) {
            console.error("Error loading submissions:", error);
        }
    };
 
    const validate = () => {
        const newErrors: any = {};
        const { name, lastname, email, contactnumber, message, resume } = formData;
 
        if (!name.trim()) newErrors.name = 'Name is required.';
        if (!lastname.trim()) newErrors.lastname = 'Last name is required.';
        if (!email.trim()) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format.';
        if (!contactnumber.trim()) newErrors.contactnumber = 'Contact number is required.';
        if (!message.trim()) newErrors.message = 'Message is required.';
 
        // Resume validation
        if (!resume) {
            newErrors.resume = 'Resume is required.';
        } else if (
            !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(resume.type)
        ) {
            newErrors.resume = 'Invalid file type. Use PDF or Word.';
        } else if (resume.size > 100 * 1024 * 1024) {
            newErrors.resume = 'File size exceeds 100MB.';
        }
 
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };
 
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, resume: file }));
        setErrors((prev) => ({ ...prev, resume: '' }));
    };
 
    const handleRemoveFile = () => {
        setFormData(prev => ({
            ...prev,
            resume: null,
        }));
 
        // Clear the file input (must be in the DOM when this runs)
        setTimeout(() => {
            const fileInput = document.getElementById('resume-upload') as HTMLInputElement | null;
            if (fileInput) {
                fileInput.value = '';
            }
        }, 0);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
 
        if (!validate()) return;
 
        try {
            const response = await fetch('/api/save-submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fileName: 'careerSubmission.json',
                    data: formData,
                    type: "career",
                }),
            });
 
            if (!response.ok) throw new Error('Failed to save submission');
 
            setSubmitted(true);
            await fetchSubmissions();
 
            setFormData({
                name: '',
                lastname: '',
                email: '',
                contactnumber: '',
                message: '',
                appliedFor: title || '',
                appliedon: getCurrentDate(),
                resume: null,
            });
            setErrors({
                name: '',
                lastname: '',
                email: '',
                contactnumber: '',
                message: '',
                appliedFor: title || '',
                appliedon: getCurrentDate(),
                resume: '',
            });
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
 
    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
 
        const formData = new FormData();
        formData.append('resume', file);
 
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });
 
        const data = await res.json();
        console.log('Uploaded file:', data);
    };
    const theme = useTheme();
    const isTabletView = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <OuterSection sx={{ paddingTop: 0 }}>
            <FormUI>
                <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={6} marginTop={isTabletView ? '16px' : '80px'}>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <TextField label={
                            <Typography display={'flex'}>
                                Name&nbsp;<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                            </Typography>
                        } name="name" value={formData.name} onChange={handleChange} variant="standard" focused error={Boolean(errors.name)} helperText={errors.name} autoComplete='off' />
                        <TextField type="text" name="appliedfor" value={formData.appliedFor} sx={{ display: "none"}} />
                        <TextField type="text" name="appliedon" value={formData.appliedon} sx={{ display: "none"}} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <TextField label={
                            <Typography display={'flex'}>
                                Last Name&nbsp;<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                            </Typography>
                        } name="lastname" value={formData.lastname} onChange={handleChange} variant="standard" focused error={Boolean(errors.lastname)} helperText={errors.lastname} autoComplete='off' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <TextField label={
                            <Typography display={'flex'}>
                                Email&nbsp;<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                            </Typography>
                        } name="email" type="email" value={formData.email} onChange={handleChange} variant="standard" focused error={Boolean(errors.email)} helperText={errors.email} autoComplete='off' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <TextField label={
                            <Typography display={'flex'}>
                                Contact Number&nbsp;<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                            </Typography>
                        } name="contactnumber" type="number" value={formData.contactnumber} onChange={handleChange} variant="standard" focused error={Boolean(errors.contactnumber)} helperText={errors.contactnumber} autoComplete='off' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <TextField label={
                            <Typography display={'flex'}>
                                Message&nbsp;<Typography component={'span'} sx={{ color: 'custom.orange_600' }}>*</Typography>
                            </Typography>
                        } name="message" value={formData.message} onChange={handleChange} variant="standard" multiline rows={4} focused error={Boolean(errors.message)} helperText={errors.message} autoComplete='off' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                    {/* File Upload */}
                    <Box>
                        <input
                            id="resume-upload"
                            type="file"
                            style={{ display: 'none' }}
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="resume-upload">
                            <FileUpload>
                                <Box className="uploadResume">
                                    <Typography variant='body_4' color='custom.black' display={'block'} marginBottom={'4px'}>Click to upload your CV/Resume</Typography>
                                    <Typography variant="body2" color='custom.black'>
                                        upload file in Word, PDF format (File size max. 100mb)
                                    </Typography>
                                </Box>
 
                                <Box className="addIcon">
                                    <AddIcon sx={{ width: '19px', height: '19px' }} />
                                </Box>
 
                            </FileUpload>
 
                        </label>
                        {formData.resume && (
                            <Stack flexDirection={'row'} alignItems="center" gap={1} marginTop={'24px'}>
                                <AttachedFile>
                                    <Image src={AttachFile} alt='Attach File' />
                                    <Typography variant="body2" ml={2} display="inline">
                                        {formData.resume.name}
                                    </Typography>
                                </AttachedFile>
                                <CloseIcon
                                    onClick={handleRemoveFile}
                                    sx={{ width: '18px', cursor: 'pointer' }}
                                />
                            </Stack>
                        )}
                        {errors.resume && (
                            <FormHelperText error>{errors.resume}</FormHelperText>
                        )}
                    </Box>
                    </motion.div>
                    {/* <Button type="submit" variant="contained" sx={{ width: "120px" }}>APPLY</Button> */}
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                    <OutlineBtn1 type="submit">APPLY <CallMadeIcon sx={{ marginLeft: '8px' }} /></OutlineBtn1>
                    </motion.div>
                    {submitted && <Typography color="green" mt={1}>Form submitted successfully!</Typography>}
                </Box>
            </FormUI>
        </OuterSection>
    );
}