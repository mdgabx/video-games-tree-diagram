import Chart from "./Chart";

const Tree = () => {
    return ( 
        <div className="container">
            <h1 id="title">Video Games Tree Diagram</h1>
            <p id="description">Top 100 Most Sold Video Games Grouped by Platform</p>
            <Chart />
        </div>
     );
}
 
export default Tree;