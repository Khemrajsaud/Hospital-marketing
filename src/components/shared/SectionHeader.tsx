import React from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  subtitleColor?: string;
  highlightColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  highlightedTitle,
  description,
  subtitleColor = "text-[#64748B]",
  highlightColor = "text-[#01BAEF]",
}) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      {subtitle && (
        <p className={`${subtitleColor} text-base md:text-lg uppercase tracking-wider mb-3 font-bold`}>
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
        {title}{" "}
        {highlightedTitle && (
          <span className={highlightColor}>{highlightedTitle}</span>
        )}
      </h2>

      {description && (
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-semibold">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;