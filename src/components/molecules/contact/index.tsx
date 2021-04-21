import styled from 'styled-components';
import { Label, Text } from 'src/components';
import { IProps as ILabelProps } from 'src/components/atoms/label';
import { IProps as ITextProps } from 'src/components/atoms/text';

export interface IStyleProps {}

export interface IProps extends IStyleProps {
  /** Label Props */
  labelContent?: ILabelProps;
  /** Text Props */
  textContent?: ITextProps;
}

function Contact({ labelContent, textContent }: IProps) {
  return (
    <S.container className="contact">
      <S.wrapper>
        <Label {...labelContent}>
          {labelContent ? labelContent.children : ''}
        </Label>
      </S.wrapper>
      <S.wrapper>
        <Text {...textContent}>
          {textContent ? textContent.children : ''}
        </Text>
      </S.wrapper>
    </S.container>
  );
}

Contact.defaultProps = {
  labelContent: Label.defaultProps,
  textContent: Text.defaultProps,
};

const S = {
  container: styled.div<IStyleProps>`
    & > div:first-of-type {
      margin-bottom: 10px;
    }
  `,
  wrapper: styled.div``,
};

export default Contact;
