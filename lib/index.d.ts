/// <reference types="react" />
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
declare const ChatGPTTypewriterEffect: React.FC<ChatGPTTypewriterEffectProps>;
export default ChatGPTTypewriterEffect;
