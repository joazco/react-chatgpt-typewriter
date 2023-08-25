/// <reference types="react" />
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
declare const ChatGPTTypewriterEffect: React.FC<ChatGPTTypewriterEffectProps>;
export default ChatGPTTypewriterEffect;
