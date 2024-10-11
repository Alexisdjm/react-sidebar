const Finances = ({width, height, color, line}) => {
    return(
        <>
            <svg width={width} height={height} viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17H54" stroke={color} stroke-width={line} stroke-linecap="round"/>
                <path d="M3 26H54" stroke={color} stroke-width={line} stroke-linecap="round"/>
                <path d="M3 26L21.2782 43.056" stroke={color} stroke-width={line} stroke-linecap="round"/>
                <line x1="39.5341" y1="2.89903" x2="53.899" y2="16.4659" stroke={color} stroke-width={line} stroke-linecap="round"/>
            </svg>

        </>
    )
}

export default Finances