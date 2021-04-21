import styled from 'styled-components';
// import { DropdownCurrency } from 'src/components';
// interface IProps {}

function CabinClassHeader({}) {
  return (
    <S.container>
      잘못된 부분이 있어 기획/디자인 다시 나와야함
      {/* <div className="left">
        <p>성인 1인 기준</p>
      </div>
      <div className="right">
        <p>
          <span className="economy-color" />
          이코노미
        </p>
        <p>
          <span className="premium-color" />
          프리미엄 이코노미
        </p>
        <DropdownCurrency
          value={currency.unit}
          onClickItem={onClickCurrency}
        >
          {map(currencyList, (item, i) => (
            <S.dropdownItem
              key={`currencyList${i.toString()}`}
              isSelected={item === currency.unit}
            >
              {item}
            </S.dropdownItem>
          ))}
        </DropdownCurrency>
      </div> */}
    </S.container>
  );
}

const S = {
  container: styled.div``,
};

export default CabinClassHeader;
