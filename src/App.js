import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import SearchBox from "./SearchBox";

function App(){
    return (
        <div>
            <SearchBox />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StrictMode>
<App />
</StrictMode>)