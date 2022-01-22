

const svg = d3.select('svg')

svg.style('background-color', 'red')

const render = data => {
    const scale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Score)])
        .range(0,300);
    
    console.log(scale.domain())

    svg.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('width', d=>scale(d.Score))
        .attr('height',100)
}

d3.csv('data/data.csv').then(data =>{
    data.forEach(d=>{
        console.log(d)
        d.Score = +d.Score;
    });
    console.log(data)
    render(data)
})