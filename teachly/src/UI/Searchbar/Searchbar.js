import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'

const propTypes = {
  onSearch: PropTypes.func.isRequired
};

function Searchbar(props) {
  const [term, setTerm] = useState('');
  const inputRef = useRef(null);

  const search = () => {
    props.onSearch(term);
  }
  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      search();
    }
  }
  const focusInput = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    focusInput()
  }, []);

  return (
    <div className={styles.searchbar}>
      <input
        ref={inputRef}
        value={term}
        onKeyDown={onKeyDownHandler}
        onChange={e => setTerm(e.target.value)}
        className={styles.input}
        type="text" 
        placeholder=" Szukaj korepetycji..." />
        <button
          onClick={search}
          className={styles.button}>
            Szukaj
        </button>
    </div>
  );
}

Searchbar.propTypes = propTypes;

export default Searchbar;