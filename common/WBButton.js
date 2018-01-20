import React from 'react';
import WBColors from './WBColors';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const BUTTON_HEIGHT = 52,
  BUTTON_HEIGHT_SM = 32;


class WBButton extends React.Component {
  props: {
    theme: 'primary' | 'secondary',
    opacity: number,
    icon?: number,
    caption?: string,
    fontSize?: number,
    onPress: () => mixed
  };

  static defaultProps = {
    opacity: 1,
    theme: 'primary'
  };

  static height = BUTTON_HEIGHT;

  render() {
    const { icon, fontSize, opacity } = this.props;
    const caption = this.props.caption && this.props.caption.toUpperCase();
    const { buttonTheme, captionTheme } = this.getTheme();

    let iconImage;
    if (icon) {
      iconImage = (
        <Image source={icon} style={styles.icon}/>
      );
    }

    let fontSizeOverride;
    if (fontSize) {
      fontSizeOverride = { fontSize };
    }

    const content = (
      <View style={[styles.button, buttonTheme, { opacity }]}>
        {iconImage}
        <Text style={[styles.caption, captionTheme, fontSizeOverride]}>
          {caption}
        </Text>
      </View>
    );

    if (this.props.onPress) {
      return (
        <TouchableOpacity
          accesibilityTraits="button"
          onPress={this.props.onPress}
          activeOpacity={0.5}
          style={[styles.container, this.props.style]}>
          {content}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={[styles.container, this.props.style]}>
          {content}
        </View>
      );
    }
  }

  getTheme() {
    const { theme } = this.props;
    let buttonTheme, captionTheme;

    if (theme === 'primary') {
      buttonTheme = { backgroundColor: WBColors.accent };
      captionTheme = { color: WBColors.white };
    } else {
      buttonTheme = { backgroundColor: WBColors.primary };
      captionTheme = { color: WBColors.white };
    }

    return { buttonTheme, captionTheme };
  }
}

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 4,

    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    marginRight: 12
  },
  caption: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: .2,
  }
});

const Button = WBButton;
module.exports = Button;
