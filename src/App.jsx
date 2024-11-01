import { useState } from 'react';
import MedalList from './MedalList';
import HeaderFormBox from './HeaderForm';
import './App.css';


function App() {

  // 위의 값들을 배열로 만들어 관리하기 쉽게 한다.
  // 배열로 만들면 배열 메서드를 활용할 수 있어지기 때문이다.
  // 마찬가지로 이 배열값도 계속 바뀔 거기 때문에 상태변경함수를 만들어준다.
  const [countries, setCountries] = useState([]);

  // 원본 배열이 훼손되면 안되기 때문에 스프레드연산자로 복사해준다.
  // b - a = 0 이면 falsy한 값이기 때문에 논리합연사자에 의해서 그 다음으로 넘어가서 확인한다.
  // 정렬된 데이터 배열을 map 으로 돌려준다!
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);

  return (
    <>
      <HeaderFormBox countries={countries} setCountries={setCountries} />
      <MedalList countries={countries} sortedCountries={sortedCountries} setCountries={setCountries} />
    </>
  )
}

export default App;
