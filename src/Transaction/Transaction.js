import React from "react";
import "./Transaction.css";
import classnames from "classnames";

const Credit = () => <span className="badge badge-success">Credit</span>;
const Debit = () => <span className="badge badge-danger">Debit</span>;

const TransactionDetails = ({ date, accountId, id }) => <ul className="list-unstyled transaction-details">
  <li><span className="small-title">Date:</span> {date}</li>
  <li><span className="small-title">Account id:</span> {accountId}</li>
  <li><span className="small-title">Transaction id:</span> {id}</li>
</ul>

const TransactionHeader = ({ type, amount, active }) => <div className={classnames("transaction-header", { active })}>{ type === "credit" ? <Credit></Credit> : <Debit></Debit>} ${amount}</div>;

class Transaction extends React.Component { 

  render() {

    const { amount, type, date, accountId, active, onClick, id } = this.props;

    return (
      <li className="transaction" onClick={() => onClick(id)}>
        <TransactionHeader active={active} type={type} amount={amount}></TransactionHeader>
        {active && <TransactionDetails date={date} accountId={accountId} id={id}></TransactionDetails>}
      </li>
    );

  }

}

export default Transaction;