import './App.css';

import TransactionList from "./TransactionList/TransactionList";

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        Transactions
      </header>
      <TransactionList></TransactionList>
    </div>
  );
}

export default App;
