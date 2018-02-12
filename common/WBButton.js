import React from 'react';
import WBColors from './WBColors';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const BUTTON_HEIGHT = 52;

class WBButton extends React.Component {
  props: {
    theme: 'primary' | 'secondary' | 'fb' | 'google',
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
    } else if (theme === 'facebook') {
      buttonTheme = { backgroundColor: WBColors.facebookBlue };
      captionTheme = { color: WBColors.white };
    } else if (theme === 'google') {
      buttonTheme = { backgroundColor: WBColors.white };
      captionTheme = { color: WBColors.darkGray };
    } else {
      buttonTheme = { backgroundColor: WBColors.primary };
      captionTheme = { color: WBColors.white };
    }

    return { buttonTheme, captionTheme };
  }
}

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 4,
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

export default WBButton;
