
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="wrappwer">
        <div className="block__row">
          <div className="block__column">
            <div className="block__item">1</div>
          </div>
          <div className="block__column">
            <div className="block__item">2</div>
          </div>
          <div className="block__column">
            <div className="block__item">3</div>
          </div>
        </div>
        <ul className='block__list'>
          <li>
            <div className='block__info block__info_y'>FLEX container</div>
          </li>
          <li>
            <div className='block__info block__info_p'>FLEX element'</div>
          </li>
          <li>
            <div className='block__info block__info_g'>Content of the FLEX element</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
