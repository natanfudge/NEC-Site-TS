import React, {RefObject, Suspense, useEffect, useLayoutEffect, useRef, useState} from 'react';
import '../App.css';

import {createTheme, CssBaseline, LinearProgress, Link} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {CrashyTheme} from "./Colors";
import {CrashyCrashReportPage, InvalidCrashAttempt, isCrashAttemptValid, useCrash} from "./crashreport/CrashReportPage";
import {ErrorBoundary} from "./utils/ErrorBoundary";
import {Text, TextTheme} from "./utils/simple/Text";
import {CrashyNewIssueUrl} from "./utils/Crashy";
import {getUrlIsRaw} from "../utils/PageUrl";
import {Wrap} from "./utils/simple/SimpleDiv";
import {Column, FlexProps, Row} from "./utils/simple/Flex";

//TODO: MOBILE:
// - When scrolling down the header ensmoldens to a 3-line button

const CrashyHome = React.lazy(() => import("./home/CrashyHome"))

//4ceKUQTeDaE47bLymRcy
//UviVselptZNZBxe9Govx
//g1VhToB8Si79hK9TTrLi:PruTPL
//2c2vAe5oUVgiNck3NfXU:K80Eid
export default function App() {
    const outerTheme = createTheme(CrashyTheme);

    return <ThemeProvider theme={outerTheme}>
        <CssBaseline/>
        <ErrorBoundary fallback={<CrashyUiFallback/>}>
            <CrashyUi/>
        </ErrorBoundary>

    </ThemeProvider>

}

function getWidth(ref: RefObject<Element>): number {
    return ref.current?.clientWidth ?? 0;
}

export function BottomElementDynamicallyLarger(props: {
    largerBy: number, bottomElement: JSX.Element,
    topElement: (ref: React.RefObject<any>) => JSX.Element,
    columnProps: FlexProps
}) {
    const leftSpaceRef = useRef<HTMLDivElement>(null);
    const rightSpaceRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null)
    const [width, setWidth] = useState(0);

    function recalculateWidth() {
        const totalWidth = getWidth(leftSpaceRef) + getWidth(rightSpaceRef) + getWidth(textRef);
        console.log("New width " + totalWidth);
        setWidth(totalWidth);
    }

    useEffect(() => {
        function handleResize() {
            recalculateWidth();
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })

    useLayoutEffect(() => recalculateWidth(), [])

    return <Column width="max" {...props.columnProps}>
        <Row justifyContent={"center"}>
            {/*<Spacer flexGrow = {1}/>*/}
            <div ref={leftSpaceRef} style={{maxWidth: props.largerBy, flexBasis: "100%"}}/>
            {props.topElement(textRef)}
            <div ref={rightSpaceRef} style={{maxWidth: props.largerBy, flexBasis: "100%"}}/>
            {/*<Spacer flexGrow = {1}/>*/}
        </Row>
        <Wrap alignSelf={"center"} style = {{width: "100%"}} maxWidth={width}>
            {props.bottomElement}
        </Wrap>
    </Column>
}



function CrashyUi2() {
    return <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{maxWidth: 500, width: "100%", alignSelf: "center"}}>
            <div style={{backgroundColor: "red", height: 20}}/>
        </div>
    </div>
    // <Column>
    //     <Wrap alignSelf={"center"} maxWidth={500}>
    //         <div style = {{backgroundColor : "red", height: 20}}/>
    //     </Wrap>
    // </Column>

    // return <BottomElementDynamicallyLarger
    //     columnProps={{/*alignItems: "center"*/}}
    //     topElement={ref => <TextTheme spanRef = {ref} variant={"h4"} fontStyle={"italic"}>
    //         Unexpected Error
    //     </TextTheme>}
    //     bottomElement={<SimpleDivider  backgroundColor={"#9c1a1a"}/>}
    //     largerBy={150}
    // />
}

function CrashyUi() {
    if (getUrlIsRaw()) {
        return <CrashyRawUi/>
    } else if (window.location.pathname === "/") {
        return <Suspense fallback={<LinearProgress/>}>
            <CrashyHome/>
        </Suspense>
    } else {
        return <CrashyCrashReportPage/>;
    }
}

//TODO: investigate why everything is so zoomed in suddenly, see what viewport stuff we had earlier.
function CrashyRawUi() {
    const crash = useCrash();
    if (isCrashAttemptValid(crash)) {
        return <Text padding={3} text={crash} whiteSpace={"pre"}/>
    } else {
        return <InvalidCrashAttempt attempt={crash}/>
    }
}

function CrashyUiFallback() {
    return <TextTheme>
        Something went terribly wrong displaying this page. Please <Link href={CrashyNewIssueUrl}>Report this to
        Crashy</Link>.
    </TextTheme>
}

//Fabric:  HU4yNEW0d3xNpnEkgmwu
//Forge: dOvaYXRVEh7N6Mufkoxu


