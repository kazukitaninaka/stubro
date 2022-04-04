import React from 'react'

export default function Loading() {
    return (
        <div className="flex justify-center">
            <div className="animate-ping h-2 w-2 bg-sky-500 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-sky-500 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-sky-500 rounded-full"></div>
        </div>
    )
}
