// External imports
import ReactGridLayout from "react-grid-layout";

// Internal imports
import Chart from '../charts/chart'

// Styles imports
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"


export function HomeDashboard() {
    
    const layout = [
        {i: 'a', x: 0, y: 0, w: 12, h: 9},
        {i: 'b', x: 0, y: 10, w: 6, h: 7},
        {i: 'c', x: 6, y: 10, w: 6, h: 7},
        {i: 'd', x: 0, y: 18, w: 6, h: 7},
        {i: 'e', x: 6, y: 18, w: 6, h: 7}
      ];
    
    return (
        <ReactGridLayout
            className="layout" 
            layout={layout} 
            cols={12} 
            rowHeight={30} 
            width={1630}
        >
            <div key="a">
                <Chart 
                    labels={[1, 2, 3, 4, 5]}
                    data={[1, 6, 2, 5, 9]}
                    graphName="teste"
                />
            </div>
            <div key="b">
                <Chart 
                    labels={[1, 2, 3, 4, 5]}
                    data={[1, 6, 2, 5, 9]}
                    graphName="teste"
                />
            </div>
            <div key="c">
                <Chart 
                    labels={[1, 2, 3, 4, 5]}
                    data={[1, 6, 2, 5, 9]}
                    graphName="teste"
                />
            </div>
            <div key="d">
                <Chart 
                    labels={[1, 2, 3, 4, 5]}
                    data={[1, 6, 2, 5, 9]}
                    graphName="teste"
                />
            </div>
            <div key="e">
                <Chart 
                    labels={[1, 2, 3, 4, 5]}
                    data={[1, 6, 2, 5, 9]}
                    graphName="teste"
                />
            </div>
        </ReactGridLayout>
    )
}