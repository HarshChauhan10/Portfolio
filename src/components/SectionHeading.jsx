import React from 'react';

const SectionHeading = ({ kicker, title, children, className = 'mb-12' }) => {
    return (
        <div className={`reveal ${className}`}>
            <p className="font-mono text-sm text-accent mb-3">{kicker}</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{title || children}</h2>
        </div>
    );
};

export default SectionHeading;
