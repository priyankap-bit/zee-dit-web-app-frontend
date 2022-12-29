import './ILTTwentrySummaryHeader.css';

const ILTTwentrySummaryHeader = (props) => {

    return (
        <div className='ilt20-header-container-1'>
            {/* <div className='ilt20-header-container-1 row align-items-center'> */}
            {/* ilt20-header-container-1  */}
            <div className='ilt20-header-subcontainer'>
                <div className='ilt20-header-div-left'>
                    {/* <div className='ilt20-header-div-left col'> */}
                    {/* ilt20-header-div-left  */}
                    <div className='ilt20-header-subdiv-left-1'>
                        <p>Home</p>
                    </div>
                    <div className='ilt20-header-zee-logo-4'>
                        <img src='/static/images/logos/ZEE_LOGO.png' height={32.11} alt='Zee Logo' />
                    </div>
                    <div className='ilt20-header-subdiv-left-2'></div>
                    <div className='ilt20-header-ilt20-logo-2'>
                        <img src='/static/images/logos/ILT20-logo.png' height={40} alt='ILT20 Logo' />
                    </div>
                    <div className='ilt20-header-subdiv-left-3'>
                        <p>*illustrative data</p>
                    </div>
                </div>

                <div className='ilt20-header-div-middle'>
                    {/* <div className='ilt20-header-div-middle col'> */}
                    {/* ilt20-header-div-middle */}
                    <div className='ilt20-header-ilt20-text-3'>
                        <h1>International League T20</h1>
                    </div>
                </div>

                <div className='ilt20-header-div-right'>
                    {/* <div className='ilt20-header-div-right col'> */}
                    {/* ilt20-header-div-right */}
                    <p>Hello Deepak</p>
                </div>
            </div>


        </div>
    )
}

export default ILTTwentrySummaryHeader;
