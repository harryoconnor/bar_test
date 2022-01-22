

console.log("Hello world")

d3.selectAll("p").style("color", "blue");

const svg = d3.select('svg')
svg.style('background-color', 'red')

console.log("test2")

d3.csv('data/data.csv').then(data =>{
    console.log(data)
})