import Step1 from "./components/Step1";
import Sidebar from "./components/Sidebar.jsx";
import { FormProvider } from "../app/contexts/FormContext";

export default function Home() {
  return (
    
      <div className="flex bg-gray-100 gap-4">
        <Sidebar />
        <div className="flex-1">
          <Step1 />
        </div>
      </div>
    
  );
}
