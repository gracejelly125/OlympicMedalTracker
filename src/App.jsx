import { useState, useEffect } from 'react';
import MedalList from './components/MedalList';
import HeaderForm from './components/HeaderForm';
import GlobalStyle from './styles/GlobalStyle';


function App() {

  // 위의 값들을 배열로 만들어 관리하기 쉽게 한다.
  // 배열로 만들면 배열 메서드를 활용할 수 있어지기 때문이다.
  // 마찬가지로 이 배열값도 계속 바뀔 거기 때문에 상태변경함수를 만들어준다.
  const [countries, setCountries] = useState(JSON.parse(localStorage.getItem("countries")) || []);
    // 로컬 스토리지에 "countries" 키가 있는지 확인하고, 있으면 값을 가져온다.
    // 없으면 [] 빈배열을 초기값으로 사용한다. 
    
    // 의존성 배열인 [countries] 가 변경될 때 마다 함수를 실행한다.
    useEffect(() => {
      localStorage.setItem("countries", JSON.stringify(countries));
    }, [countries]);

  return (
    <>
      <GlobalStyle />
      <HeaderForm countries={countries} setCountries={setCountries} />
      <MedalList countries={countries} setCountries={setCountries} />
    </>
  )
}

export default App;
