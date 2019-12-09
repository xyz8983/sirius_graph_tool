import * as d3 from "d3";

// todo: accept configuration parameters, such as link length, collision radius, collision strength from filters
export function generateGraghChart(jsonUrl){
    console.log('value', jsonUrl.value);
    // let width = window.innerWidth,
    //     height = window.innerHeight,
    //     nodeRadius = 10;
    // let svg = d3.select('svg').attr("width", width).attr("height", height);
    let svg = d3.select('svg'),
        height = +svg.attr("height"),
        width = +svg.attr("width"),
        nodeRadius = 10;
    // todo: know how computation expensive to use force
    let simulation = d3.forceSimulation()
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width/2, height/2))
        // .force('collide', d3.forceCollide().radius(nodeRadius*1.2))
        .force('collide', d3.forceCollide())
        .force('link', d3.forceLink().distance(80)); // distance sets the length of each link

    d3.json(jsonUrl.value, function(error, data){
        console.log(data);
        let links = svg.append("g")
            .selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .attr("stroke", "#FFFFFF")
            .attr("stroke-width", 1);

        let nodes = svg.append("g")
            .selectAll("circle")
            .data(data.nodes)
            .enter()
                .append("circle")
                .attr("r", nodeRadius)
                // .style("opacity", "0.5");
                .style('fill', "#FFFFFF");

        simulation.nodes(data.nodes)
            .on("tick", ticked);
        simulation.force("link").links(data.links);

        function ticked(){
            links
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
            nodes
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; })
                .attr("stroke", "#FFFFFF")
                .attr("stroke-width", 1);


        }
    });
    // todo: get pure blue background of the image or just the color => #102136
    // todo: draw to the canvas to see if performance is different?
    // todo: font awesome font url has error in compiled css file

}