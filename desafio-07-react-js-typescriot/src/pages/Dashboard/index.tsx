/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('transactions');
      const dataBalance = response.data.balance;
      const dataTransaction = response.data.transactions;

      setBalance(dataBalance);
      setTransactions(dataTransaction);
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">
              {formatValue(Number(balance.income))}
            </h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">
              {formatValue(Number(balance.outcome))}
            </h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">
              {formatValue(Number(balance.total))}
            </h1>
          </Card>
        </CardContainer>

        <TableContainer>
          {transactions.map(trans => (
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {trans.type === 'income' ? (
                  <tr>
                    <td className="title">{trans.title}</td>
                    <td className="income">
                      {formatValue(Number(trans.value))}
                    </td>
                    <td>{trans.category.title}</td>
                    <td>{trans.created_at}</td>
                  </tr>
                ) : (
                  <tr>
                    <td className="title">{trans.title}</td>
                    <td className="outcome">
                      - {formatValue(Number(trans.value))}
                    </td>
                    <td>{trans.category.title}</td>
                    <td>{trans.created_at}</td>
                  </tr>
                )}
              </tbody>
            </table>
          ))}
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
