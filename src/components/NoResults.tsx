
import React from 'react';

const NoResults: React.FC = () => {
  return (
    <div className="text-center py-12 bg-muted/30 rounded-lg">
      <div className="mb-4 text-4xl">🔍</div>
      <h3 className="text-xl font-semibold mb-2">No advisors found</h3>
      <p className="text-muted-foreground">
        Try adjusting your filters or browse all advisors.
      </p>
    </div>
  );
};

export default NoResults;
