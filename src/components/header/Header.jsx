import './Header.css'

const Header = () => {
  return (
    <header>
        <h2>Home Tasks</h2>
        <div className="info-container">
          <p className="date">Thursday, February 3rd</p>
          <p className="counter">3 tasks left</p>
        </div>
    </header>
  );
};

export { Header };
