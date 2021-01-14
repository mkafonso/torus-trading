import React, { useState } from 'react';

// import styles
import {
  Container,
  Hero,
  MainButton,
  LatestNews,
  Simulator,
  SimulatorValues,
  SimuladorGraphics,
  Gain,
} from '../styles/Home';

// import components
import Header from '../components/Header';

export default function Index() {
  const [amountMoney, setAmountMoney] = useState(1000);
  const [totalMonths, setTotalMonths] = useState(3);

  return (
    <Container>
      <Header />

      <Hero>
        <MainButton>Abra a sua conta</MainButton>

        <LatestNews></LatestNews>
      </Hero>

      <Simulator>
        <SimulatorValues>
          <div className="months">
            <h3>Tempo de investimento</h3>
            <h1>{totalMonths} meses</h1>
            <input
              type="range"
              defaultValue={totalMonths}
              min="3"
              max="24"
              onChange={(e) => setTotalMonths(Number(e.target.value))}
            />
          </div>

          <div className="money">
            <h3>Quero investir...</h3>
            <h1>R$ {amountMoney}</h1>
            <input
              type="range"
              defaultValue={amountMoney}
              min="1000"
              max="100000"
              step="1000"
              onChange={(e) => setAmountMoney(Number(e.target.value))}
            />
          </div>
        </SimulatorValues>

        <SimuladorGraphics>
          <Gain>
            <h3>Ganhos</h3>
            <h2>
              TOTAL RESGATADO: <br /> <span> R$ {totalMonths * 10}</span>{' '}
            </h2>

            <div
              className="chart"
              style={{
                height: `${totalMonths * 10}px`,
                marginTop: `-${totalMonths * 10}px`,
              }}
            ></div>
          </Gain>
        </SimuladorGraphics>
      </Simulator>
    </Container>
  );
}
