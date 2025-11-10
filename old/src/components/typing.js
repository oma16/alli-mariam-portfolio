import React, { useState, useEffect } from "react";

const TypingEffect = ({theme}) => {
  const textArray = [
    "Mariam",
    "A Full-Stack Developer",
    "A Graphic Designer",
    "A DevOps Engineer",
  ];

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textArray[textIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait before starting to delete
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, textIndex, typingSpeed]);

  return (
    <h1 className="text-2xl font-bold lg:text-4xl xl:text-5xl">
      <span className={`inline-block border-r-4  pr-1 ${
                  theme !== "dark" ? "border-gray-200" : "border-gray-100"
                }`}>{currentText}</span>
    </h1>
  );
};

export default TypingEffect;
