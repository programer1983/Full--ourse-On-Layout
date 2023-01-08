
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="about">
        <div className="about__body">
          <div className="about__header">
            <div className="about__title title">ABOUT</div>
            <div className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisi, aliquet sed malesuada vitae, gravida ut libero. Praesent non tellus eros. In vel consectetur nisi.
            </div>
          </div>
          <div className="about__row">
            <div className="about__column">
              <div className="item-about">
                <div className="item-about__icon">
                  <img src="img/0.1png" alt="" />
                </div>
                <div className="item-about__title">WEB</div>
                <div className="item-about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisi, aliquet sed malesuada vitae, gravida ut libero. Praesent non tellus eros. In vel consectetur nisi.</div>
              </div>
            </div>
            <div className="about__column">
              <div className="item-about">
                <div className="item-about__icon">
                  <img src="img/0.2png" alt="" />
                </div>
                <div className="item-about__title">IOS AND ANDROID</div>
                <div className="item-about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisi, aliquet sed malesuada vitae, gravida ut libero. Praesent non tellus eros. In vel consectetur nisi.</div>
              </div>
            </div>
            <div className="about__column">
              <div className="item-about">
                <div className="item-about__icon">
                  <img src="img/0.3png" alt="" />
                </div>
                <div className="item-about__title">NARKETING</div>
                <div className="item-about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna nisi, aliquet sed malesuada vitae, gravida ut libero. Praesent non tellus eros. In vel consectetur nisi.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
