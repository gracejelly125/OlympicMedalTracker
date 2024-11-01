import { useState } from 'react';
import MedalList from './MedalList';
import HeaderFormBox from './HeaderForm';
import './App.css';


function App() {
  // useState() : 컴포넌트의 상태를 관리하는 함수
  // 두가지 값을 포함하는 배열을 반환한다!
  // [현재상태값, 상태값 변경 함수] = useState(0) <= 소괄호 안에 초기값 설정!
  // 상태는 메모리가 있기 때문에, 메모리가 바뀐 상태를 유지해서 다시 렌더링한다.
  // 리렌더링: 처음부터 함수 컴포넌트를 다시 실행한다.
  const [countryName, setCountryName] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [bronze, setBronze] = useState('');

  // 위의 값들을 배열로 만들어 관리하기 쉽게 한다.
  // 배열로 만들면 배열 메서드를 활용할 수 있어지기 때문이다.
  // 마찬가지로 이 배열값도 계속 바뀔 거기 때문에 상태변경함수를 만들어준다.
  const [countries, setCountries] = useState([]);

  // 추가 버튼
  // preventDefault 로 값이 입력되면 새로고침되는 현상을 막아준다.
  // 새로 입력된 국가명이 기존에 입력된 국가명이랑 같으면
  // true를 받아서 alert을 띄운다.
  const addCountryHandler = (e) => {
    e.preventDefault();
    if (countries.some(country => country.countryName === countryName)) {
      alert("이미 등록된 국가입니다.");
      return;
    }
    // 위에서 이미 등록된 국가인지 확인을 거쳤기 때문에
    // 등록된 국가는 값이 넘어오지 않는다.
    // 만약 넘어온 값이 있다면!
    // 상태변경함수로 기존 배열에 새로운 데이터를 추가한다.
    // 이후 인풋 박스의 값은 초기화 한다.
    else if (countryName) {
      setCountries([...countries,
      { countryName, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) }]);
      resetForm();
    }
  }

  // 업데이트 버튼
  // 기존 배열안의 countryName이 현재 입력한 countryName 이랑 같으면 true, 없으면 false
  // false 라면 alert을 띄운다.
  const updateCountryHandler = (e) => {
    e.preventDefault();
    const countryExists = countries.some((country) => country.countryName === countryName);
    if (!countryExists) {
      alert("등록되지 않은 국가입니다.");
      return;
    }
    // true인 경우 배열에 새로운 입력값을 추가하고,
    // false 라면 기존 입력값을 그대로 둔다.
    const updatedCountries = countries.map((country) => country.countryName === countryName
      ? { ...country, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) }
      : country);
    // true 라면 새로운 입력값이 상태변경함수에 반영되어 화면이 변경된다.
    // false 라면 기존값이 전달돼서 변경되지 않는다.
    setCountries(updatedCountries);
    resetForm();
  };

  // 삭제버튼의 onclick 이벤트를 통해 데이터를 인자로 받아온다.
  // 파라미터의 이름은 마음대로 지어도 된다. 단 명시적이게!
  const deleteCountryHandler = (countryToDelete) => {
    // confirm() 메서드 사용자에서 확인 메세지를 띄워주는 기능
    const confirmDelete = window.confirm(`${countryToDelete} 국가를 정말 삭제하시겠습니까?`);
    if (confirmDelete) {
      // 가져온 데이터값이 배열의 데이터값과 일치하지 않은 경우만 골라서 상태변경함수에 전달한다.
      // 가져온 데이터값만 사라진 배열이 화면에 나타난다.
      const deletedCountries = countries.filter(c => c.countryName !== countryToDelete);
      setCountries(deletedCountries);
    }
  }

  // 입력 폼 초기화
  // 인풋 박스에 입력된 값이 없어지고, 초기화된다 => 다시 placeholder 가 보인다.
  const resetForm = () => {
    setCountryName('');
    setGold('');
    setSilver('');
    setBronze('');
  }
  // 원본 배열이 훼손되면 안되기 때문에 스프레드연산자로 복사해준다.
  // b - a = 0 이면 falsy한 값이기 때문에 논리합연사자에 의해서 그 다음으로 넘어가서 확인한다.
  // 정렬된 데이터 배열을 map 으로 돌려준다!
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bornze);

  return (
    <>
        <HeaderFormBox addCountryHandler={addCountryHandler} setCountryName={setCountryName} setGold={setGold} setSilver={setSilver} setBronze={setBronze}
                    updateCountryHandler={updateCountryHandler} countryName={countryName} gold={gold} silver={silver} bronze={bronze}/>
        <MedalList countries={countries} sortedCountries={sortedCountries} deleteCountryHandler={deleteCountryHandler} />
    </>
  )
}

export default App
