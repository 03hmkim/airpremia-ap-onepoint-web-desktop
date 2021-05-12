import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  BLUE1,
  RED1,
} from '@airpremia/cdk/styles/colors';
import Linkblack from 'public/images/support/btn_txt_link_black.svg';
import Link from 'next/link'
import { ListGlobal } from 'src/components';
import ProhibitionTab from './prohibitionTab';

function Prohibition(){
  return (
    <Container>
      <S.container>
        <ComTitle
          title="수하물"
        />
        <C.wrap>
          <C.body>
            <C.titleMain>운송제한물품</C.titleMain>
            <C.sb>
              <ListGlobal level="fst" body={
                <p>하기 기준은 대한민국 공항 적용 기준이며, 목적지가 외국 공항일 경우 추가 금지 물품을 항공사 또는 여행사를 통하여 사전에 반드시 확인 바랍니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>
                  하기 외 제한 물품은&nbsp;
                  <C.linkpage>
                    <a href="https://avsec.ts2020.kr/avsc/main.do" target="_blank">
                      한국교통안전공단
                    </a>
                  </C.linkpage>
                  을 통하여 확인해 주시기 바랍니다.
                </p>
              }/>
            </C.sb>
            <ProhibitionTab />
          </C.body>
          <C.sbody>
            <C.title>유의사항</C.title>
            <C.sb>
              <ListGlobal level="fst" body={
                <p>[항공보안법] 제44조에 따라 2년 이상 5년 이하의 징역 또는 2천만원 이상 5천만원 이하의 벌금에 처할 수 있으니 금지 물품을 항공기로 반입하지 않도록 유의해 주시기 바랍니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>항공사 사전승인이 필요한 경우 수량 또는 운송이 제한될 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>외국 공항의 경우 해당국의 규정에 따라 다를 수 있으며, 출국 또는 환승 검색 시 압수될 수 있습니다.</p>
              }/>
              <ListGlobal level="fst" body={
                <p>액체류 면세품을 구매한 손님</p>
              }/>
              <ListGlobal level="scd" body={
                <p>면세점에서 제공하는 투명 봉인 봉투 STEB(Security Tamper Evident Bag)에 물품과 영수증이 들어있지 않으면 물품이 폐기 또는 압류 처분 되오니 주의하시기 바랍니다.</p>
              }/>
              <ListGlobal level="scd" body={
                <p>최종 목적지행 항공기 탑승 전까지는 미개봉 상태를 유지해주시기 바랍니다.</p>
              }/>
            </C.sb>
          </C.sbody>
          <C.body>
            <C.title>도움이 되셨나요?</C.title>
            <C.sb>
              <C.helpl className="dpN">
                <Link href="./carry">
                  <a>
                    운송제한물품<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./free-baggage">
                  <a>
                    무료수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./prohibition">
                  <a>
                    초과수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./special-carry">
                  <a>
                    특수수하물<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./lost-carry">
                  <a>
                    수하물 배상<Linkblack />
                  </a>
                </Link>
              </C.helpl>
              <C.helpl>
                <Link href="./#">
                  <a>
                    1:1 문의<Linkblack />
                  </a>
                </Link>
              </C.helpl>
            </C.sb>
          </C.body>
        </C.wrap>
      </S.container>
    </Container>
  )
}

const S = {
  container: styled.div``,
}

const C = {
  wrap: styled.div`
    margin-top: 70px;
    border-top: 2px solid ${DARK_GRAY1};
  `,
  body: styled.div`
    margin-top: 140px;
    &:first-of-type{
      margin-top: 30px;
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
  `,
  titleMain: styled.h3`
    font-size: 24px;
    font-weight: bold;
  `,
  title: styled.h4`
    font-size: 21px;
    font-weight: bold;
  `,
  sub: styled.h5`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  `,
  content: styled.div`
    margin-top: 12px;
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  area: styled.div`
    width: 1200px;
    height: auto;
    margin-top: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
  `,
  p: styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
    &:first-child{
      margin-top: 20px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
  `,
  rf: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
  `,
  note: styled.p`
    font-size: 18px;
    color: ${DARK_GRAY1};
    font-weight: bold;
    display: flex;
    justify-align: center;
  `,
  image: styled.p`
    margin-right: 5px;
  `,
  tmi: styled.p`
    margin-top: 30px;
  `,
  center: styled.p`
    text-align: center;
  `,
  ntg: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
    content:"-";
    width: 5px;
    height: 20px;
    top: 0px;
    left: 0px;
    color: ${LIGHT_GRAY8};
    display: block;
    position: absolute;
    }
  `,
  btg: styled.p`
    font-size: 18px;
    color: ${DARK_GRAY1};
    padding-left: 10px;
    line-height: 1.8;
    position: relative;
    &::before{
    content:"-";
    width: 5px;
    height: 20px;
    top: 0px;
    left: 0px;
    color: ${DARK_GRAY1};
    display: block;
    position: absolute;
    }
  `,
  rgt: styled.p`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 15px;
  `,
  lgcl: styled.p`
    color: ${LIGHT_GRAY8};
  `,
  igr: styled.div`
    width: 50%;
    margin-top: 80px;
    display: inline-block;
    &:first-child{
      margin-top: 60px;
    }
    &:last-child{
      margin-bottom: 60px;
      border-bottom: 1px solid ${LIGHT_GRAY5};
    }
  `,
  group: styled.div`
    margin-left: 50px;
    display: inline-block;
    vertical-align: middle;
  `,
  bdt: styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  `,
  desc: styled.p`
    font-size: 18px;
    font-weight: regular;
    line-height: 1.8;
  `,
  img: styled.p`
    display: inline-block;
    vertical-align: middle;
  `,
  linkhelp: styled.a`
    text-decoration-line: none;
    border: 0px;
  `,
  helpl: styled.p`
    width: 100%;
    padding: 25px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
    
    &.dpN{
      display: none;
    }
  `,
  linkpage: styled.span`
    color: ${BLUE1};
    border-bottom: 2px solid ${BLUE1};
  `,
  line: styled.div`
    width: 100%;
    margin: 60px 0px;
    border-bottom: 1px solid ${LIGHT_GRAY5};
  `,
  bold: styled.span`
    font-weight: bold;
  `,
  subtit: styled.p`
    font-size: 18px;
    font-weight: bold;
  `,
  blue: styled.span`
    color: ${BLUE1};
  `,
  red: styled.span`
    color: ${RED1};
  `,
  stit: styled.p`
    font-size: 18px;
    margin: 20px 0px;
    line-height: 1.8;
  `,
  linehgt: styled.div`
    font-size: 18px;
    color: ${LIGHT_GRAY8};
    margin-top: 20px;
    line-height: 1.8;
  `,
}
export default Prohibition;