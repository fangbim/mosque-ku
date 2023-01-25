import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/form/SignUp";
import SignIn from "./pages/form/SignIn";
import MosquePages from "./pages/user/MosquePages";
import MoreFeatures from "./pages/MoreFeatures";
import RegisterMosque from "./pages/form/RegisterMosque";
import AdminMosqueku from "./pages/admin/AdminMosqueku";
import MosqueBalances from "./pages/user/MosqueBalances";
import InfoKegiatan from "./pages/user/InfoKegiatan";
import ListEvent from "./pages/user/ListEvent";
import AdminEvent from "./pages/admin/AdminEvent";
import AdminInformation from "./pages/admin/AdminInformation";
import AdminKeuangan from "./pages/admin/AdminKeuangan";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route exact path="/mosque" element={<MosquePages />}>
        <Route path="keuangan" element={<MosqueBalances />} />
        <Route path="kegiatan" element={<InfoKegiatan />} />
        <Route path="event" element={<ListEvent />} />
      </Route>
      <Route path="/morefeatures" element={<MoreFeatures />} />
      <Route path="/registermosque" element={<RegisterMosque />} />
      <Route path="/admin-mosqueku" element={<AdminMosqueku />}>
        <Route path="keuangan" element={<AdminKeuangan/>}/>
        <Route path="kegiatan" element={<AdminInformation/>}/>
        <Route path="event" element={<AdminEvent/>}/>
      </Route>
    </Routes>
  );
}


export default App;
