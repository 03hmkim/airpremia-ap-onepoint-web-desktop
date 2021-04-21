import React, { useMemo } from 'react';
import styled from 'styled-components';
import SvgC001 from 'public/images/img_c001.svg';
import SvgC002 from 'public/images/img_c002.svg';
import SvgC003 from 'public/images/img_c003.svg';
import SvgC004 from 'public/images/img_c004.svg';
import SvgC005 from 'public/images/img_c005.svg';
import SvgC006 from 'public/images/img_c006.svg';
import SvgC007 from 'public/images/img_c007.svg';
import SvgC008 from 'public/images/img_c008.svg';
import SvgC009 from 'public/images/img_c009.svg';
import SvgC010 from 'public/images/img_c010.svg';
import SvgC011 from 'public/images/img_c011.svg';
import SvgC012 from 'public/images/img_c012.svg';
import SvgC013 from 'public/images/img_c013.svg';
import SvgC014 from 'public/images/img_c014.svg';
import SvgC015 from 'public/images/img_c015.svg';
import SvgC016 from 'public/images/img_c016.svg';
import SvgC017 from 'public/images/img_c017.svg';
import SvgC018 from 'public/images/img_c018.svg';
import SvgC019 from 'public/images/img_c019.svg';
import SvgC020 from 'public/images/img_c020.svg';
import SvgC021 from 'public/images/img_c021.svg';
import SvgC022 from 'public/images/img_c022.svg';
import SvgC023 from 'public/images/img_c023.svg';
import SvgC024 from 'public/images/img_c024.svg';
import SvgC025 from 'public/images/img_c025.svg';
import SvgC101 from 'public/images/img_c101.svg';
import SvgC102 from 'public/images/img_c102.svg';
import SvgC103 from 'public/images/img_c103.svg';
import SvgC104 from 'public/images/img_c104.svg';
import SvgC105 from 'public/images/img_c105.svg';

interface IStyleProps {}
interface IProps extends IStyleProps {
  code: string;
}

function BankThumbnail({ code }: IProps) {
  const getSvg = useMemo(() => {
    switch (code) {
      case 'C001':
        return <SvgC001 />;
      case 'C002':
        return <SvgC002 />;
      case 'C003':
        return <SvgC003 />;
      case 'C004':
        return <SvgC004 />;
      case 'C005':
        return <SvgC005 />;
      case 'C006':
        return <SvgC006 />;
      case 'C007':
        return <SvgC007 />;
      case 'C008':
        return <SvgC008 />;
      case 'C009':
        return <SvgC009 />;
      case 'C010':
        return <SvgC010 />;
      case 'C011':
        return <SvgC011 />;
      case 'C012':
        return <SvgC012 />;
      case 'C013':
        return <SvgC013 />;
      case 'C014':
        return <SvgC014 />;
      case 'C015':
        return <SvgC015 />;
      case 'C016':
        return <SvgC016 />;
      case 'C017':
        return <SvgC017 />;
      case 'C018':
        return <SvgC018 />;
      case 'C019':
        return <SvgC019 />;
      case 'C020':
        return <SvgC020 />;
      case 'C021':
        return <SvgC021 />;
      case 'C022':
        return <SvgC022 />;
      case 'C023':
        return <SvgC023 />;
      case 'C024':
        return <SvgC024 />;
      case 'C025':
        return <SvgC025 />;
      case 'C101':
        return <SvgC101 />;
      case 'C102':
        return <SvgC102 />;
      case 'C103':
        return <SvgC103 />;
      case 'C104':
        return <SvgC104 />;
      case 'C105':
        return <SvgC105 />;
      default:
        return <SvgC001 />;
    }
  }, [code]);

  return <S.container>{getSvg}</S.container>;
}

BankThumbnail.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    width: 26px;
    height: 28px;
  `,
};

export default BankThumbnail;
