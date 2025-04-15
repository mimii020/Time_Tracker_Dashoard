"use client"
import { Button } from '@/components/ui/button';
import React from 'react'

interface Props {
    name: string;
}

function TimeButton({ name } : Props) {
  return (
    <Button className="w-full text-white/60 text-3xl hover:text-white focus:text-white">{name}</Button>
  )
}

export default TimeButton