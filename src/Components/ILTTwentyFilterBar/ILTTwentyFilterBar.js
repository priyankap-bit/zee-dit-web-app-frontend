import './ILTTwentyFilterBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as d3 from 'd3';

const ILTTwentyFilterBar = (props) => {

    const { handleFilterValueChange } = props;

    const date = new Date(),
        today = d3.timeFormat('%-d/%-m/%Y')(date),
        yesterday = d3.timeFormat('%-d/%-m/%Y')(date.setDate(date.getDate() - 1));

    const handleSelectionPanelChange = (event) => {
        event.preventDefault();
        handleFilterValueChange(event.target.value);
    }

    return (
        <div className='ilt20-filterbar-container'>
            <div className='ilt20-filterbar-navigation'>
                <FontAwesomeIcon icon={'face-angry'} />
                <FontAwesomeIcon icon="fa-thin fa-house" />
            </div>
            <div className='ilt20-filterbar-select'>
                <select onChange={handleSelectionPanelChange} placeholder='Date of Report'>
                    {/* <option selected value='dateofreport'>Date of Report</option> */}
                    <option value={today}>{today}</option>
                    <option value={yesterday}>{yesterday}</option>
                </select>
                {/* <p>Default - Yesterday</p> */}
            </div>
        </div>
    )
}

export default ILTTwentyFilterBar;