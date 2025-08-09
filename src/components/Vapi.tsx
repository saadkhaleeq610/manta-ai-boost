import { openVapiWidget } from "@/utils/vapi";
import { Button } from "@/components/ui/button";

const VapiLauncher = () => (
  <Button onClick={openVapiWidget}>
    Talk to our AI Assistant
  </Button>
);

export default VapiLauncher;