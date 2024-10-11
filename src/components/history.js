const History = ({width, height, color}) => {
    return(
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V6C22 4.34315 20.6569 3 19 3H17V2ZM20 9V6C20 5.44772 19.5523 5 19 5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H5C4.44772 5 4 5.44772 4 6V9H20ZM4 11H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11Z" fill={color}/>
            </svg>
        </>
    )
}

export default History