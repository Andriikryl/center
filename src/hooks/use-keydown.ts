import React from 'react';

type Callback = (event: KeyboardEvent) => void;

function useKeydown(key: string, callback: Callback) {
 React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) { 
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
 }, [key, callback]); // Include key and callback in the dependency array
}

export default useKeydown;
