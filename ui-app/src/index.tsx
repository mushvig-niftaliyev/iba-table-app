import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { TableProvider } from "./components/TableProvider";
const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <TableProvider />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
