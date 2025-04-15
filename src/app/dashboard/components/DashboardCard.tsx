"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { MoreHorizontal } from 'lucide-react';

interface Props {
    name: string;
    duration: number;
    previousDuration: number;
}

function DashboardCard({ name, duration, previousDuration } : Props) {
  return (
    <Card className="w-full h-full bg-blue-500 rounded-3xl p-0 border-0">
        <Card className="h-[90%] w-full flex flex-col gap-4 p-10 bg-blue-900 rounded-t-3xl mt-auto border-0">
            <div className="flex flex-row justify-between mb-8">
                <h2 className="text-4xl text-white font-bold">{name}</h2>
                <MoreHorizontal size={40} color='white' strokeWidth={2}/>
            </div>
            <h2 className="text-white text-9xl">{duration}Hrs</h2>
            <h2 className="text-white text-3xl mt-auto">Last Week - {previousDuration}Hrs</h2>
        </Card>
    </Card>
  )
}

export default DashboardCard