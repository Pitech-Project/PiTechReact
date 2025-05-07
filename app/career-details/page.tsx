"use client";

import { CareerDetailsBanner } from '@/components/career-details-banner'
import CarrerForm from '@/components/career-form'
import JobDetail from '@/components/job-details'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <>
      <CareerDetailsBanner />
      <Suspense fallback={<div>Loading job details...</div>}>
        <JobDetail />
      </Suspense>
      <Suspense fallback={<div>Loading job details...</div>}>
        <CarrerForm />
      </Suspense>
    </>
  )
}
