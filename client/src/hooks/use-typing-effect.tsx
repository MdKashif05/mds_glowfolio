import { useState, useEffect } from "react";

export function useTypingEffect(
  strings: string[],
  typeSpeed: number = 100,
  backSpeed: number = 60,
  backDelay: number = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentString = strings[currentStringIndex];

    if (isTyping) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, backDelay);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, backSpeed);
      } else {
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentStringIndex, isTyping, strings, typeSpeed, backSpeed, backDelay]);

  return displayText;
}
