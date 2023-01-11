import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import StackedBarChart from './Components/Charts/StackedBarChart/StackedBarChart';
import ILTTwentySummary from './Pages/ILTTwentySummary/ILTTwentySummary';
import ILTTdataTowers from './Pages/ILTTdataTowers/ILTTdataTowers';
import ILTTloginPage from './Pages/ILTTloginPage/ILTTloginPage';
import Product from './Pages/ProductPage/Product';
import ExecutiveSummaryContent from './Components/ExecutiveSummaryTab/ExecutiveSummaryContent/ExecutiveSummaryContent';
import ExecutiveSummaryTab from './Components/ExecutiveSummaryTab/ExecutiveSummaryTab';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ILTTdataTowers />} />
          <Route path='/login' element={<ILTTloginPage />} />
          <Route path='/ilt20-summary' element={<ILTTwentySummary />} />
          <Route path='/product' element={<Product />}/>
          <Route path='/executive-summary' element={<ExecutiveSummaryTab />} />
          <Route path='/executive-summary-content' element={<ExecutiveSummaryContent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// https://observablehq.com/@elishaterada/simple-area-chart-with-tooltip

export default App;