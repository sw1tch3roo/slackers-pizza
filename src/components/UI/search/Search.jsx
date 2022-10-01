import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchTargetValue } from '../../../redux/slices/searchSlice';

import styles from './Search.module.scss';

const Search = () => {
  const searchValue = useSelector((state) => state.searchReducer.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        value={searchValue} // реакт рекомендует хранить изменяющееся значение
        // чтобы в ДОМ-элементе происходили изменения
        // т.е. если мы произведем очистку, то значение searchValue изменится (в App.js)
        // но input об этом ничего не узнает, поэтому мы и передаем в value его значение
        onChange={(event) => dispatch(setSearchTargetValue(event.target.value))}
        // при каждом изменении состояния вызывается фукнция
        // в данном случае при каждом вводе какого-либо символа строка будет сохраняться в searchValue
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && ( // если есть какое-либо значение, выводим иконку очистки
        <svg
          className={styles.iconClear}
          onClick={() => dispatch(setSearchTargetValue(''))}
          viewBox="0 0 88 88"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60.38,70.21H27.62V32.53h3.27V66.94H57.11V32.53h3.27ZM24.34,26H63.66v3.27H24.34Z" />
          <path d="M52.19,29.25H35.81V17.79H52.19ZM39.08,26h9.84V21.06H39.08ZM37.45,37.45h3.27V60.38H37.45Zm9.83,0h3.27V60.38H47.28Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
