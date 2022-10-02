import React, {  useState, useRef } from 'react';

import { FeedBack } from './page-styles.styled';
import FeedbackOption from './FeedbackOption';
import Notification from './Notification';
import Section from './Section';
import Statistic from './Statistic';

export const FeedbackPage = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const totalClicks = useRef()

    totalClicks.current = good + neutral + bad;
console.log(totalClicks.current)

    const handleLeaveFeedback = (opinion) => {
        
        if (opinion === 'good') {
            setGood(prev => (prev + 1));
        } 

        if (opinion === 'neutral') {
            setNeutral(prev => (prev + 1));
        }

        if (opinion === 'bad') {
            setBad(prev => (prev + 1));
        }
    }

    const positivePercentage = Math.round(100 * (good / totalClicks.current))

    return (
        <FeedBack>
            <Section title='Please leave feedback'>
                <FeedbackOption
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={handleLeaveFeedback}
                />
            </Section>

            {totalClicks.current === 0 && <Notification message='There is no feedback'></Notification>}

            {totalClicks.current > 0 &&
                <Section title='Statistics'>
                    <Statistic
                        good={good} neutral={neutral} bad={bad}
                        totalClicks={totalClicks.current}
                        positivePercentage={positivePercentage}
                    />
                </Section>
            }
        </FeedBack>
    )
}

// export class FeedbackPage extends Component {
    // static defaultProps = {
    //     goodInit: 0,
    //     neutralInit: 0,
    //     badInit: 0,
    // }

    // state = {
    //     good: this.props.goodInit,
    //     neutral: this.props.neutralInit,
    //     bad: this.props.badInit,
    // }

    // countTotalFeedback = () => {
    //     const { good, neutral, bad } = this.state
    //     return (good + neutral + bad)
    // }

    // countPositiveFeedbackPercentage = (totalClicks) => (
    //     Math.round(100 * (this.state.good / totalClicks))
    // )

    // handleLeaveFeedback = (stateKey) => {
    //     this.setState((prevState) => ({
    //         [stateKey]: prevState[stateKey] + 1
    //     }));
    // }

    // render() {
        // const { good, neutral, bad } = this.state;
        // const totalClicks = this.countTotalFeedback()
        // const positivePercentage = this.countPositiveFeedbackPercentage(totalClicks)

//         return (
//             <FeedBack>
//                 <Section title='Please leave feedback'                >
//                     <FeedbackOption
//                         options={Object.keys(this.state)}
//                         onLeaveFeedback={this.handleLeaveFeedback}
//                     />
//                 </Section>

//                 {totalClicks === 0 && <Notification message='There is no feedback'></Notification>}

//                 {totalClicks > 0 &&
//                     <Section title='Statistics'>
//                         <Statistic
//                             good={good} neutral={neutral} bad={bad}
//                             totalClicks={totalClicks}
//                             positivePercentage={positivePercentage}
//                         />
//                     </Section>
//                 }
//             </FeedBack>
//         )
//     }
// }