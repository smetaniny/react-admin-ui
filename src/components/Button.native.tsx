import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, radii, fontSizes } from '@it-smetaniny/design-tokens';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'danger' | 'success';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

/**
 * Базовая кнопка (React Native).
 *
 * Правила:
 * - Без хардкода значений: используем токены (`@it-smetaniny/design-tokens`).
 * - Стили централизованы через StyleSheet и токены.
 */
export const Button: React.FC<Props> = ({ title, onPress, variant = 'primary', style, textStyle }) => {
  const bg = {
    primary: colors.primary,
    danger: colors.danger,
    success: colors.success,
  }[variant];

  return (
    <TouchableOpacity onPress={onPress} style={[styles.base, { backgroundColor: bg }, style]}> 
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.md,
  },
  text: {
    color: '#fff',
    fontSize: fontSizes.md,
    fontWeight: '600',
    textAlign: 'center',
  },
});
