import * as d3 from 'd3';

const Tree = ({data}) => {

    const width = 1000;
    const height = 1000;

    if(data !== "" && data !== undefined && data !== null) {
                    
        let tooltip = d3.select("#tooltip")
        let canvas = d3.select("#canvas")
                        .attr("width", width)
                        .attr("height", height)


        //setting the hierarchy for the tree map
        let hierarchy = d3.hierarchy(data, (node) => {
            return node['children']
        }).sum((node) => {
            return node['value']
        }).sort((node1, node2) => {
            return node2['value'] - node1['value']
        })

        //setting the treemap size
        let createTreeMap = d3.treemap()
                                .size([height, width])

        createTreeMap(hierarchy);

        let vGameTiles = hierarchy.leaves();

        let block = canvas.selectAll("g")
                .data(vGameTiles)
                .enter()
                .append("g")
                .attr("transform", (game) => {
                    return `translate(${game["x0"]}, ${game["y0"]})`
                })

        block.append("rect")
            .attr("class", "tile")
            .attr("fill", (game) => {
               // console.log('game', game);
                let category = game['data']['category'];

                console.log(category);

                if(category === "Wii") {
                    return "blue"
                } else if (category === "DS") {
                    return "orange"
                } else if (category === "X360") {
                    return "lightblue"
                } else if (category === "GB") {
                    return "green"
                } else if (category === "PS3") {
                    return "yellow"
                } else if (category === "NES") {
                    return "maroon"
                } else if (category === "PS2") {
                    return "lightgreen"
                } else if (category === "3DS") {
                    return "gray"
                } else if (category === "PS4") {
                    return "violet"
                } else if (category === "SNES") {
                    return "indigo"
                } else if (category === "PS") {
                    return "magenta"
                } else if (category === "N64") {
                    return "skyblue"
                } else if (category === "GBA") {
                    return "cyan"
                } else if (category === "XB") {
                    return "gold"
                } else if (category === "PC") {
                    return "tan"
                } else if (category === "2600" ) {
                    return "brown"
                } else if (category === "PSP") {
                    return "pink"
                } else {
                    return "navy";
                }
            })
            .attr('data-name', (game) => {
                return game["data"]["name"];
            })
            .attr('data-category', (game) => {
                return game["data"]["category"]
            })
            .attr('data-value', (game) => {
                return game["data"]["value"]
            })
            .attr("width", (game) => {
                return  game["x1"] - game["x0"];
            })
            .attr("height", (game) => {
                return game["y1"] - game["y0"];
            })
            .on("mouseover", (event, game) => {
                tooltip.transition().style('visibility', 'visible')
                                    .style('top', (event.offsetY + 50) + 'px')
                                    .style('left', (event.offsetX) + 'px')
                                    .text(`${game["data"]["name"]} - ${game["data"]["value"]}`)
                                    .attr('data-value', game["data"]["value"])

            })
            .on('mouseout', (game) => {
                tooltip.transition().style('visibility', 'hidden')
            })

            block.append("text")
                .text((game) => game["data"]["name"])
                .attr('x', 5)
                .attr('y', 20)
            }

        const tileWidth = 40;
        const tileHeight = 30;


    return ( 
        <div className="container">
            <h1 id="title">{data.name}</h1>
            <p id="description">Top 100 Most Sold Video Games Grouped by Platform</p>
            <div id="tooltip">
                
            </div>
            <div className="chart-con">
                <svg id="canvas">

                </svg>
                <svg id="legend">
                    <g>
                        <rect className="legend-item" x="10" y="40" width={tileWidth} height={tileHeight} fill="blue"></rect>
                        <text x="60" y="60">Wii</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="10" y="90" width={tileWidth} height={tileHeight} fill="orange"></rect>
                        <text x="60" y="110">DS</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="100" y="40" width={tileWidth} height={tileHeight} fill="lightblue"></rect>
                        <text x="150" y="60">X360</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="100" y="90" width={tileWidth} height={tileHeight} fill="green"></rect>
                        <text x="150" y="110">GB</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="190" y="40" width={tileWidth} height={tileHeight} fill="yellow"></rect>
                        <text x="240" y="60">PS3</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="190" y="90" width={tileWidth} height={tileHeight} fill="maroon"></rect>
                        <text x="240" y="110">NES</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="280" y="40" width={tileWidth} height={tileHeight} fill="lightgreen"></rect>
                        <text x="330" y="60">PS2</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="280" y="90" width={tileWidth} height={tileHeight} fill="gray"></rect>
                        <text x="330" y="110">3DS</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="370" y="40" width={tileWidth} height={tileHeight} fill="violet"></rect>
                        <text x="420" y="60">PS4</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="370" y="90" width={tileWidth} height={tileHeight} fill="indigo"></rect>
                        <text x="420" y="110">SNES</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="460" y="40" width={tileWidth} height={tileHeight} fill="magenta"></rect>
                        <text x="510" y="60">PS</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="460" y="90" width={tileWidth} height={tileHeight} fill="skyblue"></rect>
                        <text x="510" y="110">N64</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="550" y="40" width={tileWidth} height={tileHeight} fill="cyan"></rect>
                        <text x="600" y="60">GBA</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="550" y="90" width={tileWidth} height={tileHeight} fill="gold"></rect>
                        <text x="600" y="110">XB</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="640" y="40" width={tileWidth} height={tileHeight} fill="tan"></rect>
                        <text x="690" y="60">PC</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="640" y="90" width={tileWidth} height={tileHeight} fill="brown"></rect>
                        <text x="690" y="110">2600</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="730" y="40" width={tileWidth} height={tileHeight} fill="pink"></rect>
                        <text x="780" y="60">PSP</text>
                    </g>
                    <g>
                        <rect className="legend-item" x="730" y="90" width={tileWidth} height={tileHeight} fill="navy"></rect>
                        <text x="780" y="110">XOne</text>
                    </g>
                </svg>
            </div>
        </div>
     );
}
 
export default Tree;