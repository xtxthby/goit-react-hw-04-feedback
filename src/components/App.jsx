import React, {useState} from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    // console.log(e); //good
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setBad(prevState => prevState + 1);
        break;
      case 'bad':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }  
  };
  // Підрахунок усіх фітбеків
  const countTotalFeedback = () => good + neutral + bad;
  // Вираховуємо позитивний фітбек у відсотках враховуючи статистичні дані на поточний момент
  const countPositiveFeedbackPercentage = () =>
  Math.round((good * 100) / countTotalFeedback());
    // дестриктуризація
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}>
        </Statistics>
      </Section>
    </>
  );
};
