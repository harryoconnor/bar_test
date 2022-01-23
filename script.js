

const svg = d3.select('svg')

svg.style('background-color', '#FAF9F6')

const render = data => {
    const x_value = d => d.Score;
    const y_value = d => d.Game
    width = parseInt(svg.style("width"));
    height = parseInt(svg.style("height"));

    const margin = {
        top:20,
        right:20,
        bottom:30,
        left:80
    }

    const inner_width = width - margin.right - margin.left
    const inner_height = height - margin.top - margin.bottom

    const x_scale = d3.scaleLinear()
        .domain([0, d3.max(data, x_value)])
        .range([0,inner_width]);


    const y_scale = d3.scaleBand()
    .domain(data.map(y_value))
    .range([0,inner_height])
    .padding(0.1)

    
    console.log(y_scale.domain())
    //${margin.left}


    const bar_chart_group = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.right})`)


    bar_chart_group.append('g').call(d3.axisLeft(y_scale))

    bar_chart_group.append('g').call(d3.axisBottom(x_scale))
        .attr('transform', `translate(0,${inner_height})` );

    bar_chart_group.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('y',d =>y_scale(y_value(d)))
        .attr('width', d=>x_scale(x_value(d)))
        .attr('height',y_scale.bandwidth())
}

process_data = data =>{
    data.forEach(d=>{
        d.Score = +d.Score;
    });
    console.log(data)
    render(data)
}


d3.csv('data/data.csv').then(process_data)

