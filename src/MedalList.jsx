function MedalList({ countries, sortedCountries, setCountries }) {
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

    return (
        <>
            <div className='table-group'>
                {countries.length === 0 ? (
                    <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
                ) : (
                    <>
                        <div className='medal-table header'>
                            <p>순위</p>
                            <p>국가명</p>
                            <p>금메달</p>
                            <p>은메달</p>
                            <p>동메달</p>
                            <p>합계</p>
                            <p>&times;</p>
                        </div>
                        {sortedCountries.map((country, index) => {
                            const sumMedals = (gold, silver, bronze) => gold + silver + bronze;
                            const totalMedals = sumMedals(country.gold, country.silver, country.bronze);
                            return (
                                <div key={index} className='medal-table'>
                                    <p>{index + 1}</p>
                                    <p>{country.countryName}</p>
                                    <p>{country.gold}</p>
                                    <p>{country.silver}</p>
                                    <p>{country.bronze}</p>
                                    <p>{totalMedals}</p>
                                    <p>
                                        <button type='button'
                                            onClick={() => deleteCountryHandler(country.countryName)}>
                                            삭제</button>
                                    </p>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </ >
    );
}

export default MedalList;
