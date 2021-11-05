import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (text === '') {
      alertContext.SetAlert('Please enter something', 'light');
    } else {
      githubContext.SearchUsers('text');
      setText('');
    }
  };

  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search for users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-ligh btn-block'
          onClick={githubContext.ClearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
