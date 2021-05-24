import { css } from 'styled-components';

const Fonts = css`
  @font-face {
    font-family: 'Nunito-Extrabold';
    src: url('./fonts/nunito/subset-Nunito-ExtraBold.eot');
    src: url('./fonts/nunito/subset-Nunito-ExtraBold.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/nunito/subset-Nunito-ExtraBold.woff2') format('woff2'),
      url('./fonts/nunito/subset-Nunito-ExtraBold.woff') format('woff'),
      url('./fonts/nunito/subset-Nunito-ExtraBold.ttf') format('truetype'),
      url('./fonts/nunito/subset-Nunito-ExtraBold.svg#Nunito-ExtraBold')
        format('svg');
    font-display: fallback;
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-Regular';
    src: url('./fonts/nunito/subset-Nunito-Regular.eot');
    src: url('./fonts/nunito/subset-Nunito-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/nunito/subset-Nunito-Regular.woff2') format('woff2'),
      url('./fonts/nunito/subset-Nunito-Regular.woff') format('woff'),
      url('./fonts/nunito/subset-Nunito-Regular.ttf') format('truetype'),
      url('./fonts/nunito/subset-Nunito-Regular.svg#Nunito-Regular')
        format('svg');
    font-display: fallback;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-Black';
    src: url('./fonts/nunito/subset-Nunito-Black.eot');
    src: url('./fonts/nunito/subset-Nunito-Black.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/nunito/subset-Nunito-Black.woff2') format('woff2'),
      url('./fonts/nunito/subset-Nunito-Black.woff') format('woff'),
      url('./fonts/nunito/subset-Nunito-Black.ttf') format('truetype'),
      url('./fonts/nunito/subset-Nunito-Black.svg#Nunito-Black') format('svg');
    font-display: fallback;
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito-SemiBold';
    src: url('./fonts/nunito/subset-Nunito-SemiBold.eot');
    src: url('./fonts/nunito/subset-Nunito-SemiBold.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/nunito/subset-Nunito-SemiBold.woff2') format('woff2'),
      url('./fonts/nunito/subset-Nunito-SemiBold.woff') format('woff'),
      url('./fonts/nunito/subset-Nunito-SemiBold.ttf') format('truetype'),
      url('./fonts/nunito/subset-Nunito-SemiBold.svg#Nunito-SemiBold')
        format('svg');
    font-display: fallback;
    font-weight: 600;
    font-style: normal;
  }
`;

export default Fonts;
