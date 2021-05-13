import styled from 'styled-components';
import {
  ComTitle,
} from 'src/components';
import { Container } from 'src/styles/layout';
import {
  DARK_GRAY1,
  DARK_GRAY3,
  LIGHT_BLUE2,
} from '@airpremia/cdk/styles/colors';
import Airplane from 'public/images/img_airplane.png';
import Airplanedetail from 'public/images/img_airplanedetail.png';
import AirplanedetailHori from 'public/images/img_airplanedetail_hori.png';
import Galley from 'public/images/img_map_legend_galley.png';
import Toilet from 'public/images/img_map_legend_toilet.png';


function AirplaneInfo(){
  return (
    <Container>
      <ComTitle
        title="항공기 소개"
      />
      <S.container>
        <C.wrap>
          <C.body>
            <C.airplane />
            <C.m30>
              <p>에어프레미아는 꿈의 항공기라 불리는 보잉 787-9를 운영합니다.</p>
              <p>탄소 복합소재를 사용해 더 튼튼하고 가벼워졌으며 소재의 혁신을 통해 기내 환경을 개선했습니다. 이제 쾌적한 습도와 줄어든 소음, 최적의 공기로 만족스러운 비행을 경험하실 수 있습니다. 기존 항공기 대비 더 길어진 항속 거리와 향상된 연료효율을 자랑하는 차세대 항공기 보잉 787-9은 중장거리 노선에 투입할 수 있는 최적의 항공기입니다.</p>
            </C.m30>
          </C.body>
          <C.m100>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                    <thead>
                      <tr>
                        <th colSpan={2}>항공기 제원</th>
                      </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th>운영 좌석 수</th>
                      <td>309석</td>
                    </tr>
                    <tr>
                      <th>제조사</th>
                      <td>BOEING</td>
                    </tr>
                    <tr>
                      <th>좌석구분</th>
                      <td>PREMIA 42, ECONOMY 35</td>
                    </tr>
                    <tr>
                      <th>순항 속도</th>
                      <td>1,040km/h</td>
                    </tr>
                    <tr>
                      <th>최대 운항거리</th>
                      <td>13,530 km</td>
                    </tr>
                    <tr>
                      <th>최대 운항고도</th>
                      <td>431,000ft</td>
                    </tr>
                    <tr>
                      <th>최대이륙중량</th>
                      <td>247,207 kg</td>
                    </tr>
                    <tr>
                      <th>항공기 길이</th>
                      <td>62.8m</td>
                    </tr>
                    <tr>
                      <th>날개폭</th>
                      <td>60.1 m</td>
                    </tr>
                    <tr>
                      <th>꼬리날개 높이</th>
                      <td>17m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.m100>
          <C.m100>
            <T.table>
              <div className="tbWrap">
                <table>
                  <colgroup>
                    <col width="50%"></col>
                    <col width="50%"></col>
                  </colgroup>
                    <thead>
                      <tr>
                        <th colSpan={2}>항공기 등록현황</th>
                      </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th>기종모델</th>
                      <td>B787-9</td>
                    </tr>
                    <tr>
                      <th>등록번호</th>
                      <td>HL8387</td>
                    </tr>
                    <tr>
                      <th>제조년월</th>
                      <td>2020.09.19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.m100>
          <C.m100>
            <T.table>
              <div className="tbWrap">
                <table className="last-table">
                  <colgroup>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                    <col width="33.3333%"></col>
                  </colgroup>
                    <thead>
                      <tr>
                        <th>좌석 배치도</th>
                        <td>PREMIA 42</td>
                        <td>ECONOMY 35</td>
                      </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th>좌석 수</th>
                      <td>56</td>
                      <td>253</td>
                    </tr>
                    <tr>
                      <th>좌석 간격</th>
                      <td>
                        <p>42 inches</p>
                        <p>(106.68cm)</p>
                      </td>
                      <td>
                        <p>35 inches</p>
                        <p>(88.9cm)</p>
                      </td>
                    </tr>
                    <tr>
                      <th>좌석 넓이</th>
                      <td>
                        <p>20 inches</p>
                        <p>(50.8cm)</p>
                      </td>
                      <td>
                        <p>18 inches</p>
                        <p>(45.72cm)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </T.table>
          </C.m100>
          <C.m100>
            <C.block>
              <C.span>법례</C.span>
              <C.sCon><C.premia></C.premia><C.text>PREMIA 42</C.text></C.sCon>
              <C.sCon><C.galley></C.galley><C.text>갤리</C.text></C.sCon>
            </C.block>
            <C.block>
              <C.span></C.span>
              <C.sCon><C.economy></C.economy><C.text>ECONOMY 35</C.text></C.sCon>
              <C.sCon><C.toilet></C.toilet><C.text>화장실</C.text></C.sCon>
            </C.block>
          </C.m100>
          <C.m30>
            <C.airDetail></C.airDetail>
          </C.m30>
        </C.wrap>
      </S.container>
    </Container>
  );
}

