import { useEffect, useMemo, useState } from 'react';

export type CursorProps = {
  fill?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
};

export type ChatGPTTypewriterEffectProps = {
  text: string;
  delay?: number;
  cursor?: CursorProps;
  hideWhenFinished?: boolean;
  onChange?: (text: string) => void;
  onFinished?: () => void;
};
const ChatGPTTypewriterEffect: React.FC<ChatGPTTypewriterEffectProps> = ({
  text,
  delay = 10,
  cursor = {},
  hideWhenFinished,
  onChange,
  onFinished,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const style = useMemo(() => {
    const s: { width?: string; height?: string; marginLeft?: string; backgroundColor?: string } = {};
    if (cursor?.width) {
      s.width = cursor.width;
    }
    if (cursor?.height) {
      s.height = cursor.height;
    }
    if (cursor?.marginLeft) {
      s.marginLeft = cursor.marginLeft;
    }
    return s;
  }, [cursor]);
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
      {show && <span className="cursor" style={style}></span>}
    </span>
  );
};

export default ChatGPTTypewriterEffect;
