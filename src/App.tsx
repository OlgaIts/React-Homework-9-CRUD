import {Route, Routes} from "react-router-dom";
import {routeConfig} from "./router/routerConfig";
import styles from "./App.module.scss";
import "./css/global.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Routes>
    </div>
  );
}
export default App;
