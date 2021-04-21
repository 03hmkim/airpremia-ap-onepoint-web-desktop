import styled from 'styled-components';
import { Dim } from 'src/components';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: React.ReactElement | string;
  onOff?: () => {};
}

function PopupSwipeRight({ children, onOff }: IProps) {
  return (
    <S.container>
      <Dim handleClick={onOff} />
      <div className="innerWrapper">{children}</div>
    </S.container>
  );
}

PopupSwipeRight.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    @keyframes slide {
      from {
        right: -800px;
      }

      to {
        right: 0px;
      }
    }
    .innerWrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 800px;
      background-color: white;
      animation-duration: 1s;
      animation-name: slide;
      animation-timing-function: cubic-bezier(
        0.45,
        0,
        0.55,
        1
      );
      z-index: 100;
    }
  `,
};

export default PopupSwipeRight;