const S = {
  container: styled.div``,
}

const C = {
  wrap: styled.div`
  `,
  body: styled.div`
    border-top: 2px solid ${DARK_GRAY1};
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      padding-top: 20px;
    }
  `,
  m100: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 767px){
      margin-top: 60px;
    }
  `,
  m60: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 767px){
      margin-top: 40px;
    }
  `,
  m30: styled.div`
    margin-top: 30px;
    font-size: 18px;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      margin-top: 20px;
      font-size: 14px;
      letter-spacing: -0.28px;
      font-weight: 300;
    }
  `,
  block: styled.p`
    margin-top: 15px;
    display: flex;
    &:first-child{
      margin-top: 0;
    }
  `,
  span: styled.span`
    width: 78px;
    color: ${DARK_GRAY1};
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    line-height: 2em;
    @media only screen and (max-width: 767px){
      font-size: 14px;
      letter-spacing: -0.28px;
      font-weight: 300;
    }
  `,
  sCon: styled.span`
    width: 180px;
    font-size: 18px;
    line-height: 2em;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 767px){
      width: 120px;
      font-size: 14px;
      letter-spacing: -0.28px;
      font-weight: 300;
    }
  `,
  text: styled.div`
    margin-left: 10px;
    @media only screen and (max-width: 767px){
      margin-left: 5px;
    }
  `,
  premia: styled.div`
    width: 21px;
    height: 28px;
    border-radius: 8px 8px 4px 4px;
    background-color: ${DARK_GRAY3};
    @media only screen and (max-width: 767px){
      width: 15px;
      height: 22px;
      border-radius: 6px 6px 4px 4px;
    }
  `,
  economy: styled.div`
    width: 21px;
    height: 28px;
    border-radius: 8px 8px 4px 4px;
    background-color: ${LIGHT_BLUE2};
    @media only screen and (max-width: 767px){
      width: 15px;
      height: 22px;
      border-radius: 6px 6px 4px 4px;
    }
  `,
  galley:styled.div`
    width: 28px;
    height: 28px;
    background-image: url(${Galley});
    background-size: cover;
    @media only screen and (max-width: 767px){
      width: 22px;
      height: 22px;
    }
  `,
  toilet:styled.div`
    width: 28px;
    height: 28px;
    background-image: url(${Toilet});
    background-size: cover;
    @media only screen and (max-width: 767px){
      width: 22px;
      height: 22px;
    }
  `,
  airplane: styled.div`
    width: 100%;
    height: 736px;
    background-image: url(${Airplane});
    background-size: cover;
    margin: 0 auto;
    @media only screen and (max-width: 1440px){
      width: 1000px;
      height: 613px;
    }
    @media only screen and (max-width: 1059px){
      width: 500px;
      height: 306px;
    }
    @media only screen and (max-width: 599px){
      width: 300px;
      height: 184px;
    }
  `,
  airDetail: styled.div`
    width: 1200px;
    height: 171px;
    background-image: url(${AirplanedetailHori});
    background-size: cover;
    margin: 0 auto;
    @media only screen and (max-width: 1250px){
      width: 171px;
      height: 1200px;
      background-image: url(${Airplanedetail});
    }
  `,
}

const T = {
  table: styled.div`

  `,
}

export default AirplaneInfo;