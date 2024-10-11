const Help = ({width, height, color, line}) => {
    return(
        <>
            <svg width={width} height={height} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="32.75" stroke={color} stroke-width={line}/>
                <circle cx="35" cy="35" r="15.25" stroke={color} stroke-width={line}/>
                <line x1="11.7092" y1="58.3833" x2="24.0835" y2="46.0089" stroke={color} stroke-width={line}/>
                <line x1="48.1099" y1="24.0834" x2="60.4843" y2="11.709" stroke={color} stroke-width={line}/>
                <line y1="-2.25" x2="19.6" y2="-2.25" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 58.6586 60.7594)" stroke={color} stroke-width={line}/>
                <line y1="-2.25" x2="17.5" y2="-2.25" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 22.8743 24.9743)" stroke={color} stroke-width={line}/>
            </svg>

        </>
    )
}

export default Help