import React from 'react';

interface TimelineItemProps {
    period: string;
    title: string;
    achievement?: string;
    details?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ period, title, achievement, details }) => {
    return (
        <div className="relative pl-8 pb-12 border-l border-white/10 last:border-0 last:pb-0">
            {/* Dot Indicator with Pulse Effect */}
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(33,147,176,0.6)]">
                <div className="absolute -inset-1 rounded-full bg-primary opacity-30 animate-pulse-slow"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2 sm:gap-4">
                <span className="inline-block bg-white/10 text-primary-light text-xs font-mono py-1 px-2 rounded backdrop-blur-sm border border-white/5">
                    {period}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                    {title}
                </h3>
            </div>

            {achievement && (
                <div className="mb-3">
                    <span className="inline-flex items-center text-secondary-light border border-secondary/30 px-3 py-0.5 rounded-full text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                        {achievement}
                    </span>
                </div>
            )}

            {details && (
                <ul className="space-y-2 mt-2">
                    {details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed">
                            <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0"></span>
                            {detail}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TimelineItem;
