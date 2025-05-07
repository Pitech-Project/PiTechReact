"use client"

import Culture from '@/components/calture'
import { CareersBanner } from '@/components/careers-banner'
import JobOpenings from '@/components/job-openings'
import { JobOpportunity } from '@/components/job-opportunity'
import Teams from '@/components/teams'
import React from 'react'

export default function page() {
  return (
    <>
      <CareersBanner />
      <Culture />
      <Teams />
      <JobOpenings />
      <JobOpportunity />
    </>
  )
}
