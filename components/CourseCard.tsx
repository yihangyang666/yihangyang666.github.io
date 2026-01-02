import React from 'react';

interface CourseCardProps {
    name: string;
    color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, color }) => {
    return (
        <div className="w-full">
            <div
                className="glass-card p-6 rounded-xl h-full hover-lift cursor-default relative overflow-hidden group"
            >
                <div
                    className="absolute left-0 top-0 bottom-0 w-1 opacity-80"
                    style={{ backgroundColor: color }}
                />
                <div
                    className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ease-out"
                    style={{ backgroundColor: color }}
                />

                <h3 className="text-lg font-bold truncate pr-2 relative z-10" style={{ color: color }}>
                    {name}
                </h3>
                <p className="text-gray-400 text-sm mt-2 font-light">
                    Mastered Core Concept
                </p>
            </div>
        </div>
    );
};

export default CourseCard;
