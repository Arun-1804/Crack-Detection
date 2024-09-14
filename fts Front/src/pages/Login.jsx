import Header from "../components/Header"
import Login from "../components/Login"
import logoR from "../assests/logoR.jpg"
import { Col, Row } from "react-bootstrap"
import "./Login.css"
export default function LoginPage(){
    return(
        <>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden" style={{backgroundColor:"grey"}}>
    {/* <div className="
max-w-7xl mx-auto"> */}

{/* <div className='relative ring-1 ring-gray-900/5 rounded-lg leading-none items-top justify-start space-x-6' style={{width:"850px", height:"auto"}}> */}


        {/* <div className="grid bg-white grid-cols-2 gap-4 flex items-center h-full"> */}
        <Row>
            <Col lg="3" xl="3">
            </Col>
            <Col lg="6" xl="6">
            <Row>
            <Col xl="6" lg="12" sm="12" xs="12" className="pe-0">
<div className="toggle h-full flex justify-center items-center bg-amber-900">
            <img 
            className="companyLogoMob"
                    alt="companyLogo"
                    style={{height:"100%"}}
                    src={logoR} />
            {/* <Header
                heading="Welcome back!"
                paragraph="login with your credentials to access all feature"
                linkName=""
                linkUrl=""
                flag={true}
                /> */}
            </div>
</Col>
<Col xl="6" lg="12" sm="12" xs="12" className="ps-0">
<div className="px-7 py-6 loginBg">
             <Header
                heading=""
                paragraph=""
                linkName=""
                linkUrl=""
                />
            <Login/>
            </div>
</Col>

    
   
        </Row>
            </Col>
            <Col lg="3" xl="3">
            </Col>
        </Row>

        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        </div>
        </>
    )
}