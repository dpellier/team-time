
import React from 'react';

const Loading = () =>
    <div className='loading'>
        <svg viewBox='0 0 40 40'>
            <g>
                <defs>
                    <linearGradient id='spinner' gradientUnits='userSpaceOnUse' x1='34' y1='29' x2='4' y2='29'>
                        <stop offset='.1' stopColor='#35bdfd' stopOpacity='0' />
                        <stop offset='1' stopColor='#35bdfd' />
                    </linearGradient>
                </defs>

                <g strokeWidth='3' fill='none'>
                    <path stroke='#35bdfd'
                          d='M3,20 A17,17 0 0,1 26,4'>
                    </path>

                    <path stroke='url(#spinner)'
                          d='M37,20 A1,1 0 0,1 3,20'>
                    </path>

                    <animateTransform values='0,20,20;360,20,20'
                                      attributeName='transform'
                                      type='rotate'
                                      repeatCount='indefinite'
                                      dur='1s'>
                    </animateTransform>
                </g>
            </g>
        </svg>
    </div>
;

export { Loading };
