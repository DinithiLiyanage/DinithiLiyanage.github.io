"use client";
import { useState } from "react";

type Highlight = {
    title: string;
    subpoints?: string[];
};

type EducationItem = {
    title: string;
    institution: string;
    duration: string;
    highlights: Highlight[];
};

const educationData: EducationItem[] = [
    {
        title: "BSc in Computer Science and Engineering",
        institution: "University of Moratuwa | Sri Lanka",
        duration: "2022 – Present",
        highlights: [
            { title: "Current GPA – 3.8336 " },
            { title: "Specializing in Cyber Security stream" },
        ],
    },
    {
        title: "BCS Higher Education Qualifications (BCS-HEQ)",
        institution: "British Computer Society (UK)",
        duration: "2021",
        highlights: [
            {
                title: "Level 6 – Professional Graduate Diploma in IT (Oct 2021)",
                subpoints: [
                    "Passed: Advanced DBMS, Programming Paradigms, Software Engineering, Web Engineering",
                    "Country Performance Award – Programming Paradigms",
                    "Completed PGD Project",
                ],
            },
            {
                title: "Level 5 – Diploma in IT (Oct 2021)",
                subpoints: [
                    "Passed: Professional Issues in IS Practice, OOP, Database Systems, Systems Analysis and Design",
                ],
            },
            {
                title: "Level 4 – Certificate in IT (May 2021)",
                subpoints: [
                    "Passed: Software Development, Computer Network Technology, Information Systems",
                ],
            },
        ],
    },
    {
        title: "G.C.E A-Levels – Physical Science Stream",
        institution: "Devi Balika Vidyalaya | Colombo 08, Sri Lanka",
        duration: "2018 – 2021",
        highlights: [
            { title: "Passed with 3As" },
            { title: "Z-score: 2.4945" },
            { title: "English Medium" },
        ],
    },
    {
        title: "G.C.E O-Levels",
        institution: "Devi Balika Vidyalaya | Colombo 08, Sri Lanka",
        duration: "2015 – 2017",
        highlights: [
            {
                title: "Passed with 9As including Mathematics, Science and English",
            },
            { title: "English Medium" },
        ],
    },
];

export default function EducationSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section className="w-full px-4 py-10 max-w-4xl mx-auto">
            <div className="space-y-6">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white text-gray-800 p-5 rounded-lg shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-200/30 hover:scale-[1.02]"
                        style={{
                            animation: "fadeInUp 0.6s ease-out forwards",
                            animationDelay: `${index * 0.1}s`,
                            opacity: 0,
                        }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            <span className="text-base text-gray-500">
                                {item.duration}
                            </span>
                        </div>
                        <p className="text-gray-600 italic mb-3">
                            {item.institution}
                        </p>

                        <div className="overflow-hidden transition-all duration-500 ease-in-out">
                            {(expandedIndex === index
                                ? item.highlights
                                : item.highlights.slice(0, 1)
                            ).map((highlight, i) => (
                                <div
                                    key={i}
                                    className="ml-4 mb-2 text-base text-gray-700 transition-all duration-300"
                                    style={{
                                        animation:
                                            expandedIndex === index
                                                ? "fadeIn 0.5s ease-out"
                                                : "none",
                                    }}
                                >
                                    <p className="font-medium">
                                        • {highlight.title}
                                    </p>
                                    {highlight.subpoints && (
                                        <ul className="list-[square] list-inside ml-4 mt-1">
                                            {highlight.subpoints.map(
                                                (point, j) => (
                                                    <li key={j}>{point}</li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {item.highlights.length > 1 && (
                            <button
                                onClick={() =>
                                    setExpandedIndex(
                                        expandedIndex === index ? null : index
                                    )
                                }
                                className="text-sm mt-3 text-cyan-600 hover:underline transition-all duration-300 hover:text-cyan-700 hover:pl-2"
                            >
                                {expandedIndex === index
                                    ? "Read less ↑"
                                    : "Read more ↓"}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
