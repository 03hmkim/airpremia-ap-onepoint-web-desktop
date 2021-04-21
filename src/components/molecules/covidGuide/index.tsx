import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { 
    DARK_GRAY1,
    LIGHT_GRAY14
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title: string;
  text: string | ReactElement;
  covidImage: any;
}

const CovidGuide: FC<IProps> = ({
  title,
  text,
  covidImage,
}) => {
  return (
    <S.container>
      <S.left>
        <img src={covidImage} alt="코로나 아이콘" />
      </S.left>
      <S.right>
        <S.title>{title}</S.title>
        <S.text>{text}</S.text>
      </S.right>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: calc(50% - 15px);
    margin-right: 30px;
    display: flex;
    align-items: center;
    &:nth-child(even) {
      margin-right: 0;
    }
    
    @media only screen and (max-width: 1059px) {
      width: 100%;
      margin-right: 0;
      padding: 10px;
      margin-bottom: 40px;
      flex-direction: column;
      text-align: center;
    }
  `,

  left: styled.div`
    width: 90px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${LIGHT_GRAY14};
    @media only screen and (max-width: 1059px) {
      margin-bottom: 20px;
    }
  `,

  right: styled.div`
    width: calc(100% - 120px);
    margin-left: 30px;
    @media only screen and (max-width: 767px) {
      width: auto;
      margin-left: 0;
    }
  `,

  title: styled.div`
  margin-bottom: 15px;
  display: inline-block;
  color: ${DARK_GRAY1};
  font-size: 21px;
  font-weight: bold;
  line-height: 25px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 10px;
    font-size: 16px;
    letter-spacing: -0.032em;
    line-height: 26px;
  }
  `,

  text: styled.div`
    font-size: 18px;
    line-height: 1.8;
    @media only screen and (max-width: 767px) {
      padding: 0;
      font-size: 14px;
      letter-spacing: -0.028/em;
      line-height: 26px;
    }
  `,
};

export default CovidGuide;
