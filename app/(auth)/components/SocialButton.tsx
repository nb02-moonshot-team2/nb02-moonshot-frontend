import classNames from 'classnames/bind';
import KakaoImage from '@/public/assets/kakao.png';
import GoogleImage from '@/public/assets/google.png';
import NaverImage from '@/public/assets/naver.png';
import FacebookImage from '@/public/assets/facebook.png';
import OAuthProvider from '@/types/OAuthProivder';
import styles from './SocialButton.module.css';
import Image from 'next/image';
const cx = classNames.bind(styles);

const SOCIAL_BUTTON_IMAGE_MAP = {
  [OAuthProvider.GOOGLE]: GoogleImage,
  [OAuthProvider.KAKAO]: KakaoImage,
  [OAuthProvider.NAVER]: NaverImage,
  [OAuthProvider.FACEBOOK]: FacebookImage,
};

interface SocialButtonProps {
  provider: OAuthProvider;
  onClick?: () => void;
}

const SocialButton = ({ provider, onClick }: SocialButtonProps) => {
  return (
    <div 
      className={cx(styles.socialButton, provider)}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Image
        className={cx(styles.socialButtonImage)}
        src={SOCIAL_BUTTON_IMAGE_MAP[provider]}
        alt={provider}
      />
    </div>
  );
};

export default SocialButton;
