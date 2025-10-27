import { useState } from "react";
import { MdVolunteerActivism } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa6";

import { VoluntaryData } from "@/data/voluntary";

export default function Voluntary() {
    const [selectedVoluntary, setSelectedVoluntary] = useState<number | null>(null);

    const handleVoluntaryClick = (index: number) => {
        setSelectedVoluntary((prevSelected) => (prevSelected === index ? null : index));
    };

    return (
        <div className="w-full max-w-5xl space-y-6">
            <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
                <MdVolunteerActivism />
                Voluntary Work
            </div>

            <div className="px-2 sm:px-6">
                {VoluntaryData.map((work, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-4 py-2 px-4 rounded-md ${
                            work.image ? "cursor-pointer hover:bg-muted" : ""
                        }`}
                        onClick={() => work.image && handleVoluntaryClick(index)}
                    >
                        {selectedVoluntary === index && work.image && (
                            <img
                                src={work.image}
                                alt={work.title}
                                className="rounded-md w-full h-64 object-cover"
                                loading="lazy"
                            />
                        )}
                        <div className="flex flex-col gap-0.5">
                            <div className="text-base font-semibold">{work.title}</div>
                            <div className="text-sm font-medium text-muted-foreground">{work.organization}</div>
                            <div className="text-sm text-muted-foreground mb-2">{work.description}</div>
                            <div className="flex flex-row justify-between text-sm text-muted-foreground">
                                <p className="flex flex-row gap-1 items-center">
                                    <FaRegCalendar />
                                    {work.startDate} - {work.endDate}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
