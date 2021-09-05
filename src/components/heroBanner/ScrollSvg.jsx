import React from 'react';

const Scroll = ({ theme }) => {
    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: '32vh',
                marginLeft: '70vh'
            }}>
            <svg
                width="40px" viewBox="0 0 14.334 24.75" >
                <circle class="circle-1" fill="white" cx="7.167" cy="6" r="1.2" />
                <circle class="circle-2" fill="white" cx="7.167" cy="6" r="1.2" />
                <path stroke="white" fill="transparent" d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z" />
            </svg>
        </div>
    );
};

export default Scroll;