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
    
  },
  {
    name: 'Page B',
    value: 2200,
    
  },
  {
    name: 'Page C',
    value: 2300,
  },
  {
    name: 'Page D',
    value: 2800,
  },
  {
    name: 'Page E',
    value: 3800,
  },
  {
    name: 'Page F',
    value: 3500,
  },
  {
    name: 'Page G',
    value: 3600,
  },
];

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
            <button className='btn-toogle'>Day</button>
            <button className='btn-toogle'>Week</button>
            <button className='btn-toogle'>Month</button>
            <button className='btn-toogle'>Year</button>
          </div>
        )}
    </div>

    {/* Chart */}
    <div className={`${isExpanded ? 'chart-close' : 'chart'}`}>
          <div className='top-chart'>
            <div className='diff-div'>
              <div className='micro'></div>
              <p className='diff-text'>Lower: ${data[0].value}</p>
            </div>
            <div className='diff-div'>
              <div className='micro2'></div>
              <p className='diff-text'>Higher: ${data[6].value}</p>
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
                <text
                  x={10}
                  y={10}
                  dy={-8}
                  textAnchor="start"
                  fill="#5b0b0b"
                  fontSize={12}
                >
                  1BTC=$5.483
                </text>
              </CartesianGrid>
              <Label value="1BTC=$5.483" position="bottom" />
            </AreaChart>
          </div>
    </div>
    </div>
  )
}

export default Market
