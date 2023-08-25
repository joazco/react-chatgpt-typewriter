import { useEffect, useMemo, useState } from 'react';

type ChatGPTTypewriterEffectProps = {
  text: string;
  delay?: number;
  fill?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  hideWhenFinished?: boolean;
  onChange?: (text: string) => void;
  onFinished?: () => void;
};
const ChatGPTTypewriterEffect: React.FC<ChatGPTTypewriterEffectProps> = ({
  text,
  delay = 10,
  fill = '#E8E8E8',
  width,
  height,
  marginLeft = '3px',
  hideWhenFinished,
  onChange,
  onFinished,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const style = useMemo(() => {
    const s: { width?: string; height?: string; marginLeft: string } = {
      marginLeft,
    };
    if (width) {
      s.width = width;
    }
    if (height) {
      s.height = height;
    }
    return s;
  }, [width, height]);
  const show = useMemo(() => {
    if (hideWhenFinished && isFinished) {
      return false;
    }
    return true;
  }, [hideWhenFinished, isFinished]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        const nextText = text[index];
        index++;
        setDisplayedText((prevText) => {
          if (typeof nextText === 'undefined') return prevText;
          const finalText = prevText + nextText;
          if (onChange) {
            onChange(finalText);
          }
          return finalText;
        });
      } else {
        setIsFinished(true);
        clearInterval(interval);
      }
    }, delay);

    return () => {
      setDisplayedText('');
      clearInterval(interval);
    };
  }, [text, delay]);

  useEffect(() => {
    if (isFinished && onFinished) {
      onFinished();
    }
  }, [isFinished]);

  return (
    <span className="text-animation-chatgpt">
      {displayedText}
      {show && (
        <svg viewBox="8 4 8 16" xmlns="http://www.w3.org/2000/svg" className="cursor" style={style}>
          <rect x="10" y="10" width="12" height="12" fill={fill} />
        </svg>
      )}
    </span>
  );
};

export default ChatGPTTypewriterEffect;
