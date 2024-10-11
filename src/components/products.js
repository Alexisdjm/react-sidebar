const Products = ({width, height, color, line}) => {
    return(
        <>
            <svg width={width} height={height} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="26" height="26" rx="3" stroke={color} stroke-width={line}/>
                <rect x="40" y="2" width="26" height="26" rx="3" stroke={color} stroke-width={line}/>
                <rect x="2" y="40" width="26" height="26" rx="3" stroke={color} stroke-width={line}/>
                <rect x="40" y="40" width="26" height="26" rx="3" stroke={color} stroke-width={line}/>
            </svg>

        </>
    )
}

export default Products