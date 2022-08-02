import React from 'react'
import { Chart, registerables ,getRelativePosition} from 'chart.js';

Chart.register(...registerables);
function Graph() {
  return (
    <div>Graph</div>
  )
}

export default Graph