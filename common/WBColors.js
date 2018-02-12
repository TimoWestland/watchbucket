const NAMED_COLORS = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',

  lightBlue: 'rgba(3, 168, 244, 1)',
  grayBlue: 'rgba(96, 125, 139, 1)',
  darkBlue: 'rgba(69, 90, 100, 1)',

  darkGray: 'rgba(108, 108, 108, 1)',

  facebookBlue: 'rgba(66, 103, 178, 1)',

  // green: '',
  // red: '',
};

const THEME_COLORS = {
  ...NAMED_COLORS,

  primary: NAMED_COLORS.grayBlue,
  secondary: NAMED_COLORS.darkBlue,
  accent: NAMED_COLORS.lightBlue,
};

export default {
  ...THEME_COLORS,

  colorWithAlpha(name: ?string = 'blue', opacity: number = 1) {
    if (!THEME_COLORS[name]) {
      name = 'blue';
    }
    return THEME_COLORS[name].split(', 1)').join(`, ${opacity})`);
  },
};
