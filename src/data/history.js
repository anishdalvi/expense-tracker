import React, { useContext, useEffect } from 'react';
import { Transaction } from '../scenes/expense-tracker/components/Transaction';

import { GlobalContext } from '../scenes/expense-tracker/context/GlobalState';

export const history = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var id = transactions._id
  var text = transactions.text
  var amount = transactions.amount
  var createdAt = transactions.createdAt

  return (
    <>
      
      
        {/* {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))} */}
        {transactions.map(transaction => (
            
            <>
                <p>{transaction._id}</p>
                <p>{transaction.text}</p>
                <p>{transaction.amount}</p>
                <p>{transaction.createdAt}</p>
            </>
        
        
        ))}
      
    </>
  )
}
