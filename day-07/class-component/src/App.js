import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  const data = {
    welcome: 'Welcome to 30 Days of React',
    title: 'Getting Started with React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Joshua',
      lastName: 'Alhassan'
    },
    date: 'Sept 26, 2022'
  }
  const techs = ['HTML', 'CSS', 'JavaScript']
  return (
    <div className="app">
      <Header data={data} />
      <Main techs={techs} />
      <Footer date={new Date()} />
    </div>
  );
}

export default App;
