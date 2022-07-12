import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

//interfaces extendidas do react
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

//...props = rest operator
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
      //...props = spread operator
    />
  );
}
