import React from "react";
import Header from "../../component/common/Header"

const Index = (props: any) => {
    return (
        <>
            <React.Fragment>
                <Header />
                {props?.children}
            </React.Fragment>
        </>
    )
}

export default Index