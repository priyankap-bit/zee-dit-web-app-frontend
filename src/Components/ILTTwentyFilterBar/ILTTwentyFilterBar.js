import './ILTTwentyFilterBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ILTTwentyFilterBar = (props) => {

    const handleSelectionPanelChange = (event) => {
        event.preventDefault();
    }

    return (
        <div className='ilt20-filterbar-container'>
            <div className='ilt20-filterbar-navigation'>
                <FontAwesomeIcon icon={'face-angry'} />
                <FontAwesomeIcon icon="fa-thin fa-house" />
            </div>
            <div className='ilt20-filterbar-select'>
                <select onChange={handleSelectionPanelChange} placeholder='Date of Report'>
                    <option selected value='dateofreport'>Date of Report</option>
                    <option value='today'>Today</option>
                    <option value='yesterday'>Yesterday</option>
                </select>
                <p>Default - Yesterday</p>
            </div>
        </div>
    )
}

export default ILTTwentyFilterBar;