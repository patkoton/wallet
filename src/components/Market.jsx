import React, { useState } from 'react'
import '../styles/app.scss'
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TbChevronCompactDown } from "react-icons/tb";
import { AreaChart, Area, Tooltip, Label, CartesianGrid } from "recharts";

const Market = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const data = [
  {
    name: 'Page A',
    value: 1000,
    day: 200,
    week: 400,
    month: 800,
    year: 900,   
  },
  {
    name: 'Page B',
    value: 2200,
    day: 300,
    week: 600,
    month: 1000,
    year: 2000,  
  },
  {
    name: 'Page C',
    value: 2300,
    day: 300,
    week: 500,
    month: 1000,
    year: 2100,  
  },
  {
    name: 'Page D',
    value: 2800,
    day: 400,
    week: 600,
    month: 1000,
    year: 2600,  
  },
  {
    name: 'Page E',
    value: 3800,
    day: 500,
    week: 1000,
    month: 2000,
    year: 2500,  
  },
  {
    name: 'Page F',
    value: 3500,
    day: 400,
    week: 700,
    month: 1500,
    year: 2700,  
  },
  {
    name: 'Page G',
    value: 3600,
    day: 600,
    week: 1000,
    month: 2000,
    year: 3500,  
  },
];

  const [selectedOption, setSelectedOption] = useState('week');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
  if (selectedOption === 'day') {
    return data[0].day;
  } else if (selectedOption === 'week') {
    return data[0].week;
  } else if (selectedOption === 'month') {
    return data[0].month;
  } else if (selectedOption === 'year') {
    return data[0].year;
  } else {
    return data[0].value;
  }
};

const renderContent2 = () => {
  if (selectedOption === 'day') {
    return data[6].day;
  } else if (selectedOption === 'week') {
    return data[6].week;
  } else if (selectedOption === 'month') {
    return data[6].month;
  } else if (selectedOption === 'year') {
    return data[6].year;
  } else {
    return data[6].value;
  }
};


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

  return (
    <div>
      <div className='market'>
        <div className='mkt-row1'>
          <div className='mkt-row2'>
              <div className='btc'>
                  <BsCurrencyBitcoin className='btc-icon' />
              </div>
              <p className='btc-text'>Bitcoin</p>
          </div>
          <p className='btc-abb'>BTC</p>
        </div>

        <div>
          <p className='bit'>
              3.529020 BTC
          </p>
        </div>

        <div className='mkt-row3'>
          <p className='btc-amt'>$19.153 USD</p>
          <div className='btc-pct'>
              <span className='pct'>-2.32%</span>
          </div>
        </div>

        <div className='arrow-toggle'>
          <div className='mkt-row4'>
            <button className="toggle-button" onClick={toggleExpanded}><TbChevronCompactDown className='down-icon' /></button>
          </div>
        </div>
      </div>

      {/* Extra Info */}
      <div>
        {isExpanded && (
          <div className="extra-info">
            <button className='btn-toogle' onClick={() => handleOptionChange('day')}>Day</button>
            <button className='btn-toogle' onClick={() => handleOptionChange('week')}>Week</button>
            <button className='btn-toogle' onClick={() => handleOptionChange('month')}>Month</button>
            <button className='btn-toogle' onClick={() => handleOptionChange('year')}>Year</button>
          </div>
        )}
    </div>

    {/* Chart */}
    <div className={`${isExpanded ? 'chart-close' : 'chart'}`}>
          <div className='top-chart'>
            <div className='diff-div'>
              <div className='micro'></div>
              <p className='diff-text'>Lower: ${renderContent()}</p>
            </div>
            <div className='diff-div'>
              <div className='micro2'></div>
              <p className='diff-text'>Higher: ${renderContent2()}</p>
            </div>
          </div>
          <div className='chart-div'>
            <AreaChart
              width={200}
              height={80}
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 0
              }}
            >
              <Area type="monotone" dataKey="value" strokeWidth={2} stroke="#ffab2b" fill="#fff7ee" />
              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid
                vertical={false}
                horizontal
                strokeWidth={0.0}
                strokeDasharray="3 3"
              >
              <Label value="1BTC=$5.483" position="insideBottom" contentStyle={{ fill: '#323231' }} offset={-5} />
              </CartesianGrid>
            </AreaChart>
          </div>
    </div>
    </div>
  )
}

export default Market
