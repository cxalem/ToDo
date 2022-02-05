import './Header.css'

const Header = ({completed, total}) => {
  return (
    <header>
        <h2>Home Tasks</h2>
        <div className="info-container">
          <p className="date">Thursday, February 3rd</p>
          <p className="counter">
            {total - completed == 0 ? 'All done!!' : `${total - completed} tasks left`}
          </p>
        </div>
    </header>
  );
};

export { Header };
