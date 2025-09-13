import React from 'react';

/**
 * Базовая кнопка (Web).
 *
 * Правила:
 * - Без inline‑стилей. Стили определены в CSS (`@it-smetaniny/ui/css/button.css`).
 * - Цвета/отступы/радиусы берутся из CSS Variables (`@it-smetaniny/design-tokens`).
 *
 * Пример:
 *  import '@it-smetaniny/design-tokens/css/variables.css';
 *  import '@it-smetaniny/ui/css/button.css';
 *  <Button variant="danger">Удалить</Button>
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'danger' | 'success';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...rest }) => {
  const classes = ['it-btn', `it-btn--${variant}`, className].filter(Boolean).join(' ');
  return <button className={classes} {...rest} />;
};

