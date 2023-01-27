import {LineChart,ResponsiveContainer,Legend, Tooltip,Line,XAxis,YAxis,CartesianGrid} from 'recharts';

// Sample chart data
const pdata = [
    {
        name: 'فروردین',
        student: 11,
        fees: 20
    },
    {
        name: 'اردیبهشت',
        student: 15,
        fees: 12
    },
    {
        name: 'خرداد',
        student: 5,
        fees: 10
    },
    {
        name: 'تیر',
        student: 10,
        fees: 5
    },
    {
        name: 'مرداد',
        student: 9,
        fees: 4
    },
    {
        name: 'شهریور',
        student: 10,
        fees: 8
    },
    {
        name: 'مهر',
        student: 10,
        fees: 8
    },
    {
        name: 'آبان',
        student: 10,
        fees: 8
    },
    {
        name: 'آذر',
        student: 10,
        fees: 8
    },
    {
        name: 'دی',
        student: 10,
        fees: 8
    },
    {
        name: 'بهمن',
        student: 10,
        fees: 8
    },
    {
        name: 'اسفند',
        student: 10,
        fees: 8
    },
];

function Chart() {
    return (
        <>
            
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name"
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="student"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="fees"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart;