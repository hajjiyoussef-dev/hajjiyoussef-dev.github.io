import { useEffect, useState } from "react";


export function TypingText({text = "", speed = 10, restartDelay = 55000})
{
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= text.length) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setDisplayedText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [text, speed, currentIndex]); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText("");
      setCurrentIndex(0);
    }, restartDelay);

    return () => clearInterval(intervalId);
  }, [restartDelay]);

  return <span>{displayedText}</span>;

}