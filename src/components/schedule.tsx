import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const scheduleData = [
  [
    { time: "10:00 am - 11:00 am", sessions: ["Inauguration", "Session 3", "Session 6", "Group Activity", "Presentations"] },
    { time: "11:00 am - 11:15 am", sessions: ["Tea and Networking", "Tea and Networking", "Tea and Networking", "Tea and Networking", "Tea and Networking"] },
    { time: "11:15 am – 1:00 pm", sessions: ["Session 1", "Session 4", "Session 7", "Session 9", "Project Presentations"] },
    { time: "1:00 pm – 2:00 pm", sessions: ["Lunch", "Lunch", "Lunch", "Lunch", "Lunch"] },
    { time: "2:00 pm - 4:00 pm", sessions: ["Session 2 (Including Hands-on training)", "Session 5 (Including Hands-on training)", "Session 8 (Including Hands-on training)", "Session 10 (Including Hands-on training)", "Valedictory"] },
    { time: "4:00 pm - 4:15 pm", sessions: ["High Tea", "High Tea", "High Tea", "High Tea", "High Tea"] },
  ],
];

const days = [
  { day: "Day 1", date: "28th July 2025" },
  { day: "Day 2", date: "29th July 2025" },
  { day: "Day 3", date: "30th July 2025" },
  { day: "Day 4", date: "31st July 2025" },
  { day: "Day 5", date: "1st August 2025" },
];

const Schedule = () => {
  return (
    <section id="schedule" className="relative py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black overflow-hidden">
      <BackgroundBeams className="opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Programme Schedule
        </h2>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 rounded-xl overflow-hidden shadow-xl bg-white/80 dark:bg-black/40">
            <thead>
              <tr>
                <th className="bg-gradient-to-r from-blue-100 via-indigo-100 to-pink-100 dark:from-blue-900 dark:via-indigo-900 dark:to-pink-900 text-lg font-bold text-indigo-700 dark:text-indigo-200 px-4 py-3 sticky left-0 z-10">Time</th>
                {days.map((d) => (
                  <th key={d.day} className="bg-gradient-to-r from-blue-100 via-indigo-100 to-pink-100 dark:from-blue-900 dark:via-indigo-900 dark:to-pink-900 text-lg font-bold text-indigo-700 dark:text-indigo-200 px-4 py-3 text-center">
                    <div>{d.day}</div>
                    <div className="text-xs text-indigo-400 dark:text-indigo-300 font-medium">{d.date}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData[0].map((slot) => (
                <tr key={slot.time} className="border-t border-indigo-100 dark:border-indigo-900">
                  <td className="font-mono text-xs md:text-sm text-gray-600 dark:text-gray-300 px-4 py-3 bg-indigo-50 dark:bg-indigo-950 sticky left-0 z-0">
                    {slot.time}
                  </td>
                  {slot.sessions.map((session, j) => (
                    <td key={session + '-' + j} className="px-4 py-3 text-sm text-gray-800 dark:text-gray-100 text-left align-top">
                      {session}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile Cards */}
        <div className="flex flex-col gap-8 md:hidden mt-6">
          {days.map((d, dayIdx) => (
            <div key={d.day} className="rounded-xl shadow-xl bg-white/80 dark:bg-black/40 border-2 border-indigo-100 dark:border-indigo-900 backdrop-blur-md">
              <div className="flex flex-col items-center justify-center gap-1 py-4 bg-gradient-to-r from-blue-100 via-indigo-100 to-pink-100 dark:from-blue-900 dark:via-indigo-900 dark:to-pink-900 rounded-t-xl">
                <div className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">{d.day}</div>
                <div className="text-xs text-indigo-400 dark:text-indigo-200 font-medium">{d.date}</div>
              </div>
              <div className="flex flex-col gap-2 p-4">
                {scheduleData[0].map((slot, i) => (
                  <div key={slot.time} className="flex flex-col gap-1 border-b border-indigo-100 dark:border-indigo-900 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-300">{slot.time}</span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100" key={slot.sessions[dayIdx] + '-' + i}>{slot.sessions[dayIdx]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          *Schedule is subject to change. Please check back for updates.
        </p>
      </div>
    </section>
  );
};

export { Schedule };