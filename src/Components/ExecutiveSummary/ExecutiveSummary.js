import ExecutiveSummaryVizContainerWithChartsAndNumbers from './ExecutiveSummaryVizContainerWithChartsAndNumbers/ExecutiveSummaryVizContainerWithChartsAndNumbers';
import './ExecutiveSummary.css';

const ExecutiveSummary = (props) => {

  return (
    <div className='executive-summary-container'>

      <div className='executive-summary-main-container'>
        <div className='exect-summary-main-1'>
          <h2 className='Digital'>Digital</h2>
        </div>
        <div className='exect-summary-main-2'>
          <ExecutiveSummaryVizContainerWithChartsAndNumbers />
        </div>
      </div>

      <div className='executive-summary-main-container'>
        <div className='exect-summary-main-1'>
          <h2 className='Digital'>Linear</h2>
        </div>
        <div className='exect-summary-main-2'>
          <ExecutiveSummaryVizContainerWithChartsAndNumbers />
        </div>
      </div>

      <div className='executive-summary-main-container'>
        <div className='exect-summary-main-1'>
          <h2 className='Digital'>Combined</h2>
        </div>
        <div className='exect-summary-main-2'>
          <ExecutiveSummaryVizContainerWithChartsAndNumbers />
        </div>
      </div>

    </div>
  )

}

export default ExecutiveSummary;