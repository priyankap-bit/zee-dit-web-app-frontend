
const lineChartWithToolTipsData = [
    {
        date: "1900-01-01T00:00:00.000Z",
        population: 6094000
    },
    {
        date: "1901-01-01T00:00:00.000Z",
        population: 37584000
    },
    {
        date: "1902-01-01T00:00:00.000Z",
        population: 79163000
    },
    {
        date: "1903-01-01T00:00:00.000Z",
        population: 40632000
    },
    {
        date: "1904-01-01T00:00:00.000Z",
        population: 62166000
    },
    {
        date: "1905-01-01T00:00:00.000Z",
        population: 13822000
    },
    {
        date: "1906-01-01T00:00:00.000Z",
        population: 65450000
    },
]

let preParedData;

function prepareData() {
    preParedData = lineChartWithToolTipsData.map(d => {
        return {
            date: new Date(d.date),
            population: d.population
        }
    });
}

prepareData();

export default preParedData;