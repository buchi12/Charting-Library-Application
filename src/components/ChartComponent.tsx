import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineProps } from 'recharts';

import './ChartComponent.css'

interface DataPoint {
  timestamp: string;
  value: number;
}

const ChartComponent: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [timeframe, setTimeframe] = useState<string>('daily'); // Default timeframe
  const [selectedDataPoint, setSelectedDataPoint] = useState<DataPoint | null>(null);

  useEffect(() => {
    // Simulated data fetch
    const fetchData = async () => {
      try {
        // Simulated JSON data
        const jsonData: DataPoint[] = [
            
                { timestamp: "2023-01-01T00:00:00Z", value: 10 },
                { timestamp: "2023-01-02T00:00:00Z", value: 12 },
                { timestamp: "2023-01-03T00:00:00Z", value: 5 },
                { timestamp: "2023-01-04T00:00:00Z", value: 8 },
                { timestamp: "2023-01-05T00:00:00Z", value: 15 },
                { timestamp: "2023-01-06T00:00:00Z", value: 18 },
                { timestamp: "2023-01-07T00:00:00Z", value: 22 },
                { timestamp: "2023-01-08T00:00:00Z", value: 25 },
                { timestamp: "2023-01-09T00:00:00Z", value: 30 },
                { timestamp: "2023-01-10T00:00:00Z", value: 28 },
                { timestamp: "2023-01-11T00:00:00Z", value: 24 },
                { timestamp: "2023-01-12T00:00:00Z", value: 20 },
                { timestamp: "2023-01-13T00:00:00Z", value: 18 },
                { timestamp: "2023-01-14T00:00:00Z", value: 15 },
                { timestamp: "2023-01-15T00:00:00Z", value: 12 },
                { timestamp: "2023-01-16T00:00:00Z", value: 10 },
                { timestamp: "2023-01-17T00:00:00Z", value: 8 },
                { timestamp: "2023-01-18T00:00:00Z", value: 5 },
                { timestamp: "2023-01-19T00:00:00Z", value: 3 },
                { timestamp: "2023-01-20T00:00:00Z", value: 6 },
                { timestamp: "2023-01-21T00:00:00Z", value: 9 },
                { timestamp: "2023-01-22T00:00:00Z", value: 12 },
                { timestamp: "2023-01-23T00:00:00Z", value: 14 },
                { timestamp: "2023-01-24T00:00:00Z", value: 16 },
                { timestamp: "2023-01-25T00:00:00Z", value: 18 },
                { timestamp: "2023-01-26T00:00:00Z", value: 20 },
                { timestamp: "2023-01-27T00:00:00Z", value: 22 },
                { timestamp: "2023-01-28T00:00:00Z", value: 24 },
                { timestamp: "2023-01-29T00:00:00Z", value: 26 },
                { timestamp: "2023-01-30T00:00:00Z", value: 28 },
                { timestamp: "2023-01-31T00:00:00Z", value: 30 },
                { timestamp: "2023-02-01T00:00:00Z", value: 32 },
                { timestamp: "2023-02-02T00:00:00Z", value: 35 },
                { timestamp: "2023-02-03T00:00:00Z", value: 38 },
                { timestamp: "2023-02-04T00:00:00Z", value: 40 },
                { timestamp: "2023-02-05T00:00:00Z", value: 42 },
                { timestamp: "2023-02-06T00:00:00Z", value: 45 },
                { timestamp: "2023-02-07T00:00:00Z", value: 48 },
                { timestamp: "2023-02-08T00:00:00Z", value: 50 },
                { timestamp: "2023-02-09T00:00:00Z", value: 52 },
                { timestamp: "2023-02-10T00:00:00Z", value: 55 },
                { timestamp: "2023-02-11T00:00:00Z", value: 58 },
                { timestamp: "2023-02-12T00:00:00Z", value: 60 },
                { timestamp: "2023-02-13T00:00:00Z", value: 62 },
                { timestamp: "2023-02-14T00:00:00Z", value: 65 },
                { timestamp: "2023-02-15T00:00:00Z", value: 68 },
                { timestamp: "2023-02-16T00:00:00Z", value: 70 },
                { timestamp: "2023-02-17T00:00:00Z", value: 72 },
                { timestamp: "2023-02-18T00:00:00Z", value: 75 },
                { timestamp: "2023-02-19T00:00:00Z", value: 78 },
                { timestamp: "2023-02-20T00:00:00Z", value: 80 },
                { timestamp: "2023-02-21T00:00:00Z", value: 82 },
                { timestamp: "2023-02-22T00:00:00Z", value: 85 },
                { timestamp: "2023-02-23T00:00:00Z", value: 88 },
                { timestamp: "2023-02-24T00:00:00Z", value: 90 },
                { timestamp: "2023-02-25T00:00:00Z", value: 92 },
                { timestamp: "2023-02-26T00:00:00Z", value: 95 },
                { timestamp: "2023-02-27T00:00:00Z", value: 98 },
                { timestamp: "2023-02-28T00:00:00Z", value: 100 },
                { timestamp: "2023-03-01T00:00:00Z", value: 102 },
                { timestamp: "2023-03-02T00:00:00Z", value: 105 },
                { timestamp: "2023-03-03T00:00:00Z", value: 108 },
                { timestamp: "2023-03-04T00:00:00Z", value: 110 },
                { timestamp: "2023-03-05T00:00:00Z", value: 112 },
                { timestamp: "2023-03-06T00:00:00Z", value: 115 },
                { timestamp: "2023-03-07T00:00:00Z", value: 118 },
                { timestamp: "2023-03-08T00:00:00Z", value: 120 },
                { timestamp: "2023-03-09T00:00:00Z", value: 122 },
                { timestamp: "2023-03-10T00:00:00Z", value: 125 },
                { timestamp: "2023-03-11T00:00:00Z", value: 128 },
                { timestamp: "2023-03-12T00:00:00Z", value: 130 },
                { timestamp: "2023-03-13T00:00:00Z", value: 132 },
                { timestamp: "2023-03-14T00:00:00Z", value: 135 },
                { timestamp: "2023-03-15T00:00:00Z", value: 138 },
                { timestamp: "2023-03-16T00:00:00Z", value: 140 },
                { timestamp: "2023-03-17T00:00:00Z", value: 142 },
                { timestamp: "2023-03-18T00:00:00Z", value: 145 }
              
              
        ];

        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (event: LineProps & { payload: DataPoint }) => {
    if (event.payload) {
      setSelectedDataPoint(event.payload);
    }
  };

  const filterData = (timeframe: string): DataPoint[] => {
    switch (timeframe) {
      case 'daily':
        return filterDaily(data);
      case 'weekly':
        return aggregateDataByInterval(data, 'week');
      case 'monthly':
        return aggregateDataByInterval(data, 'month');
      default:
        return data;
    }
  };

  const filterDaily = (data: DataPoint[]): DataPoint[] => {
    return data; // No filtering needed for daily view
  };

  const aggregateDataByInterval = (data: DataPoint[], interval: 'week' | 'month'): DataPoint[] => {
    const groupedData: DataPoint[] = [];
    let currentDate: Date | null = null;
    let currentGroup: DataPoint[] = [];

    data.forEach((point) => {
      const pointDate = new Date(point.timestamp);

      if (!currentDate) {
        currentDate = pointDate;
      }

      if (interval === 'week') {
        //  week
        if (pointDate.getDay() === 1 && currentGroup.length > 0) {
          groupedData.push({
            timestamp: currentDate.toISOString(), // Use the start date of the week
            value: calculateAverage(currentGroup),
          });
          currentGroup = [];
          currentDate = pointDate;
        }
      } else if (interval === 'month') {
        // month
        if (pointDate.getMonth() !== currentDate.getMonth() && currentGroup.length > 0) {
          groupedData.push({
            timestamp: currentDate.toISOString(), // Use the start date of the month
            value: calculateAverage(currentGroup),
          });
          currentGroup = [];
          currentDate = pointDate;
        }
      }

      currentGroup.push(point);
    });

    // Push the last group
    if (currentGroup.length > 0) {
      if (interval === 'week') {
        // Push the last week
        groupedData.push({
          timestamp: currentDate!.toISOString(), // Use the start date of the last week
          value: calculateAverage(currentGroup),
        });
      } else if (interval === 'month') {
        // Push the last month
        groupedData.push({
          timestamp: currentDate!.toISOString(), // Use the start date of the last month
          value: calculateAverage(currentGroup),
        });
      }
    }

    return groupedData;
  };

  const calculateAverage = (data: DataPoint[]): number => {
    const total = data.reduce((acc, point) => acc + point.value, 0);
    return total / data.length;
  };

  return (
    <div>
      <div className="button-group">
        <button onClick={() => setTimeframe('daily')}>Daily</button>
        <button onClick={() => setTimeframe('weekly')}>Weekly</button>
        <button onClick={() => setTimeframe('monthly')}>Monthly</button>
      </div>
      <div id="chart">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filterData(timeframe)}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="value" stroke="#ff7300" onClick={handleClick} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {selectedDataPoint && (
        <div>
          <h2>Selected Data Point</h2>
          <p>Timestamp: {selectedDataPoint.timestamp}</p>
          <p>Value: {selectedDataPoint.value}</p>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;