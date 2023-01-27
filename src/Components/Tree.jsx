import * as d3 from 'd3';

const Tree = ({data}) => {

    const width = 1000;
    const height = 1000;

    if(data !== "" && data !== undefined && data !== null) {
                        

        // svg.selectAll("rect")
        //         .data(data.children)
        //         .enter()
        //         .append("rect")
        //         .attr("class", "tile")
        //         .attr("fill", (d) => {
        //             console.log('data', d.name);
        //         })

        let canvas = d3.select("#canvas");


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
                    return "emerald"
                } else if (category === "XB") {
                    return "gold"
                } else if (category === "PC") {
                    return "black"
                } else if (category === "2600" ) {
                    return "brown"
                } else if (category === "PSP") {
                    return "pink"
                } else {
                    return "scarlet";
                }
            })
    }




    return ( 
        <div className="container">
            <h1 id="title">{data.name}</h1>
            <p id="description">Top 100 Most Sold Video Games Grouped by Platform</p>
            <div className="chart-con">
                <svg id="canvas">

                </svg>
            </div>
        </div>
     );
}
 
export default Tree;