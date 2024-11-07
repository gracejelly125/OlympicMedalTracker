import { useState } from "react";
import {
  TableGroup,
  MedalTable,
  MedalTableCell,
  SortCheck,
} from "../styles/MedalTableStyle";
import { Button } from "../styles/ButtonGroupStyle";
import PropTypes from "prop-types";


function MedalList({ countries, setCountries }) {
  const [sortType, setSortType] = useState("gold"); // 기본값은 gold 정렬

  const deleteCountryHandler = (countryToDelete) => {
    // confirm() 메서드 사용자에서 확인 메세지를 띄워주는 기능
    const confirmDelete = window.confirm(
      `${countryToDelete} 국가를 정말 삭제하시겠습니까?`
    );
    if (confirmDelete) {
      // 가져온 데이터값이 배열의 데이터값과 일치하지 않은 경우만 골라서 상태변경함수에 전달한다.
      // 가져온 데이터값만 사라진 배열이 화면에 나타난다.
      const deletedCountries = countries.filter(
        (c) => c.countryName !== countryToDelete
      );
      setCountries(deletedCountries);
    }
  };

  // 합계 기준으로 내림차순 정렬하기
  // 원본 배열이 훼손되면 안되기 때문에 스프레드연산자로 복사해준다.
  // b - a = 0 이면 falsy한 값이기 때문에 논리합연사자에 의해서 그 다음으로 넘어가서 확인한다.
  // 정렬된 데이터 배열을 map 으로 돌려준다!
  // const sortedTotalHandler = () => {
  //     const sortedByTotal = [...countries].sort((a, b) => b.totalMedals - a.totalMedals)
  //     return sortedByTotal;
  // }

  // map이 넘겨 받을 입력 배열 데이터 값을 골드 메달 순 or 합계 순으로 정렬해서 넘긴다.
  // radio 버튼 옵션에 따라 여기서 입력 배열이 결정된다.
  // sortType 에 인자값으로
  const getSortedCountries = () => {
    if (sortType === "gold") {
      const sortedCountries = [...countries].sort(
        (a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
      );
      return sortedCountries;
    } else {
      const sortedCountries = [...countries].sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      return sortedCountries;
    }
  };
  // 변수에 함수 호출을 담아준다!
  // sortedCountries 변수를 입력하면 함수를 호출하고 그 결과를 반환한다.
  // 사용자가 금메달 순 버튼을 선택하면 sortType 은 'gold' 로 설정
  // 합계 순을 선택하면 'total' 로 설정된다.
  // 사용자가 라디어 버튼을 선택하면 onChange 이벤트 핸들러가 호출된다.
  // sortType 값이 업데이트 된다. sortType 은 상태 변수이다.
  // 상태 변수란? 매개변수는 외부에서 제공되는 값, 상태변수는 컴포넌트의 내부 상태를 나타낸다.
  const sortedCountries = getSortedCountries();

  return (
    <>
      <TableGroup>
        {countries.length === 0 ? (
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ) : (
          <>
            <SortCheck>
              <label>
                <input
                  type="radio"
                  value="gold"
                  checked={sortType === "gold"}
                  onChange={(e) => setSortType(e.target.value)}
                />
                금메달 순
              </label>
              <label>
                <input
                  type="radio"
                  value="total"
                  checked={sortType === "total"}
                  onChange={(e) => setSortType(e.target.value)}
                />
                합계 순
              </label>
            </SortCheck>
            <MedalTable className="header">
              <MedalTableCell>순위</MedalTableCell>
              <MedalTableCell>국가명</MedalTableCell>
              <MedalTableCell>금메달</MedalTableCell>
              <MedalTableCell>은메달</MedalTableCell>
              <MedalTableCell>동메달</MedalTableCell>
              <MedalTableCell>합계</MedalTableCell>
              <MedalTableCell>&times;</MedalTableCell>
            </MedalTable>
            {sortedCountries.map((country, index) => {
              return (
                <MedalTable
                  key={country.id}
                  className={index % 2 === 0 ? "even" : "odd"}
                >
                  <MedalTableCell>{index + 1}</MedalTableCell>
                  <MedalTableCell>{country.countryName}</MedalTableCell>
                  <MedalTableCell>{country.gold}</MedalTableCell>
                  <MedalTableCell>{country.silver}</MedalTableCell>
                  <MedalTableCell>{country.bronze}</MedalTableCell>
                  <MedalTableCell>
                    {country.gold + country.silver + country.bronze}
                  </MedalTableCell>
                  <MedalTableCell>
                    <Button
                      type="button"
                      onClick={() => deleteCountryHandler(country.countryName)}
                    >
                      삭제
                    </Button>
                  </MedalTableCell>
                </MedalTable>
              );
            })}
          </>
        )}
      </TableGroup>
    </>
  );
}

MedalList.PropTypes = {
  countries: PropTypes.arrayOf( PropTypes.shape({
    countryName: PropTypes.string,
    gold: PropTypes.number,
    silver: PropTypes.number,
    bronze: PropTypes.number,
  }))
};
MedalList.defaultProps = {
  countries: [],
}

export default MedalList;
