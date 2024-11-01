// import { useState } from "react";

  function HeaderFormBox({ addCountryHandler, setCountryName, setGold, setSilver, setBronze,
    countryName, gold, silver, bronze, updateCountryHandler }) {




    return (
      <>
        <div>
          <h1 className='title'>2024 파리 올림픽</h1>
        </div>
        <div className='container'>
          <form onSubmit={addCountryHandler}>
            <div className='input-group'>
              <label>국가명</label>
              <input type="text" value={countryName} placeholder='국가명을 입력해주세요' onChange={(e) => setCountryName(e.target.value.trim())} />
            </div>
            <div className='input-group'>
              <label>금메달</label>
              <input type="number" value={gold} placeholder='금메달 수를 입력해주세요' onChange={(e) => setGold(e.target.value)} />
            </div>
            <div className='input-group'>
              <label>은메달</label>
              <input type="number" value={silver} placeholder='은메달 수를 입력해주세요' onChange={(e) => setSilver(e.target.value)} />
            </div>
            <div className='input-group'>
              <label>동메달</label>
              <input type="number" value={bronze} placeholder='동메달 수를 입력해주세요' onChange={(e) => setBronze(e.target.value)} />
            </div>
            <div className='button-group'>
              <button type='submit'>국가추가</button>
              <button type='button' onClick={updateCountryHandler}>업데이트</button>
            </div>
          </form>
        </div>
      </>
    );
  }

export default HeaderFormBox;