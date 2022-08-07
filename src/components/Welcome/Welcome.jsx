import * as GAME_STATE from '../../utils/gameState';
import React from 'react';
import Header from '../Header';

const Welcome = ({ setGameState, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.playMode === 'singlePlayer') {
      setFormData((prev) => {
        return { ...prev, p2Name: 'Computer' };
      });
    }
    if (
      formData.p1Name &&
      formData.p2Name &&
      formData.p1Name !== formData.p2Name
    ) {
      setGameState(GAME_STATE.P1PLACING);
    }
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  return (
    <div className='welcome'>
      <Header />
      <main className='area welcome-body'>
        <h1 className='welcome-title'>欢迎游玩</h1>
        <p className='welcome-intro'>
          海战棋(Battleship)是一款双人游玩的猜谜游戏
        </p>
        <form onSubmit={handleSubmit} className='welcome-form'>
          <label htmlFor='p1Name'>玩家1名称:</label>
          <input
            type='text'
            name='p1Name'
            id='p1Name'
            value={formData.p1Name}
            onChange={handleChange}
            autoFocus
          />
          <br />
          {formData.playMode === 'multiPlayer' ? (
            <>
              <label htmlFor='p2Name'>玩家2名称:</label>
              <input
                type='text'
                name='p2Name'
                id='p2Name'
                value={formData.p2Name}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <label>难度: </label>
              <input
                type='radio'
                name='difficulty'
                id='easy'
                value='easy'
                checked={formData.difficulty === 'easy'}
                onChange={handleChange}
              />
              <label htmlFor='easy'>简单</label>
              <input
                type='radio'
                name='difficulty'
                id='normal'
                value='normal'
                checked={formData.difficulty === 'normal'}
                onChange={handleChange}
              />
              <label htmlFor='normal'>普通</label>
            </>
          )}
          <br />
          <input
            type='radio'
            name='playMode'
            id='multiPlayer'
            value='multiPlayer'
            checked={formData.playMode === 'multiPlayer'}
            onChange={handleChange}
          />
          <label htmlFor='multiPlayer'>双人</label>
          <input
            type='radio'
            name='playMode'
            id='singlePlayer'
            value='singlePlayer'
            checked={formData.playMode === 'singlePlayer'}
            onChange={handleChange}
          />
          <label htmlFor='singlePlayer'>单人</label>
          <br />
          <label htmlFor='language'>语言: </label>
          <select
            name='language'
            id='language'
            value={formData.language}
            onChange={handleChange}
          >
            <option value='chinese'>中文</option>
            <option value='english'>英文</option>
          </select>
          <br />
          <button type='submit' className='button-start'>
            开始游戏
          </button>
        </form>
      </main>
    </div>
  );
};

export default Welcome;
