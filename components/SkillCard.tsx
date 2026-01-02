import React from 'react';

interface SkillCardProps {
    name: string;
    type: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, type }) => {
    const isCert = type === 'certificate';
    const badgeColor = isCert ? 'bg-primary text-white' : 'bg-secondary text-white';
    const borderColor = isCert ? 'border-primary/30 hover:border-primary/60' : 'border-secondary/30 hover:border-secondary/60';

    return (
        <div className="w-full h-full">
            <div className={`glass-card p-4 rounded-lg flex items-center space-x-4 border ${borderColor} transition-colors duration-300 hover:bg-white/5`}>
                <span className={`${badgeColor} text-xs font-bold px-2 py-1 rounded shadow-lg`}>
                    {isCert ? 'CERT' : 'AWARD'}
                </span>
                <span className="text-gray-200 font-medium text-sm md:text-base tracking-wide">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default SkillCard;
