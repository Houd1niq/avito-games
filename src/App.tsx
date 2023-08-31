import { useEffect } from "react";
import "./App.css";
import { clearLocalStorage } from "./api/utils/clearLocalStorage";
import { Layout } from "antd";
import BrowserRouterProvider from "./config/router/BrowserRouterProvider";
import { ThemeConfigProvider } from "./config/antd/ThemeConfigProvider";

function App() {
  useEffect(() => {
    const timer = clearLocalStorage();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeConfigProvider>
      <Layout>
        <div className="App">
          <BrowserRouterProvider />
        </div>
      </Layout>
    </ThemeConfigProvider>
  );
}

export default App;
