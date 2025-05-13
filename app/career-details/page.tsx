"use client";

import CarrerForm from '@/components/career-form'
import JobDetail from '@/components/job-details'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <>
    <Suspense fallback={<div>Loading job details...</div>}>
        <JobDetail />
        <CarrerForm />
      </Suspense>
    </>
  )
}
