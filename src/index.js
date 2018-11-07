import React from 'react';
import ReactDOM from 'react-dom';
import logoImage from './logo.png';
import './index.scss';

const App = () => (
  <div className='lightwork'>
    <div className='lightwork__container'>
      <div className='lightwork__logo'>
        <img
          src={logoImage}
          className='lightwork__logo-image'
          alt='Lightwork'
        />
        <div className='lightwork__logo-text'>
          lightwork
        </div>
      </div>
      <div className='lightwork__description'>
        Task Board powered by the Lightning Network
      </div>
      <div className='lightwork__coming-soon'>
        coming soon
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
