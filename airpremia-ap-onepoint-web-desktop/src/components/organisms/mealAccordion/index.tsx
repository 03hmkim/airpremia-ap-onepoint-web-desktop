import styled from 'styled-components';
import { Arrow } from 'src/components';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';
import { EPosition } from 'src/components/atoms/arrow';
import { useMemo } from 'react';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 컨텐츠 노출 유무 */
  isOpen: boolean;
  /** 헤더 타이틀 */
  title: string;
  children?: string | React.ReactElement;
  /** header click */
  onClick: () => void;
}

function MealAccordion({
  isOpen,
  title,
  children,
  onClick,
}: IProps) {
  const position = useMemo(() => {
    return isOpen ? EPosition.DOWN : EPosition.RIGHT;
  }, [isOpen]);

  return (
    <S.container>
      <div className="header" onClick={onClick}>
        <div className="title font-bold">{title}</div>
        <div className="arrowWrapper">
          <Arrow
            scale={0.7}
            borderWidth="3"
            position={position}
          />
        </div>
      </div>
      {isOpen && <div className="content">{children}</div>}
    </S.container>
  );
}

MealAccordion.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .header {
      display: flex;
      justify-content: space-between;
      padding: 18px 0;
      border-bottom: 1px solid ${LIGHT_GRAY5};
      cursor: pointer;
      .title {
        font-size: 18px;
        letter-spacing: -0.36px;
      }
    }
    .content {
      padding: 40px 0;
    }
  `,
};

export default MealAccordion;
