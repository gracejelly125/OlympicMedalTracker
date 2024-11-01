function MedalList({ countries, sortedCountries, deleteCountryHandler}) {
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
