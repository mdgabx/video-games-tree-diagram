import * as d3 from 'd3';

const Tree = ({data}) => {

    const width = 1000;
    const height = 800;

    if(data !== "" && data !== undefined && data !== null) {

       const svg = d3.select(".chart-con")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height)

        svg.selectAll("rect")
                .data(data.children)
                .enter()
                .append("rect")
                .attr("class", "tile")

        
    }




    return ( 
        <div className="container">
            <h1 id="title">{data.name}</h1>
            <p id="description">Top 100 Most Sold Video Games Grouped by Platform</p>
            <div className="chart-con">
            </div>
        </div>
     );
}
 
export default Tree;