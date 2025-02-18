const Dashboard = ({width = 20, height = 20, color, line}) => {
    return(
        <>
        <svg width={width} height={height} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 32.5C2.25 15.7934 15.7934 2.25 32.5 2.25C49.2066 2.25 62.75 15.7934 62.75 32.5C62.75 40.7947 59.4142 48.3068 54.0055 53.7739H10.9945C5.58578 48.3068 2.25 40.7947 2.25 32.5Z" stroke={color} stroke-width={line}/>
                <circle cx="32.1755" cy="32.1749" r="6.375" stroke={color} stroke-width={line}/>
            <line y1="-2" x2="12.0907" y2="-2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 47.5497 19.5)" stroke={color} stroke-width={line}/>
        </svg>

        </>
    )
}

export default Dashboard