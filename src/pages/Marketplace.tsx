
import React, { useState, useEffect } from 'react';
import AdvisorCard from '../components/AdvisorCard';
import AdvisorFilters from '../components/AdvisorFilters';
import HeroSection from '../components/HeroSection';
import ResultsHeader from '../components/ResultsHeader';
import NoResults from '../components/NoResults';
import { mockAdvisors, Advisor, Location, Specialization, AudienceType } from '../data/advisors';

const Marketplace: React.FC = () => {
  // State for filters
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedSpecializations, setSelectedSpecializations] = useState<Specialization[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<AudienceType | null>(null);
  const [filteredAdvisors, setFilteredAdvisors] = useState<Advisor[]>(mockAdvisors);

  // Apply filters whenever filter states change
  useEffect(() => {
    let result = [...mockAdvisors];
    
    // Filter by location if selected
    if (selectedLocation) {
      result = result.filter(advisor => advisor.location === selectedLocation);
    }
    
    // Filter by specializations if any are selected
    if (selectedSpecializations.length > 0) {
      result = result.filter(advisor => 
        selectedSpecializations.some(spec => advisor.specializations.includes(spec))
      );
    }
    
    // Filter by audience if selected
    if (selectedAudience) {
      result = result.filter(advisor => 
        advisor.audience.includes(selectedAudience)
      );
    }
    
    setFilteredAdvisors(result);
  }, [selectedLocation, selectedSpecializations, selectedAudience]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12" id="advisorList">
        {/* Filters */}
        <AdvisorFilters 
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedSpecializations={selectedSpecializations}
          setSelectedSpecializations={setSelectedSpecializations}
          selectedAudience={selectedAudience}
          setSelectedAudience={setSelectedAudience}
        />
        
        {/* Results Header */}
        <ResultsHeader 
          totalAdvisors={mockAdvisors.length}
          filteredAdvisorsCount={filteredAdvisors.length}
        />
        
        {/* Advisor Cards Grid */}
        {filteredAdvisors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdvisors.map((advisor) => (
              <AdvisorCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
};

export default Marketplace;
