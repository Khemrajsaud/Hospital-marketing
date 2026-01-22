"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface AutocompleteInputProps {
  label: string;
  placeholder: string;
  options: string[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  label,
  placeholder,
  options,
  defaultValue = "",
  onValueChange,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (onValueChange) {
      onValueChange(inputValue);
    }
    
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setValue(option);
    if (onValueChange) {
      onValueChange(option);
    }
    setIsOpen(false);
  };

  const handleFocus = () => {
    setFilteredOptions(options);
    setIsOpen(true);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full px-4 py-3 text-black font-semibold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01BAEF] focus:border-transparent transition-all pr-10"
        />
        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform pointer-events-none ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-3 hover:bg-[#01BAEF]/10 cursor-pointer transition-colors text-gray-800 font-medium first:rounded-t-xl last:rounded-b-xl"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};