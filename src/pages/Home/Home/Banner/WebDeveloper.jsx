import { useEffect, useState } from 'react';

const WebDeveloper = () => {
  const [word] = useState('Junior Web Developer');
  const [currentLength, setCurrentLength] = useState(1);

  useEffect(() => {
    const timer = setInterval(incrementLength, 300);

    return () => {
      clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const incrementLength = () => {
    setCurrentLength(prevLength => (prevLength % word.length) + 1);
    // setWord()
  };

  const substring = word.slice(0, currentLength);

  return <div className='text-blue-600'>{substring}</div>;
};

export default WebDeveloper;
