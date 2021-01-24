import React from "react";
import Transaction from "../Transaction/Transaction";
import { paymentsApiHost } from "../configuration";
import Loader from "react-loader-spinner";

class TransactionList extends React.Component {

  constructor() {
    super();
    this.state = {
      active: null,
      transactions: [],
      isLoaded: false
    };
  }

  async componentDidMount() {

    try {
      
      const response = await fetch(`${paymentsApiHost}/v1/transaction`);
      const json = await response.json();

      this.setState({
        isLoaded: true,
        transactions: json.transactions
      });

    } catch (error) {

      this.setState({
        isLoaded: true,
        error
      });

    }

  }

  handleClick(id) {

    if (this.state.active === id) {
      return this.setState({ active: null });
    }

    this.setState({ active: id });

  }

  render() {

    if (!this.state.isLoaded) {
      return <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    }

    return (
      <ul className="list-unstyled accordion">
        {this.state.transactions.map(transaction => {
          return <Transaction key={transaction.id} {... transaction} active={this.state.active === transaction.id} onClick={(id) => this.handleClick(id)}></Transaction>
        })}
      </ul>
    );

  }

}

export default TransactionList;