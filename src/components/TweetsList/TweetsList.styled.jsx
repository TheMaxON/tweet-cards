import styled from '@emotion/styled';
import { ReactComponent as Logo } from 'media/logo.svg';

export const TweetsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TweetsListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  width: 380px;
  height: 460px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 36px 36px 36px;
  background: var(--color-background-secondary);
  box-shadow: var(--shadow-component);
  border-radius: 20px;
`;

export const LogoStyled = styled(Logo)`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const TopDecorImgStyled = styled.img`
  width: 308px;
  height: 168px;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  margin: -20px 0 26px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarOutline = styled.div`
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50px;
  padding: 8px;
  z-index: 1;
`;

export const AvatarBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: var(--color-secondary);
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: var(--color-secondary);
`;

export const LineDecor = styled.div`
  width: 100%;
  height: 8px;
  position: absolute;
  left: 0;
  right: 0;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Statistics = styled.div`
  width: 100%;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  padding: 14px 28px;
  background: var(--color-primary);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-text-black);
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background: var(--color-background);
  }
`;

export const FollowingBtn = styled.button`
  width: 196px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  padding: 14px 28px;
  background: var(--color-success);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-text-black);
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    background: #5eedb9;
  }
`;

export const ButtonStyled = styled.button`
  width: 196px;
  height: 50px;
  margin: 20px 0;
  font-family: 'Montserrat', sans-serif;
  padding: 14px 28px;
  background: var(--color-primary);
  border-radius: 10.3108px;
  border: 2px solid var(--color-secondary);
  box-shadow: var(--shadow-component);
  outline: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-text-black);
  text-align: center;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-primary);
  }
`;
