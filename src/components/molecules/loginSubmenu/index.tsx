import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Checkbox } from 'src/components';
import { LIGHT_GRAY8 } from '@airpremia/cdk/styles/colors';
import { IProps as ICheckboxProps } from 'src/components/molecules/checkbox';

interface ILinkData {
  text: string;
  href: string;
}

interface IProps {
  checkboxData: ICheckboxProps;
  menuList: ILinkData[];
}

const LoginSubMenu: FC<IProps> = ({
  menuList,
  checkboxData,
}: IProps) => {
  return (
    <S.container>
      <S.left>
        <Checkbox {...checkboxData}>
          <p>로그인 상태 유지</p>
        </Checkbox>
      </S.left>
      <S.right>
        {menuList.map((item, i) => (
          <Link
            key={`loginSubMenu${i.toString()}`}
            href={item.href}
          >
            <a>{item.text}</a>
          </Link>
        ))}
      </S.right>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34px;
  `,

  left: styled.div`
    font-weight: 600;
  `,

  right: styled.div`
    a {
      margin-left: 25px;
      font-size: 13px;
      line-height: 23px;
      letter-spacing: -0.26px;
      color: ${LIGHT_GRAY8};
    }
  `,
};

export default LoginSubMenu;
