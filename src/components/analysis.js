const Analysis = ({width = 20, height = 20, color, line}) => {
    return(
        <>
            <svg width={width} height={height} viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 35C1.75 33.2051 3.20507 31.75 5 31.75H15C16.7949 31.75 18.25 33.2051 18.25 35V53.25H5C3.20508 53.25 1.75 51.7949 1.75 50V35Z" stroke={color} stroke-width={line}/>
                <path d="M18.75 20C18.75 18.2051 20.2051 16.75 22 16.75H32C33.7949 16.75 35.25 18.2051 35.25 20V53.25H18.75V20Z" stroke={color} stroke-width="5"/>
                <path d="M35.6683 5C35.6683 3.20507 37.1234 1.75 38.9183 1.75H48.9183C50.7133 1.75 52.1683 3.20507 52.1683 5V50C52.1683 51.7949 50.7133 53.25 48.9183 53.25H35.6683V5Z" stroke="black" stroke-width="5"/>
            </svg>
        </>
    )
}

export default Analysis