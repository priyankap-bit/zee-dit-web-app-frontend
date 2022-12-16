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
                watchTime = await ILTTwentySummaryServices.getWatchTime(),
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
                    <img src='/static/images/logos/Viewers.svg' height={50} alt='Viewers Logo' />
                    <p className='realtime-update-title'>Viewers</p>
                    <h2 className='realtime-update-api'>{realTimeMatchUpdateSummary.viewers}</h2>
                </div>
                <div class="realtime-update-summary-item">
                    <img src='/static/images/logos/Watchtime.svg' height={50} alt='Viewers Logo' />
                    <p className='realtime-update-title'>Watch Time</p>
                    <h2 className='realtime-update-api'>{realTimeMatchUpdateSummary.watchTime}</h2>
                </div>
                <div class="realtime-update-summary-item">
                    <img src='/static/images/logos/Ads.svg' height={50} alt='Viewers Logo' />
                    <p className='realtime-update-title'>Ad Impressions</p>
                    <h2 className='realtime-update-api'>{realTimeMatchUpdateSummary.adImpressions}</h2>
                </div>
	        </div>
        <div className='realtime-update-timeline'></div>
            
        </div>
        
    )
}

export default RealTimeMatchUpdate;