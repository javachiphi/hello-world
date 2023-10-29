import React from 'react';
import './BenefitCard.css';

function Card({ icon, title, description }) {
    return (
        <div className='cardStyle'>
            <div className='iconBoxStyle'>
                <span>{icon}</span>
            </div>
            <div className='titleStyle'>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>
    );
}

// Container for Cards
function BenefitCard() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={containerStyle}>
            <Card icon="*" title="Card 1" description="This is card 1 description" />
            <Card icon="*" title="Card 2" description="This is card 2 description" />
            <Card icon="*" title="Card 3" description="This is card 3 description" />
        </div>
    );
}

export default BenefitCard;
