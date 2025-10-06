declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-player": DotLottiePlayerAttributes;
  }
}

// The custom DOM element instance
interface DotLottiePlayerElement extends HTMLElement {
  play?: () => void;
  pause?: () => void;
}

// JSX attributes allowed on <dotlottie-player />
interface DotLottiePlayerAttributes
  extends React.HTMLAttributes<DotLottiePlayerElement> {
  ref?: React.Ref<DotLottiePlayerElement>; // ✅ Add this line
  src?: string;
  background?: string;
  speed?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}
