import React from 'react';

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] bg-opacity-50">
            <div className="w-12 h-12 border-4 border-gray-200 rounded-full loader border-t-gray-700 animate-spin"></div>
        </div>
    );
};

export default Loader;
