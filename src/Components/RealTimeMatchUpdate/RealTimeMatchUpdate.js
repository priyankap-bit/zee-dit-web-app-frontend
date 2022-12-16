import { useEffect, useState } from 'react';
import ILTTwentySummaryServices from '../../Services/ILTTwentySummaryServices';
import './RealTimeMatchUpdate.css';

const RealTimeMatchUpdate = (props) => {

    const [realTimeMatchUpdateSummary, setRealTimeMatchUpdateSummary] = useState({
        viewers: null,
        watchTime: null,
        adImpressions: null,
    });

    useEffect(() => {

        const getRealTimeMatchUpdates = async () => {
            let viewers = await ILTTwentySummaryServices.getViewers(),
                watchTime = await ILTTwentySummaryServices.getViewers(),
                adImpressions = await ILTTwentySummaryServices.getAdImpressions();

            setRealTimeMatchUpdateSummary({
                viewers,
                watchTime,
                adImpressions,
            })
        }

        getRealTimeMatchUpdates();

    }, []);
   
    return (
        <div className='real-time-match-update-container'>
            <div className="real-time-container">
                <div class="realtime-update-summary-item">
                    <p>Viewers</p>
                    <h2>{realTimeMatchUpdateSummary.viewers}</h2>
                </div>
                <div class="realtime-update-summary-item">
                    <p>Watch Time</p>
                    <h2>{realTimeMatchUpdateSummary.watchTime}</h2>
                </div>
                <div class="realtime-update-summary-item">
                    <p>Ad Impressions</p>
                    <h2>{realTimeMatchUpdateSummary.adImpressions}</h2>
                </div>
	        </div>
        <div className='realtime-update-timeline'></div>
            
        </div>
        
    )
}

export default RealTimeMatchUpdate;