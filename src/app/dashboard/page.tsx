"use client"
import React from 'react'
import DashboardCard from './components/DashboardCard'
import data from '../../lib/data/data.json'
import { Card } from '@/components/ui/card'
import TimeButton from './components/TimeButton'

function Page() {
    const names = ["Daily", "Weekly", "Monthly"];
  return (
    <div className="p-4 h-screen w-screen bg-blue-950 flex flx-row gap-10">
        <Card className="h-[70%] w-[20%] bg-blue-900 rounded-3xl flex flex-col pt-0 gap-15">
            <Card className="w-full h-[75%] bg-blue-500 rounded-b-3xl flex flex-col py-10 px-20 gap-20">
                <div className="w-1/4 h-1/4 bg-white rounded-full"></div>
                <h1 className="text-white text-xl -mb-20">Report For</h1>
                <h1 className="text-9xl text-white font-bold">Jermey Robson</h1>
            </Card>
            <div className="flex flex-col gap-6">
                {
                    names.map((name, key) => (
                        <TimeButton key={key} name={name}/>
                    ))
                }

            </div>
        </Card>
        <div className="grid grid-cols-3 gap-9 h-[70%] w-[60%]">
            {
                data.map((item, key) => (
                    <DashboardCard 
                        key={key} 
                        name={item.title} 
                        duration={item.timeframes.weekly.current}
                        previousDuration={item.timeframes.weekly.previous} 
                    />
                ))
            }

        </div>
            
        
    </div>
  )
}

export default Page