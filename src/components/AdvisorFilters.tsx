
import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { locations, specializations, audienceTypes, Location, Specialization, AudienceType } from '../data/advisors';

interface FiltersProps {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  selectedSpecializations: Specialization[];
  setSelectedSpecializations: (specializations: Specialization[]) => void;
  selectedAudience: AudienceType | null;
  setSelectedAudience: (audience: AudienceType | null) => void;
}

const AdvisorFilters: React.FC<FiltersProps> = ({
  selectedLocation,
  setSelectedLocation,
  selectedSpecializations,
  setSelectedSpecializations,
  selectedAudience,
  setSelectedAudience,
}) => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);
  const [specializationsOpen, setSpecializationsOpen] = useState(false);
  
  // Toggle a specialization selection
  const toggleSpecialization = (specialization: Specialization) => {
    if (selectedSpecializations.includes(specialization)) {
      setSelectedSpecializations(selectedSpecializations.filter(s => s !== specialization));
    } else {
      setSelectedSpecializations([...selectedSpecializations, specialization]);
    }
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedLocation(null);
    setSelectedSpecializations([]);
    setSelectedAudience(null);
  };

  // Check if any filters are active
  const hasActiveFilters = selectedLocation !== null || 
                          selectedSpecializations.length > 0 || 
                          selectedAudience !== null;
  
  return (
    <div className="px-4 py-4 bg-white shadow-sm rounded-lg mb-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:items-center">
        <h2 className="font-medium text-lg">Filter Advisors</h2>
        {hasActiveFilters && (
          <Button 
            variant="link" 
            className="text-spring-purple sm:ml-auto p-0 h-auto" 
            onClick={clearAllFilters}
          >
            Clear all filters
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-3">
        {/* Location Filter */}
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-between min-w-[150px]">
              {selectedLocation || "Location"}
              <ChevronDown size={16} className="ml-2 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search locations..." className="h-9" />
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((location) => (
                  <CommandItem
                    key={location}
                    value={location}
                    onSelect={() => {
                      setSelectedLocation(selectedLocation === location ? null : location);
                      setLocationOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedLocation === location ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {location}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Specializations Filter */}
        <Popover open={specializationsOpen} onOpenChange={setSpecializationsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-between min-w-[180px]">
              Specializations {selectedSpecializations.length > 0 && `(${selectedSpecializations.length})`}
              <ChevronDown size={16} className="ml-2 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search specializations..." className="h-9" />
              <CommandEmpty>No specialization found.</CommandEmpty>
              <CommandGroup>
                {specializations.map((spec) => (
                  <CommandItem
                    key={spec}
                    value={spec}
                    onSelect={() => toggleSpecialization(spec)}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-4 h-4 border rounded flex items-center justify-center",
                        selectedSpecializations.includes(spec) 
                          ? "bg-spring-purple border-spring-purple" 
                          : "border-gray-300"
                      )}>
                        {selectedSpecializations.includes(spec) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span>{spec}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Audience Filter */}
        <Popover open={audienceOpen} onOpenChange={setAudienceOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-between min-w-[180px]">
              {selectedAudience || "Target Audience"}
              <ChevronDown size={16} className="ml-2 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search audience..." className="h-9" />
              <CommandEmpty>No audience type found.</CommandEmpty>
              <CommandGroup>
                {audienceTypes.map((audience) => (
                  <CommandItem
                    key={audience}
                    value={audience}
                    onSelect={() => {
                      setSelectedAudience(selectedAudience === audience ? null : audience);
                      setAudienceOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedAudience === audience ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {audience}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Display active filters */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedLocation && (
            <Badge 
              variant="tag" 
              className="px-3 py-1 flex items-center gap-1"
              onClick={() => setSelectedLocation(null)}
            >
              {selectedLocation}
              <button className="ml-1 hover:bg-gray-200 rounded-full w-4 h-4 inline-flex items-center justify-center text-white">
                ✕
              </button>
            </Badge>
          )}
          
          {selectedSpecializations.map((spec) => (
            <Badge 
              key={spec} 
              variant="tag" 
              className="px-3 py-1 flex items-center gap-1"
              onClick={() => toggleSpecialization(spec)}
            >
              {spec}
              <button className="ml-1 hover:bg-gray-200 rounded-full w-4 h-4 inline-flex items-center justify-center text-white">
                ✕
              </button>
            </Badge>
          ))}
          
          {selectedAudience && (
            <Badge 
              variant="tag" 
              className="px-3 py-1 flex items-center gap-1"
              onClick={() => setSelectedAudience(null)}
            >
              {selectedAudience}
              <button className="ml-1 hover:bg-gray-200 rounded-full w-4 h-4 inline-flex items-center justify-center text-white">
                ✕
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvisorFilters;
