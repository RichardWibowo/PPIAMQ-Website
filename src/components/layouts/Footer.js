import "./Footer.sass"

function footer(){
    return(
        <>
        <div className =  "footer">
            <div className = "grid-obj">
                <div class="grid-container">
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>  
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>  
                    <div class="grid-item">7</div>
                    <div class="grid-item">8</div>
                    <div class="grid-item">9</div>  
                </div>
            </div>
            <svg viewBox="0 0 400 400" width="400" height="400">
                <defs>
                    <path id="circle" d="
                    M 150, 300
                    m -0, 0
                    a 140,140 0 1,1 125,0
                    a 140,140 0 1,1 -125,0" />
                </defs>
                <text font-size="25">
                    <textPath xlinkHref="#circle">
                        Welcome to PPIA MQ ! Welcome to PPIA MQ ! Welcome to PPIA MQ !
                    </textPath>
                </text>
            </svg>
        </div>
        </>
    )
}

export default footer;