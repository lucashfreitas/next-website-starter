export default {
  mobile: '@media only screen and (max-width: 47.5em)',
  smallTablet:
    '@media only screen and (min-width: 47.5em) and (max-width: 57.5em)',
  tablet: '@media only screen and (min-width: 47.5em) and (max-width: 75em)',
  desktop: '@media only screen and (min-width: 75em) ',
  largeDesktop: '@media only screen and (min-width: 95em) ',
  get tabletAndDesktop() {
    return `${this.tablet}, ${this.desktop.replace(
      '@media only screen and',
      '',
    )}`;
  },

  get tabletAndMobile() {
    return `${this.mobile}, ${this.tablet.replace(
      '@media only screen and',
      '',
    )}`;
  },
};
