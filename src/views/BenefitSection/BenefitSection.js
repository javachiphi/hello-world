import React from 'react';
import './BenefitSection.css'; // assuming you've saved the CSS in a file named CardStyles.css



function BenefitSection() {
    const iconPath = process.env.PUBLIC_URL + '/golf_icon.png';
    return (
        <div className='section'>
            <div className="cardContainer">
                <Card title="Reduced Mistakes" description="7 to 1-2 missed" icon={iconPath} />
                <Card title="Enriching Environment" description="Embrace the learning process" icon={iconPath}/>
                <Card title="Advanced Tools" description="Trackman & QED Analysis" icon={iconPath}/>
            </div>
        </div>
    );
};

const Card = ({ title, description, icon }) => {
    return (
        <div className="card">
            <div className="iconBox">
                <img className='iconStyle' src={icon} alt="Icon" />
            </div>
            <div className='cardContentContainer'>
                <h3 className='sTitle'>{title}</h3>
                <p className='description'>{description}</p>
            </div>

        </div>
    );
};

export default BenefitSection;
