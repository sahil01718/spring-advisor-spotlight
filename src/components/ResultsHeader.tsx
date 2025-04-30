
import React from 'react';
import { Advisor } from '../data/advisors';

interface ResultsHeaderProps {
  totalAdvisors: number;
  filteredAdvisorsCount: number;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ totalAdvisors, filteredAdvisorsCount }) => {
  const isFiltered = totalAdvisors !== filteredAdvisorsCount;
  
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-semibold">
          {isFiltered ? 'Filtered Results' : 'All Advisors'}
        </h2>
        <p className="text-muted-foreground">
          {filteredAdvisorsCount === 0 
            ? 'No advisors match your criteria' 
            : `Showing ${filteredAdvisorsCount} ${filteredAdvisorsCount === 1 ? 'advisor' : 'advisors'}`}
          {isFiltered && filteredAdvisorsCount > 0 && ` out of ${totalAdvisors}`}
        </p>
      </div>
    </div>
  );
};

export default ResultsHeader;
