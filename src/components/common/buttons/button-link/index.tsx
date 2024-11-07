
import React from 'react';

import { useButtonClasses } from '../../../../hooks/useButtonClasses';
import { ButtonSize, ButtonVariant, type ButtonLinkProp } from '../../../../types';

type ButtonLinkComponentProps = ButtonLinkProp & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
};

const ButtonLink: React.FC<ButtonLinkComponentProps> = ({
  to,
  label,
  icon = null,
  size = ButtonSize.Medium,
  variant = ButtonVariant.Button,
  color = 'text-white',
  alt = false,
  onClick,
  type = 'button',
  disabled = false
}) => {
  const { linkClasses, buttonClasses } = useButtonClasses({
    to,
    label,
    icon,
    size,
    variant,
    color,
    alt
  });

  const content = (
    <>
      {label}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (to !== undefined) {
    return (
      <a
        href={to}
        className={variant === ButtonVariant.Link ? linkClasses : buttonClasses}
        role="button"
        aria-label={typeof label === 'string' ? label : 'Button'}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      aria-label={typeof label === 'string' ? label : 'Button'}
    >
      {content}
    </button>
  );
};

export default ButtonLink;
