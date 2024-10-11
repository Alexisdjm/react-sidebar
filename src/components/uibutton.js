const UIButton = ({image}) => {
    return(
        <>
            <button class="uiverse sidebar-button--profile">
                <div class="wrapper">
                    <img src={image} alt="profile" loading="lazy"></img>
                    <div class="circle circle-12"></div>
                    <div class="circle circle-11"></div>
                    <div class="circle circle-10"></div>
                    <div class="circle circle-9"></div>
                    <div class="circle circle-8"></div>
                    <div class="circle circle-7"></div>
                    <div class="circle circle-6"></div>
                    <div class="circle circle-5"></div>
                    <div class="circle circle-4"></div>
                    <div class="circle circle-3"></div>
                    <div class="circle circle-2"></div>
                    <div class="circle circle-1"></div>
                </div>
            </button>
        </>
    )
}

export default UIButton