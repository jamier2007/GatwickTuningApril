import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-centre justify-centre min-h-screen">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading; 