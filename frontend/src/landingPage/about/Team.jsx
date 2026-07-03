import profile from "../../assets/nithin-kamath.jpg"

function Team() {
    return ( <>
        <div className="container p-5" style={{width:"70%"}}>
            <div className="row">
                <div className="col" style={{textAlign:"center"}}><img src={profile} alt="profile-pic" className="profile-pic p-5"/>
                <div style={{textAlign:"center"}}>
                    <p>Nithin Kamath</p>
                    <p>Founder, CEO</p>
                </div>
                </div>
                <div className="col">
                    <h3 className="p-5">People</h3>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <br />
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <br />
                    <p>Playing basketball is his zen.</p>
                </div>
            </div>
        </div>
    </>);
}

export default Team;