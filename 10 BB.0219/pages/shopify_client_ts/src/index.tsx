import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

import App from "./App";

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
    document.getElementById("root")
);