import {
  FC,
  ReactElement,
  useState,
  useCallback,
} from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { map, isArray } from 'lodash';
import { flow, flatten } from 'lodash/fp';
import fpMap from 'lodash/fp/map';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY1,
  BLUE1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { ICountryCodeDetailResp } from '@airpremia/core/api/auth/types';

interface IStyle {
  /** width */
  width?: string;
  /** height */
  height?: string;
}

export interface IProps extends IStyle {
  key: string;
  label: string;
  dataList?: any;
  onFliter?: (e: any) => void;
  onChange?: (data: ICountryCodeDetailResp) => void;
  emptyMessage?: ReactElement | string;
  selectLabel?: String;
}

const AutoComplete: FC<IProps> = ({
  emptyMessage = '',
  dataList = {},
  label,
  selectLabel,
  onFliter = () => {},
  onChange = () => {},
  ...styleProps
}: IProps) => {
  const originList: any[] = flow(
    fpMap((list) => list),
    flatten,
  )(dataList);
  const [search, setSearch] = useState('');
  const [isShow, setShowStatus] = useState(false);
  const onCountryCodeClick = useCallback(() => {
    setShowStatus(!isShow);
  }, [isShow]);

  const onClickItem = (data: any) => {
    console.log("선택", selectLabel);
    onChange(data);
    onCountryCodeClick();
  };
  const onInputChange = (e: any) => {
    const { value } = e.target;
    const pattern = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi;
    if (!pattern.test(value)) {
      setSearch(value);
      onFliter(e);
    }
  };

  const pattern = new RegExp(search);
  const filteredList = originList.filter((item: any) => {
    return pattern.test(item[label]);
  });

  
  const renderSearchFilterList = (str: string) => {
    const idx = str.indexOf(search);
    return [
      str.slice(0, idx),
      <em key={`searchfilter${idx.toString()}`}>
        {str.slice(idx, idx + search.length)}
      </em>,
      str.slice(idx + search.length),
    ];
  };


  //const focusNation = useRef<HTMLLIElement>(null);
  //●
  const normalRender = () => (
    <S.searchList>
      {/*선택된 국적*/}
      {dataList && isArray(dataList) ? (    
        <div>
            <div className="title">
              <h5>
                {'selected'}
              </h5>
            </div>
            <ul className="filter">
              {map(dataList, (data, idx) => {
                const _onClick = () => {
                  onClickItem(data);
                }
                return selectLabel != undefined &&
                 (selectLabel == data.countryText || selectLabel == data.description) 
                && (
                  <li
                    key={`data${idx.toString()}`}
                    onClick={_onClick}
                    className="selected"
                  >
                    {data[label]}
                  </li>
                )
              })}
            </ul>

            <div className="title">
              <h5>
                {'List'}
              </h5>
            </div>
            <ul className="filter">
              <li className="firstLi"
                key=''
                onClick={onClickItem}>
                미선택
              </li>
  
              {map(dataList, (data, idx) => {
          
                const _onClick = () => {
                  onClickItem(data);
                }
                return selectLabel != undefined && (selectLabel == data.countryText ||
                        selectLabel == data.description) ? 
                        (
                  <li
                    // ref={focusNation}
                    key={`data${idx.toString()}`}
                    onClick={_onClick}
                    className="selected"
                  >
                    {data[label]}
                  </li>
                ) : (
                  <li
                    key={`data${idx.toString()}`}
                    onClick={_onClick}
                  >
                    {data[label]}
                  </li>
                );
              })}
            </ul>
          
        </div>
      ) : (
        Object.keys(dataList).map((item, i) => {
          return (
            <div key={i.toString()}>
              <div className="title">
                <h5>
                  {item === 'suggestions' ? '추천' : item}
                </h5>
              </div>
              <ul className="filter">
                {map(dataList[item], (data, idx) => {
                  const _onClick = () => onClickItem(data);
                  return (
                    <li
                      key={`data${idx.toString()}`}
                      onClick={_onClick}
                    >
                      {data[label]}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })
      )}
    </S.searchList>
  );


  const filterRender = () => (
    <S.searchList>
      <ul className="filter">
        {filteredList.length > 0 ? (
          map(filteredList, (data, i) => {
            const _onClick = () => onClickItem(data);
            // let selectFlag = false;
            console.log("selectLabel", selectLabel);
            console.log("data", data);
            //if(selectLabel == data.) selectFlag = true;
            return (
              <li
                key={`data${i.toString()}`}
                onClick={_onClick}
              >
                {renderSearchFilterList(data[label])}
              </li>
            );
          })
        ) : (
          <div className="not-found">{emptyMessage}</div>
        )}
      </ul>
    </S.searchList>
  );

  return (
    <S.container {...styleProps}>
      <S.wrapper>
        <S.search>
          <input value={search} onChange={onInputChange} />
        </S.search>
        {search ? filterRender() : normalRender()}
      </S.wrapper>
    </S.container>
  );
};

export const CheckinAutoComplete: FC<IProps> = ({
  emptyMessage = '',
  dataList = {},
  label,
  onFliter = () => {},
  onChange = () => {},
  ...styleProps
}: IProps) => {
  const originList: any[] = flow(
    fpMap((list) => list),
    flatten,
  )(dataList);
  const [search, setSearch] = useState('');
  const [isShow, setShowStatus] = useState(false);
  const onCountryCodeClick = useCallback(() => {
    setShowStatus(!isShow);
  }, [isShow]);

  const onClickItem = (data: any) => {
    console.log("data", data);
    onChange(data);
    onCountryCodeClick();
  };

  const onInputChange = (e: any) => {
    const { value } = e.target;
    const pattern = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi;
    if (!pattern.test(value)) {
      setSearch(value);
      onFliter(e);
    }
  };

  const pattern = new RegExp(search);
  const filteredList = originList.filter((item: any) => {
    let countryText = item["countryTextKr"] != "null" ? "countryTextKr" : "countryText";
    return (pattern.test(item[countryText]) && item["countryNumber"] != null)
  });
  
  const renderSearchFilterList = (str: string) => {
    const idx = str.indexOf(search);
    return [
      str.slice(0, idx),
      <em key={`searchfilter${idx.toString()}`}>
        {str.slice(idx, idx + search.length)}
      </em>,
      str.slice(idx + search.length),
    ];
  };

  const normalRender = () => (
    <S.searchList>
      {dataList && isArray(dataList) ? (
        <ul className="filter">
          {map(dataList, (data, idx) => {
            if(data["countryNumber"] == null)  return;
            let countryText = data["countryTextKr"] != "null" ? "countryTextKr" : "countryText";
            
            const _onClick = () => onClickItem(data);
            return (
              <li
                key={`data${idx.toString()}`}
                onClick={_onClick}
              >
                {`${data[countryText]}(+ ${data["countryNumber"]})`}
              </li>
            );
          })}
        </ul>
      ) : (
        Object.keys(dataList).map((item, i) => {
          return (
            <div key={i.toString()}>
              <div className="title">
                <h5>
                  {item === 'suggestions' ? '추천' : item}
                </h5>
              </div>
              <ul className="filter">
                {map(dataList[item], (data, idx) => {
                  if(data["countryNumber"] == null)  return;
                  let countryText = data["countryTextKr"] != "null" ? "countryTextKr" : "countryText";

                  const _onClick = () => onClickItem(data);
                  return (
                    <li
                      key={`data${idx.toString()}`}
                      onClick={_onClick}
                    >
                      {`${data[countryText]}(+ ${data["countryNumber"]})`}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })
      )}
    </S.searchList>
  );

  const filterRender = () => (
    <S.searchList>
      <ul className="filter">
        {filteredList.length > 0 ? (
          map(filteredList, (data, i) => {
            const _onClick = () => onClickItem(data);
            let countryText = data["countryTextKr"] != "null" ? "countryTextKr" : "countryText";
            return (
              <li
                key={`data${i.toString()}`}
                onClick={_onClick}
              >
              {renderSearchFilterList(`${data[countryText]}(+ ${data["countryNumber"]})`)}
              </li>
            );
          })
        ) : (
          <div className="not-found">{emptyMessage}</div>
        )}
      </ul>
    </S.searchList>
  );

  return (
    <S.container {...styleProps}>
      <S.wrapper>
        <S.search>
          <input value={search} onChange={onInputChange} />
        </S.search>
        {search ? filterRender() : normalRender()}
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    width: ${prop('width', '398px')};
    height: ${prop('height', '400px')};
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 10;

    @media only screen and (max-width: 767px) { 
      width: ${prop('width', '300px')};
      left: auto;
      right: 0px;
    }
  `,

  wrapper: styled.div`
    width: 100%;
    height: 100%;
    min-width: 126px;
    border-radius: 8px;
    padding: 24px 0 22px;
    box-sizing: border-box;
    z-index: 81;
    overflow: auto;
  `,

  search: styled.div`
    width: 350px;
    height: 48px;
    margin: 0 24px;

    input {
      box-sizing: border-box;
      font-size: 14px;
      color: ${DARK_GRAY1};
      width: 100%;
      height: 100%;
      border: solid 1px ${LIGHT_GRAY6};
      border-radius: 4px;
      z-index: 15;
      padding-inline-start: 14px;
    }

    @media only screen and (max-width: 767px) { 
      width: calc(100% - 40px);
      margin: 0 20px;
    }
  `,

  searchList: styled.div`
    overflow: scroll;
    max-height: 304px;
    .title {
      margin: 0 25px 15px;
      font-size: 15px;
      font-weight: 600;
      color: ${DARK_GRAY1};
      letter-spacing: -0.3px;
      line-height: normal;
      border-bottom: solid 1px ${LIGHT_GRAY6};
      padding: 25px 0 15px;
    }

    .filter {
      li {
        font-weight: 600;
        padding: 15px 24px;
        font-size: 14px;
        list-style: none;
        cursor: pointer;
        &:hover {
          background-color: ${LIGHT_GRAY1};
        }
      }

      em {
        color: ${BLUE1};
      }
    }

    .firstLi {
      color: gray;
    }
    .selected{
      background-color: ${LIGHT_GRAY7};
    }

    .not-found {
      padding: 25px 65px;
      p {
        font-size: 13px;
        color: ${LIGHT_GRAY7};
      }
    }
    .nowSelect{
      background-color: ${LIGHT_GRAY7};
    }
  `,
};

export default AutoComplete;
