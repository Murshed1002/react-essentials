import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS =[
    {
        image: componentsImg,
        title : "components",
        description: "The core ui building block-compose the user interface by combining multiple components"
    },
    {
        image: jsxImg,
        title : "JSX",
        description: "Return (Potentially dynamic) HTML(ish) code to define the actual markup that will be rendered"
    },
    {
        image: configImg,
        title : "props",
        description: "Make components configurable (and therfore reusable) by passing input data to them"
    },
    {
        image: stateImg,
        title : "State ",
        description: "React managed data which, when changed causes the component to re-render and the UI to update"
    }
]