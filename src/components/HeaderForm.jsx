import { useState } from "react";
import { Title, Container, Form, InputGroup } from "../styles/HeaderFormStyle";
import { ButtonGroup, Button } from "../styles/ButtonGroupStyle";

function HeaderForm({ countries, setCountries }) {
  // useState() : 컴포넌트의 상태를 관리하는 함수
  // 두가지 값을 포함하는 배열을 반환한다!
  // [현재상태값, 상태값 변경 함수] = useState(0) <= 소괄호 안에 초기값 설정!
  // 상태는 메모리가 있기 때문에, 메모리가 바뀐 상태를 유지해서 다시 렌더링한다.
  // 리렌더링: 처음부터 함수 컴포넌트를 다시 실행한다.
  const [countryName, setCountryName] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  // const [gold, setGold] = useInput(); => useInput 잘 안 씀!
  // useForm 사용하는게 더 나음 form에 있는 onSubmit 핸들러를 분리해줄 수 있다.

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
      const newCountry = {
        id: Date.now(), countryName: countryName, gold: Number(gold), silver: Number(silver), bronze: Number(bronze)
      }
      setCountries([...countries, newCountry]);
      resetForm();
    }
  }

  // 업데이트 버튼
  // 기존 배열안의 countryName이 현재 입력한 countryName 이랑 같으면 true, 없으면 false
  // false 라면 alert을 띄운다.
  const updateCountryHandler = (e) => {
    e.preventDefault();
    const countryExists = countries.find((country) => country.countryName === countryName);
    if (!countryExists) {
      alert("등록되지 않은 국가입니다.");
      return;
    }
    // true인 경우 배열에 새로운 입력값을 추가하고,
    // false 라면 기존 입력값을 그대로 둔다.
    const updatedCountries = countries.map((country) => country.countryName === countryName
      ? { ...country, gold, silver, bronze }
      : country);
    // true 라면 새로운 입력값이 상태변경함수에 반영되어 화면이 변경된다.
    // false 라면 기존값이 전달돼서 변경되지 않는다.
    setCountries(updatedCountries);
    resetForm();
  };

    // 입력 폼 초기화
  // 인풋 박스에 입력된 값이 없어지고, 초기화된다 => 다시 placeholder 가 보인다.
  const resetForm = () => {
    setCountryName('');
    setGold('');
    setSilver('');
    setBronze('');
  }

  return (
    <>

        <Title>2024 파리 올림픽</Title>

      <Container>
        <Form onSubmit={addCountryHandler}>
          <InputGroup>
            <label htmlFor="countryname">국가명</label>
            <input type="text" value={countryName} placeholder='국가명을 입력해주세요' onChange={(e) => setCountryName(e.target.value.trim())} 
            id="countryname" required/>
          </InputGroup>
          <InputGroup>
            <label htmlFor="goldmedal">금메달</label>
            <input type="number" value={gold || ""} placeholder='금메달 수를 입력해주세요' onChange={(e) => setGold(+e.target.value)} 
            min="0" max="99" id="goldmedal" required/>
          </InputGroup>
          <InputGroup>
            <label htmlFor="silvermedal">은메달</label>
            <input type="number" value={silver || ""} placeholder='은메달 수를 입력해주세요' onChange={(e) => setSilver(+e.target.value)} 
            min="0" max="99" id="silvermedal"  required/>
          </InputGroup>
          <InputGroup>
            <label htmlFor="bronzemedal">동메달</label>
            <input type="number" value={bronze || ""} placeholder='동메달 수를 입력해주세요' onChange={(e) => setBronze(+e.target.value)}
            min="0" max="99" id="bronzemedal" required/>
          </InputGroup>
          <ButtonGroup>
            <Button type='submit'>국가추가</Button>
            <Button type='Button' onClick={updateCountryHandler}>업데이트</Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  );
}

export default HeaderForm;