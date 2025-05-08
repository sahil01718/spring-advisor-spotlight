
import React from 'react';
import { Location, Specialization, AudienceType, locations, specializations, audienceTypes } from '../data/advisors';

interface AdvisorFiltersProps {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  selectedSpecializations: Specialization[];
  setSelectedSpecializations: (specializations: Specialization[]) => void;
  selectedAudience: AudienceType | null;
  setSelectedAudience: (audience: AudienceType | null) => void;
}

const AdvisorFilters: React.FC<AdvisorFiltersProps> = ({
  selectedLocation,
  setSelectedLocation,
  selectedSpecializations,
  setSelectedSpecializations,
  selectedAudience,
  setSelectedAudience,
}) => {
  // Toggle specialty selection
  const toggleSpecialization = (spec: Specialization) => {
    if (selectedSpecializations.includes(spec)) {
      setSelectedSpecializations(selectedSpecializations.filter(s => s !== spec));
    } else {
      setSelectedSpecializations([...selectedSpecializations, spec]);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedLocation(null);
    setSelectedSpecializations([]);
    setSelectedAudience(null);
  };

  return (
    <div className="mb-8 bg-[#FCFFFE] p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-semibold text-[#272A2B]">Filter Advisors</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-[#108E66] hover:text-opacity-80 hover:underline"
        >
          Reset Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-[#272A2B] mb-2">
            Location
          </label>
          <select
            value={selectedLocation || ''}
            onChange={(e) => setSelectedLocation(e.target.value as Location || null)}
            className="w-full h-10 pl-3 pr-6 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#108E66] focus:border-[#108E66] bg-[#FCFFFE]"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        
        {/* Audience Filter */}
        <div>
          <label className="block text-sm font-medium text-[#272A2B] mb-2">
            Client Type
          </label>
          <select
            value={selectedAudience || ''}
            onChange={(e) => setSelectedAudience(e.target.value as AudienceType || null)}
            className="w-full h-10 pl-3 pr-6 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#108E66] focus:border-[#108E66] bg-[#FCFFFE]"
          >
            <option value="">All Client Types</option>
            {audienceTypes.map((audience) => (
              <option key={audience} value={audience}>
                {audience}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Specializations Filter */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#272A2B] mb-2">
          Specializations
        </label>
        <div className="flex flex-wrap gap-2">
          {specializations.map((spec) => (
            <button
              key={spec}
              onClick={() => toggleSpecialization(spec)}
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors
                ${selectedSpecializations.includes(spec) 
                  ? 'bg-[#108E66] text-[#FCFFFE]' 
                  : 'bg-gray-100 text-[#272A2B] hover:bg-gray-200'
                }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorFilters;
