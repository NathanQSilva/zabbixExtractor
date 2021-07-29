// External imports
import ReactGridLayout from "react-grid-layout";

// Internal imports
import Chart from '../charts/chart'

// Styles imports
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"


export function HomeDashboard() {
    
    const layout = [
        {i: 'a', x: 1, y: 0, w: 10, h: 9},
        {i: 'b', x: 1, y: 10, w: 5, h: 7},
        {i: 'c', x: 6, y: 10, w: 5, h: 7},
        {i: 'd', x: 1, y: 18, w: 5, h: 7},
        {i: 'e', x: 6, y: 18, w: 5, h: 7}
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
                <Chart />
            </div>
            <div key="b">
                b
            </div>
            <div key="c">
                c
            </div>
            <div key="d">
                d
            </div>
            <div key="e">
                e
            </div>
        </ReactGridLayout>
    )
}