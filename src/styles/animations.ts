import { css } from 'styled-components';

const Animations = css`
  @keyframes blinkText {
    0% {
      opacity: 0;
      scale: 0;
    }

    25% {
      scale: 0.5;
    }

    100% {
      opacity: 1;
      scale: 1;
    }
  }
`;

export default Animations;
